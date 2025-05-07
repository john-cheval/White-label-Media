import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <section className="containers pt-28 pb-14">
      <div className="grid grid-cols-12 pl-24">
        <div className="col-span-8">
          <p className="font-switzer text-center text-sm leading-[118.423%] uppercase py-2 px-6 w-fit rounded-full border border-main">
            Diversity, Equity & Inclusion
          </p>
          <h3 className="text-[80px] leading-[123%] uppercase font-medium mt-9 mb-3">
            Our Values: Built on Trust, Integrity & Loyalty
          </h3>
          <p className="text-base font-light font-switzer uppercase leading-[161%] max-w-[450px] ml-[50px]">
            A proud multi-national team of 50+ experts consisting of more than
            16 different nationalities, we bring our diverse cultural and work
            experiences from across the globe to our clients.No job is too small
            and egos are left at the door. Driven by passion our team is a bunch
            of happy people who love what they do.
          </p>
        </div>
        <div className="col-span-4">
          <Image
            src={"/careers/image2.jpg"}
            alt="group"
            width={500}
            height={500}
            sizes="100vw"
            className="w-full h-auto object-cover"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </div>
      </div>
    </section>
  );
};

export default Section3;
