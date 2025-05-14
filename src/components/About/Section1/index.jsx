"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import isVideo from "@/app/lib/checkVideo";

gsap.registerPlugin(ScrollTrigger);

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
const Section1 = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { width: "30%", transformOrigin: "center center" },
      {
        width: "100%",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          //   markers: true,
        },
        ease: "power2.out",
      }
    );
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section className="pt-6 md:pt-11 pb-11 lg:py-16 xl:py-[76px] px-6 md:px-20  lg:pl-[190px] lg:pr-[94px] flex flex-col gap-y-4  md:gap-y-14 relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-[6vw] 2xl:text-[80px] relative z-50 leading-[118.423%] uppercase max-w-[920px] text-center md:text-left"
        >
          13+ years of stories, Reimagined for what’s next
        </motion.h1>

        <motion.div
          animate={{ y: [0, -15, 15, 0] }}
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
            sizes="100vw"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            className=" h-16 md:h-[100px] object-cover-"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex gap-x-14 gap-y-7 flex-col md:flex-row  justify-end relative z-50"
        >
          <motion.p
            variants={childVariants}
            className="font-switzer text-center md:text-left  text-sm md:text-base leading-[161%] max-w-[400px]"
          >
            White Label Group is a curated collective of high-quality creative
            consultancies, marketing, technology and production studios,
            crafting the future of brands.
          </motion.p>
          <motion.p
            variants={childVariants}
            className="font-switzer text-center md:text-left text-sm md:text-base leading-[161%] max-w-[400px]"
          >
            What started as a ”let’s see if I can do this” dream from our
            Founder’s humble living room without any background in media or
            agency experience in 2012 is now one of the most reputed agencies in
            the region.
          </motion.p>
        </motion.div>
        <div className="mt-[141px]- mt-10 md:mt-0 md:pr-[52px] flex justify-center relative z-50">
          {isVideo("/About/image1.png") ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover max-h-[600px] w-[30%]"
            >
              <source src="/About/image1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={"/About/image1.png"}
              ref={imageRef}
              alt="section1"
              height={100}
              width={100}
              sizes="100vw"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
              //   className=" w-full- max-h-[600px] w-[30%] object-cover "
              className="object-cover max-h-[600px]"
              style={{
                width: "30%",
                transformOrigin: "center center",
                willChange: "auto",
              }}
            />
          )}
        </div>
        <div className="absolute bg-[#E3EEFF] blur-[250px] h-[500px] w-[500px] md:h-[700px] md:w-[700px] lg:h-[900px] lg:w-[900px] rounded-full top-1/2 md:-translate-y-1/2 left-3 md:left-1/2 -translate-x-1/2" />
      </section>
      <div className="absolute top-[0] right-0 md:-right-10-">
        <Image
          src={"/common/aboutBg.svg"}
          alt="bg-about"
          width={100}
          height={100}
          sizes="100vw"
          // aspectratio={391 / 191}
          unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          className=" w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Section1;
