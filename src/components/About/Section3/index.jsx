import isVideo from "@/app/lib/checkVideo";
import Image from "next/image";
import React from "react";

const Section3 = () => {
  return (
    <section className="containers pb-[148px]">
      <div className="grid grid-cols-12 gap-x-28">
        <div className="col-span-6">
          <div>
            {isVideo("/about/image3.jpg") ? (
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
                src="/about/image3.jpg"
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
        </div>
        <div className="col-span-6 flex flex-col w-full gap-y-20- ">
          <div className="flex justify-between gap-x-28 ">
            <div className="mt-auto ">
              {isVideo("/about/image2.jpg") ? (
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
                  src="/about/image2.jpg"
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
            <div className="w-[300px] h-[300px]">
              {isVideo("/about/video.mp4") ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover "
                >
                  <source src="/about/video.mp4" type="video/mp4" />
                </video>
              ) : (
                <Image
                  src="/about/image2.jpg"
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
          <div className="max-w-[650px] flex flex-col mt-16 gap-y-9">
            <h3 className="text-[60px] font-medium leading-[118.423%]">
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
      </div>
    </section>
  );
};

export default Section3;
