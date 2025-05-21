"use client";
import React, { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
import { LuArrowRight } from "react-icons/lu";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import Image from "next/image";

const Hero = ({
  titleTop,
  titleBottom,
  videoLink,
  homeLinkText,
  homeLink,
  description,
  clientName,
  position,
}) => {
  const videoRef = useRef(null);
  const headerRef = useRef(null);
  const [videoExpanded, setVidoExpanded] = useState(false);
  const isShowButton = useMediaQuery("(min-width: 890px)");
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [videoLoaded, setVideoLoaded] = useState(false);
  // const [sliderVideoLink, setSliderVideoLink] = useState("/Home/hero.mp4");

  // useEffect(() => {
  //   if (videoLink) {
  //     setSliderVideoLink(videoLink);
  //   }
  // }, [videoLink]);

  useEffect(() => {
    if (videoRef.current === null || isMobile === null) return;
    const video = videoRef.current;
    const header = headerRef.current;
    gsap.set(video, {
      transformStyle: "preserve-3d",
      transformOrigin: "center center",
    });

    ScrollTrigger.create({
      trigger: header,
      // start: `top `,
      start: `${isMobile ? "15%" : "20%"} ${isMobile ? "20%" : "30%"}`,
      end: "bottom center",
      scrub: true,
      // markers: true,
      onUpdate: (self) => {
        const progress = self.progress;
        // if (videoRef.current) {
        //   const videoHeight = videoRef.current.getBoundingClientRect().height;
        //   const headerHeightElement =
        //     document.querySelector(".home-height-video");

        //   if (headerHeightElement) {
        //     headerHeightElement.style.height = `${videoHeight}px`;
        //   }
        // }

        if (progress > 0.02 && !videoExpanded) {
          gsap.to(video, {
            position: "absolute",
            top: "50%",
            left: "50%",
            xPercent: -50,
            yPercent: -50,
            width: isMobile ? "95%" : "95%",
            height: "auto",
            zIndex: 50,
            rotate: 0,
            objectFit: "cover",
            ease: "power2.out",
            duration: 0.6,
            rotateY: 180,
            overflow: "hidden",
            overwrite: true,
            borderRadius: "20px",
            onComplete: () => {
              if (videoRef.current) {
                const videoHeight =
                  videoRef.current.getBoundingClientRect().height;
                const headerHeightElement =
                  document.querySelector(".home-height-video");
                if (headerHeightElement) {
                  headerHeightElement.style.height = `${videoHeight}px`;
                  headerHeightElement.style.opacity = 1;
                }
              }
            },
          });
          setVidoExpanded(true);
        } else {
          setVidoExpanded(false);
          gsap.to(video, {
            position: "static",
            top: 0,
            left: 0,
            xPercent: 0,
            yPercent: 0,
            width: "100%",
            height: "auto",
            zIndex: 1,
            rotate: -4,
            objectFit: "initial",
            ease: "power2.out",
            duration: 0.6,
            rotateY: 0,
            overwrite: true,
          });
        }
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);

    if (
      typeof window !== "undefined" &&
      window.performance &&
      window.performance.mark
    ) {
      window.performance.mark("video-loaded");
    }
  };

  return (
    <header
      ref={headerRef}
      className="containers relative perspective-[1500px] lg:h-[120dvh] 3xl:h-[120dvh] 5xl:h-[140dvh] mt-32 pb-9 md:mb-10 lg:mb-14 space-y-8 overflow-hidden-"
      style={{
        backgroundImage: `url("/Home/label.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "110% auto",
        backgroundPosition: "center center",
      }}
    >
      <div className="grid grid-cols-12">
        <h1 className="uppercase text-main font-gambetta text-3xl sm:text-[6vw] 5xl:text-[100px]  leading-[1.30] col-span-8 sm:col-span-5">
          {titleTop}
        </h1>
      </div>

      <div className="grid grid-cols-12 overflow-hidden-  ">
        <div className="col-start-3 col-end-9 sm:col-start-5 sm:col-end-9">
          <video
            ref={videoRef}
            aria-hidden="true"
            autoPlay
            muted
            onLoadedData={handleVideoLoad}
            webkitplaysinline={"true"}
            tabIndex={-1}
            loop
            preload="metadata"
            playsInline
            // src={videoLink || "/Home/hero.mp4"}
            src={videoLoaded ? videoLink : "/Home/hero.mp4"}
            // src={sliderVideoLink}
            className=" w-full min-w-[220px] min-h-[120px] sm:h-auto rounded-[20px] rotate-[-4deg]"
          />

          {videoExpanded && (
            <video
              autoPlay
              onLoadedData={handleVideoLoad}
              muted
              loop
              playsInline
              src={videoLink || "/Home/hero.mp4"}
              // src={sliderVideoLink}
              className="col-start-3 col-end-9 sm:col-start-5 sm:col-end-9  w-full min-w-[220px] min-h-[150px] hidden sm:block sm:h-auto rounded-[20px] rotate-[-4deg]"
            />
          )}

          {videoExpanded && !isMobile && (
            <div className=" z-[100] w-[95%] hidden- sm:block left-1/2 -translate-x-1/2 -translate-y-1/2  absolute bottom-[0]- top-1/2 flex  content-end lg:-bottom-20- 3xl:-bottom-24- pb-5 md:pb-10 rounded-[20px]  sm:px-6 md:px-[70px] lg:px-[128px]  overflow-hidden home-grad home-gra home-height-video">
              <div>
                <div className="flex gap-x-11 relative items-center md:items-start  ">
                  <div>
                    <p className="font-gambetta text-white- text-white text-lg sm:text-xl md:text-2xl lg:text-3xl leading-main uppercase ">
                      {description}
                    </p>

                    <div className="flex flex-col gap-y-2 md:gap-y-3 mt-3">
                      <span className="font-switzer text-sm md:text-base leading-[193%] text-sec- text-white">
                        {clientName}
                      </span>
                      <span className="font-switzer text-sm md:text-base leading-[193%] text-sec- text-white">
                        {position}
                      </span>
                    </div>
                  </div>

                  <Link href={homeLink} aria-label="about the group">
                    <Image
                      src={"/common/arrow_outward.svg"}
                      alt="arrow_outward"
                      sizes="100vw"
                      height={48}
                      width={48}
                      className="h-auto w-full object-cover hover:rotate-45 transition-transform duration-300 "
                      unoptimized={
                        process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                      }
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-12">
        {isShowButton && (
          <div className="col-span-3 pb-12 mt-auto ">
            <Link
              href={homeLink}
              aria-label="About the group"
              className="text-main w-fit font-switzer gap-x-3 text-sm leading-main uppercase py-4 px-7 rounded-full  border border-main  h-fit flex items-center justify-between group mt-auto hover:bg-main hover:text-sec transition-all duration-300"
            >
              {homeLinkText}
              <LuArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}
        <div className="col-start-2  sm:col-start-4 -col-end-1">
          <h2
            className="uppercase text-main font-gambetta text-3xl sm:text-[6vw] 5xl:text-[100px]  leading-[1.30]  text-right"
            dangerouslySetInnerHTML={{ __html: titleBottom }}
          ></h2>
          {!isShowButton && (
            <Link
              href={homeLink}
              aria-label="About the group"
              className="text-main  w-fit font-switzer gap-x-3 text-sm leading-main uppercase py-4 px-7 rounded-full  border border-main  h-fit flex items-center justify-between group mt-auto- -ml-5- mt-6 hover:bg-main hover:text-sec transition-all duration-300"
            >
              {homeLinkText}
              <LuArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Hero;
