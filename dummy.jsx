"use client";
import { workData } from "@/app/lib/homeData";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
const Works = () => {
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);
  const thirdSlider = useRef(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const slider3 = useRef(null);
  const firstSet = workData.slice(0, 6);
  const secondSet = workData.slice(6, 10);
  const thirdSet = workData.slice(10, -1);

  useGSAP(() => {
    let timeline = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: "#works",
        scrub: 1,
        start: "top bottom",
        end: "bottom top",
        // markers: true,
      },
    });
    timeline
      .to(
        firstSlider.current,
        {
          y: 0,
        },
        "start"
      )
      .to(
        secondSlider.current,
        {
          y: -500,
        },
        "start"
      );
  }, []);
  return (
    <section className="containers pb-16" id="works">
      <div className="grid grid-cols-12">
        <h3 className="main-heading col-span-4">Selection of our works</h3>
        <p className="col-span-8 font-switzer text-base leading-[193%] mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley...
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-24 mt-28">
        <div
          className="realtive whitespace-nowrap  overflow-hidden"
          ref={slider1}
        >
          <div
            className="flex flex-col gap-y-24 -translate-y-[91%] "
            ref={firstSlider}
          >
            {[...firstSet, ...firstSet]?.map((work, index) => (
              <div key={index} className="space-y-4">
                <Image
                  src={work?.image}
                  alt={work?.title || `image-${index + 1}`}
                  width={400}
                  height={650}
                  sizes="100vw"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  className="w-full h-auto object-cover"
                />

                <p className="text-3xl font-medium leading-[141%]">
                  {work?.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="realtive whitespace-nowrap overflow-hidden"
          ref={slider2}
        >
          <div
            className="flex flex-col gap-y-24 translate-y-[3%]"
            ref={secondSlider}
          >
            {[...secondSet, ...secondSet]?.map((work, index) => (
              <div key={index} className="space-y-4">
                <Image
                  src={work?.image}
                  alt={work?.title || `image-${index + 1}`}
                  width={400}
                  height={650}
                  sizes="100vw"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  className="w-full h-auto object-cover"
                />

                <p className="text-3xl font-medium leading-[141%]">
                  {work?.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="realtive whitespace-nowrap overflow-hidden"
          ref={slider3}
        >
          <div
            className="flex flex-col gap-y-24 -translate-y-[91%] "
            ref={thirdSlider}
          >
            {[...thirdSet, ...thirdSet]?.map((work, index) => (
              <div key={index} className="space-y-4">
                <Image
                  src={work?.image}
                  alt={work?.title || `image-${index + 1}`}
                  width={400}
                  height={650}
                  sizes="100vw"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  className="w-full h-auto object-cover"
                />

                <p className="text-3xl font-medium leading-[141%]">
                  {work?.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
