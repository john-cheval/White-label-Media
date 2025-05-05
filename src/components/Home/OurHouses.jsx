import { houseData } from "@/app/lib/homeData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const OurHouses = () => {
  return (
    <section className="bg-main containers pb-3">
      <div className="bg-white text-main">
        {/* Section 1 */}
        <div className="grid grid-cols-12">
          <div className="col-span-5 border border-b-1 border-r-0 border-t-0 border-l-0  py-24 pl-24 pr-16 space-y-28">
            <h5 className=" text-6xl font-medium leading-[141%]">Our Houses</h5>
            <p className="font-gt leading-[141%] text-[40px] ">
              Discover our unique and specialised agencies
            </p>

            <div className="flex items-center justify-between group">
              <Link
                href={"/about"}
                className="font-switzer underline uppercase text-sm"
              >
                View all companies
              </Link>
              <GoArrowUpRight className="text-main text-6xl font-light group-hover:rotate-45 transition-transform duration-300" />
            </div>
          </div>

          <div className="col-span-7 grid grid-cols-2">
            {houseData?.slice(0, 4)?.map((house, index) => (
              <div
                key={house?.id || index}
                className={`border ${
                  index === 1 || index === 0
                    ? "border-t-0 border-b-0"
                    : "border-t-1 "
                }  border-main/20 col-span-1 ${
                  index % 2 === 0 ? "border-l-1" : "border-l-0"
                } pt-14 pb-10 px-12 flex flex-col group `}
              >
                <div className="max-w-[250px] max-h-[150px] overflow-hidden">
                  <Image
                    src={house?.image}
                    alt="image-1"
                    sizes="100vw"
                    height={100}
                    width={250}
                    className="w-full h-auto object-cover filter grayscale transition-all duration-500 group-hover:grayscale-0 "
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                  />
                </div>

                <div className="flex flex-col gap-y-5 mt-auto">
                  <span className="h-[1px] w-10 bg-[#EAE4D6] block" />
                  <p className="text-main font-switzer text-sm uppercase !leading-[1.7] max-w-[250px]">
                    {house?.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 */}

        <div className="grid grid-cols-12">
          <div className="col-span-7 grid grid-cols-2">
            {houseData?.slice(0, 4)?.map((house, index) => (
              <div
                key={house?.id || index}
                className={`border ${
                  index === 1 || index === 0
                    ? "border-t-0 border-b-0"
                    : "border-t-1 "
                }  border-main/20 col-span-1 ${
                  index % 2 === 0 ? "border-l-1" : "border-l-0"
                } pt-14 pb-10 px-12 flex flex-col  group min-h-[300px]`}
              >
                <div className="max-w-[250px] max-h-[150px] overflow-hidden ">
                  <Image
                    src={house?.image}
                    alt="image-1"
                    sizes="100vw"
                    height={100}
                    width={250}
                    className="w-full h-auto object-cover transition-all duration-500 group-hover:grayscale-0 filter grayscale "
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                  />
                </div>

                <div className="flex flex-col gap-y-5 mt-auto">
                  <span className="h-[1px] w-10 bg-[#EAE4D6] block" />
                  <p className="text-main font-switzer text-sm uppercase !leading-[1.7] max-w-[250px]">
                    {house?.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-5">
            <video
              autoPlay
              playsInline
              muted
              loop
              src="/Home/test.mp4"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHouses;
