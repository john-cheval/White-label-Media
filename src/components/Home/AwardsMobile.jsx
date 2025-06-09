"use client";
import Image from "next/image";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";

const AwardsMobile = ({ awards }) => {
  const swiperRef = useRef(null);

  return (
    <div className="md:hidden mt-8 overflow-hidden">
      <div className="w-full">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          loop
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".custom-awardsNext",
            prevEl: ".custom-awardsPrev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          onSlideChange={(swiper) => {
            const progress = (swiper.realIndex + 1) / swiper.slides.length;
            const mobileBar = document.querySelector(".progress-fill-awards");
            if (mobileBar) mobileBar.style.width = `${progress * 100}%`;
          }}
          onInit={(swiper) => {
            const progress = (swiper.realIndex + 1) / swiper.slides.length;
            const mobileBar = document.querySelector(".progress-fill-awards");
            if (mobileBar) mobileBar.style.width = `${progress * 100}%`;
          }}
          modules={[Navigation, Autoplay]}
        >
          {awards?.map((award, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={award?.image?.url}
                  alt={`${award?.title} ||Award ${index + 1}`}
                  width={250}
                  height={100}
                  sizes="100vw"
                  className="w-auto h-auto- object-cover- max-h-[100px] mx-auto"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="md:hidden gap-x-4 flex justify-between items-center mt-5">
        <button
          className={`custom-awardsPrev p-3 rounded-full flex items-center justify-center border border-[#DEDEDE] cursor-pointer `}
        >
          <IoArrowBackSharp className="text-base text-sec" />
        </button>

        <div className="progress  md:hidden w-full h-[1px] bg-sec/[0.4] relative overflow-hidden">
          <div className="progress-fill-awards absolute top-0 left-0 h-full bg-white transition-all duration-[0ms] w-0" />
        </div>

        <button
          className={`custom-awardsNext p-3 rounded-full flex items-center justify-center border border-[#DEDEDE] cursor-pointer `}
        >
          <IoArrowForwardSharp className="text-base text-sec" />
        </button>
      </div>
    </div>
  );
};

export default AwardsMobile;
