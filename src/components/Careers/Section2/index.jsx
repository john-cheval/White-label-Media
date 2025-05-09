import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import isVideo from "@/app/lib/checkVideo";

const Section2 = () => {
  const images = [
    "/careers/image3.jpg",
    "/careers/image3.jpg",
    "/careers/image3.jpg",
  ];

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
    <section className="containers space-y-5 md:space-y-8 lg:space-y-11 md:pt-10">
      <motion.div
        variants={parentStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center md:items-end gap-y-2 "
      >
        <motion.h3
          variants={fadeUp}
          className="text-[40px] md:text-[6vw] 2xl:text-[80px] font-medium leading-[123%] uppercase "
        >
          OUR ETHOS
        </motion.h3>
        <motion.p
          variants={fadeUp}
          className="font-switzer text-base font-light leading-[161%] max-w-[700px]- text-center md:text-right"
        >
          We prioritize integrity, equality, and inclusion,{" "}
          <br className="hidden md:block" />
          fostering an environment where everyone thrives. Providing equal and
          inclusive opportunities for all.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex md:flex-row flex-col gap-5 flex-wrap-"
        variants={parentStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {images.map((image, index) => {
          return (
            <motion.div
              key={index}
              variants={fadeUp}
              className="w-full md:w-1/3"
            >
              {isVideo(image) ? (
                <video
                  src={image}
                  autoPlay
                  playsInline
                  muted
                  loop
                  className="w-full h-auto object-cover"
                />
              ) : (
                <Image
                  src={image}
                  alt={`image-${index + 1}`}
                  sizes="100vw"
                  height={500}
                  width={450}
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  className="w-full h-auto object-cover"
                />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Section2;
