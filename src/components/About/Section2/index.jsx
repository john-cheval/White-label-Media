"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  useGSAP(() => {
    let timeline = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: "#content",
        scrub: 1,
        start: "top bottom",
        end: "bottom top",
        // markers: true,
      },
    });
    timeline
      .to(
        firstSlider.current,
        {
          x: "50%",
        },
        "start"
      )
      .to(
        secondSlider.current,
        {
          x: "0%",
        },
        "start"
      );
  }, []);
  return (
    <section
      className="relative overflow-x-hidden w-full pb-11 md:pb-16  xl:pb-24"
      id="content"
    >
      <div
        className="relative  whitespace-nowrap  overflow-hidden"
        ref={slider1}
      >
        <div className="flex -translate-x-[100%]" ref={firstSlider}>
          <h3 className="  text-[6vw] xl:text-[100px] uppercase">
            Trusted by 300+ brands
          </h3>
        </div>
      </div>
      <div
        className="relative whitespace-nowrap  overflow-hidden"
        ref={slider2}
      >
        <div className="flex translate-x-[100%]" ref={secondSlider}>
          <h3 className="text-[6vw] xl:text-[100px] uppercase">
            to create lasting impact
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Section2;
