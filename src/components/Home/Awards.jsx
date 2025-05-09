import { awardsList } from "@/app/lib/homeData";
import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

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
const Awards = () => {
  const rows = [
    awardsList?.slice(0, 4),
    awardsList?.slice(4, 7),
    awardsList?.slice(7, 9),
  ];
  return (
    <section className="containers bg-[#161616] py-16">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
        className="main-heading !text-white"
      >
        Awards
      </motion.h3>

      <div className=" border-y border-y-main mt-6">
        {rows?.map((row, rowIndex) => {
          const columns =
            row.length === 4
              ? "grid-cols-4"
              : row.length === 3
              ? "grid-cols-3"
              : "grid-cols-1";

          const isLastRow = rowIndex === rows.length - 1;

          return (
            <div
              key={rowIndex}
              className={`border-b border-b-main ${
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
                {row?.map((award, index) => (
                  <motion.div
                    variants={itemVariants}
                    key={index}
                    className={`relative flex items-center justify-center p-8 ${
                      index === row.length - 1 ? "" : "border-r border-r-main"
                    }`}
                  >
                    <Image
                      src={award.image}
                      alt={`Award ${index + 1}`}
                      width={250}
                      height={100}
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                      unoptimized={
                        process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                      }
                    />
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
