import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import AwardsMobile from "./AwardsMobile";
import Link from "next/link";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
const Awards = ({ heading, awardsList }) => {
  const rows = [
    awardsList?.slice(0, 4),
    awardsList?.slice(4, 7),
    awardsList?.slice(7, 10),
    awardsList?.slice(10),
  ];

  console.log(awardsList.length, "newone");

  return (
    <section className="containers bg-[#161616] pt-10 lg:py-16">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="main-heading !text-white text-center md:text-left"
      >
        {heading || "Awards"}
      </motion.h3>

      <AwardsMobile awards={awardsList} />

      <div className=" hidden md:block  border-y border-y-[#2C2C2C] mt-6">
        {rows &&
          rows?.map((row, rowIndex) => {
            const columns =
              row.length === 1
                ? "grid-cols-1"
                : row.length === 4
                ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-4"
                : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3";

            const isLastRow = rowIndex === rows.length - 1;
            return (
              <div
                key={rowIndex}
                className={`border-b  border-b-[#2C2C2C] ${
                  isLastRow ? "flex justify-center" : ""
                }`}
              >
                <motion.div
                  className={`grid ${columns} gap-0 ${
                    isLastRow ? "w-fit" : "w-full"
                  }`}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  {row &&
                    row?.map((award, index) => (
                      <motion.div
                        variants={itemVariants}
                        key={index}
                        className={`relative flex items-center border-t border-t-[#2C2C2C] md:border-t-0 justify-center p-5
                       md:p-8 ${
                         index === row.length - 1
                           ? ""
                           : "md:border-r border-r-[#2C2C2C]"
                       }`}
                      >
                        <Link href={award?.link} target="_blank">
                          <Image
                            src={award?.image?.url}
                            alt={`${award?.title} ||Award ${index + 1}`}
                            width={250}
                            height={100}
                            sizes="100vw"
                            className="w-auto h-auto- object-cover- max-w-[200px]- md:max-w-full- h-[75px] 2xl:h-[90px]"
                            unoptimized={
                              process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED ===
                              "true"
                            }
                          />
                        </Link>
                      </motion.div>
                    ))}
                </motion.div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Awards;
