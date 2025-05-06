"use client";
import { testimonialData } from "@/app/lib/homeData";
import { truncateByWords } from "@/app/lib/truncateByWords";
import React, { useState } from "react";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Modal from "./Modal";
import { AnimatePresence } from "framer-motion";
// import { AnimatePresence } from "motion";
const Testimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const close = () => setIsModalOpen(false);
  const open = () => setIsModalOpen(true);

  return (
    <>
      <section className="bg-sec containers py-16">
        <div className="flex justify-between items-center">
          <h3 className="main-heading">What Our Clients Say</h3>
          <div className="flex gap-x-4">
            <button
              className={`custom-prev p-5 rounded-full flex items-center justify-center border border-[#DEDEDE] `}
            >
              <IoArrowBackSharp className="text-lg text-main" />
            </button>
            <button
              className={`custom-next p-5 rounded-full flex items-center justify-center border border-[#DEDEDE] `}
            >
              <IoArrowForwardSharp className="text-lg text-main" />
            </button>
          </div>
        </div>

        <div className="w-full py-16">
          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
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
            modules={[Navigation /* , Autoplay */]}
            className="mySwiper p-1 ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300"
          >
            {testimonialData?.map((data, index) => {
              const { text: titleText } = truncateByWords(data?.title, 8, true);
              const { text: descText, isTruncated: showReadMore } =
                truncateByWords(data?.description, 50, false);
              return (
                <SwiperSlide key={index}>
                  <div className="bg-white py-14 px-14 text-main flex flex-col gap-y-5">
                    <h5 className="text-3xl leading-[141%]">{titleText}</h5>
                    <p className="text-base font-switzer leading-[193%]">
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

                    <div className="flex  flex-col mt-5">
                      <span className="text-3xl leading-[141%]">
                        {data?.name}
                      </span>
                      <span className="text-base font-switzer leading-[193%]">
                        {data?.designation}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="progress w-full h-[2px] bg-black/[0.2] relative overflow-hidden">
          <div className="progress-fill absolute top-0 left-0 h-full bg-black transition-all duration-[0ms] w-0" />
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
