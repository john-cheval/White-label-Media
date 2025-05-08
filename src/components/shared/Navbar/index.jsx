import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMenuOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 border-b border-b-[#DBDBDB] containers relative bg-white ">
      <div className="flex-1 flex justify-center">
        <div className="max-w-[260px] w-full px-4">
          <Link href={"/"} className="relative z-50">
            <Image
              src={"/common/logo.svg"}
              alt="White Label Media"
              width={260}
              height={80}
              sizes="100vw"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
              className="w-full h-auto object-cover"
            />
          </Link>
        </div>
      </div>

      <div>
        <IoMenuOutline className="text-main text-3xl cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
