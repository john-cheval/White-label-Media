"use client";
import React, { useEffect, useRef, useState } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
import { LuArrowRight } from "react-icons/lu";
import { GoArrowUpRight } from "react-icons/go";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const Hero = () => {
  const videoRef = useRef(null);
  const [videoExpanded, setVidoExpanded] = useState(false);
  const isShowButton = useMediaQuery("(min-width: 890px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (videoRef.current === null || isMobile === null) return;
    const video = videoRef.current;
    gsap.set(video, {
      transformStyle: "preserve-3d",
      transformOrigin: "center center",
    });

    ScrollTrigger.create({
      trigger: video,
      start: `top ${isMobile ? "20%" : "30%"}`,
      // start: `top 30%`,
      end: "bottom 60%",
      scrub: true,
      // markers: true,
      onUpdate: (self) => {
        const progress = self.progress;

        // gsap.to(video, {
        //   rotateY: 180,
        //   ease: "power2.out",
        //   overwrite: true,
        // });

        if (progress > 0.5 && !videoExpanded) {
          setVidoExpanded(true);
          gsap.to(video, {
            position: "absolute",
            top: "50%",
            left: "50%",
            xPercent: -50,
            yPercent: -50,
            width: isMobile ? "95vw" : "80%",
            height: "auto",
            zIndex: 50,
            rotate: 0,
            objectFit: "cover",
            ease: "power2.out",
            duration: 0.6,
            rotateY: 180,
            overflow: "hidden",
            overwrite: true,
          });
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

  return (
    <header
      className="containers relative perspective-[1500px] h-[100dvh]- overflow-hidden py-14"
      style={{
        backgroundImage: `url("/Home/label.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "110% auto",
        backgroundPosition: "center center",
      }}
    >
      <div className="grid grid-cols-12">
        <h1 className="uppercase text-main font-gambetta text-3xl sm:text-[6vw] 5xl:text-[100px]  leading-[1.30] col-span-5">
          A CREATIVE COLLECTIVE
        </h1>
      </div>

      <div className="grid grid-cols-12 ">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          src="/Home/hero.mp4"
          className="col-start-5 col-end-9 w-full h-auto rounded-[20px] rotate-[-4deg]"
        />

        {videoExpanded && (
          <video
            autoPlay
            muted
            loop
            playsInline
            src="/Home/hero.mp4"
            className="col-start-5 col-end-9 w-full h-auto rounded-[20px] rotate-[-4deg]"
          />
        )}

        {videoExpanded && (
          <div className=" z-[100] w-[80vw] left-1/2 -translate-x-1/2 -translate-y-1/2  absolute bottom-4   px-6 md:px-[70px] lg:px-[128px]  overflow-hidden home-grad">
            <div>
              <div className="flex gap-x-11 relative ">
                <div>
                  <p className="font-gambetta text-white- text-white text-3xl leading-main ">
                    “I believe in the unique identity of each brand and that
                    every business has the opportunity to go global.”
                  </p>

                  <div className="flex flex-col gap-y-4">
                    <span className="font-switzer text-base leading-[193%] text-sec- text-white">
                      Shraddha Barot Amariei
                    </span>
                    <span className="font-switzer text-base leading-[193%] text-sec- text-white">
                      Group CEO & Founder
                    </span>
                  </div>
                </div>

                <Link href={"/"} className="text-white text-6xl">
                  <GoArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        )}
        {/* {videoExpanded && (
          <div className="bg-home-hero-video-grad hidden md:block w-[80vw] h-full left-1/2 -translate-x-1/2 translate-y-1/2  absolute bottom-14- z-[111]" />
        )} */}
      </div>

      <div className="grid grid-cols-12">
        {isShowButton && (
          <div className="col-span-3 pb-12 mt-auto ">
            <Link
              href={"/about"}
              className="text-main w-fit font-switzer gap-x-3 text-sm leading-main uppercase py-4 px-7 rounded-full  border border-main  h-fit flex items-center justify-between group mt-auto"
            >
              About the group{" "}
              <LuArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}
        <div className="col-start-4 -col-end-1">
          <h3 className="uppercase text-main font-gambetta text-3xl sm:text-[6vw] 5xl:text-[100px]  leading-[1.30]  text-right">
            CRAFTING THE <br /> FUTURE OF BRANDS
          </h3>
          {!isShowButton && (
            <Link
              href={"/about"}
              className="text-main  w-fit font-switzer gap-x-3 text-sm leading-main uppercase py-4 px-7 rounded-full  border border-main  h-fit flex items-center justify-between group mt-auto- -ml-5 mt-6"
            >
              About the group{" "}
              <LuArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Hero;
