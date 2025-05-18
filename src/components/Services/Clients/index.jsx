"use client";
import Image from "next/image";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const ServiceClients = () => {
  const prevRefClient = useRef(null);
  const nextRefClient = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const clientsData = Array.from({ length: 13 }, (_, i) => {
    return `services/clients/${i + 1}.svg`;
  });

  const getItemsPerSlide = () => {
    if (isMobile) return 4;
    if (isTablet) return 16;
    return 24;
  };

  const itemsPerSlide = getItemsPerSlide();
  const repeatedClientsData = Array(3).fill(clientsData).flat();

  const chunkedData = [];
  for (let i = 0; i < repeatedClientsData.length; i += itemsPerSlide) {
    chunkedData.push(repeatedClientsData.slice(i, i + itemsPerSlide));
  }

  return (
    <section className="containers pb-8 md:pb-16">
      <h3 className="main-heading text-center">Clients</h3>

      <div className="w-full pt-8 pb-7 sm:pb-12 md:pb-16">
        <Swiper
          slidesPerView={1}
          grabCursor
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRefClient.current,
            nextEl: nextRefClient.current,
          }}
          onSlideChange={(swiper) => {
            const progress = (swiper.realIndex + 1) / swiper.slides.length;
            document.querySelector(".progress-fill-client").style.width = `${
              progress * 100
            }%`;
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRefClient.current;
            swiper.params.navigation.nextEl = nextRefClient.current;
            swiper.navigation.init();
            swiper.navigation.update();
            const progress = (swiper.realIndex + 1) / swiper.slides.length;
            document.querySelector(".progress-fill-client").style.width = `${
              progress * 100
            }%`;
          }}
          modules={[Navigation /* , Autoplay */]}
          className="mySwiper ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300"
        >
          {chunkedData.map((chunk, chunkIndex) => (
            <SwiperSlide key={chunkIndex}>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-rows-2 md:grid-rows-4 gap-4-  ">
                {chunk.map((client, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center border border-main/[0.20] py-4 px-9 md:px-16"
                  >
                    <Image
                      src={client}
                      alt={`client-${chunkIndex * 24 + index + 1}`}
                      height={100}
                      width={150}
                      sizes="100vw"
                      unoptimized={
                        process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                      }
                      className="w-full h-auto min-w-[125px]  md:min-h-[60px]- md:max-w-[140px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center gap-x-3 md:gap-x-8 lg:gap-x-11 md:px-10 lg:px-14 xl:px-16">
        <button
          ref={prevRefClient}
          className={`custom-prev p-3 sm:p-4 rounded-full flex items-center justify-center border border-[#DEDEDE] `}
        >
          <IoArrowBackSharp className=" text-xl md:text-2xl text-main" />
        </button>
        <div className="progress w-full h-[1px] bg-black/[0.2] relative overflow-hidden">
          <div className="progress-fill-client absolute top-0 left-0 h-full bg-black transition-all duration-[0ms] w-0" />
        </div>
        <button
          ref={nextRefClient}
          className={`custom-next p-3 sm:p-4 rounded-full flex items-center justify-center border border-[#DEDEDE] `}
        >
          <IoArrowForwardSharp className="text-xl md:text-2xl text-main" />
        </button>
      </div>
    </section>
  );
};

export default ServiceClients;
