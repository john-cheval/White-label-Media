"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Modal from "@/components/shared/Modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

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
    newformData.append("your-name", formData.name);
    newformData.append("your-email", formData.email);
    newformData.append("tel-phone", formData.phone);
    newformData.append("your-message", formData.message);
    newformData.append("_wpcf7_unit_tag", "8c6c893");

    try {
      const response = await fetch(
        "https://chevaldemo.xyz/demo/white-label/wp-json/contact-form-7/v1/contact-forms/5/feedback",
        {
          method: "POST",
          body: newformData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setSelectedData({
        title: "Thank You for Getting in Touch!",
        full_description:
          "Your message has been received. We'll respond as soon as possible.",
      });
      setIsModalOpen(true);

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
  const close = () => {
    setIsModalOpen(false);
    setSelectedData(null);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-y-8 pt-5 md:pt-8"
      >
        {" "}
        <motion.input
          type="text"
          placeholder="Name"
          required
          maxLength={50}
          id="Name"
          name="name"
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
          name="email"
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
          className="font-switzer text-sm leading-[118.423%] uppercase py-3 md:py-4 px-12 md:px-16 flex items-center justify-center bg-[#EAE4D6] rounded-full w-fit text-main border border-[#EAE4D6] hover:text-[#EAE4D6] hover:bg-transparent duration-300 transition-all hover:scale-105 hover:-translate-y-2 mx-auto md:mx-0"
        >
          Submit
        </motion.button>
      </form>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isModalOpen && (
          <Modal
            modalOpen={isModalOpen}
            handleClose={close}
            data={selectedData}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
