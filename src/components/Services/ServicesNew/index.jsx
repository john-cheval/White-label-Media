import React from "react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import ServicesMain from "./ServicesMain";
import ServicesAlter from "./ServicesAlter";

const ServicesList = ({
  heading,
  small_heading_one,
  small_heading_two,
  linkText,
  link,
  servicesList,
}) => {
  return (
    <section className="containers text-[#EAE4D6] bg-main pb-8 md:pb-10 xl:pb-16 2xl:pb-20 3xl:pb-24 bg-service pt-28 md:pt-40 ">
      <div className="mb-11">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-3xl sm:text-[5vw] 3xl:text-[80px] leading-[118.423%] uppercase text-center  "
          dangerouslySetInnerHTML={{ __html: heading }}
        ></motion.h1>

        <motion.div className="flex flex-col items-center sm:flex-row justify-center  gap-y-2 sm:gap-y-0 gap-x-5 mt-5">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-base md:text-xl lg:text-2xl 3xl:text-3xl leading-[190%] text-center sm:text-left"
            dangerouslySetInnerHTML={{ __html: small_heading_one }}
          ></motion.p>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            className="k bg-[#EAE4D6] h-5 w-[2px] hidden md:inline-block "
          />
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-base md:text-xl lg:text-2xl 3xl:text-3xl leading-[190%] text-center sm:text-left"
            dangerouslySetInnerHTML={{ __html: small_heading_two }}
          ></motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Link
            href={link}
            className="font-switzer text-sm font-semibold leading-[118.423%] uppercase py-3 md:py-4 px-6 md:px-8 flex items-center gap-x-10 border-[1.5px] border-[#EAE4D6] hover:text-main hover:bg-[#EAE4D6] w-fit group mx-auto  transition-all mt-9 duration-300 
          "
          >
            {linkText}{" "}
            <IoIosArrowRoundForward
              size={25}
              className="group-hover:translate-x-2 transition-transform duration-300"
            />
          </Link>
        </motion.div>
      </div>

      <ServicesMain services={servicesList?.slice(0, 5)} isTopBorder={true} />
      <ServicesAlter services={servicesList?.slice(5, 10)} />
      <ServicesMain services={servicesList?.slice(10, 15)} />
      <ServicesAlter services={servicesList?.slice(15)} />
    </section>
  );
};

export default ServicesList;
