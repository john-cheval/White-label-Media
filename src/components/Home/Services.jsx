"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoArrowForwardSharp } from "react-icons/io5";
import isVideo from "@/app/lib/checkVideo";
import Head from "next/head";

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
const Services = ({ services, heading, description }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <>
      {/* ✅ Preload all service media */}
      <Head>
        {services.map((item, index) =>
          isVideo(item?.image?.url) ? (
            <link
              key={`video-${index}`}
              rel="preload"
              as="video"
              href={item?.image?.url}
              type="video/mp4"
            />
          ) : (
            <link
              key={`image-${index}`}
              rel="preload"
              as="image"
              href={item.image}
              imagesrcset={item?.image?.url}
              fetchpriority="high"
            />
          )
        )}
      </Head>
      <section className="containers pt-11 md:pt-12 lg:pt-16 xl:pt-24 serviceBg overflow-hidden">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-3 "></div>
          <div className="col-span-12 md:col-span-9 ">
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
                  {heading}
                </h3>
                <p className=" font-switzer text-sm sm:text-base md:text-lg text-center md:text-left leading-[193%]">
                  {description}
                </p>
              </motion.div>

              <Link
                href={"/services"}
                className="col-span-12  md:col-span-4 font-switzer text-sm leading-[118.423%] uppercase py-3 md:py-4 px-5 md:px-10 border border-main rounded-full inline-flex items-center h-fit w-fit self-baseline mx-auto md:ml-auto mt-5  hover:bg-main hover:text-white transition-colors duration-300 gap-x-8 md:gap-x-0"
              >
                Explore more <IoArrowForwardSharp className="md:hidden" />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className=" mt-6 md:mt-14  relative  ">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {services?.map?.((serivce, index) => (
              <div
                key={index}
                className="grid grid-cols-12 sm-gap-x-5
       md:gap-x-9"
              >
                <div
                  className="col-span-12 hidden md:block md:col-span-3 lg:col-span-3 relative  "
                  key={index}
                >
                  <AnimatePresence mode="wait">
                    {hoveredIndex !== null && hoveredIndex === index && (
                      <motion.div
                        key={hoveredIndex}
                        initial={{
                          opacity: 0,
                          scale: 0.95,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.1, ease: "easeInOut" }}
                        className={`absolute  left-0 w-full h-full-   ${
                          services?.length - 1 === index
                            ? "bottom-0"
                            : index === 0
                            ? "top-0"
                            : index === 1
                            ? "top-5"
                            : "-top-1/2"
                        }`}
                      >
                        {isVideo(services[hoveredIndex].image?.url) ? (
                          <video
                            src={services[hoveredIndex].image?.url}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-auto object-cover- "
                          />
                        ) : (
                          <Image
                            src={services[hoveredIndex].image?.url}
                            alt={services[hoveredIndex]?.title || "image"}
                            width={100}
                            height={100}
                            sizes="100vw"
                            className="object-cover w-full h-auto"
                            priority
                            unoptimized={
                              process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED ===
                              "true"
                            }
                          />
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <motion.div
                  key={serivce?.id || index + 1}
                  variants={itemVariants}
                  className={` py-5 md:py-9 border-b border-b-[#c7c7c7] group col-span-12 md:col-span-9 grid grid-cols-1 sm:grid-cols-2 items-center gap-x-2  ${
                    index === 0 ? "border-t border-t-[#c7c7c7]" : ""
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative h-[1.2em]- text-2xl md:text-3xl lg:text-[40px] font-medium text-center sm:text-left leading-[141%] sm:max-w-[80%] sm:py-9">
                    {" "}
                    <span className="sm:hidden">{serivce?.title}</span>
                    <motion.span
                      initial={{ opacity: 1 }}
                      animate={{
                        opacity: hoveredIndex === index ? 0 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute hidden sm:block top-1/2 -translate-y-1/2 font-gambetta"
                    >
                      {serivce?.title}
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        color: hoveredIndex === index ? "#385B93" : "#000",
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute hidden sm:block top-1/2 -translate-y-1/2 font-gt italic"
                    >
                      {serivce?.title}
                    </motion.span>
                  </div>

                  <div
                    className="font-switzer text-sm md:text-base leading-[193%]  group-hover:text-[#385B93] transition-all duration-300 text-center sm:text-left "
                    dangerouslySetInnerHTML={{ __html: serivce?.description }}
                  ></div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
