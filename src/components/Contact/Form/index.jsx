"use client";
import React, { useState } from "react";
import { motion } from "motion/react";

const inputVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newformData = new FormData();
    newformData.append("text-name", formData.name);
    newformData.append("email-address", formData.email);
    newformData.append("tel-phone", formData.phone);
    newformData.append("textarea-message", formData.message);
    // newformData.append("_wpcf7_unit_tag", "19c102c");

    try {
      //   const response = await fetch(
      //     "https://chevaldemo.xyz/demo/alpha-experience/wp-json/contact-form-7/v1/contact-forms/256/feedback",
      //     {
      //       method: "POST",
      //       body: newformData,
      //     }
      //   );

      //   if (!response.ok) {
      //     throw new Error(`HTTP error! Status: ${response.status}`);
      //   }
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (e) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-8 pt-8">
      {" "}
      <motion.input
        type="text"
        placeholder="Name"
        required
        maxLength={50}
        id="Name"
        name="Name"
        value={formData.name}
        onChange={handleChange}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        custom={0}
        className="outline-none bg-transparent border-b border-white placeholder:text-[#EAE4D6] font-switzer placeholder:font-switzer leading-[150%] text-[#EAE4D6]  pb-8 w-full"
      />
      <motion.input
        type="email"
        placeholder="E-mail"
        required
        maxLength={50}
        id="Email"
        name="Email"
        value={formData.email}
        onChange={handleChange}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        custom={1}
        className="outline-none bg-transparent border-b border-white placeholder:text-[#EAE4D6] font-switzer placeholder:font-switzer leading-[150%] text-[#EAE4D6]  pb-8 w-full"
      />
      <motion.input
        type="text"
        placeholder="Phone"
        required
        maxLength={15}
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        custom={2}
        className="outline-none bg-transparent border-b border-white placeholder:text-[#EAE4D6] font-switzer placeholder:font-switzer leading-[150%] text-[#EAE4D6]  pb-8 w-full"
        onInput={(e) => {
          if (e.target.value.length > 15) {
            e.target.value = e.target.value.slice(0, 15);
          }
        }}
        onKeyDown={(e) => {
          const allowedKeys = [
            "Backspace",
            "ArrowLeft",
            "ArrowRight",
            "Tab",
            "Delete",
          ];

          const isNumber = /^[0-9]$/.test(e.key);
          const isPlus = e.key === "+";
          const inputValue = e.currentTarget.value;
          const cursorPosition = e.currentTarget.selectionStart;

          if (
            (isPlus && (cursorPosition !== 0 || inputValue.includes("+"))) ||
            (!isNumber && !isPlus && !allowedKeys.includes(e.key))
          ) {
            e.preventDefault();
          }
        }}
      />
      <motion.textarea
        type="text"
        placeholder="Message"
        maxLength={2000}
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        rows={3}
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        custom={3}
        className="outline-none bg-transparent border-b border-[#EAE4D6] placeholder:text-[#EAE4D6] font-switzer placeholder:font-switzer  leading-[150%] text-[#EAE4D6]  pb-8 w-full"
      />
      <motion.button
        variants={inputVariants}
        initial="hidden"
        animate="visible"
        custom={4}
        type="submit"
        className="font-switzer text-sm leading-[118.423%] uppercase py-4 px-16 flex items-center justify-center bg-[#EAE4D6] rounded-full w-fit text-main border border-[#EAE4D6] hover:text-[#EAE4D6] hover:bg-transparent duration-300 transition-all hover:scale-105 hover:-translate-y-2"
      >
        Submit
      </motion.button>
    </form>
  );
};

export default ContactForm;
