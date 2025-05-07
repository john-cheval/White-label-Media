import Image from "next/image";
import React from "react";

const Section1 = () => {
  return (
    <section className="containers py-24 space-y-28 relative  ">
      <div className="grid grid-cols-12 gap-x-10 relative z-50 pl-16">
        <div className=" flex flex-col justify-center gap-y-6 col-span-6">
          <p className="font-switzer text-center text-sm leading-[118.423%] uppercase py-2 px-5 w-fit rounded-full border border-main">
            Be part of our vision
          </p>
          <h1 className="text-[110px] leading-[118.423%] uppercase">
            Work with
          </h1>
          <p className="text-5xl font-medium uppercase leading-[141%]">
            White Label Media
          </p>
        </div>
        <div className="col-span-6">
          <Image
            src={"/careers/image1.jpg"}
            alt="Team_white_label"
            height={550}
            width={780}
            sizes="100vw"
            className="w-full h-auto object-cover"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-x-10-- relative z-50 pl-16">
        <div className="col-span-5 ">
          <Image
            src={"/careers/image.jpg"}
            alt="Team_white_label"
            height={550}
            width={780}
            sizes="100vw"
            className="w-full h-auto object-cover"
            unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
          />
        </div>
        <span className="col-span-1"></span>
        <div className=" flex flex-col justify-center gap-y-6 col-span-6">
          <h1 className="text-[80px] leading-[123%] uppercase font-medium">
            CORE TEAM
          </h1>
          <p className="text-base font-light font-switzer uppercase leading-[161%] max-w-[450px] ml-[50px]">
            A proud multi-national team of 50+ experts consisting of more than
            16 different nationalities, we bring our diverse cultural and work
            experiences from across the globe to our clients.No job is too small
            and egos are left at the door. Driven by passion our team is a bunch
            of happy people who love what they do.
          </p>
        </div>
      </div>

      <div className="absolute bg-[#E3EEFF] blur-[250px] h-[900px] w-[900px] rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50-" />
    </section>
  );
};

export default Section1;
