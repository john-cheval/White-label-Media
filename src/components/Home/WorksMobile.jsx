"use client";

import isVideo from "@/app/lib/checkVideo";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const WorksMobile = ({ works }) => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleWorks = works?.slice(0, visibleCount);
  return (
    <>
      <div className="space-y-4">
        {visibleWorks?.map((work, index) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
            key={index}
          >
            <div>
              {isVideo(work?.image) ? (
                <video
                  src={work?.image}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover  "
                />
              ) : (
                <Image
                  src={work?.image}
                  alt={work?.title || `image-${index + 1}`}
                  width={400}
                  height={650}
                  sizes="100vw"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
            <p className="text-3xl text-center font-medium leading-[141%] mt-2">
              {work?.title}
            </p>
          </motion.div>
        ))}
      </div>
      {visibleCount < works.length && (
        <button
          onClick={handleLoadMore}
          className="mt-8 py-3 px-8 border border-main rounded-full uppercase text-center font-switzer text-sm leading-[118.423%] mx-auto block"
        >
          Load more
        </button>
      )}
    </>
  );
};

export default WorksMobile;
