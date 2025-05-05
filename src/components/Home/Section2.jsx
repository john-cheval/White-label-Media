"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

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
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

const Section2 = () => {
  return (
    <section
      className="relative bg-main text-sec py-[200px] containers"
      style={{
        backgroundImage: `url("/Home/TheGroupLabel.svg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "30% auto",
        backgroundPosition: "-15%",
      }}
    >
      <div className="grid grid-cols-12">
        <motion.div
          className="col-start-2 col-end-7 flex flex-col gap-y-9"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h3
            className="text-5xl font-medium leading-[141%]"
            variants={itemVariants}
          >
            White Label Group is a curated collective and an integrated hub of
            upscale creative consultancies, marketing, technology and production
            studios, crafting the future of brands.
          </motion.h3>

          <motion.p
            className="font-switzer text-base leading-[193%]"
            variants={itemVariants}
          >
            What started as a ”let’s see if I can do this” dream from our
            Founder’s humble living room in 2012 is now one of the most reputed
            agencies in the region.
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link
              href="/about"
              className="font-switzer text-sm underline uppercase inline-block mt-10"
            >
              Explore the group
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="col-start-8 col-end-12 relative flex gap-x-4"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <Image
            src="/Home/image.jpg"
            height={600}
            width={470}
            sizes="100vw"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            className="w-full h-auto object-cover"
            alt="Home Section Image"
          />

          <Link
            href="/about"
            className="text-xs uppercase font-medium px-5 py-3 rounded-full border border-sec absolute bottom-9 left-14 overflow-hidden flex items-center group gap-x-1"
          >
            Explore
            <IoArrowForwardOutline className="translate-x-3 group-hover:translate-x-0 transition-all duration-300 opacity-0 group-hover:opacity-100 text-lg" />
          </Link>

          <Link href="/about">
            <GoArrowUpRight className="text-6xl text-sec hover:scale-110 transition-all duration-200" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Section2;
