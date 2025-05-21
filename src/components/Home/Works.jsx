"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import isVideo from "@/app/lib/checkVideo";
import WorksMobile from "./WorksMobile";
import useMediaQuery from "@/app/hooks/useMediaQuery";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Works = ({ heading, description, workList }) => {
  const workData = Object.values(workList);
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);
  const thirdSlider = useRef(null);
  const containerRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const total = workData?.length;
  const chunkSize = Math.ceil(total / 3);

  const firstSet = [
    {
      title: "",
      image: {
        url: "/common/dummy.jpg",
      },
    },
    ...workData.slice(0, chunkSize),
  ];
  const secondSet = [
    ...workData.slice(chunkSize, chunkSize * 2),
    {
      title: "",
      image: {
        url: "/works/dummy.jpg",
      },
    },
  ];
  const thirdSet = [
    {
      title: "",
      image: {
        url: "/common/dummy.jpg",
      },
    },
    ...workData.slice(chunkSize * 2),
  ];

  useGSAP(
    () => {
      if (isMobile === null || isMobile) return;
      const ctx = gsap.context(() => {
        gsap.set(firstSlider.current, { yPercent: -85 });
        gsap.set(secondSlider.current, { yPercent: 5 });
        gsap.set(thirdSlider.current, { yPercent: -90 });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom+=200% top",
              scrub: 2,
              pin: true,
              anticipatePin: 1,
              // markers: true,
            },
          })
          .to(firstSlider.current, { yPercent: 0 }, 0)
          .to(secondSlider.current, { yPercent: -80 }, 0)
          .to(thirdSlider.current, { yPercent: 0 }, 0);
      }, containerRef);

      return () => ctx.revert();
    },
    { dependencies: [isMobile] }
  );

  return (
    <section
      className="relative containers  pb-16 md:pb-0 w-full overflow-hidden worksBG"
      id="works"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-12 gap-x-5"
      >
        <motion.h3
          variants={itemVariants}
          className="main-heading col-span-12 text-center md:text-left md:col-span-4"
        >
          {heading}
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="col-span-12 md:col-span-8 text-center md:text-left font-switzer text-base leading-[193%] mt-5 hidden md:block"
        >
          {description}
        </motion.p>
      </motion.div>

      <div
        className="md:grid hidden grid-cols-3 md:gap-x-8 lg:gap-x-16 xl:gap-x-24 mt-12 lg:mt-20 2l:mt-28 md:h-[100dvh]"
        ref={containerRef}
      >
        <div className="overflow-hidden">
          <div
            className="flex flex-col md:gap-y-14 lg:gap-y-20 xl:gap-y-24"
            ref={firstSlider}
          >
            {[...firstSet]?.map((work, index) => (
              <div key={index} className="space-y-4">
                {isVideo(work?.image?.url) ? (
                  <video
                    src={work?.image?.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover  "
                  />
                ) : (
                  <Image
                    src={work?.image?.url}
                    alt={work?.title || `image-${index + 1}`}
                    width={400}
                    height={650}
                    sizes="100vw"
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                    className="w-full h-auto object-cover"
                  />
                )}
                {work?.title && (
                  <p className="text-3xl font-medium leading-[141%]">
                    {work?.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex flex-col gap-y-24" ref={secondSlider}>
            {[...secondSet]?.map((work, index) => (
              <div key={index} className="space-y-4">
                {isVideo(work?.image?.url) ? (
                  <video
                    src={work?.image?.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover  "
                  />
                ) : (
                  <Image
                    src={work?.image?.url}
                    alt={work?.title || `image-${index + 1}`}
                    width={400}
                    height={650}
                    sizes="100vw"
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                    className="w-full h-auto object-cover"
                  />
                )}

                <p className="text-3xl font-medium leading-[141%]">
                  {work?.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex flex-col gap-y-24" ref={thirdSlider}>
            {[...thirdSet]?.map((work, index) => (
              <div key={index} className="space-y-4">
                {isVideo(work?.image?.url) ? (
                  <video
                    src={work?.image?.url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover  "
                  />
                ) : (
                  <Image
                    src={work?.image?.url}
                    alt={work?.title || `image-${index + 1}`}
                    width={400}
                    height={650}
                    sizes="100vw"
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                    className="w-full h-auto object-cover"
                  />
                )}

                {work?.title && (
                  <p className="text-3xl font-medium leading-[141%]">
                    {work?.title}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden pt-9">
        <WorksMobile works={workData} />
      </div>
    </section>
  );
};

export default Works;
