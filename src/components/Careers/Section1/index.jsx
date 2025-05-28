import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = (direction) => ({
  hidden: {
    opacity: 0,
    scale: 0.8 /* y: direction === "left" ? -100 : 100  */,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
});
const Section1 = ({ data }) => {
  return (
    <section className="containers pb-11 md:pb-12 lg:pb-16 xl:pb-20 pt-28 md:pt-48 lg:pt-60 2xl:pb-24 space-y-8 md:space-y-12 lg:space-y-16 xl:space-y-20 2xl:space-y-28 relative overflow-hidden careers-bg ">
      <div className="grid grid-cols-12 gap-y-6 md:gap-y-0 gap-x-0 md:gap-x-8 lg:gap-x-10 relative z-50 md:pl-8 lg:pl-10 xl:pl-16 ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className=" flex flex-col justify-center md:gap-y-6 col-span-12 md:col-span-6"
        >
          <motion.p
            variants={textVariants}
            className="font-switzer text-center text-sm leading-[118.423%] uppercase py-2 px-5 w-fit rounded-full border border-main mx-auto md:mx-0 mb-6 md:mb-0"
          >
            {data[0]?.small_heading}
          </motion.p>
          <motion.h1
            variants={textVariants}
            className="text-3xl lg:text-[5vw] xl:text-[70px] 3xl:text-[110px] leading-[118.423%] uppercase text-center md:text-left mb-2 md:mb-0
            "
          >
            {data[0]?.main_heading}
          </motion.h1>
          <motion.p
            variants={textVariants}
            className="text-xl md:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium uppercase leading-[141%] text-center md:text-left"
          >
            {data[0]?.sub_heading}
          </motion.p>
        </motion.div>
        <motion.div
          className="col-span-12 md:col-span-6"
          variants={imageVariants("right")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={data[0]?.image?.url}
            alt="Team_white_label"
            height={550}
            width={780}
            sizes="100vw"
            className="w-full h-auto object-cover"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-12 gap-x-0 md:gap-x-8 lg:gap-x-10 relative z-50 md:pl-8 lg:pl-10 xl:pl-16 gap-y-8 md:gap-y-0">
        <motion.div
          className="col-span-12 md:col-span-5 "
          variants={imageVariants("left")}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Image
            src={data[1]?.image?.url}
            alt="Team_white_label"
            height={550}
            width={780}
            sizes="100vw"
            className="w-full h-auto object-cover"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </motion.div>
        <span className="hidden md:block md:col-span-1"></span>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className=" flex flex-col justify-center gap-y-3 md:gap-y-6 col-span-12 md:col-span-6 -order-1 md:order-1"
        >
          <motion.h1
            variants={textVariants}
            className="text-3xl md:text-[5vw] 2xl:text-[70px] leading-[123%] uppercase font-medium text-center md:text-left"
          >
            {data[1]?.main_heading}
          </motion.h1>
          <motion.div
            variants={textVariants}
            className="text-sm md:text-base font-light font-switzer  leading-[161%] md:max-w-[450px] md:ml-[50px] text-center md:text-left"
            dangerouslySetInnerHTML={{ __html: data[1]?.description }}
          ></motion.div>
        </motion.div>
      </div>

      <div className="absolute bg-[#E3EEFF] blur-[250px] h-[500px] w-[500px] md:h-[700px] md:w-[700px] lg:h-[900px] lg:w-[900px] rounded-full top-1/2 md:-translate-y-1/2 left-3 md:left-1/2 -translate-x-1/2" />
    </section>
  );
};

export default Section1;
