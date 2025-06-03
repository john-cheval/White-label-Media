"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import * as motion from "motion/react-client";

const OurHouses = ({ houseHeading, houseDesc, house_video, companiesList }) => {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="bg-main containers pb-7 md:pb-10 lg:pb-14">
      <div className="bg-white text-main">
        {/* Section 1 */}
        <div className="grid grid-cols-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="col-span-12 md:col-span-5 border border-b-1 border-r-0 border-t-0 border-l-0 xl:py-16 xl:px-14 xl:space-y-20  2xl:py-24 2xl:pl-24 2xl:pr-16 2xl:space-y-28 lg: py-14 lg:px-10 md:space-y-10 lg:space-y-14 pt-8 pb-12 px-8 hover:bg-[#F7F7F7] transition-all duration-300"
          >
            <motion.h4
              variants={itemVariants}
              className="main-heading text-center md:text-left mb-2 md:mb-0"
            >
              {houseHeading}
            </motion.h4>
            <motion.p
              variants={itemVariants}
              className="font-gt text-center md:text-left leading-[141%] text-3xl md:text-4xl lg:text-[40px] mb-5 md:mb-0"
            >
              {houseDesc}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center md:justify-between group"
            >
              <Link
                href={"/group-of-companies"}
                className="relative font-switzer text-center md:text-left text-sm uppercase inline-block transition-all duration-300 md:mt-10 mb-10 md:mb-0
             before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1px] before:bg-main
             before:transition-all before:duration-300 hover:before:translate-x-2"
              >
                View all companies
              </Link>
              <Link href={"/group-of-companies"} aria-label="Go to aboutpage">
                <Image
                  src={"/common/arrow_blue.svg"}
                  alt="arrow_outward"
                  sizes="100vw"
                  height={48}
                  width={48}
                  className="w-full h-auto hidden md:block object-cover group-hover:rotate-45 transition-transform duration-300 max-w-12"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 mx-auto- sm:mx-0"
          >
            {companiesList?.slice(0, 4)?.map((house, index) => (
              <div
                key={house?.title || index}
                className={`border border-r-0 sm:border-r ${
                  index === 1 || index === 0
                    ? "border-t-0 border-b-1 sm:border-b-0"
                    : "border-t-1 "
                }  border-main/20 col-span-1 ${
                  index % 2 === 0 ? "border-l-0 sm:border-l" : "border-l-0"
                } pt-10 lg:pt-14 pb-10 px-6 lg:px-12 flex flex-col group hover:bg-[#F7F7F7] transition-all duration-300  `}
              >
                <motion.div
                  variants={itemVariants}
                  className="flex md:justify-between items-center"
                >
                  <Link
                    href={house?.website_link}
                    aria-label={`Go To ${house?.title} website`}
                    target="_blank"
                    className="max-w-[250px] max-h-[150px]- overflow-hidden mx-auto sm:mx-0"
                  >
                    <Image
                      src={house?.logo?.url}
                      alt={house?.title}
                      sizes="100vw"
                      height={100}
                      width={250}
                      className="w-full h-auto object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 "
                      unoptimized={
                        process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                      }
                    />
                  </Link>
                  <Link
                    href={house?.website_link}
                    target="_blank"
                    aria-label={`Go To ${house?.title} website`}
                    className="text-2xl hidden md:block opacity-0 group-hover:opacity-100 transition-all hover:rotate-45 duration-300"
                  >
                    <GoArrowUpRight />
                  </Link>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-y-5 mt-auto pt-24 lg:pt-28 "
                >
                  {house?.home_page_description && (
                    <span className="h-[1px] w-10 bg-[#EAE4D6] mt-7 sm:mt-0 block mx-auto sm:mx-0" />
                  )}
                  <p className="text-main font-switzer text-sm uppercase !leading-[1.7] sm:max-w-[250px] mx-auto sm:mx-0 text-center sm:text-left">
                    {house?.home_page_description}
                  </p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Section 2 */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-12"
        >
          <div className="col-span-12 md:col-span-8 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2">
            {companiesList?.slice(4)?.map((house, index) => (
              <div
                key={house?.title || index}
                className={`border border-r-0 sm:border-r ${
                  index === 1 || index === 0
                    ? "border-t-0 border-b-1 sm:border-b-0"
                    : "border-t-1 "
                }  border-main/20 col-span-1 ${
                  index % 2 === 0 ? "border-l-1" : "border-l-0"
                } pt-10 lg:pt-14 pb-10 px-6 lg:px-12 flex flex-col  group min-h-[300px] hover:bg-[#F7F7F7] transition-all duration-300`}
              >
                <motion.div
                  variants={itemVariants}
                  className="flex md:justify-between items-center"
                >
                  <Link
                    href={house?.website_link}
                    target="_blank"
                    aria-label={`Go To ${house?.title} website`}
                    className="max-w-[250px] max-h-[150px]- overflow-hidden mx-auto sm:mx-0 "
                  >
                    <Image
                      src={house?.logo?.url}
                      alt={house?.title}
                      sizes="100vw"
                      height={100}
                      width={250}
                      className="w-full h-auto object-cover transition-all duration-500 group-hover:grayscale-0 filter grayscale "
                      unoptimized={
                        process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                      }
                    />
                  </Link>
                  <Link
                    href={house?.website_link}
                    aria-label={`Go To ${house?.title} website`}
                    target="_blank"
                    className="text-2xl hidden md:block opacity-0 group-hover:opacity-100 transition-all hover:rotate-45 duration-300 "
                  >
                    <GoArrowUpRight />
                  </Link>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-y-5 mt-auto pt-24 lg:pt-28 xl:pt-40 "
                >
                  {house?.home_page_description && (
                    <span className="h-[1px] w-10 bg-[#EAE4D6] mt-7 sm:mt-0 block mx-auto sm:mx-0" />
                  )}
                  <p className="text-main font-switzer text-sm uppercase !leading-[1.7] max-w-[250px] mx-auto sm:mx-0 text-center sm:text-left">
                    {house?.home_page_description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="col-span-12 md:col-span-4 lg:col-span-5 bg-black"
          >
            <video
              autoPlay
              playsInline
              muted
              loop
              src={house_video}
              className="w-full h-full object-cover- "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurHouses;
