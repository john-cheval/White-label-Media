import { aboutData } from "@/app/lib/aboutData";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

const Section4 = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="px-6 md:px-16 lg:px-20 xl:px-[184px] mb-14- md:mb-20- pb-12 lg:pb-24 xl:pb-28">
      <h3 className=" text-3xl md:text-[5vw] 2xl:text-[60px] text-center font-medium leading-[118.423%] mb-2 md:mb-4">
        Global Footprint
      </h3>
      <p className="font-switzer text-center leading-[162%] text-base mb-4 md:mb-8 lg:mb-12">
        Pioneering the middle east region, we’re expanding into varied global
        geographies
      </p>

      <motion.div
        className=" flex  flex-wrap justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {aboutData?.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="min-w-[200px] lg:min-w-[265px]"
            variants={itemVariants}
          >
            <div
              key={rowIndex}
              className="py-14 lg:px-16- text-center border border-main border-opacity-20 space-y-2  border-r-0 last:border-r"
            >
              <p className="text-2xl font-medium leading-[118.423%] text-center">
                {row.country}
              </p>
              <Image
                src={row.flag}
                alt={row.country}
                width={50}
                height={2}
                sizes="100vw"
                className="w-[50px] h-[2px] object-cover mx-auto"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Section4;
