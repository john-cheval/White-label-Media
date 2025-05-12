import { houseData } from "@/app/lib/homeData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import * as motion from "motion/react-client";

const OurHouses = () => {
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
            <motion.h5
              variants={itemVariants}
              className="main-heading text-center md:text-left mb-2 md:mb-0"
            >
              Our Houses
            </motion.h5>
            <motion.p
              variants={itemVariants}
              className="font-gt text-center md:text-left leading-[141%] text-3xl md:text-4xl lg:text-[40px] mb-5 md:mb-0"
            >
              Discover our unique and specialised agencies
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center md:justify-between group"
            >
              <Link
                href={"/about"}
                className="font-switzer underline uppercase text-sm"
              >
                View all companies
              </Link>
              <GoArrowUpRight className="text-main hidden md:block text-6xl font-light group-hover:rotate-45 transition-transform duration-300" />
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 mx-auto- sm:mx-0"
          >
            {houseData?.slice(0, 4)?.map((house, index) => (
              <div
                key={house?.id || index}
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
                  className="max-w-[250px] max-h-[150px] overflow-hidden mx-auto sm:mx-0"
                >
                  <Image
                    src={house?.image}
                    alt="image-1"
                    sizes="100vw"
                    height={100}
                    width={250}
                    className="w-full h-auto object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 "
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-y-5 mt-auto "
                >
                  <span className="h-[1px] w-10 bg-[#EAE4D6] mt-7 sm:mt-0 block mx-auto sm:mx-0" />
                  <p className="text-main font-switzer text-sm uppercase !leading-[1.7] sm:max-w-[250px] mx-auto sm:mx-0 text-center sm:text-left">
                    {house?.desc}
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
            {houseData?.slice(0, 4)?.map((house, index) => (
              <div
                key={house?.id || index}
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
                  className="max-w-[250px] max-h-[150px] overflow-hidden mx-auto sm:mx-0 "
                >
                  <Image
                    src={house?.image}
                    alt="image-1"
                    sizes="100vw"
                    height={100}
                    width={250}
                    className="w-full h-auto object-cover transition-all duration-500 group-hover:grayscale-0 filter grayscale "
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                  />
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-col gap-y-5 mt-auto "
                >
                  <span className="h-[1px] w-10 bg-[#EAE4D6] block mt-7 sm:mt-0  mx-auto sm:mx-0" />
                  <p className="text-main font-switzer text-sm uppercase !leading-[1.7] max-w-[250px] mx-auto sm:mx-0 text-center sm:text-left">
                    {house?.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div
            variants={itemVariants}
            className="col-span-12 md:col-span-4 lg:col-span-5"
          >
            <video
              autoPlay
              playsInline
              muted
              loop
              src="/Home/test.mp4"
              className="w-full h-full object-cover "
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurHouses;
