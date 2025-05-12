"use client";
import { testimonialData } from "@/app/lib/homeData";
import { truncateByWords } from "@/app/lib/truncateByWords";
import React, { useState } from "react";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../Modal";

const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const close = () => setIsModalOpen(false);
  const open = () => setIsModalOpen(true);

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

  return (
    <>
      <section className="bg-sec containers py-8 md:py-810 lg:py-12 xl:py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="flex justify-center md:justify-between items-center"
        >
          <motion.h3
            variants={itemVariants}
            className="main-heading text-center md:text-left"
          >
            What Our Clients Say
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="md:flex gap-x-4 hidden"
          >
            <button
              className={`custom-prev p-5 rounded-full flex items-center justify-center border border-[#DEDEDE] cursor-pointer `}
            >
              <IoArrowBackSharp className="text-lg text-main" />
            </button>
            <button
              className={`custom-next p-5 rounded-full flex items-center justify-center border border-[#DEDEDE] cursor-pointer `}
            >
              <IoArrowForwardSharp className="text-lg text-main" />
            </button>
          </motion.div>
        </motion.div>

        <div className="w-full py-6 md:py-8 lg:py-12 xl:py-16">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            onSlideChange={(swiper) => {
              const progress = (swiper.realIndex + 1) / swiper.slides.length;
              document.querySelector(".progress-fill").style.width = `${
                progress * 100
              }%`;
            }}
            onInit={(swiper) => {
              const progress = (swiper.realIndex + 1) / swiper.slides.length;
              document.querySelector(".progress-fill").style.width = `${
                progress * 100
              }%`;
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300"
          >
            {testimonialData?.map((data, index) => {
              const { text: titleText } = truncateByWords(data?.title, 5, true);
              const { text: descText, isTruncated: showReadMore } =
                truncateByWords(data?.description, 50, false);
              return (
                <SwiperSlide key={index}>
                  <div className="bg-white py-6 md:py-10 lg:py-14 px-6 md:px-10 lg:px-14 text-main flex flex-col gap-y-4 md:gap-y-5">
                    <h5 className="text-2xl md:text-3xl leading-[141%]">
                      {titleText}
                    </h5>
                    <p className="text-sm md:text-base font-switzer leading-[193%]">
                      {descText}{" "}
                      {showReadMore && (
                        <button
                          className="text-main underline hover:no-underline "
                          onClick={() => (isModalOpen ? close() : open())}
                        >
                          Read More...
                        </button>
                      )}
                    </p>

                    <div className="flex  flex-col mt-4 md:mt-5">
                      <span className="text-2xl md:text-3xl leading-[141%]">
                        {data?.name}
                      </span>
                      <span className="text-sm md:text-base font-switzer leading-[193%]">
                        {data?.designation}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="progress hidden md:block w-full h-[1px] bg-black/[0.2] relative overflow-hidden">
          <div className="progress-fill absolute top-0 left-0 h-full bg-black transition-all duration-[0ms] w-0" />
        </div>
        <div className="md:hidden gap-x-4 flex justify-between ">
          <button
            className={`custom-prev p-3 rounded-full flex items-center justify-center border border-[#DEDEDE] cursor-pointer `}
          >
            <IoArrowBackSharp className="text-base text-main" />
          </button>
          <button
            className={`custom-next p-3 rounded-full flex items-center justify-center border border-[#DEDEDE] cursor-pointer `}
          >
            <IoArrowForwardSharp className="text-base text-main" />
          </button>
        </div>
      </section>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isModalOpen && <Modal modalOpen={isModalOpen} handleClose={close} />}
      </AnimatePresence>
    </>
  );
};

export default Testimonials;
