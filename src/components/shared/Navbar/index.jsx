"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";
import { IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import useMediaQuery from "@/app/hooks/useMediaQuery";

const Navbar = ({ navLinks }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const currentScrollY = window.scrollY;
    setBgColor(currentScrollY > 80);
  }, []);

  useEffect(() => {
    const currentScrollY = window.scrollY;
    const handleScroll = () => {
      setBgColor(currentScrollY > 80);
      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <>
      <header
        className={` fixed top-0 w-full z-[999955] transition-all duration-300 ${
          bgColor
            ? "bg-white"
            : pathname.includes("/about")
            ? "bg-transparent"
            : pathname.includes("/careers")
            ? "bg-transparent md:bg-white"
            : "bg-white"
        } ease-in-out ${
          isVisible ? "translate-y-0 shadow-md-" : "-translate-y-full"
        }`}
      >
        <nav
          className={`flex items-center justify-between py-6 border-b border-b-[#DBDBDB] containers relative- `}
          style={{
            willChange: "transform",
          }}
        >
          <div className="md:flex-1 flex justify-center relative z-50">
            <div className="max-w-[120px] sm:max-w-[150px] md:max-w-[260px] w-full md:px-4">
              <Link href={"/"} rel="preload" fetchPriority="high">
                <Image
                  // src={"/common/logo.svg"}
                  src={
                    isMobile ? "/common/mobile_logo.svg" : "/common/logo.svg"
                  }
                  alt="White Label Media"
                  width={260}
                  height={80}
                  sizes="100vw"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  priority
                  className="w-full h-auto md:object-cover"
                />
              </Link>
            </div>
          </div>

          <div>
            <IoMenuOutline
              aria-label="menu open"
              className="text-main text-2xl md:text-3xl cursor-pointer relative z-[9999999999999999999999999999999]"
              onClick={() => setIsOpen(true)}
            />
          </div>
        </nav>
      </header>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="bg-black/[0.4] backdrop-blur-[14.5px] fixed inset-0 z-[999956] flex flex-col "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              className="bg-white fixed top-0 right-0 px-6 md:px-10 py-9 md:py-12 h-full z-[999957] w-full sm:w-[70%] md:w-[50%] xl:w-[30%]  flex flex-col overflow-y-auto scrollbar-hide"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex justify-between items-center border-b border-[#DBDBDB] pb-5 md:pb-9">
                <div className="max-w-[120px] sm:max-w-[150px] md:max-w-[190px] w-full md:px-4">
                  <Link href={"/"} aria-label="Go to Homepage">
                    <Image
                      // src={"/common/logo.svg"}
                      src={
                        isMobile
                          ? "/common/mobile_logo.svg"
                          : "/common/logo.svg"
                      }
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
                  aria-label="close menu"
                  className="text-main text-xl md:text-3xl cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              </div>

              <ul className="flex flex-col gap-y-6">
                {navLinks?.map((link, index) => {
                  const url = link?.url === "" ? "/" : link?.url;
                  const isActive = pathname === url;
                  return (
                    <li
                      key={index}
                      className="flex items-center justify-between border-b pb-5 md:pb-[22px] border-b-[#DBDBDB] group"
                    >
                      <Link
                        href={url}
                        className={`text-xl md:text-2xl lg:text-3xl uppercase leading-[118.423%] font-medium  ${
                          index === 0 ? "pt-5 md:pt-6" : ""
                        } ${isActive ? "font-semibold" : "font-normal"}`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link?.title}
                      </Link>
                      <IoIosArrowForward
                        color="#B8B8B8"
                        // size={20}
                        className="text-2xl md:text-3xl group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </li>
                  );
                })}
              </ul>

              <motion.ul className="flex gap-x-2 justify-center mt-auto pt-5  ">
                <li>
                  <Link
                    href={"/"}
                    target="_blank"
                    aria-label="Facebook"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-main text-main text-sm"
                  >
                    <FaFacebookF className="text-sm md:text-lg" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    target="_blank"
                    aria-label="Instagram"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-main text-main text-sm"
                  >
                    <FaInstagram className="text-sm md:text-lg" />
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/"}
                    target="_blank"
                    aria-label="Linkedin"
                    className="w-11 h-11 flex items-center justify-center rounded-full border border-main text-main text-sm"
                  >
                    <FaLinkedinIn className="text-sm md:text-lg" />
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
