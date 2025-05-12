"use client";
import { servicesData } from "@/app/lib/homeData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import isVideo from "@/app/lib/checkVideo";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};
const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section className="containers pt-11 md:pt-12 lg:pt-16 xl:pt-24 serviceBg overflow-hidden">
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-3 lg:col-span-4"></div>
        <div className="col-span-12 md:col-span-9 lg:col-span-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="grid grid-cols-12 gap-x-3"
          >
            <motion.div
              variants={itemVariants}
              className=" space-y-2 col-span-12 md:col-span-8"
            >
              <h3 className="main-heading text-center md:text-left">
                Our Services
              </h3>
              <p className=" font-switzer md:text-sm text-base text-center md:text-left leading-[193%]">
                With each Co-Founder bringing senior level of expertise we take
                pride in being a collective group of creative consultancies.
                Together as one entity; we bring an entire team of marketeers
                and strategists offering a complete 360 solution to marketing
                and developing your business
              </p>
            </motion.div>

            <Link
              href={"/services"}
              className="col-span-12 md:col-span-4 font-switzer text-sm leading-[118.423%] uppercase py-3 md:py-4 px-6 md:px-10 border border-main rounded-full inline-block h-fit w-fit self-baseline mx-auto md:ml-auto mt-5  hover:bg-main hover:text-white transition-colors duration-300"
            >
              Explore more
            </Link>
          </motion.div>
        </div>
      </div>
      <div
        className="grid  grid-cols-12 mt-6 md:mt-14 sm-gap-x-5
       md:gap-x-9 relative  "
      >
        <div className="col-span-12 hidden md:block md:col-span-3 lg:col-span-4 relative h-[300px]-- ">
          <AnimatePresence mode="wait">
            {hoveredIndex !== null && servicesData[hoveredIndex] && (
              <motion.div
                key={hoveredIndex}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  top: `${hoveredIndex * 13}%`,
                }}
                animate={{ opacity: 1, scale: 1, top: `${hoveredIndex * 13}%` }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.1, ease: "easeInOut" }}
                className={`absolute  left-0 w-full h-full`}
              >
                {isVideo(servicesData[hoveredIndex].image) ? (
                  <video
                    src={servicesData[hoveredIndex].image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover  "
                  />
                ) : (
                  <Image
                    src={servicesData[hoveredIndex].image}
                    alt={servicesData[hoveredIndex]?.title || "image"}
                    fill
                    className="object-cover "
                    priority
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-8 ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {servicesData?.map?.((serivce, index) => (
              <motion.div
                key={serivce?.id || index}
                variants={itemVariants}
                className={` py-5 md:py-9 border-b border-b-[#c7c7c7] group grid grid-cols-1 sm:grid-cols-2 gap-x-2  ${
                  index === 0 ? "border-t border-t-[#c7c7c7]" : ""
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-[1.2em]- text-2xl md:text-3xl lg:text-[40px] font-medium text-center sm:text-left leading-[141%] sm:max-w-[80%] sm:py-9">
                  {" "}
                  <span className="sm:hidden">{serivce?.title}</span>
                  <span className="absolute hidden sm:block  top-1/2 -translate-y-1/2 -font-gambetta opacity-100    group-hover:opacity-0 transition-all duration-300">
                    {serivce?.title}
                  </span>
                  <span className="absolute hidden sm:block top-1/2 -translate-y-1/2 font-gt opacity-0 group-hover:text-[#385B93] group-hover:opacity-100 transition-all duration-300">
                    {serivce?.title}
                  </span>
                </div>

                <p className="font-switzer text-sm md:text-base leading-[193%]  group-hover:text-[#385B93] transition-all duration-300 text-center sm:text-left ">
                  {serivce?.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
