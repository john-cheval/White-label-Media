import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { PiDeviceMobileSpeaker } from "react-icons/pi";
import { IoMail } from "react-icons/io5";
import Link from "next/link";
import ContactForm from "../Form";
import * as motion from "motion/react-client";

const Contact = () => {
  return (
    <section className="bg-main contactBg containers text-[#EAE4D6] pt-40 pb-24 space-y-4 overflow-hidden">
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-switzer text-2xl font-light leading-[150%] max-w-[420px]"
      >
        Probably the best coffee you have had See you soon at our PlayQuarters
      </motion.p>

      <div className="grid grid-cols-12">
        <div className="col-span-6 flex flex-col space-y-9 border-r border-r-[#EAE4D6]">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-[90px] leading-[118.423%]"
          >
            Get in Touch
          </motion.h1>

          <div className="font-switzer text-2xl leading-[150%] space-y-9 ml-[150px]">
            <motion.h5
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-semibold ml-[55px]"
            >
              WHITE LABEL MEDIA HQ
            </motion.h5>

            <ul className="font-light space-y-11">
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
                  <span className="p-3 h-fit border border-[#EAE4D6] rounded-full flex items-center justify-center mt-2 text-[#EAE4D6]">
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
                    <Link href={item.href} className="max-w-[300px]">
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
          className="col-span-6 pl-20"
        >
          <p className="font-switzer text-2xl font-light leading-[150%] max-w-[450px] mb-8">
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
