"use client";
import Image from "next/image";
import { IoArrowForwardSharp, IoArrowBackSharp } from "react-icons/io5";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

const ServiceClients = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const clientsData = Array.from({ length: 24 }, (_, i) => {
    return `/services/clients/${i + 1}.svg`;
  });

  return (
    <section className="containers pb-16">
      <h3 className="main-heading text-center">Clients</h3>

      <div className="w-full pt-8 pb-16">
        <Swiper
          slidesPerView={1}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper ![&_.swiper-wrapper]:!ease-in-out ![&_.swiper-wrapper]:!duration-300"
        >
          {}
        </Swiper>
      </div>
    </section>
  );
};

export default ServiceClients;
