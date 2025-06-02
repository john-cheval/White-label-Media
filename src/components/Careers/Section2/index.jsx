import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import isVideo from "@/app/lib/checkVideo";
import SecuredVideo from "@/components/shared/SecuredVideo";

const Section2 = ({ data }) => {
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
    <section className="containers space-y-5 pt-5 md:space-y-8 lg:space-y-11 md:pt-10">
      <motion.div
        variants={parentStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center md:items-end gap-y-2 "
      >
        <motion.h3
          variants={fadeUp}
          className="text-3xl md:text-[5vw] xl:text-[80px] font-medium leading-[123%] uppercase "
        >
          {data?.main_heading}
        </motion.h3>
        <motion.div
          variants={fadeUp}
          className="font-switzer text-base font-light leading-[161%] max-w-[700px]- text-center md:text-right"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        ></motion.div>
      </motion.div>

      <motion.div
        className="md:grid grid-cols-12 gap-5"
        variants={parentStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        {data?.images_gallery?.map((image, index) => {
          const colSpanClass =
            index === 0
              ? "col-span-12- md:col-span-6"
              : "col-span-12- md:col-span-3";

          return (
            <motion.div
              key={index}
              variants={fadeUp}
              // className={`${colSpanClass} w-full ${
              //   index === 0 ? "" : "inline-block"
              // }`}
              className={`w-full ${colSpanClass}  ${
                index === 0
                  ? "careers-card-1"
                  : index === 1
                  ? "careers-card-2"
                  : index === 2
                  ? "careers-card-3"
                  : ""
              }`}
            >
              {isVideo(image?.url) ? (
                <video
                  src={image?.url}
                  autoPlay
                  playsInline
                  muted
                  loop
                  className="w-full h-full object-cover"
                />
              ) : (
                // <SecuredVideo
                //   // src={image?.url}
                //   src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                //   className="w-full h-full object-cover"
                // />
                <Image
                  src={image?.url}
                  alt={`image-${index + 1}`}
                  sizes="100vw"
                  height={500}
                  width={450}
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  className="w-full h-full object-cover"
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
