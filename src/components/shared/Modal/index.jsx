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

const Modal = ({ handleClose, modalOpen, data }) => {
  return (
    <>
      {modalOpen && (
        <Backdrop onClick={handleClose}>
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal flex flex-col gap-y-5 lg:gap-y-7 py-14 lg:pt-20 xl:pt-[108px]  lg:pb-16 xl:pb-20  px-5 2xl:px-[200px]- relative w-[90%] sm:w-[60%] "
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h5
              className="text-center text-2xl md:text-3xl leading-[141%] max-w-[850px]"
              style={{
                lineHeight: 1,
              }}
            >
              {data?.title}
            </h5>
            <p className="font-switzer text-sm md:text-base leading-193%] text-center w-[90%] lg:max-w-[950px]">
              {data?.description}
            </p>

            <div className="flex flex-col gap-y-2 md:gap-y-3">
              <span className="text-center  text-2xl md:text-3xl leading-[141%]">
                {data?.name}
              </span>
              <span className="text-center font-switzer  text-sm md:text-base leading-[193%]">
                {data?.designation}
              </span>
            </div>
            <button
              onClick={handleClose}
              className="absolute top-3 md:top-10 right-3 md:right-10"
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
