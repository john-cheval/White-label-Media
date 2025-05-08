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
    <section className="px-[184px] pb-24">
      <h3 className="text-[60px] text-center font-medium leading-[118.423%] mb-4">
        Global Footprint
      </h3>
      <p className="font-switzer text-center leading-[162%] text-base mb-12">
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
            className=" min-w-[265px]"
            variants={itemVariants}
          >
            <div
              key={rowIndex}
              className="py-14 px-16 text-center border border-main border-opacity-20 space-y-2  border-r-0 last:border-r"
            >
              <p>{row.country}</p>
              <Image
                src={row.flag}
                alt={row.country}
                width={50}
                height={2}
                sizes="100vw"
                className="w-[50px] h-[2px] object-cover mx-auto"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Section4;
