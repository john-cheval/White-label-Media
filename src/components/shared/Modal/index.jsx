"use client";
import React from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop";
import { IoCloseOutline } from "react-icons/io5";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 30,
      stiffness: 400,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, modalOpen }) => {
  return (
    <>
      {modalOpen && (
        <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal flex flex-col gap-y-5 lg:gap-y-7 py-12 lg:pt-20 xl:pt-[108px]  lg:pb-16 xl:pb-20 md:px-5 2xl:px-[250px] relative w-[90%] sm:w-[80%] "
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h5
              className="text-center text-xl md:text-2xl  lg:text-3xl xl:text-4xl 2xl:text-[60px] leading-[141%] max-w-[850px]"
              style={{
                lineHeight: 1,
              }}
            >
              White Label has really helped our business...
            </h5>
            <p className="font-switzer text-base lg:text-xl leading-193%] text-center w-[90%] lg:max-w-[950px]">
              “White Label has really helped our business evolve and stand out
              from the crowd. With the amount of work they put in, it is hard to
              believe they aren’t a part of our company. They have gone out of
              their way and at times performed beyond their scope of work simply
              due to their genuine interest in seeing our business succeed. We
              have been very happy with their performance and hope to...
            </p>

            <div className="flex flex-col gap-y-2 md:gap-y-3">
              <span className="text-center  md:text-3xl xl:text-[40px] leading-[141%]">
                Pallav Patel
              </span>
              <span className="text-center text-base lg:text-xl leading-[193%]">
                House of curry, Bombay Bungalow, Ibn AlBahr
              </span>
            </div>
            <button
              onClick={handleClose}
              className="absolute top-5 md:top-10 right-5 md:right-10"
            >
              {" "}
              <IoCloseOutline size={25} color="#22334F" />
            </button>
          </motion.div>
        </Backdrop>
      )}
    </>
  );
};

export default Modal;
