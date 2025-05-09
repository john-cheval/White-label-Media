import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { PiDeviceMobileSpeaker } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import ContactForm from "../Form";
import * as motion from "motion/react-client";

const Contact = () => {
  return (
    <section className="!bg-main contactBg containers text-[#EAE4D6] pt-10 md:pt-14 lg:pt-20 xl:pt-40 pb-14 md:pb-16 lg:pb-20 xl:pb-24 space-y-4 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-switzer text-base  md:text-xl lg:text-2xl font-light leading-[150%] md:max-w-[420px] text-center md:text-left"
      >
        Probably the best coffee you have had See you soon at our PlayQuarters
      </motion.p>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 flex flex-col items-center  md:border-r md:border-r-[#EAE4D6] text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px] leading-[118.423%] mb-5 md:mb-9"
          >
            Get in Touch
          </motion.h1>

          <div className="font-switzer  text-base  md:text-xl lg:text-2xl leading-[150%] space-y-6 md:space-y-9 lg:ml-[80px] xl:ml-[150px] ">
            <motion.h5
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-semibold md:ml-[55px]"
            >
              WHITE LABEL MEDIA HQ
            </motion.h5>

            <ul className="font-light flex flex-col items-center md:items-start gap-y-6 md:gap-y-8 lg:gap-y-11">
              {[
                {
                  icon: <IoLocationSharp size={18} />,
                  text: "Office 305, Warsan Towers, Barsha Heights Dubai, United Arab Emirates",
                  href: "/",
                },
                {
                  icon: <PiDeviceMobileSpeaker size={18} />,
                  text: ["+971 4 564 0367", "+971 50 8568028"],
                  href: ["tel:+97145640367", "tel:+971508568028"],
                },
                {
                  icon: <IoMail size={18} />,
                  text: "Hello@whitelabelmedia.me",
                  href: "mailto:Hello@whitelabelmedia.me",
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.8 }}
                  className="flex gap-x-3 items-start"
                >
                  <span className="p-3 h-fit border border-[#EAE4D6] rounded-full  items-center justify-center mt-2 text-[#EAE4D6] hidden md:flex">
                    {item.icon}
                  </span>
                  {Array.isArray(item.text) ? (
                    <div className="flex flex-col">
                      {item.text.map((t, j) => (
                        <Link key={j} href={item.href[j]}>
                          {t}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link href={item.href} className="max-w-[300px] md:mt-2">
                      {item.text}
                    </Link>
                  )}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="col-span-12 md:col-span-6 md:pl-10 lg:pl-20 mt-11 md:mt-0"
        >
          <p className="font-switzer text-base  md:text-xl lg:text-2xl font-light leading-[150%] md:max-w-[450px] mb-4 md:mb-8 text-center md:text-left">
            Feel free to contact us and we will get back to you as soon as we
            can
          </p>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
