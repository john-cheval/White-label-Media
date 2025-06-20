"use client";
import Image from "next/image";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoArrowBackSharp, IoArrowForwardSharp } from "react-icons/io5";

const Section5Mobile = ({ clients }) => {
  const swiperRef = useRef(null);

  return (
    <div className="md:hidden mt-6 overflow-hidden">
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
            nextEl: ".custom-clientsNext",
            prevEl: ".custom-clientsPrev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
          }}
          onSlideChange={(swiper) => {
            const progress = (swiper.realIndex + 1) / swiper.slides.length;
            const mobileBar = document.querySelector(".progress-fill-clients");
            if (mobileBar) mobileBar.style.width = `${progress * 100}%`;
          }}
          onInit={(swiper) => {
            const progress = (swiper.realIndex + 1) / swiper.slides.length;
            const mobileBar = document.querySelector(".progress-fill-clients");
            if (mobileBar) mobileBar.style.width = `${progress * 100}%`;
          }}
          modules={[Navigation, Autoplay]}
        >
          {clients &&
            clients?.slice(1)?.map((client, index) => {
              return (
                <SwiperSlide key={index} className="flex items-center">
                  <Image
                    src={client?.logo?.url}
                    alt={client?.title || "image"}
                    width={250}
                    height={100}
                    sizes="100vw"
                    className="w-full h-auto object-cover- max-h-[100px]"
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
          className={`custom-clientsPrev p-3 rounded-full flex items-center justify-center border border-[#DEDEDE] cursor-pointer `}
        >
          <IoArrowBackSharp className="text-base text-main" />
        </button>

        <div className="progress  md:hidden w-full h-[1px] bg-black/[0.2] relative overflow-hidden">
          <div className="progress-fill-clients absolute top-0 left-0 h-full bg-black transition-all duration-[0ms] w-0" />
        </div>

        <button
          className={`custom-clientsNext p-3 rounded-full flex items-center justify-center border border-[#DEDEDE] cursor-pointer `}
        >
          <IoArrowForwardSharp className="text-base text-main" />
        </button>
      </div>
    </div>
  );
};

export default Section5Mobile;
