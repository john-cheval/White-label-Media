"use client";
import React, { useRef, useState } from "react";
import {
  IoPlayCircleSharp,
  IoLocationOutline,
  IoCalendarClearOutline,
  IoPauseCircle,
} from "react-icons/io5";
import { motion } from "framer-motion";
import isVideo from "@/app/lib/checkVideo";
import Image from "next/image";

const imageVariants = {
  initial: {
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  hover: { scale: 0.8, transition: { duration: 0.5, ease: "easeOut" } },
};

const playButtonVariants = {
  initial: { opacity: 0, y: 30 },
  hover: {
    opacity: 1,
    y: "-50%",
    transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
};

const textVariants = {
  initial: {
    opacity: 0,
    y: 40,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut", delay: 0.1 },
  },
};
const Section1 = () => {
  const [active, setActive] = useState("past");
  const videoRef = useRef(null);
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const handleVideoClick = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <section className="   relative ">
      <div className="flex justify-center relative pt-16   ">
        <div className=" flex  border-b border-b-main justify-center items-center relative z-50">
          <button
            className={`event-tab px-14 ${active === "past" ? "active" : ""} `}
            onClick={() => setActive("past")}
          >
            Past Event
          </button>
          <button
            className={`event-tab px-14 ${
              active === "upcoming" ? "active" : ""
            } `}
            onClick={() => setActive("upcoming")}
          >
            Upcoming Event
          </button>
        </div>
        <div className="bg-events-grad-2 w-full h-full absolute bottom-0 left-0 z-10" />
      </div>

      <div className="eventsbg">
        <h1 className="text-[80px] uppercase leading-[118.423%]  text-center py-8">
          PAST EVENTS
        </h1>

        <div className="grid grid-cols-12  ">
          <motion.div
            initial="initial"
            whileHover="hover"
            animate="initial"
            className=" col-start-3 col-end-11 relative overflow-hidden"
          >
            <motion.div
              className="aspect-[16/9] relative"
              variants={imageVariants}
            >
              {isVideo("/events/hero.jpg") ? (
                <video
                  loop
                  ref={videoRef}
                  muted
                  playsInline
                  autoPlay={false}
                  poster="/events/hero.jpg"
                  className="object-cover w-full h-full"
                />
              ) : (
                <Image
                  src={"/events/hero.jpg"}
                  alt="Event with confetti and lighting"
                  fill
                  className="object-cover"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                />
              )}
              {isVideo("/events/hero.jpg") && (
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2-"
                  variants={playButtonVariants}
                >
                  {isPlaying ? (
                    <IoPauseCircle
                      className=" cursor-pointer"
                      color="#EAE4D6"
                      size={100}
                      onClick={handleVideoClick}
                    />
                  ) : (
                    <IoPlayCircleSharp
                      className=" cursor-pointer"
                      color="#EAE4D6"
                      size={100}
                      onClick={handleVideoClick}
                    />
                  )}
                </motion.div>
              )}
            </motion.div>

            <motion.div className="space-y-1 -mt-6" variants={textVariants}>
              <h3 className="text-center text-[40px] font-medium leading-[141%]">
                Lorem Ipsum is simply dummy text of the printing
              </h3>
              <div className="flex justify-center items-center gap-x-16 ">
                <div className="flex justify-center items-center gap-x-2 ">
                  <IoLocationOutline size={20} />
                  <p className="text-base leading-[141%] ">Jumeirah, Dubai</p>
                </div>
                <div className="flex justify-center items-center gap-2 py-4">
                  <IoCalendarClearOutline size={20} />
                  <p className="text-base leading-[141%]">22-10-2025</p>
                </div>
              </div>

              <p className="text-center font-switzer font-light text-base leading-[161%] max-w-[650px] mx-auto">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's Lorem Ipsum is
                simply dummy text
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
