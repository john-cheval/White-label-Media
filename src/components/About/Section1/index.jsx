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
      { width: "30%" },
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
  }, []);
  return (
    <>
      <section className="py-[76px] pl-[190px] pr-[94px] flex flex-col  gap-y-14 relative">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[80px] relative z-50 leading-[118.423%] uppercase max-w-[920px]"
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
            className=" h-[100px] object-cover-"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex gap-x-14  justify-end relative z-50"
        >
          <motion.p
            variants={childVariants}
            className="font-switzer text-base leading-[161%] max-w-[400px]"
          >
            White Label Group is a curated collective of high-quality creative
            consultancies, marketing, technology and production studios,
            crafting the future of brands.
          </motion.p>
          <motion.p
            variants={childVariants}
            className="font-switzer text-base leading-[161%] max-w-[400px]"
          >
            What started as a ”let’s see if I can do this” dream from our
            Founder’s humble living room without any background in media or
            agency experience in 2012 is now one of the most reputed agencies in
            the region.
          </motion.p>
        </motion.div>
        <div className="mt-[141px]- pr-[52px] flex justify-center relative z-50">
          {isVideo("/about/image1.png") ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="object-cover max-h-[600px] w-[30%]"
            >
              <source src="/about/image1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <Image
              src={"/about/image1.png"}
              ref={imageRef}
              alt="section1"
              height={100}
              width={100}
              sizes="100vw"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
              //   className=" w-full- max-h-[600px] w-[30%] object-cover "
              className="object-cover max-h-[600px]"
              style={{ width: "30%" }}
            />
          )}
        </div>
        <div className="absolute bg-[#E3EEFF] blur-[250px] h-[900px] w-[900px] rounded-full top-1/2 -translate-y-1/2 left-20" />
      </section>
      <div className="absolute top-0 -right-10">
        <Image
          src={"/common/aboutBg.svg"}
          alt="bg-about"
          width={100}
          height={100}
          sizes="100vw"
          aspectratio={391 / 191}
          unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          className=" w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Section1;
