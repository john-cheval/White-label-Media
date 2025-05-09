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
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const Modal = ({ handleClose, text, modalOpen }) => {
  return (
    <>
      {modalOpen && (
        <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal flex flex-col gap-y-7 pt-[108px] pb-20 px-[250px] relative"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h5 className="text-center text-[60px] leading-[141%] max-w-[850px]">
              White Label has really helped our business...
            </h5>
            <p className="font-switzer text-xl leading-193%] text-center max-w-[950px]">
              “White Label has really helped our business evolve and stand out
              from the crowd. With the amount of work they put in, it is hard to
              believe they aren’t a part of our company. They have gone out of
              their way and at times performed beyond their scope of work simply
              due to their genuine interest in seeing our business succeed. We
              have been very happy with their performance and hope to...
            </p>

            <div className="flex flex-col gap-y-3">
              <span className="text-center text-[40px] leading-[141%]">
                Pallav Patel
              </span>
              <span className="text-center text-xl leading-[193%]">
                House of curry, Bombay Bungalow, Ibn AlBahr
              </span>
            </div>
            <button onClick={handleClose} className="absolute top-16 right-16">
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
