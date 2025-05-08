"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const Section1 = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      { width: "30%" },
      {
        width: "100%",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          //   markers: true,
        },
        ease: "power2.out",
      }
    );
  }, []);
  return (
    <>
      <section className="py-[76px] pl-[190px] pr-[94px] flex flex-col  gap-y-14 relative">
        <h1 className="text-[80px] relative z-50 leading-[118.423%] uppercase max-w-[920px]">
          13+ years of stories, Reimagined for what’s next
        </h1>

        <div className="flex justify-center items-center relative z-50">
          <Image
            src={"/common/down_arrow.svg"}
            alt="down_arrow"
            height={100}
            width={100}
            sizes="100vw"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            className=" h-[100px] object-cover-"
          />
        </div>

        <div className="flex gap-x-14  justify-end relative z-50">
          <p className="font-switzer text-base leading-[161%] max-w-[400px]">
            White Label Group is a curated collective of high-quality creative
            consultancies, marketing, technology and production studios,
            crafting the future of brands.
          </p>
          <p className="font-switzer text-base leading-[161%] max-w-[400px]">
            What started as a ”let’s see if I can do this” dream from our
            Founder’s humble living room without any background in media or
            agency experience in 2012 is now one of the most reputed agencies in
            the region.
          </p>
        </div>
        <div className="mt-[141px]- pr-[52px] flex justify-center relative z-50">
          <Image
            src={"/about/image1.png"}
            ref={imageRef}
            alt="section1"
            height={100}
            width={100}
            sizes="100vw"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            //   className=" w-full- max-h-[600px] w-[30%] object-cover "
            className="object-cover max-h-[600px]"
            style={{ width: "30%" }}
          />
        </div>
        <div className="absolute bg-[#E3EEFF] blur-[250px] h-[900px] w-[900px] rounded-full top-1/2 -translate-y-1/2 left-20" />
      </section>
      <div className="absolute top-0 -right-10">
        <Image
          src={"/common/aboutBg.svg"}
          alt="bg-about"
          width={100}
          height={100}
          sizes="100vw"
          aspectRatio={391 / 191}
          unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          className=" w-full h-full object-cover"
        />
      </div>
    </>
  );
};

export default Section1;
