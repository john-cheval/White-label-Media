"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import isVideo from "@/app/lib/checkVideo";
import useMediaQuery from "@/app/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

const Section1 = ({ heading, descriptionOne, descriptionTwo, image }) => {
  const imageRef = useRef(null);
  const [fadeIn, setFadeIn] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
  };

  useEffect(() => {
    if (!imageRef.current || isMobile) return;

    const handleInit = () => {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.4, transformOrigin: "center center" },
        {
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true,
            // markers: true,
          },
        }
      );
    };

    const imgEl = imageRef.current;

    if (imgEl.complete) {
      handleInit();
    } else {
      imgEl.addEventListener("load", handleInit);
    }

    return () => {
      imgEl.removeEventListener("load", handleInit);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  return (
    <>
      <section className="pt-28  pb-11 lg:pb-16 xl:pb-[76px] px-6 md:px-20  lg:pl-[190px] lg:pr-[94px] flex flex-col gap-y-4  md:gap-y-14 relative pt-20-- md:pt-40 about-bg">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-[6vw] 2xl:text-[80px] relative z-50 leading-[118.423%] uppercase max-w-[920px] text-center md:text-left"
        >
          {heading}
        </motion.h1>

        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 10, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex justify-center items-center relative z-50"
        >
          <Image
            src={"/common/down_arrow.svg"}
            alt="down_arrow"
            height={100}
            width={100}
            layout="fixed"
            sizes="100vw"
            onLoad={() => ScrollTrigger.refresh()}
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            className=" h-16 w-full object-contain md:h-[100px] object-cover-"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex gap-x-14 gap-y-7 flex-col md:flex-row  md:justify-end items-center md:items-start relative z-50"
        >
          <motion.div
            variants={childVariants}
            className="font-switzer text-center md:text-left  text-sm md:text-base leading-[161%] max-w-[400px]"
            dangerouslySetInnerHTML={{ __html: descriptionOne }}
          ></motion.div>
          <motion.div
            variants={childVariants}
            className="font-switzer text-center md:text-left text-sm md:text-base leading-[161%] max-w-[400px]"
            dangerouslySetInnerHTML={{ __html: descriptionTwo }}
          ></motion.div>
        </motion.div>

        {!isMobile && (
          <div className="mt-[141px]- mt-10 md:mt-0 lg:pr-[52px] flex justify-center w-full relative z-50">
            {isVideo(image) ? (
              <video
                autoPlay
                ref={imageRef}
                loop
                muted
                playsInline
                className="object-cover max-h-[600px] w-[30%]"
                onLoadedData={() => ScrollTrigger.refresh()}
              >
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: fadeIn ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image}
                  ref={imageRef}
                  alt="section1"
                  height={100}
                  width={100}
                  sizes="100vw"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  onLoad={() => {
                    ScrollTrigger.refresh();
                  }}
                  className="object-cover- max-h-[611px] w-full will-change-transform-"
                  style={{
                    width: "100%",
                    transformOrigin: "center center",
                    willChange: "transform",
                  }}
                />
              </motion.div>
            )}
          </div>
        )}

        {isMobile && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeInUp}
            className="mt-[141px]- mt-10 md:mt-0 md:pr-[52px] flex justify-center relative z-50"
          >
            {isVideo(image) ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="object-cover max-h-[600px] w-[30%]"
              >
                <source src={image} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: fadeIn ? 0 : 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={image}
                  alt="section1"
                  height={100}
                  width={100}
                  sizes="100vw"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  className="object-cover- max-h-[400px] w-full will-change-transform-"
                />
              </motion.div>
            )}
          </motion.div>
        )}

        <div className="absolute bg-[#E3EEFF] blur-[250px] h-[500px] w-[500px] md:h-[700px] md:w-[700px] lg:h-[900px] lg:w-[900px] rounded-full top-1/2 md:-translate-y-1/2 left-3 md:left-1/2 -translate-x-1/2" />
      </section>
    </>
  );
};

export default Section1;
