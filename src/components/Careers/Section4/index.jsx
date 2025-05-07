import Link from "next/link";
import React from "react";

const Section4 = () => {
  return (
    <section className=" pb-40 containers careersbg">
      <div className="flex flex-col text-center gap-y-3">
        <h3 className="text-[60px] font-medium leading-[141%]">
          Be part of our Vision
        </h3>
        <p className=" font-light font-switzer text-base leading-[161%]">
          Join us in shaping the future—where creativity, integrity, and
          innovation come together to make an impact
        </p>
        <Link
          href={"mailto:hr@whitelabelmedia.com"}
          className="text-[40px] font-medium leading-[141%]"
        >
          hr@whitelabelmedia.com
        </Link>
      </div>
    </section>
  );
};

export default Section4;
