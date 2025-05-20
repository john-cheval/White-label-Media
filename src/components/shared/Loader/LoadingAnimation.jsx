"use client";
import React from "react";
import { motion } from "framer-motion";
import { LuLoaderCircle } from "react-icons/lu";
const LoadingAnimation = () => {
  const loadingVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <motion.div
      className="flex items-center justify-center h-full w-full"
      variants={loadingVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="flex flex-col items-center gap-2 "
        // animate={{ rotate: 360 }}
        // transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      >
        <LuLoaderCircle className="h-8 w-8 animate-spin" />
        <span className="text-sm font-medium">Loading...</span>
      </motion.div>
    </motion.div>
  );
};

export default LoadingAnimation;
