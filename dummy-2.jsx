import { servicesData } from "@/app/lib/homeData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  const isVideo = (url) => url.endsWith(".mp4");
  return (
    <section className="containers pt-24 serviceBg">
      <div className="grid grid-cols-12 gap-x-8">
        <div className="col-span-4">
          {isVideo(servicesData[0]?.image) ? (
            <video
              src={servicesData[0]?.image}
              autoPlay
              loop
              playsInline
              muted
              className="w-full h-full max-w-[450px] max-h-[300px] object-cover "
            />
          ) : (
            <Image
              src={servicesData[0]?.image}
              alt={"title"}
              sizes="100vw"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
              height={300}
              width={450}
              className="w-full h-auto max-h-[300px]- object-cover"
            />
          )}
        </div>
        <div className="col-span-8">
          <div className="grid grid-cols-12 gap-x-3">
            <div className=" space-y-2 col-span-8">
              <h3 className="main-heading">Our Services</h3>
              <p className=" font-switzer text-base leading-[193%]">
                With each Co-Founder bringing senior level of expertise we take
                pride in being a collective group of creative consultancies.
                Together as one entity; we bring an entire team of marketeers
                and strategists offering a complete 360 solution to marketing
                and developing your business
              </p>
            </div>

            <Link
              href={"/services"}
              className="col-span-4 font-switzer text-sm leading-[118.423%] uppercase py-4 px-10 border border-main rounded-full inline-block h-fit w-fit self-baseline ml-auto mt-5"
            >
              Explore more
            </Link>
          </div>

          <div className="border-t border-t-[#c7c7c7] mt-14">
            {servicesData?.map((serivce, index) => (
              <div
                key={serivce?.id || index}
                className="py-9 border-b border-b-[#c7c7c7] group grid grid-cols-2 gap-x-2"
              >
                <div className="relative h-[1.2em]- text-[40px] font-medium leading-[141%] max-w-[80%] py-9">
                  {" "}
                  <span className="absolute  top-1/2 -translate-y-1/2 font-gambetta opacity-100    group-hover:opacity-0 transition-all duration-300">
                    {serivce?.title}
                  </span>
                  <span className="absolute  top-1/2 -translate-y-1/2 font-gt opacity-0 group-hover:text-[#385B93] group-hover:opacity-100 transition-all duration-300">
                    {serivce?.title}
                  </span>
                </div>

                <p className="font-switzer text-base leading-[193%]  group-hover:text-[#385B93] transition-all duration-300 text-left ">
                  {serivce?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
