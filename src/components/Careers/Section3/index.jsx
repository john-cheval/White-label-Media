import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

const Section3 = ({ data }) => {
  const parentStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="containers pt-10 md:pt-12 lg:pt-16 xl:pt-20 2xl:pt-28 pb-8 md:pb-10 lg:pb-14">
      <motion.div
        variants={parentStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-12 lg:pl-10 xl:pl-16 2xl:pl-24 md:space-x-8"
      >
        <motion.div
          variants={fadeUp}
          className="col-span-12 md:col-span-7 mb-10 md:mb-0 mt-0 md:mt-16 xl:mt-20 3xl:mt-24"
        >
          <p className="font-switzer text-center text-sm leading-[118.423%] uppercase py-2 px-6 w-fit rounded-full border border-main mx-auto md:mx-0">
            {data?.small_heading}
          </p>
          <h3 className=" text-[30px] md:text-[5vw] 2xl:text-[70px] 3xl:text-[80px] leading-[123%] uppercase font-medium mt-6 md:mt-9 mb-3 text-center md:text-left">
            {data?.main_heading}
          </h3>
          <div
            className="text-sm md:text-base text-center md:text-left font-light font-switzer  leading-[161%] md:max-w-[450px] md:ml-[50px]"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></div>
        </motion.div>
        <motion.div
          variants={parentStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="col-span-12 md:col-span-5"
        >
          <motion.div variants={fadeUp}>
            <Image
              src={data?.image?.url}
              alt="group"
              width={500}
              height={500}
              sizes="100vw"
              className="w-full h-auto object-cover"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section3;
