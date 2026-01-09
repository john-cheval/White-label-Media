import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
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

const Footer = ({ footerLink }) => {
  const [firstText, secondText] = footerLink?.footer_heading.split("</br>");

  return (
    <footer className="footer-grad containers pt-[74px] relative">
      <div className="grid grid-cols-12 border-b border-b-white pb-7 md:pb-10 lg:pb-14  2xl:pb-[74px]  place-items-center-">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="col-span-12 md:col-span-4 space-y-4 md:space-y-5 lg:space-y-8 2xl:space-y-12"
        >
          <motion.div variants={childVariants}>
            <Link href={"/"}>
              <Image
                src={"/common/footer_logo.svg"}
                alt="footer_logo"
                width={175}
                height={130}
                sizes="100vw"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
                className="w-full- h-auto object-cover w-[100px] md:max-w-[175px] mx-auto md:mx-0"
              />
            </Link>
          </motion.div>

          <motion.div
            variants={parentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-2 md:space-y-3"
          >
            <motion.div
              variants={childVariants}
              className="flex flex-col gap-y-1 items-center md:items-start"
            >
              <span className="text-[#EAE4D6] font-switzer text-base md:text-lg leading-[193%]">
                Email
              </span>
              <Link
                href={`mailto:${footerLink?.email_address}`}
                className="text-white text-xl lg:text-2xl xl:text-3xl leading-[141%]"
              >
                {footerLink?.email_address}
              </Link>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="flex flex-col gap-y-1 items-center md:items-start"
            >
              <span className="text-[#EAE4D6] font-switzer text-base md:text-lg leading-[193%]">
                Phone Number
              </span>
              <Link
                href={`tel:${footerLink?.phone_number}`}
                className="text-white text-xl lg:text-2xl xl:text-3xl leading-[141%]"
              >
                {footerLink?.phone_number}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="col-span-12 md:col-span-3 mt-5 mb-7 md:mt-auto flex flex-col items-center md:items-start gap-y-2 md:gap-y-3"
        >
          <motion.p
            variants={childVariants}
            className="text-base md:text-lg font-switzer leading-[193%] text-[#EAE4D6]  "
          >
            Follow Us
          </motion.p>
          <motion.ul variants={childVariants} className="flex gap-x-2">
            <li>
              <Link
                href={footerLink?.facebook_link}
                target="_blank"
                aria-label="Facebook"
                className="md:w-11 md:h-11 w-9  h-9 flex items-center justify-center rounded-full border border-[#DEDEDE] text-white text-xs md:text-sm"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                href={footerLink?.instagram_link}
                target="_blank"
                aria-label="Instagram"
                className="md:w-11 md:h-11 w-9  h-9 flex items-center justify-center rounded-full border border-[#DEDEDE] text-white text-xs md:text-sm"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href={footerLink?.linkedin_link}
                target="_blank"
                aria-label="Linkedin"
                className="md:w-11 md:h-11 w-9  h-9 flex items-center justify-center rounded-full border border-[#DEDEDE] text-white text-xs md:text-sm"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link
                href={
                  footerLink?.youtube_link ||
                  "https://www.youtube.com/@whitelabelmedia3613"
                }
                target="_blank"
                aria-label="Youtube"
                className="md:w-11 md:h-11 w-9  h-9 flex items-center justify-center rounded-full border border-[#DEDEDE] text-white text-xs md:text-sm"
              >
                <FaYoutube />
              </Link>
            </li>
            <li>
              <Link
                href={
                  footerLink?.tiktok_link ||
                  "https://www.tiktok.com/@whitelabelmedia"
                }
                target="_blank"
                aria-label="tikTok"
                className="md:w-11 md:h-11 w-9  h-9 flex items-center justify-center rounded-full border border-[#DEDEDE] text-white text-xs md:text-sm"
              >
                <FaTiktok />
              </Link>
            </li>
          </motion.ul>
        </motion.div>
        <motion.div
          variants={parentVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="col-span-12 md:col-span-5 mt-auto"
        >
          <motion.p
            variants={childVariants}
            className="text-[#EAE4D6] text-xl md:text-2xl xl:text-3xl 2xl:text-[40px] font-medium md:border-b-1 border-b-white md:border-b md:pb-5 text-center md:text-left flex flex-col gap-y-3 md:gap-y-2"
            // dangerouslySetInnerHTML={{
            //   __html: footerLink?.footer_heading,
            // }}
            style={{ lineHeight: 1.2 }}
          >
            <span className="text-center md:text-right">{firstText}</span>{" "}
            <span className="text-center md:text-right">{secondText}</span>
          </motion.p>

          <motion.ul
            variants={parentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-x-2 md:gap-x-6 lg:gap-x-10 gap-y-3 md:gap-y-6 flex-wrap pt-3 md:pt-5 lg:pt-8 md:max-w-[80%] justify-center md:justify-start"
          >
            {footerLink?.menu_tree &&
              footerLink?.menu_tree?.map((links, index) => {
                const url = links?.url === "" ? "/" : links?.url;
                return (
                  <motion.li
                    variants={childVariants}
                    key={index}
                    whileHover={{ scale: 1.05, y: -4 }}
                    // transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={url}
                      className="text-[#EAE4D6] font-switzer text-sm font-medium uppercase flex items-center justify-center gap-x-1 md:gap-x-0 "
                    >
                      {links?.title}{" "}
                      {index !== footerLink.menu_tree?.length - 1 && (
                        <span className="md:hidden">|</span>
                      )}
                    </Link>
                  </motion.li>
                );
              })}
          </motion.ul>
        </motion.div>
      </div>

      <motion.div
        variants={parentVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="pt-6 pb pb-[74px] md:pb-10 flex gap-y-2 justify-center flex-wrap md:gap-y-0 md:justify-between"
      >
        <div className="flex flex-col gap-y-2 sm:gap-y-0 sm:flex-row sm:gap-x-2 items-center">
          <motion.p
            variants={childVariants}
            className="text-[#EAE4D6] font-switzer text-center sm:text-left text-sm leading-[170%] capitalize"
          >
            © 2026 White label Media Group .<br className="footer-br" /> All
            rights reserved
          </motion.p>
          <span className="text-white hidden sm:block-">|</span>
          {/* <motion.div
            variants={childVariants}
            className="text-[#EAE4D6] font-switzer text-sm leading-[170%] capitalize  "
          >
            <Link href={"/privacy-policy"} className="hover:underline">
              {" "}
              Privacy Policy
            </Link>
          </motion.div> */}
        </div>
        {/* <motion.p
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
        </motion.p> */}
        <motion.div
          variants={childVariants}
          className="text-[#EAE4D6] font-switzer text-sm leading-[170%] capitalize text-right "
        >
          <Link href={"/privacy-policy"} className="hover:underline">
            {" "}
            Privacy Policy
          </Link>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
