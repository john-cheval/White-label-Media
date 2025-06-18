"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import {
  IoPlayCircleSharp,
  IoLocationOutline,
  IoCalendarClearOutline,
  IoPauseCircle,
} from "react-icons/io5";
import isVideo from "@/app/lib/checkVideo";
import Image from "next/image";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Section1 = ({ event, setEvent, post, loading }) => {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const playButtonRef = useRef(null);
  const videoContainerRef = useRef(null);
  const latestPost = post && Object.values(post)[0];

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const handleVideoClick = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
    setIsPlaying(!isPlaying);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const video = videoContainerRef.current;
      const button = playButtonRef.current;
      const text = textRef.current;

      if (!video || !text) return;

      if (isMobile) {
        gsap.set(video, { scale: 1 });
        gsap.set(button, { y: 0, opacity: 1 });
        gsap.set(text, { y: 0, opacity: 1 });
        return;
      }

      gsap.fromTo(
        video,
        { scale: 1 },
        {
          scale: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: video,
            start: "top 30%",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        button,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: video,
            start: "top top+=100",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        text,
        { y: 30, opacity: 0, duration: 300 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: video,
            start: "top 20%",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [isMobile]);
  // console.log(isPlaying, "hello");
  return (
    <section className="  relative ">
      <div className="flex justify-center relative pt-32  md:pt-40   ">
        <div className=" flex  border-b border-b-main justify-center items-center relative z-50">
          <button
            className={`event-tab text-sm md:text-base px-4 sm:px-8 md:px-14 ${
              event === "past" ? "active" : ""
            } `}
            onClick={() => setEvent("past")}
          >
            Past Event
          </button>
          <button
            className={`event-tab text-sm md:text-base px-4 sm:px-8 md:px-14 ${
              event === "upcoming" ? "active" : ""
            } `}
            onClick={() => setEvent("upcoming")}
          >
            Upcoming Event
          </button>
        </div>
        <div className="md:bg-events-grad-2 w-full h-full absolute bottom-0 left-0 z-10" />
      </div>

      <div className="eventsbg">
        <h1 className="text-4xl md:text-[50px]  lg:text-[5vw] xl:text-[80px] uppercase leading-[118.423%]  text-center py-6 md:py-8">
          {event} EVENTS
        </h1>

        <div className="grid grid-cols-12 px-6 md:px-0  ">
          {latestPost && (
            <div className=" col-span-12 md:col-start-3 md:col-end-11 relative overflow-hidden">
              <div
                className="aspect-[16/9] relative mb-6 md:mb-0 will-change-transform"
                ref={videoContainerRef}
              >
                {isVideo(latestPost?.event_image?.url) ? (
                  <video
                    loop
                    muted
                    ref={videoRef}
                    playsInline
                    autoPlay={isPlaying}
                    // poster={latestPost?.event_image?.url}
                    preload="meta"
                    src={latestPost?.event_image?.url}
                    className="object-cover w-full h-full"
                  />
                ) : (
                  <Image
                    src={latestPost?.event_image?.url}
                    alt={latestPost?.post_title || "image"}
                    fill
                    className="object-cover"
                    priority
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                  />
                )}
                {isVideo(latestPost?.event_image?.url) && (
                  <div className="absolute top-[35%] left-[45%] md:top-1/2 md:left-1/2 -translate-x-1/2 -translate-y-1/2">
                    {isPlaying ? (
                      <IoPauseCircle
                        className=" cursor-pointer"
                        color="#EAE4D6"
                        size={isMobile ? 50 : 100}
                        onClick={handleVideoClick}
                        ref={playButtonRef}
                      />
                    ) : (
                      <IoPlayCircleSharp
                        className=" cursor-pointer"
                        ref={playButtonRef}
                        color="#EAE4D6"
                        size={isMobile ? 50 : 100}
                        onClick={handleVideoClick}
                      />
                    )}
                  </div>
                )}
              </div>

              <div
                ref={textRef}
                className="space-y-1 md:-mt-6"
                style={{
                  transform: "translateY(40px)",
                  opacity: isMobile ? 1 : 0,
                }}
              >
                <h3 className="text-center text-3xl lg:text-[40px] font-medium leading-[141%]">
                  {latestPost?.post_name}
                </h3>
                <div className="flex justify-center items-center gap-x-7 md:gap-x-10 lg:gap-x-16 ">
                  <div className="flex justify-center items-center gap-x-2 ">
                    <IoLocationOutline size={20} />
                    <p className="text-sm md:text-base font-medium leading-[141%] ">
                      {latestPost?.event_place}
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-2 py-4">
                    <IoCalendarClearOutline size={20} />
                    <p className="text-sm md:text-base font-medium leading-[141%]">
                      {latestPost?.event_date}
                    </p>
                  </div>
                </div>

                <div
                  className="text-center font-switzer font-light text-sm md:text-base leading-[161%] max-w-[650px] mx-auto"
                  dangerouslySetInnerHTML={{ __html: latestPost?.post_content }}
                ></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Section1;
