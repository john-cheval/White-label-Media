"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { sectorsData } from "@/app/lib/sectorsData";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import isVideo from "@/app/lib/checkVideo";
const Section1 = () => {
  const [activeSector, setActiveSector] = useState(sectorsData[0]);

  const itemVariant = {
    initial: { opacity: 0, y: 40 },
    animate: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.15, duration: 0.6, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
  };

  return (
    <section className=" h-full pt-10 md:pt-20 xl:pt-28 2xl:pt-40 3xl:pt-52 pb-14 md:pb-20 xl:pb-28 relative">
      <div className="absolute w-full h-full bottom-0 left-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector.bgImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            {isVideo(activeSector.bgImage) ? (
              <video
                src={activeSector.bgImage}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={activeSector.bgImage}
                alt="background"
                fill
                className="object-cover"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute- inset-0 bg-sector-grad" />
      </div>

      <div className="grid grid-cols-12 relative z-50 md:gap-x-10 xl:gap-x-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector.id}
            initial="initial"
            animate="animate"
            exit="exit"
            className="col-span-12 md:col-span-5 3xl:col-span-4 px-6 md:ml-12 xl:ml-20 2xl:ml-24 gap-y-3 md:gap-y-6 flex items-center md:items-start flex-col h-full"
          >
            <motion.div
              custom={0}
              variants={itemVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="w-fit">
                <Image
                  src={activeSector?.logo}
                  alt={activeSector?.title}
                  height={30}
                  width={100}
                  sizes="100vw"
                  className="h-auto w-full "
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                />
              </div>
            </motion.div>
            <motion.h1
              custom={1}
              variants={itemVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-white text-3xl text-center md:text-left md:text-[5vw]  3xl:text-[80px] leading-[118.423%] uppercase"
            >
              {activeSector?.title}
            </motion.h1>
            <motion.p
              custom={2}
              variants={itemVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-white font-switzer text-sm md:text-base font-light leading-[161%] text-center md:text-left"
            >
              {activeSector?.description}
            </motion.p>
            <motion.div
              custom={3}
              variants={itemVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-auto mb-10 md:mb-2"
            >
              <Link
                href={activeSector?.link}
                target="_blank"
                className="text-white font-switzer text-sm leading-[118.423%] uppercase text-center py-3 md:py-4 px-10 md:px-14 border border-white rounded-full inline-block w-fit "
              >
                {activeSector?.linkText}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="col-span-12 md:col-span-7 3xl:col-span-8 px-6">
          <div className="w-full">
            <Swiper
              slidesPerView={3}
              spaceBetween={24}
              loop
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },

                1024: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
              }}
              modules={[Navigation]}
              className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300"
            >
              {sectorsData?.map((data, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    onClick={() => setActiveSector(data)}
                  >
                    <motion.div
                      whileHover={{ y: -10 }}
                      transition={{
                        type: "tween",
                        ease: "easeOut",
                        duration: 0.3,
                      }}
                      className="space-y-7 cursor-pointer"
                    >
                      <div className="relative w-full ">
                        <Image
                          src={data?.listImage}
                          alt={data?.listTitle}
                          width={300}
                          height={400}
                          sizes="100vw"
                          className="w-full h-auto object-cover"
                          unoptimized={
                            process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                          }
                        />
                        <div className="bg-sector-grad-2 w-full h-full absolute bottom-0 left-0 z-[5]" />
                        <p className="text-white absolute bottom-9  w-full z-[10] text-center text-2xl font-medium leading-[141%]">
                          {data?.listTitle}
                        </p>
                      </div>
                      <p className="font-switzer text-center text-sm md:text-base leading-[161%] font-light text-white">
                        {data?.listDescription}
                      </p>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="flex gap-x-5 items-center justify-center md:justify-between md:pr-6 xl:pr-14 mt-10 md:mt-16">
            <div className="flex gap-x-5 lg:gap-x-7">
              <button
                className={`custom-prev p-3 md:p-4 rounded-full flex items-center justify-center border border-white `}
              >
                <BsArrowLeftShort className=" text-white text-xl md:text-3xl" />
              </button>
              <button
                className={`custom-next p-3 md:p-4 rounded-full flex items-center justify-center border border-white `}
              >
                <BsArrowRightShort className=" text-white text-xl md:text-3xl" />
              </button>
            </div>
            <div className="flex-  items-center flex-wrap hidden md:flex">
              {sectorsData.map((data, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSector(data)}
                  className={`text-white text-sm font-medium leading-[141%] transition-colors duration-300 ${
                    activeSector.id === data.id ? "underline-" : ""
                  }`}
                >
                  {data.listTitle}
                  {index !== sectorsData.length - 1 && (
                    <span className="mx-2">|</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-sector-grad-1 md:bg-sector-grad w-full h-full bottom-0 left-0" />
    </section>
  );
};

export default Section1;
