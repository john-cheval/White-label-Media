"use client";
import { servicesData } from "@/app/lib/homeData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const isVideo = (url) => url.endsWith(".mp4");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  console.log(hoveredIndex, "hoverindex");
  return (
    <section className="containers pt-24 serviceBg overflow-hidden">
      <div className="grid grid-cols-12">
        <div className="col-span-4"></div>
        <div className="col-span-8">
          <div className="grid grid-cols-12 gap-x-3">
            <div className=" space-y-2 col-span-8">
              <h3 className="main-heading">Our Services</h3>
              <p className=" font-switzer text-base leading-[193%]">
                With each Co-Founder bringing senior level of expertise we take
                pride in being a collective group of creative consultancies.
                Together as one entity; we bring an entire team of marketeers
                and strategists offering a complete 360 solution to marketing
                and developing your business
              </p>
            </div>

            <Link
              href={"/services"}
              className="col-span-4 font-switzer text-sm leading-[118.423%] uppercase py-4 px-10 border border-main rounded-full inline-block h-fit w-fit self-baseline ml-auto mt-5"
            >
              Explore more
            </Link>
          </div>
        </div>
      </div>
      <div className="grid  grid-cols-12 mt-14 gap-x-9 relative  ">
        <div className="col-span-4 relative h-[300px]-- ">
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
                    alt={servicesData[hoveredIndex].title}
                    fill
                    className="object-cover "
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="col-span-8 ">
          {servicesData?.map?.((serivce, index) => (
            <div
              key={serivce?.id || index}
              className={`py-9 border-b border-b-[#c7c7c7] group grid grid-cols-2 gap-x-2  ${
                index === 0 ? "border-t border-t-[#c7c7c7]" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-[1.2em]- text-[40px] font-medium leading-[141%] max-w-[80%] py-9">
                {" "}
                <span className="absolute  top-1/2 -translate-y-1/2 -font-gambetta opacity-100    group-hover:opacity-0 transition-all duration-300">
                  {serivce?.title}
                </span>
                <span className="absolute  top-1/2 -translate-y-1/2 font-gt opacity-0 group-hover:text-[#385B93] group-hover:opacity-100 transition-all duration-300">
                  {serivce?.title}
                </span>
              </div>

              <p className="font-switzer text-base leading-[193%]  group-hover:text-[#385B93] transition-all duration-300 text-left ">
                {serivce?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
