import Image from "next/image";
import React from "react";

const Section2 = () => {
  const images = [
    "/careers/image3.jpg",
    "/careers/image3.jpg",
    "/careers/image3.jpg",
  ];
  const isVideo = (url) => url.endsWith(".mp4") || url.endsWith(".mov");

  return (
    <section className="containers space-y-11">
      <div className="flex flex-col items-end gap-y-2 ">
        <h3 className="text-[80px] font-medium leading-[123%] uppercase">
          OUR ETHOS
        </h3>
        <p className="font-switzer text-base font-light leading-[161%] max-w-[700px]- text-right">
          We prioritize integrity, equality, and inclusion, <br />
          fostering an environment where everyone thrives. Providing equal and
          inclusive opportunities for all.
        </p>
      </div>

      <div className="flex gap-x-5">
        {images?.map((image, index) => {
          return isVideo(image) ? (
            <div key={index}>
              <video
                src={image}
                autoPlay
                playsInline
                muted
                loop
                className="w-full h-auto object-cover"
              />
            </div>
          ) : (
            <div key={index}>
              <Image
                src={image}
                alt={`image-${index + 1}`}
                sizes="100vw"
                height={500}
                width={450}
                className="w-full h-auto object-cover"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section2;
