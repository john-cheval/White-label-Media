import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { MdAdUnits } from "react-icons/md";
import Link from "next/link";
import ContactForm from "../Form";
import * as motion from "motion/react-client";

const Contact = ({ data }) => {
  return (
    <section className="!bg-main contactBg containers text-[#EAE4D6]  pt-24 md:pt-40 pb-14 md:pb-16 lg:pb-20 xl:pb-24 space-y-4 overflow-hidden ">
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="font-switzer text-base  md:text-xl lg:text-2xl-- lg:text-xl- font-light leading-[150%] md:max-w-[420px] text-center md:text-left"
        dangerouslySetInnerHTML={{ __html: data?.get_in_touch_description }}
      >
        {/* {data?.get_in_touch_description} */}
      </motion.p>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 flex flex-col   md:border-r md:border-r-[#EAE4D6] text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-[40px] md:text-[50px] lg:text-[70px] xl:text-[90px] leading-[118.423%] mb-5 md:mb-9"
          >
            {data?.get_in_touch_heading}
          </motion.h1>

          <div className="font-switzer  text-base  md:text-xl lg:text-2xl- leading-[150%] space-y-6 md:space-y-9 lg:ml-[80px] xl:ml-[150px] ">
            <motion.h5
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-semibold md:ml-[55px]"
            >
              {data?.company_name}
            </motion.h5>

            <ul className="font-light flex flex-col items-center md:items-start gap-y-6 md:gap-y-8 lg:gap-y-11">
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex gap-x-3 items-start"
              >
                <span className="p-3 h-fit border border-[#EAE4D6] rounded-full  items-center justify-center mt-2 text-[#EAE4D6] hidden md:flex">
                  <IoLocationSharp size={18} />
                </span>
                <Link
                  href={
                    "https://www.google.com/maps/dir/?api=1&destination=White+Label+Media+Barsha+Heights+-+Dubai"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="max-w-[300px]"
                >
                  {data?.address}
                </Link>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex gap-x-3 items-start"
              >
                <span className="p-3 h-fit border border-[#EAE4D6] rounded-full  items-center justify-center mt-2 text-[#EAE4D6] hidden md:flex">
                  <MdAdUnits size={18} />
                </span>
                <div className="flex flex-col">
                  {data?.phone_list &&
                    data?.phone_list?.map((phone, index) => (
                      <Link
                        key={index}
                        href={`tel:${phone?.phone_number}`}
                        className="max-w-[300px]"
                      >
                        {phone?.phone_number}
                      </Link>
                    ))}
                </div>
              </motion.li>
              <motion.li
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex gap-x-3 items-center"
              >
                <span className="p-3 h-fit border border-[#EAE4D6] rounded-full  items-center justify-center mt-2 text-[#EAE4D6] hidden md:flex">
                  <IoMail size={18} />
                </span>
                <Link href={`mailto:${data?.email_address}`}>
                  {data?.email_address}
                </Link>
              </motion.li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="col-span-12 md:col-span-6 md:pl-10 lg:pl-20 mt-11 md:mt-0"
        >
          <p className="font-switzer text-base  md:text-xl lg:text-2xl- font-light leading-[150%] md:max-w-[450px] mb-4 md:mb-8 text-center md:text-left">
            {data?.form_heading}
          </p>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
