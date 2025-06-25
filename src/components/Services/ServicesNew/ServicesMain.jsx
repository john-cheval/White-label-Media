import { containerVariants, fadeInUp, scaleInUp } from "@/app/lib/framer";
import React from "react";
import * as motion from "motion/react-client";
import isVideo from "@/app/lib/checkVideo";
import Image from "next/image";

const ServicesMain = ({ services, isTopBorder = false }) => {
  return (
    <article className="grid grid-cols-12">
      {" "}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className={`col-span-12 md:col-span-5 border border-b border-r-1 md:border-r-0  border-l px-6 md:px-10  2xl:px-16 py-8 md:py-10 lg:py-14  border-[#EAE4D6] ${
          isTopBorder ? "border-t" : "border-t-0"
        }`}
      >
        <motion.h4
          variants={fadeInUp}
          className="text-[#EAE4D6] text-xl  lg:text-2xl 3xl:text-3xl text-center md:text-left font-semibold font-switzer leading-[141%] mb-3 "
        >
          {services?.[0]?.title}
        </motion.h4>
        <motion.p
          variants={fadeInUp}
          className="font-switzer text-sm md:text-base text-center md:text-left  leading-[161%]"
          dangerouslySetInnerHTML={{ __html: services[0]?.description }}
        ></motion.p>

        <motion.div variants={scaleInUp} className="mt-5 md:mt-11">
          {services[0]?.image && isVideo(services[0]?.image?.url) ? (
            <video
              autoPlay
              playsInline
              muted
              loop
              src={services[0]?.image?.url}
              className="w-full h-full object-cover- "
            />
          ) : (
            <Image
              src={services[0]?.image?.url}
              alt={services[0]?.title || "Image-Services"}
              sizes="100vw"
              height={450}
              width={500}
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
              className="w-full h-auto object-cover"
            />
          )}
        </motion.div>
      </motion.div>
      <div className="col-span-12 md:col-span-7 grid grid-cols-1 sm:grid-cols-2">
        {services?.slice(1)?.map((service, index) => {
          return (
            <div
              key={service?.title || index}
              className={`border border-r ${
                index === 1 || index === 0
                  ? "border-t-0 md:border-t border-b-1 sm:border-b-0"
                  : "border-t-0 sm:border-t "
              }  border-[#EAE4D6] col-span-1 ${
                index % 2 === 0
                  ? "border-l sm:border-l"
                  : "border-l sm:border-l-0"
              } px-6 md:px-10  2xl:px-16 py-8 md:py-10 lg:py-14   `}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-col gap-y-3 h-full md:justify-between"
              >
                <motion.h4
                  variants={fadeInUp}
                  className="text-[#EAE4D6] text-xl  lg:text-2xl 3xl:text-3xl text-center md:text-left font-semibold font-switzer leading-[141%] min-h-[50px] h-[100px]- "
                >
                  {service?.title}
                </motion.h4>

                {service?.description && (
                  <motion.p
                    variants={fadeInUp}
                    className="font-switzer text-sm md:text-base text-center md:text-left  leading-[161%] pt-12- "
                    dangerouslySetInnerHTML={{ __html: service?.description }}
                  ></motion.p>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default ServicesMain;
