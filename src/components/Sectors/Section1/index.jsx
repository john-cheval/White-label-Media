"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import isVideo from "@/app/lib/checkVideo";
import { IoIosArrowRoundForward } from "react-icons/io";
const Section1 = ({ companiesList }) => {
  const [activeSector, setActiveSector] = useState(companiesList[0]);
  const swiperRef = useRef(null);

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
    <section className=" h-full pt-20 md:pt-52 pb-14 md:pb-20 xl:pb-28 relative mt-20- md:mt-28-">
      <div className="absolute w-full h-full top-0 left-0 -z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector?.image?.url}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            {isVideo(activeSector?.image?.url) ? (
              <video
                src={activeSector?.image?.url}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={activeSector?.image?.url}
                alt={activeSector?.title}
                fill
                className="object-cover"
                priority
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute- inset-0 bg-sector-grad" />
      </div>

      <div className="grid grid-cols-12 relative z-50 md:gap-x-10 xl:gap-x-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector?.title}
            initial="initial"
            animate="animate"
            exit="exit"
            className="col-span-12 md:col-span-6 3xl:col-span-5 px-6 md:ml-12 xl:ml-16 3xl:ml-24 gap-y-3 md:gap-y-6 flex items-center md:items-start flex-col h-full"
          >
            <motion.div
              custom={0}
              variants={itemVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="w-fit">
                {activeSector?.logo && (
                  <Image
                    src={activeSector?.logo?.url}
                    alt={activeSector?.title}
                    height={30}
                    width={100}
                    sizes="100vw"
                    className="h-auto w-full max-h-[65px]- max-w-[250px] "
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                  />
                )}
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
            {activeSector?.description && (
              <motion.p
                custom={2}
                variants={itemVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="text-white font-switzer text-sm sm:text-base lg:text-lg font-light leading-[161%] text-center md:text-left mb-11 md:mb-0"
              >
                {activeSector?.description}
              </motion.p>
            )}

            {activeSector?.website_link && (
              <motion.div
                custom={3}
                variants={itemVariant}
                initial="initial"
                animate="animate"
                exit="exit"
                className="mt-auto hidden md:block mb-10 md:mb-2"
              >
                <Link
                  href={activeSector?.website_link}
                  target="_blank"
                  className="text-white font-switzer text-sm leading-[118.423%] uppercase text-center py-3 md:py-4 px-10 md:px-14 border border-white rounded-full inline-flex w-fit   items-center gap-x-2 group  "
                >
                  {activeSector?.website_link_text
                    ? activeSector?.website_link_text
                    : activeSector?.title}
                  {/* {activeSector?.title}{" "} */}
                  <IoIosArrowRoundForward className="opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-2xl" />
                </Link>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="col-span-12 md:col-span-6 3xl:col-span-7 px-6-">
          <div className="w-full">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              slidesPerView={3.3}
              spaceBetween={24}
              loop
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1.3,
                  spaceBetween: 10,
                },

                500: {
                  slidesPerView: 2.3,
                  spaceBetween: 24,
                },

                1300: {
                  slidesPerView: 3.3,
                  spaceBetween: 24,
                },
              }}
              modules={[Navigation]}
              className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300"
            >
              {companiesList?.slice(1).map((data, index) => {
                return (
                  <SwiperSlide
                    key={index}
                    onClick={() => {
                      if (activeSector.title !== data.title) {
                        setActiveSector(data);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                    // onMouseEnter={() => {
                    //   if (activeSector.title !== data.title) {
                    //     setActiveSector(data);
                    //   }
                    // }}
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
                        {data?.thumbnail && (
                          <Image
                            src={data?.thumbnail?.url}
                            alt={data?.title}
                            width={300}
                            height={400}
                            sizes="100vw"
                            className="w-full max-h-[382px]- h-auto  md:max-h-full- object-cover-"
                            unoptimized={
                              process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED ===
                              "true"
                            }
                          />
                        )}

                        <div className="bg-sector-grad-2 w-full h-full absolute bottom-0 left-0 z-[5] " />
                        <p className="text-white absolute bottom-9  w-full z-[10] text-center text-2xl px-1 font-medium leading-[141%]">
                          {data?.title}
                        </p>
                      </div>
                      <p className="font-switzer text-center text-sm md:text-base leading-[161%] font-light text-white">
                        {data?.short_description}
                      </p>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="flex gap-x-5 items-center justify-center md:justify-between md:pr-6 xl:pr-14 mt-10 md:mt-14">
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
              {companiesList?.slice(1)?.map((data, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveSector(data);
                    swiperRef.current?.slideToLoop(index);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`text-white text-sm font-medium leading-[141%] transition-colors duration-300 ${
                    activeSector?.title === data?.title ? "underline-" : ""
                  }`}
                >
                  {data?.title}
                  {index !== companiesList.length - 1 && (
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
