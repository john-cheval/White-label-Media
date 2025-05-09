import Link from "next/link";
import React from "react";

const Section4 = () => {
  return (
    <section className="pb-7 md:pb-10 lg:pb-20 xl:pb-28 2xl:pb-40 containers careersbg">
      <div className="flex flex-col text-center gap-y-3">
        <h3 className=" text-3xl md:text-[40px] xl:text-[60px] font-medium leading-[141%]">
          Be part of our Vision
        </h3>
        <p className=" font-light font-switzer text-sm md:text-base  leading-[161%]">
          Join us in shaping the future—where creativity, integrity, and
          innovation come together to make an impact
        </p>
        <Link
          href={"mailto:hr@whitelabelmedia.com"}
          className=" text-xl lg:text-2xl xl:text-[40px]  font-medium leading-[141%]"
        >
          hr@whitelabelmedia.com
        </Link>
      </div>
    </section>
  );
};

export default Section4;
