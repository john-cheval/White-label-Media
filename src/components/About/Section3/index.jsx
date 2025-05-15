import isVideo from "@/app/lib/checkVideo";
import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <section className="containers pb-14 md:pb-16 lg:pb-20 xl:pb-[100px] 2xl:pb-[148px]">
      <div className="grid grid-cols-12 gap-x-5 md:gap-x-10 lg:gap-x-16 3xl:gap-x-28">
        <div className="col-span-6 space-y-4 md:space-y-0">
          <div>
            {isVideo("/About/image3.jpg") ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/video.mp4" type="video/mp4" />
              </video>
            ) : (
              <Image
                src="/About/image3.jpg"
                alt="Image"
                width={300}
                height={300}
                sizes="100vw"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="mt-auto  md:hidden  ml-[10%]">
            {isVideo("/About/image2.jpg") ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/assets/video.mp4" type="video/mp4" />
              </video>
            ) : (
              <Image
                src="/About/image2.jpg"
                alt="Image"
                width={300}
                height={300}
                sizes="100vw"
                unoptimized={
                  process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                }
                className="w-full h-full- max-w-[220px] h-[200px]- object-cover"
              />
            )}
          </div>
        </div>
        <div className="col-span-6 flex flex-col w-full gap-y-20- ">
          <div className="flex justify-between- gap-x-10 lg:gap-x-16 3xl:gap-x-28 ">
            <div className="mt-[282px] hidden md:block ">
              {isVideo("/About/image2.jpg") ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/assets/video.mp4" type="video/mp4" />
                </video>
              ) : (
                <Image
                  src="/About/image2.jpg"
                  alt="Image"
                  width={300}
                  height={300}
                  sizes="100vw"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  className="w-full h-full- max-w-[220px] h-[200px]- object-cover"
                />
              )}
            </div>
            <div className="md:w-[300px] w-[121px] h-[121px] md:h-[300px] mt-[50px] md:mt-24">
              {isVideo("/About/video.mp4") ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover "
                >
                  <source src="/About/video.mp4" type="video/mp4" />
                </video>
              ) : (
                <Image
                  src="/About/image2.jpg"
                  alt="Image"
                  width={300}
                  height={300}
                  sizes="100vw"
                  unoptimized={
                    process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                  }
                  className="w-full h-full max-w-[300px] max-h-[300px] object-cover"
                />
              )}
            </div>
          </div>
          <div className="3xl:max-w-[650px] hidden lg:flex flex-col mt-16 gap-y-9">
            <h3 className="text-[6vw] 3xl:text-[60px] font-medium leading-[118.423%]">
              A Legacy of Excellence, Innovation & Growth
            </h3>
            <p className="text-base leading-[162%] font-switzer">
              With 12+ years of experience, a 50+ member specialized team, and a
              global footprint spanning 10+ countries, we are committed to the
              continuous development of our creative houses. We honor the vision
              of their founders, uphold their unique expertise, and maintain the
              highest standards of excellence. Having partnered with 300+
              industry-agnostic clients, we bring innovation, strategy, and
              creativity together to deliver unparalleled impact.
            </p>
          </div>
        </div>

        <div className="px-6 col-span-12  lg:hidden flex flex-col mt-10 gap-y-5 text-center">
          <h3 className=" text-3xl md:text-[6vw] 3xl:text-[60px] font-medium leading-[118.423%]">
            A Legacy of Excellence, Innovation & Growth
          </h3>
          <p className="text-base leading-[162%] font-switzer">
            With 12+ years of experience, a 50+ member specialized team, and a
            global footprint spanning 10+ countries, we are committed to the
            continuous development of our creative houses. We honor the vision
            of their founders, uphold their unique expertise, and maintain the
            highest standards of excellence. Having partnered with 300+
            industry-agnostic clients, we bring innovation, strategy, and
            creativity together to deliver unparalleled impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section3;
