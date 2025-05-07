"use client";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { servicesWorkData } from "@/app/lib/servicesData";
import Image from "next/image";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";

const Works = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <section className="py-20  containers ">
      <h3 className="text-[80px]  leading-[118.423%] uppercase pl-36">
        Selection of <br /> <span className="ml-[12%]">our works</span>
      </h3>

      <div className="w-full pt-14  px-16 pb-28">
        <Swiper
          slidesPerView={3}
          spaceBetween={42}
          loop
          loopedslides={servicesWorkData.length}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSlideChange={(swiper) => {
            const progress = (swiper.realIndex + 1) / swiper.slides.length;
            document.querySelector(".progress-fill").style.width = `${
              progress * 100
            }%`;
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            const progress = (swiper.realIndex + 1) / swiper.slides.length;
            document.querySelector(".progress-fill").style.width = `${
              progress * 100
            }%`;
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300"
        >
          {servicesWorkData?.map((item, idx) => {
            const isEvenCard = idx % 2 === 1;
            return (
              <SwiperSlide key={idx}>
                <div
                  className={`overflow-hidden flex flex-col gap-y-8 transition-all duration-300 relative group slide-content- swiper-slide-next:mt-[100px]- ${
                    isEvenCard ? "mt-[100px]" : ""
                  } `}
                >
                  {item.image.endsWith(".jpg") ||
                  item.image.endsWith(".png") ? (
                    <div className="max-h-[300px]-">
                      <Image
                        src={item?.image}
                        alt={`work-${idx}`}
                        className="w-full h-auto"
                        height={300}
                        width={150}
                        sizes="100vw"
                      />
                    </div>
                  ) : (
                    <div className="h-[480px]">
                      <video
                        src={item?.image}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover "
                      />
                    </div>
                  )}
                  <p
                    className={` text-base font-switzer leading-[161%] ${
                      isEvenCard ? "-order-1" : ""
                    }`}
                  >
                    {item.descrption}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="flex items-center gap-x-11 px-16">
        <button
          ref={prevRef}
          className={`custom-prev p-4 rounded-full flex items-center justify-center border border-[#DEDEDE] `}
        >
          <IoArrowBackSharp className=" text-2xl text-main" />
        </button>
        <div className="progress w-full h-[1px] bg-black/[0.2] relative overflow-hidden">
          <div className="progress-fill absolute top-0 left-0 h-full bg-black transition-all duration-[0ms] w-0" />
        </div>
        <button
          ref={nextRef}
          className={`custom-next p-4 rounded-full flex items-center justify-center border border-[#DEDEDE] `}
        >
          <IoArrowForwardSharp className="text-2xl text-main" />
        </button>
      </div>
    </section>
  );
};

export default Works;
