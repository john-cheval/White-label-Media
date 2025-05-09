"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "@/app/lib/navLinks";
import { usePathname } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <nav className="flex items-center justify-between py-6 border-b border-b-[#DBDBDB] containers relative bg-white ">
        <div className="flex-1 flex justify-center relative z-50">
          <div className="max-w-[260px] w-full px-4">
            <Link href={"/"}>
              <Image
                src={"/common/logo.svg"}
                alt="White Label Media"
                width={260}
                height={80}
                sizes="100vw"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
                className="w-full h-auto object-cover"
              />
            </Link>
          </div>
        </div>

        <div>
          <IoMenuOutline
            className="text-main text-3xl cursor-pointer relative z-50"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="bg-black/[0.4] backdrop-blur-[14.5px] fixed inset-0 z-[9999] flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              className="bg-white fixed top-0 right-0 px-10 py-12 h-full z-[99999] w-[30%]  flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex justify-between items-center border-b border-[#DBDBDB] pb-9">
                <div className="max-w-[190px] w-full px-4">
                  <Link href={"/"}>
                    <Image
                      src={"/common/logo.svg"}
                      alt="White Label Media"
                      width={260}
                      height={80}
                      sizes="100vw"
                      unoptimized={
                        process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                      }
                      className="w-full h-auto object-cover"
                    />
                  </Link>
                </div>

                <IoMdClose
                  className="text-main text-3xl cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              <ul className="flex flex-col gap-y-6">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.link;
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-between border-b pb-[22px] border-b-[#DBDBDB] group"
                    >
                      <Link
                        href={link.link}
                        className={`text-3xl uppercase leading-[118.423%] font-medium  ${
                          index === 0 ? "pt-6" : ""
                        } ${isActive ? "font-semibold" : "font-normal"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.title}
                      </Link>
                      <IoIosArrowForward
                        color="#B8B8B8"
                        size={20}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </li>
                  );
                })}
              </ul>

              <motion.ul className="flex gap-x-2 justify-center mt-auto  ">
                <li>
                  <Link
                    href={"/"}
                    target="_blank"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-main text-main text-sm"
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    target="_blank"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-main text-main text-sm"
                  >
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    target="_blank"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-main text-main text-sm"
                  >
                    <FaLinkedinIn />
                  </Link>
                </li>
              </motion.ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
