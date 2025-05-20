"use client";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import React, { useMemo, useRef } from "react";
import gsap from "gsap";
const ClientsMobile = ({ clientsList, isReversed = false }) => {
  const elements = [...clientsList, ...clientsList];
  let timeline = useRef();
  const movingContainer = useRef(null);

  useGSAP(() => {
    timeline.current?.kill();

    gsap.set(movingContainer.current, {
      xPercent: isReversed ? -50 : 0,
    });

    timeline.current = gsap.timeline({
      repeat: -2,
      defaults: { ease: "none" },
    });

    timeline.current.to(movingContainer.current, {
      xPercent: isReversed ? 0 : -50,
      duration: 50,
    });
  }, [isReversed]);

  const list = useMemo(() => (
    <div className="flex w-fit ">
      {elements?.map((client, index) => {
        return (
          <div
            key={index}
            className={`border border-main/20 ${
              isReversed ? "border-t-0" : ""
            } ${
              index === 0 ? "border-l-1" : "border-l-0"
            }  flex items-center justify-center py-7 min-w-[240px] shrink-0`}
          >
            <Image
              src={client?.image}
              alt={`${client?.title} || image-${index + 1}`}
              width={250}
              height={150}
              sizes="100vw"
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
              className="w-full h-auto object-cover max-w-[150px] md:max-w-[200px]"
            />
          </div>
        );
      })}
    </div>
  ));
  return (
    <div className="">
      <div ref={movingContainer} className="flex w-fit">
        {list}
        {list}
        {/* {list} */}
        {/* {list} */}
      </div>
    </div>
  );
};

export default ClientsMobile;
