"use client";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import isVideo from "@/app/lib/checkVideo";

const Works = ({ heading, workList }) => {
  const swiperRef = useRef(null);
  return (
    <section className="py-12 md:py-14 lg:py-16 xl:py-20--  containers ">
      <h3
        className="text-[40px] sm:text-[5vw] 3xl:text-[80px]  leading-[118.423%] uppercase md:pl-10 lg:pl-20 2xl:pl-28 3xl:pl-36 text-center md:text-left service_works"
        dangerouslySetInnerHTML={{ __html: heading }}
      ></h3>

      <div className="w-full pt-7 md:pt-14 md:px-10 lg:px-14 xl:px-16 pb-7 md:pb-16 lg:pb-20- xl:pb-28-">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={3}
          spaceBetween={42}
          loop
          loopedslides={workList?.length}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 42,
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
          className="mySwiper ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300"
        >
          {workList?.map((item, idx) => {
            const isEvenCard = idx % 2 === 1;

            return (
              <SwiperSlide key={idx}>
                <div
                  className={`overflow-hidden flex flex-col gap-y-5 md:gap-y-8 transition-all duration-300 relative group slide-content- swiper-slide-next:mt-[100px]- ${
                    isEvenCard ? "md:mt-[100px]" : ""
                  } `}
                >
                  {!isVideo(item?.image?.url) ? (
                    <div className="">
                      <Image
                        src={item?.image?.url}
                        alt={`work-${idx}`}
                        className="w-full h-auto"
                        height={300}
                        width={150}
                        sizes="100vw"
                        unoptimized={
                          process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                        }
                      />
                    </div>
                  ) : (
                    <div className=" overflow-hidden">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      >
                        <source src={item?.image?.url} type="video/mp4" />
                        <source src={item?.image?.url} type="video/quicktime" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                  {item?.description && (
                    <div
                      className={`text-sm md:text-base font-switzer text-center md:text-left leading-[161%] ${
                        isEvenCard ? "md:-order-1" : ""
                      }`}
                      dangerouslySetInnerHTML={{ __html: item?.description }}
                    ></div>
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="flex items-center gap-x-3 md:gap-x-8 lg:gap-x-11 md:px-10 lg:px-14 xl:px-16">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className={`custom-prev p-3 sm:p-4 rounded-full flex items-center justify-center border border-[#DEDEDE] `}
        >
          <IoArrowBackSharp className="text-xl md:text-2xl lg: text-main" />
        </button>
        <div className="progress w-full h-[1px] bg-black/[0.2] relative overflow-hidden">
          <div className="progress-fill absolute top-0 left-0 h-full bg-black transition-all duration-[0ms] w-0" />
        </div>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className={`custom-next p-3 sm:p-4 rounded-full flex items-center justify-center border border-[#DEDEDE] `}
        >
          <IoArrowForwardSharp className="text-xl md:text-2xl text-main" />
        </button>
      </div>
    </section>
  );
};

export default Works;
