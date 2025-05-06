import { awardsList } from "@/app/lib/homeData";
import Image from "next/image";
import React from "react";

const Awards = () => {
  const rows = [
    awardsList?.slice(0, 4),
    awardsList?.slice(4, 7),
    awardsList?.slice(7, 9),
  ];
  return (
    <section className="containers bg-[#161616] py-16">
      <h3 className="main-heading !text-white">Awards</h3>

      <div className=" border-y border-y-main mt-6">
        {rows?.map((row, rowIndex) => {
          const columns =
            row.length === 4
              ? "grid-cols-4"
              : row.length === 3
              ? "grid-cols-3"
              : "grid-cols-1";

          const isLastRow = rowIndex === rows.length - 1;

          return (
            <div
              key={rowIndex}
              className={`border-b border-b-main ${
                isLastRow ? "flex justify-center" : ""
              }`}
            >
              <div
                className={`grid ${columns} gap-0 ${
                  isLastRow ? "w-fit" : "w-full"
                }`}
              >
                {row?.map((award, index) => (
                  <div
                    key={index}
                    className={`relative flex items-center justify-center p-8 ${
                      index === row.length - 1 ? "" : "border-r border-r-main"
                    }`}
                  >
                    <Image
                      src={award.image}
                      alt={`Award ${index + 1}`}
                      width={250}
                      height={100}
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                      unoptimized={
                        process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Awards;
