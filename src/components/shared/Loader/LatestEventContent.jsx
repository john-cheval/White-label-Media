"use client";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { useLayoutEffect, useRef, useState } from "react";
import {
  IoPlayCircleSharp,
  IoLocationOutline,
  IoCalendarClearOutline,
  IoPauseCircle,
} from "react-icons/io5";
import isVideo from "@/app/lib/checkVideo";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export const LatestEventContent = ({ latestPost }) => {
  const videoRef = useRef(null);
  const textRef = useRef(null);
  const playButtonRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => videoRef.current?.play();
  const handlePause = () => videoRef.current?.pause();
  const handleVideoClick = () => {
    isPlaying ? handlePause() : handlePlay();
    setIsPlaying(!isPlaying);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const video = videoRef.current;
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
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: video,
            start: "top 20%",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, [isMobile]);

  return (
    <div className="col-span-12 md:col-start-3 md:col-end-11 relative overflow-hidden">
      <div className="aspect-[16/9] relative mb-6 md:mb-0" ref={videoRef}>
        {isVideo(latestPost?.event_image?.url) ? (
          <video
            loop
            muted
            playsInline
            autoPlay={isPlaying}
            poster={latestPost?.event_image?.url}
            src={latestPost?.event_image?.url}
            className="object-cover w-full h-full"
          />
        ) : (
          <Image
            src={latestPost?.event_image?.url}
            alt="Event Image"
            fill
            className="object-cover"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        )}
        {isVideo(latestPost?.event_image?.url) && (
          <div className="absolute top-[35%] left-[45%] md:top-1/2 md:left-1/2 -translate-x-1/2 -translate-y-1/2">
            {isPlaying ? (
              <IoPauseCircle
                className="cursor-pointer"
                color="#EAE4D6"
                size={isMobile ? 50 : 100}
                onClick={handleVideoClick}
              />
            ) : (
              <IoPlayCircleSharp
                className="cursor-pointer"
                ref={playButtonRef}
                style={{ transform: "translateY(50px)", opacity: 0 }}
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
        style={{ transform: "translateY(40px)", opacity: isMobile ? 1 : 0 }}
      >
        <h3 className="text-center text-3xl lg:text-[40px] font-medium leading-[141%]">
          {latestPost?.post_name}
        </h3>
        <div className="flex justify-center items-center gap-x-7 md:gap-x-10 lg:gap-x-16">
          <div className="flex items-center gap-x-2">
            <IoLocationOutline size={20} />
            <p className="text-sm md:text-base font-medium">
              {latestPost?.event_place}
            </p>
          </div>
          <div className="flex items-center gap-2 py-4">
            <IoCalendarClearOutline size={20} />
            <p className="text-sm md:text-base font-medium">
              {latestPost?.event_date}
            </p>
          </div>
        </div>
        <div
          className="text-center font-switzer font-light text-sm md:text-base leading-[161%] max-w-[650px] mx-auto"
          dangerouslySetInnerHTML={{ __html: latestPost?.post_content }}
        />
      </div>
    </div>
  );
};
