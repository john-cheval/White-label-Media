import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";

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
const Section4 = () => {
  return (
    <section className="pb-7 md:pb-10 lg:pb-20 xl:pb-28 2xl:pb-40 containers careersbg">
      <motion.div
        variants={parentStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col text-center gap-y-3"
      >
        <motion.h3
          variants={fadeUp}
          className=" text-3xl md:text-[40px] xl:text-[60px] font-medium leading-[141%]"
        >
          Be part of our Vision
        </motion.h3>
        <motion.p
          variants={fadeUp}
          className=" font-light font-switzer text-sm md:text-base  leading-[161%]"
        >
          Join us in shaping the future—where creativity, integrity, and
          innovation come together to make an impact
        </motion.p>
        <motion.div variants={fadeUp}>
          <Link
            href={"mailto:hr@whitelabelmedia.com"}
            className=" text-xl lg:text-2xl xl:text-[40px]  font-medium leading-[141%]"
          >
            hr@whitelabelmedia.com
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Section4;
