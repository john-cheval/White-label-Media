"use client";
import isVideo from "@/app/lib/checkVideo";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};
const Section3 = ({ list, description, heading }) => {
  return (
    <section className="containers pb-14 md:pb-16 lg:pb-20 xl:pb-[100px]- 2xl:pb-[148px]- overflow-hidden">
      <div className="grid grid-cols-12 gap-x-5 md:gap-x-10 lg:gap-x-16 3xl:gap-x-24">
        <div className="col-span-6 space-y-4 md:space-y-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0}
            className="max-h-[700px]"
          >
            {isVideo(list[2]?.image?.url) ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center aspect-square- max-h-[700px]"
              >
                <source src={list[2]?.image?.url} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={list[2]?.image?.url}
                alt="Image"
                width={300}
                height={300}
                sizes="100vw"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
                className="w-full h-full object-cover max-h-[700px]"
              />
            )}
          </motion.div>
          <motion.div
            className="mt-auto  md:hidden  ml-[10%]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0.2}
          >
            {isVideo(list[0]?.image?.url) ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full  object-cover aspect-square"
              >
                <source src={list[0]?.image?.url} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={list[0]?.image?.url}
                alt="Image"
                width={300}
                height={300}
                sizes="100vw"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
                className="w-full h-full- max-w-[220px] h-[200px]- object-cover"
              />
            )}
          </motion.div>
        </div>
        <div className="col-span-6 flex flex-col justify-center md:justify-start w-full gap-y-20- ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0.4}
            className="flex justify-between- gap-x-10 lg:gap-x-16 3xl:gap-x-28 "
          >
            <div className="mt-[200px] hidden md:block aspect-square max-w-[220px] ">
              {isVideo(list[0]?.image?.url) ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                >
                  <source src={list[0]?.image?.url} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={list[0]?.image?.url}
                  alt="Image"
                  width={300}
                  height={300}
                  sizes="100vw"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  className="w-full h-full- max-w-[220px] h-[200px]- object-cover"
                />
              )}
            </div>
            <div className="md:w-[400px] w-[200px]- max-h-[190px]- sm:max-h-[200px]- md:h-[300px]- mt-[50px]- md:mt-24">
              {isVideo(list[1]?.image?.url) ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover "
                >
                  <source src={list[1]?.image?.url} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={list[1]?.image?.url}
                  alt="Image"
                  width={300}
                  height={300}
                  sizes="100vw"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  className="w-full h-auto max-w-[300px]- max-h-[300px-] object-cover-"
                />
              )}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            custom={0.6}
            className="3xl:max-w-[650px] hidden lg:flex flex-col mt-14 gap-y-5"
          >
            <h3 className="text-[4vw] 3xl:text-[60px] font-medium leading-[118.423%]">
              {heading}
            </h3>
            <div
              className="text-base leading-[162%] font-switzer max-w-[560px]"
              dangerouslySetInnerHTML={{ __html: description }}
            ></div>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          custom={0.6}
          className=" col-span-12  lg:hidden flex flex-col mt-10 gap-y-5 text-center"
        >
          <h3 className=" text-3xl md:text-[6vw] 3xl:text-[60px] font-medium leading-[118.423%]">
            {heading}
          </h3>
          <div
            className="text-base leading-[162%] font-switzer max-w-[560px]"
            dangerouslySetInnerHTML={{ __html: description }}
          ></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
