"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import useMediaQuery from "@/app/hooks/useMediaQuery";

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const Services = ({
  heading,
  small_heading_one,
  small_heading_two,
  linkText,
  link,
  servicesList,
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <section className="containers text-[#EAE4D6] bg-main pb-8 md:pb-10 xl:pb-16 2xl:pb-20 3xl:pb-24 bg-service pt-32 md:pt-40 ">
      <div className="grid grid-cols-12 gap-x-5">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className=" space-y-8 md:space-y-10 lg:space-y-16 pl-10- 3xl:pl-16 col-span-12 md:col-span-7"
          style={{
            position: isMobile ? "static" : "sticky",
            top: "150px",
            alignSelf: "start",
          }}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-[5vw] 3xl:text-[80px] leading-[118.423%] uppercase text-center md:text-left "
            dangerouslySetInnerHTML={{ __html: heading }}
          ></motion.h1>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col items-center sm:items-start sm:flex-row justify-center md:justify-start gap-y-4 sm:gap-y-0 gap-x-10 3xl:gap-x-20"
          >
            <p
              className="text-base md:text-xl lg:text-2xl 3xl:text-3xl leading-[190%] text-center sm:text-left"
              dangerouslySetInnerHTML={{ __html: small_heading_one }}
            ></p>

            <span className="inline-block w-full h-[1px] bg-[#EAE4D6] sm:hidden" />
            <p
              className="text-base md:text-xl lg:text-2xl 3xl:text-3xl leading-[190%] text-center sm:text-left"
              dangerouslySetInnerHTML={{ __html: small_heading_two }}
            ></p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link
              href={link}
              className="font-switzer text-sm font-semibold leading-[118.423%] uppercase py-3 md:py-4 px-6 md:px-8 flex items-center gap-x-10 border-[1.5px] border-[#EAE4D6] hover:text-main hover:bg-[#EAE4D6] w-fit group mx-auto md:mx-0 transition-all duration-300 hover:border-main-
          "
            >
              {linkText}{" "}
              <IoIosArrowRoundForward
                size={25}
                className="group-hover:translate-x-2 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        </motion.div>
        <div className="space-y-9 overflow-y-auto- pt-14 md:pt-0 col-span-12 md:col-span-5 bg-service-1">
          {servicesList?.map((service, index) => (
            <motion.div
              key={index}
              initial={index >= 0 ? { opacity: 0, y: 100 } : false}
              whileInView={index >= 0 ? { opacity: 1, y: 0 } : false}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.7 }}
              className="space-y-2 border-b border-b-[#EAE4D6] pb-7"
            >
              <h5 className="font-switzer text-xl  md:text-2xl 3xl:text-3xl font-semibold leading-[141%] text-center md:text-left">
                {service?.title}
              </h5>
              <div
                className="font-switzer text-sm md:text-base text-center md:text-left  leading-[161%]"
                dangerouslySetInnerHTML={{ __html: service?.description }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
