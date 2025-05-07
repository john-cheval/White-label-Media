import { footerLink } from "@/app/lib/homeData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import * as motion from "motion/react-client";

const parentVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  return (
    <footer className="footer-grad containers pt-20 relative">
      <div className="grid grid-cols-12 border-b border-b-white pb-20">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="col-span-4 space-y-12"
        >
          <motion.div variants={childVariants}>
            <Image
              src={"/common/footer_logo.svg"}
              alt="footer_logo"
              width={175}
              height={130}
              sizes="100vw"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
              className="w-full h-auto object-cover max-w-[175px]"
            />
          </motion.div>

          <motion.div
            variants={parentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-3"
          >
            <motion.div
              variants={childVariants}
              className="flex flex-col gap-y-1"
            >
              <span className="text-[#EAE4D6] font-switzer text-lg leading-[193%]">
                Email
              </span>
              <Link
                href={"mailto:hello@whitelabelmedia.me"}
                className="text-white text-3xl leading-[141%]"
              >
                hello@whitelabelmedia.me
              </Link>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="flex flex-col gap-y-1"
            >
              <span className="text-[#EAE4D6] font-switzer text-lg leading-[193%]">
                Phone Number
              </span>
              <Link
                href={"tel:+971 50 856 8028"}
                className="text-white text-3xl leading-[141%]"
              >
                +971 50 856 8028
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="col-span-3 mt-auto flex flex-col items-center- gap-y-3"
        >
          <motion.p
            variants={childVariants}
            className="text-lg font-switzer leading-[193%] text-[#EAE4D6] -ml-140- "
          >
            Follow Us
          </motion.p>
          <motion.ul variants={childVariants} className="flex gap-x-2">
            <li>
              <Link
                href={"/"}
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-[#DEDEDE] text-white text-sm"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-[#DEDEDE] text-white text-sm"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                target="_blank"
                className="w-11 h-11 flex items-center justify-center rounded-full border border-[#DEDEDE] text-white text-sm"
              >
                <FaLinkedinIn />
              </Link>
            </li>
          </motion.ul>
        </motion.div>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="col-span-5 mt-auto"
        >
          <motion.p
            variants={childVariants}
            className="text-[#EAE4D6] text-[40px] font-medium border-b-1 border-b-white border-b pb-5"
          >
            Committed to high standards of excellence
          </motion.p>

          <motion.ul
            variants={parentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-x-10 gap-y-6 flex-wrap pt-8 max-w-[80%]"
          >
            {footerLink?.map((links, index) => (
              <motion.li
                variants={childVariants}
                key={index}
                className="hover:scale-105 hover:-translate-y-1 transition-transform duration-300"
              >
                <Link
                  href={links?.link}
                  className="text-[#EAE4D6] font-switzer text-sm font-medium uppercase "
                >
                  {links?.title}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="pt-6 pb-10 flex  justify-between"
      >
        <motion.p
          variants={childVariants}
          className="text-[#EAE4D6] font-switzer text-sm leading-[170%] capitalize"
        >
          © 2024 White label Group . All rights reserved
        </motion.p>
        <motion.p
          variants={childVariants}
          className="text-[#EAE4D6] font-switzer text-sm leading-[170%] capitalize text-right group"
        >
          Designed & Developed by{" "}
          <Link
            href={"https://chevalme.com/"}
            target="_blank"
            className=" group-hover:underline group-hover:underline-offset-2 "
          >
            Cheval
          </Link>
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
