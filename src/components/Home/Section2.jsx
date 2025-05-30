"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import isVideo from "@/app/lib/checkVideo";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const Section2 = ({ heading, description, linkText, link, image }) => {
  return (
    <section className="relative bg-main text-sec py-9 md:py-20 lg:py-[100px] xl:py-[150px] containers homeBGSection1 ">
      <div className="grid grid-cols-12">
        <motion.div
          className="md:col-start-1 lg:col-start-2 md:col-end-7 col-span-12 flex flex-col items-center md:items-start gap-y-3 md:gap-y-5 lg:gap-y-9"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div variants={itemVariants}>
            <h3
              className="text-3xl lg:text-4xl xl:text-5xl text-center md:text-left font-medium leading-[141%]"
              style={{
                lineHeight: 1.2,
              }}
            >
              {heading}
            </h3>
          </motion.div>

          <motion.p
            className="font-switzer text-sm md:text-base  text-center md:text-left leading-[193%]"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              href={link}
              aria-label="About the group"
              className="relative font-switzer text-center md:text-left text-sm uppercase inline-block transition-all duration-300 md:mt-10 mb-10 md:mb-0
             before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1px] before:bg-sec
             before:transition-all before:duration-300 hover:before:translate-x-2"
            >
              {linkText}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="col-span-12 md:col-start-8 md:col-end-12 relative flex gap-x-4"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {isVideo(image) ? (
            <video
              src={image}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover   "
            />
          ) : (
            <Image
              src={image}
              height={600}
              width={470}
              sizes="100vw"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
              className=" h-auto "
              alt="Home Section Image"
            />
          )}

          <Link
            href={link}
            aria-label="About the group"
            className="text-xs hidden md:flex uppercase font-medium px-5 py-3 rounded-full border border-sec absolute bottom-9 left-14 overflow-hidden  items-center group gap-x-1"
          >
            Explore
            <IoArrowForwardOutline className="translate-x-3 group-hover:translate-x-0 transition-all duration-300 opacity-0 group-hover:opacity-100 text-lg" />
          </Link>

          <Link href={link} aria-label="about the group">
            <div className="absolute w-5 h-5 md:w-7 md:h-7 ml-2 top-5 md:top-0 right-5 md:right-0  md:relative">
              <Image
                src="/common/arrow_outward.svg"
                alt="arrow_outward"
                fill
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
                className="object-contain hover:rotate-45 transition-transform duration-300"
              />
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
