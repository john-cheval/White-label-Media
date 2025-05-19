"use client";
import { servicesData } from "@/app/lib/homeData";
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
const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  console.log(hoveredIndex, "index");
  return (
    <>
      {/* ✅ Preload all service media */}
      <Head>
        {servicesData.map((item, index) =>
          isVideo(item.image) ? (
            <link
              key={`video-${index}`}
              rel="preload"
              as="video"
              href={item.image}
              type="video/mp4"
            />
          ) : (
            <link
              key={`image-${index}`}
              rel="preload"
              as="image"
              href={item.image}
              imagesrcset={item.image}
              fetchpriority="high"
            />
          )
        )}
      </Head>
      <section className="containers pt-11 md:pt-12 lg:pt-16 xl:pt-24 serviceBg overflow-hidden">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-3 lg:col-span-4-"></div>
          <div className="col-span-12 md:col-span-9 lg:col-span-8-">
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
                  With each Co-Founder bringing senior level of expertise we
                  take pride in being a collective group of creative
                  consultancies. Together as one entity; we bring an entire team
                  of marketeers and strategists offering a complete 360 solution
                  to marketing and developing your business
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
            className="grid grid-cols-12 sm-gap-x-5
       md:gap-x-9"
          >
            {servicesData?.map?.((serivce, index) => (
              <>
                <div className="col-span-12 hidden md:block md:col-span-3 lg:col-span-3 relative  ">
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
                          servicesData?.length - 1 === index
                            ? "bottom-0"
                            : index === 0
                            ? "top-0"
                            : "-top-1/2"
                        }`}
                      >
                        {isVideo(servicesData[hoveredIndex].image) ? (
                          <video
                            src={servicesData[hoveredIndex].image}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            className="w-full h-auto object-cover- "
                          />
                        ) : (
                          <Image
                            src={servicesData[hoveredIndex].image}
                            alt={servicesData[hoveredIndex]?.title || "image"}
                            // fill-
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
                  key={serivce?.id || index}
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

                  <p className="font-switzer text-sm md:text-base leading-[193%]  group-hover:text-[#385B93] transition-all duration-300 text-center sm:text-left ">
                    {serivce?.description}
                  </p>
                </motion.div>
              </>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
