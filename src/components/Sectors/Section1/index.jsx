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
const Section1 = () => {
  const isVideo = (url) => url?.endsWith(".mp4") || url?.endsWith(".mov");
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

  const links = [
    "White label media",
    " 11 15",
    "The nameless network",
    "Ri & Toni",
    "White window",
    "Rejoin",
    "Posh Label",
    "971Finds",
  ];

  return (
    <section className=" h-full pt-52 pb-28 relative">
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
              />
            )}
          </motion.div>
        </AnimatePresence>
        <div className="absolute- inset-0 bg-sector-grad" />
      </div>

      <div className="grid grid-cols-12 relative z-50 gap-x-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector.id}
            initial="initial"
            animate="animate"
            exit="exit"
            className="col-span-4 ml-24 gap-y-6 flex flex-col h-full"
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
                />
              </div>
            </motion.div>
            <motion.h1
              custom={1}
              variants={itemVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-white text-[80px] leading-[118.423%] uppercase"
            >
              {activeSector?.title}
            </motion.h1>
            <motion.p
              custom={2}
              variants={itemVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-white font-switzer text-base font-light leading-[161%] "
            >
              {activeSector?.description}
            </motion.p>
            <motion.div
              custom={3}
              variants={itemVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="mt-auto mb-2"
            >
              <Link
                href={activeSector?.link}
                target="_blank"
                className="text-white font-switzer text-sm leading-[118.423%] uppercase text-center py-4 px-14 border border-white rounded-full inline-block w-fit "
              >
                {activeSector?.linkText}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="col-span-8">
          <div className="w-full">
            <Swiper
              slidesPerView={3}
              spaceBetween={24}
              loop
              navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev",
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
                        />
                        <div className="bg-sector-grad-2 w-full h-full absolute bottom-0 left-0 z-[5]" />
                        <p className="text-white absolute bottom-9  w-full z-[10] text-center text-2xl font-medium leading-[141%]">
                          {data?.listTitle}
                        </p>
                      </div>
                      <p className="font-switzer text-center text-base leading-[161%] font-light text-white">
                        {data?.listDescription}
                      </p>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>

          <div className="flex items-center justify-between pr-14 mt-16">
            <div className="flex gap-x-7">
              <button
                className={`custom-prev p-4 rounded-full flex items-center justify-center border border-white `}
              >
                <BsArrowLeftShort className=" text-white" size={30} />
              </button>
              <button
                className={`custom-next p-4 rounded-full flex items-center justify-center border border-white `}
              >
                <BsArrowRightShort className=" text-white" size={30} />
              </button>
            </div>
            <div>
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
      <div className="absolute bg-sector-grad w-full h-full bottom-0 left-0" />
    </section>
  );
};

export default Section1;
