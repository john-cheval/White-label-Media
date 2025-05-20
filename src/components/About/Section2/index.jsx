"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Section2 = ({ titleOne, titleTwo }) => {
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useGSAP(() => {
    if (!firstSlider.current || !secondSlider.current) return;
    if (isMobile) return;

    setTimeout(() => {
      let timeline = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: "#content",
          scrub: 1,
          start: "top bottom",
          end: "bottom center",
          // markers: true,
        },
      });

      timeline
        .to(firstSlider.current, { x: "50%" }, "start")
        .to(secondSlider.current, { x: "0%" }, "start");
    }, 100);

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      className="relative overflow-x-hidden  w-full pb-11 md:pb-16  xl:pb-24"
      id="content"
    >
      <div
        className="relative hidden md:block  whitespace-nowrap  overflow-hidden"
        ref={slider1}
      >
        <div
          className="flex -translate-x-[70%] will-change-transform"
          ref={firstSlider}
        >
          <h3 className=" text-[clamp(30px,5vw,100px)] uppercase">
            {titleOne}
          </h3>
        </div>
      </div>
      <div
        className="relative hidden md:block whitespace-nowrap  overflow-hidden"
        ref={slider2}
      >
        <div
          className="flex translate-x-[100%] will-change-transform"
          ref={secondSlider}
        >
          <h3 className=" text-[clamp(30px,5vw,100px)] uppercase">
            {titleTwo}
          </h3>
        </div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.3 } },
        }}
        className="relative md:hidden whitespace-nowrap overflow-hidden px-5"
      >
        <div className="flex flex-col items-center">
          <motion.h3
            className="text-2xl sm:text-3xl uppercase"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
          >
            {titleOne}
          </motion.h3>

          <motion.h3
            className="text-2xl sm:text-3xl uppercase"
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {titleTwo}
          </motion.h3>
        </div>
      </motion.div>
    </section>
  );
};

export default Section2;
