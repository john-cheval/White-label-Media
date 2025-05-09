"use client";
import { workData } from "@/app/lib/homeData";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import isVideo from "@/app/lib/checkVideo";

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  const firstSlider = useRef(null);
  const secondSlider = useRef(null);
  const thirdSlider = useRef(null);
  const containerRef = useRef(null);

  const firstSet = workData.slice(0, 6);
  const secondSet = workData.slice(6, 10);
  const thirdSet = workData.slice(10, -1);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.set(firstSlider.current, { yPercent: -85 });
      gsap.set(secondSlider.current, { yPercent: 5 });
      gsap.set(thirdSlider.current, { yPercent: -90 });

      gsap
        .timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom+=200% top",
            scrub: 1.4,
            pin: true,
            // markers: true,
          },
        })
        .to(firstSlider.current, { yPercent: 0 }, 0)
        .to(secondSlider.current, { yPercent: -80 }, 0)
        .to(thirdSlider.current, { yPercent: 0 }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative containers h-[100dvh] w-full overflow-hidden"
      id="works"
      ref={containerRef}
    >
      <div className="grid grid-cols-12">
        <h3 className="main-heading col-span-4">Selection of our works</h3>
        <p className="col-span-8 font-switzer text-base leading-[193%] mt-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley...
        </p>
      </div>

      <div className="grid grid-cols-3 gap-x-24 mt-28">
        <div className="overflow-hidden">
          <div className="flex flex-col gap-y-24" ref={firstSlider}>
            {[...firstSet]?.map((work, index) => (
              <div key={index} className="space-y-4">
                {isVideo(work?.image) ? (
                  <video
                    src={work?.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover  "
                  />
                ) : (
                  <Image
                    src={work?.image}
                    alt={work?.title || `image-${index + 1}`}
                    width={400}
                    height={650}
                    sizes="100vw"
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                    className="w-full h-auto object-cover"
                  />
                )}

                <p className="text-3xl font-medium leading-[141%]">
                  {work?.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex flex-col gap-y-24" ref={secondSlider}>
            {[...secondSet]?.map((work, index) => (
              <div key={index} className="space-y-4">
                {isVideo(work?.image) ? (
                  <video
                    src={work?.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover  "
                  />
                ) : (
                  <Image
                    src={work?.image}
                    alt={work?.title || `image-${index + 1}`}
                    width={400}
                    height={650}
                    sizes="100vw"
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                    className="w-full h-auto object-cover"
                  />
                )}

                <p className="text-3xl font-medium leading-[141%]">
                  {work?.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex flex-col gap-y-24" ref={thirdSlider}>
            {[...thirdSet]?.map((work, index) => (
              <div key={index} className="space-y-4">
                {isVideo(work?.image) ? (
                  <video
                    src={work?.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover  "
                  />
                ) : (
                  <Image
                    src={work?.image}
                    alt={work?.title || `image-${index + 1}`}
                    width={400}
                    height={650}
                    sizes="100vw"
                    unoptimized={
                      process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                    }
                    className="w-full h-auto object-cover"
                  />
                )}

                <p className="text-3xl font-medium leading-[141%]">
                  {work?.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
