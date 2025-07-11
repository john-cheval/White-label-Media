"use client";
import { truncateByChars, truncateByWords } from "@/app/lib/truncateByWords";
import React, { useState } from "react";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "../Modal";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const Testimonials = ({ heading, testiList }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDesktop = useMediaQuery("(max-width: 1175px)");

  const close = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };
  const open = (data) => {
    setIsModalOpen(true);
    setSelectedData(data);
  };

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
            {heading}
          </motion.h3>
          <motion.div
            variants={itemVariants}
            className="md:flex gap-x-4 hidden"
          >
            <button
              aria-label="Prev-button"
              className={`custom-prev p-5 rounded-full flex items-center justify-center border border-[#DEDEDE] cursor-pointer `}
            >
              <IoArrowBackSharp className="text-lg text-main" />
            </button>
            <button
              aria-label="Next-button"
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
              const desktopBar = document.querySelector(
                ".progress-fill-desktop"
              );
              const mobileBar = document.querySelector(".progress-fill-mobile");

              if (desktopBar) desktopBar.style.width = `${progress * 100}%`;
              if (mobileBar) mobileBar.style.width = `${progress * 100}%`;
            }}
            onInit={(swiper) => {
              const progress = (swiper.realIndex + 1) / swiper.slides.length;
              const desktopBar = document.querySelector(
                ".progress-fill-desktop"
              );
              const mobileBar = document.querySelector(".progress-fill-mobile");

              if (desktopBar) desktopBar.style.width = `${progress * 100}%`;
              if (mobileBar) mobileBar.style.width = `${progress * 100}%`;
            }}
            modules={[Navigation /* , Autoplay */]}
            className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300"
          >
            {testiList &&
              testiList?.map((data, index) => {
                const titleText = truncateByChars(
                  data?.title,
                  isDesktop ? 25 : 30,
                  true
                );
                const { text: descText, isTruncated: showReadMore } =
                  truncateByWords(
                    data?.full_description,
                    isDesktop ? 30 : 50,
                    false
                  );
                return (
                  <SwiperSlide key={index}>
                    <div className="bg-white py-6 md:py-10 lg:py-14 px-6 md:px-10 lg:px-14 text-main flex flex-col gap-y-4 md:gap-y-5">
                      <h4 className="text-2xl md:text-3xl leading-[141%] min-h-[50px] ">
                        {titleText}
                      </h4>
                      <p className="text-sm md:text-base font-switzer leading-[193%] min-h-[150px]">
                        {descText}{" "}
                        {showReadMore && (
                          <button
                            className="text-main underline hover:no-underline "
                            onClick={() => open(data)}
                          >
                            Read More...
                          </button>
                        )}
                      </p>

                      <div className="flex  flex-col mt-4 md:mt-5 min-h-[80px]">
                        <span className="text-2xl md:text-3xl leading-[141%]">
                          {data?.client_name}
                        </span>
                        <span className="text-sm md:text-base font-semibold font-switzer leading-[193%]">
                          {data?.position}
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>

        <div className="progress hidden md:block w-full h-[1px] bg-black/[0.2] relative overflow-hidden">
          <div className="progress-fill-desktop absolute top-0 left-0 h-full bg-black transition-all duration-[0ms] w-0" />
        </div>
        <div className="md:hidden gap-x-4 flex justify-between items-center">
          <button
            className={`custom-prev p-3 rounded-full flex items-center justify-center border border-[#DEDEDE] cursor-pointer `}
          >
            <IoArrowBackSharp className="text-base text-main" />
          </button>

          <div className="progress  md:hidden w-full h-[1px] bg-black/[0.2] relative overflow-hidden">
            <div className="progress-fill-mobile absolute top-0 left-0 h-full bg-black transition-all duration-[0ms] w-0" />
          </div>

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
        {isModalOpen && (
          <Modal
            modalOpen={isModalOpen}
            handleClose={close}
            data={selectedData}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Testimonials;
