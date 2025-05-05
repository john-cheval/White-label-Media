"use client";
import { clientsData } from "@/app/lib/homeData";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);
  const firstSet = clientsData.slice(0, 6);
  const secondSet = clientsData.slice(6, 12);
  useGSAP(() => {
    let timeline = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: "#clients",
        scrub: 1,
        start: "top bottom",
        end: "bottom top",
        markers: true,
      },
    });
    timeline
      .to(
        firstSlider.current,
        {
          x: 0,
        },
        "start"
      )
      .to(
        secondSlider.current,
        {
          x: -500,
        },
        "start"
      );
  }, []);
  return (
    <section
      className="relative overflow-x-hidden w-full containers pt-10 pb-24"
      id="clients"
    >
      <h3 className="text-main text-6xl font-medium leading-[141%]">Clients</h3>

      <div
        className="relative whitespace-nowrap mt-8 overflow-hidden "
        ref={slider1}
      >
        <div className="flex -translate-x-[500px] " ref={firstSlider}>
          {[...firstSet, ...firstSet]?.map((client, index) => (
            <div
              key={index}
              className={`border border-main/20 ${
                index === 0 ? "border-l-1" : "border-l-0"
              } flex items-center justify-center py-7 min-w-[260px]`}
            >
              <Image
                src={client?.image}
                alt={`image-${index + 1}`}
                width={250}
                height={150}
                sizes="100vw"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
                className="w-full h-auto object-cover max-w-[90px]"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative whitespace-nowrap overflow-hidden" ref={slider2}>
        <div className="flex" ref={secondSlider}>
          {[...secondSet, ...secondSet]?.map((client, index) => (
            <div
              key={index}
              className={`border border-main/20 border-t-0 ${
                index === 0 ? "border-l-1" : "border-l-0"
              } flex items-center justify-center py-7 min-w-[260px]`}
            >
              <Image
                src={client?.image}
                alt={`image-${index + 1}`}
                width={250}
                height={150}
                sizes="100vw"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
                className="w-full h-auto object-cover max-w-[90px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
