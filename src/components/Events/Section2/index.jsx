"use client";
import isVideo from "@/app/lib/checkVideo";
import Image from "next/image";
import React, { useState } from "react";
import { IoLocationOutline, IoCalendarClearOutline } from "react-icons/io5";
import { motion } from "framer-motion";
const Section2 = ({ eventList }) => {
  const [loadMore, setLoadMore] = useState(4);
  const eventsData = eventList && Object.values(eventList);

  const handleLoadMore = () => {
    setLoadMore((prev) => prev + 4);
  };
  const visibleEvents = eventsData?.slice(1, loadMore);
  const hasMore = loadMore < eventsData?.length;

  return (
    <section className="containers pt-14 relative">
      <div className="grid grid-cols-12 gap-y-7 md:gap-7 lg:gap-10 xl:gap-x-16 lg:pl-10 xl:pl-16 lg:pr-8 xl:gap-y-20 mb-8 md:pb-12 lg:pb-16 xl:pb-[72px]">
        {/* <AnimatePresence> */}
        {visibleEvents &&
          visibleEvents?.map((event, index) => {
            const isOddRow = Math.floor(index / 2) % 2 === 0;
            const isLeftCard = index % 2 === 0;

            const colSpan =
              isOddRow && isLeftCard
                ? "col-span-12 md:col-span-7"
                : isOddRow && !isLeftCard
                ? "col-span-12 md:col-span-5"
                : !isOddRow && isLeftCard
                ? "col-span-12 md:col-span-5"
                : "col-span-12 md:col-span-7";

            const isMt =
              Math.floor(index / 2) % 2 === index % 2 ? "" : "md:mt-16";
            return (
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                // exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`event-card ${colSpan} ${isMt}`}
                key={index}
              >
                <div className=" relative">
                  {isVideo(event?.event_image?.url) ? (
                    <video
                      className="object-cover w-full h-auto"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={event?.event_image?.url} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={event?.event_image?.url}
                      alt={event?.post_title || "Team White Label"}
                      height={500}
                      width={500}
                      sizes="100vw"
                      className="object-cover- w-full h-auto max-w-[450px]-"
                      unoptimized={
                        process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                      }
                    />
                  )}
                </div>

                <div className="flex flex-col md:max-w-[650px] gap-y-5 mt-6 md:mt-10">
                  <h3 className="text-3xl lg:text-[40px]  font-medium leading-[141%]  text-center md:text-left">
                    {event?.post_title}
                  </h3>
                  <div className="flex gap-4 justify-center md:justify-start ">
                    <div className="event-meta">
                      <IoLocationOutline size={20} />
                      <span>{event?.event_place}</span>
                    </div>
                    <div className="event-meta">
                      <IoCalendarClearOutline size={20} />
                      <span>{event?.event_date}</span>
                    </div>
                  </div>
                  <div
                    className="text-sm md:text-base text-center md:text-left font-switzer  font-light leading-[161%]  "
                    dangerouslySetInnerHTML={{ __html: event?.post_content }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        {/* </AnimatePresence> */}
      </div>
      {hasMore && (
        <div className="flex justify-center mb-14 lg:mb-16 xl:mb-20 2xl:mb-28">
          <button
            onClick={handleLoadMore}
            className="border-main border  px-14 py-4 rounded-full hover:bg-main hover:text-white font-switzer text-base leading-[118.423%]  transition-all duration-300 ease-in-out uppercase"
          >
            LOAD MORE
          </button>
        </div>
      )}
      <div className="absolute bg-events-grad-1 top-0 left-0 z-50- w-full h-16" />
    </section>
  );
};

export default Section2;
