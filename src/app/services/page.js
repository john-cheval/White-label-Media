import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { services } from "../lib/servicesData";
import * as motion from "motion/react-client";

const Service = () => {
  return (
    <section className="containers text-[#EAE4D6] bg-main py-24 h-full">
      <div className="grid grid-cols-2">
        <div
          className="space-y-16 pl-16"
          style={{
            position: "sticky",
            top: "100px",
            alignSelf: "start",
          }}
        >
          <h1 className="text-[80px] leading-[118.423%] uppercase">
            Together, we <br /> create.
          </h1>

          <div className="flex gap-x-20">
            <p className="text-3xl leading-[190%]">
              Serving 10+ <br /> Countries across the globe.
            </p>
            <p className="text-3xl leading-[190%]">
              A team of <br /> 50+ and thriving
            </p>
          </div>

          <Link
            href={"/about"}
            className="font-switzer text-sm font-semibold leading-[118.423%] uppercase py-4 px-8 flex items-center gap-x-10 border-[1.5px] border-[#EAE4D6] w-fit group
            "
          >
            Discover the group{" "}
            <IoIosArrowRoundForward
              size={25}
              className="group-hover:translate-x-2 transition-transform duration-300"
            />
          </Link>
        </div>
        <div className="space-y-9 overflow-y-auto-">
          {[...services, ...services]?.map((service, index) => (
            <motion.div
              key={index}
              initial={index >= 5 ? { opacity: 0, x: 100 } : false}
              whileInView={index >= 5 ? { opacity: 1, x: 0 } : false}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false, amount: 0.7 }}
              className="space-y-2 border-b border-b-[#EAE4D6] pb-7"
            >
              <h5 className="font-switzer text-3xl font-semibold leading-[141%]">
                {service?.title}
              </h5>
              <p className="font-switzer text-base  leading-[161%]">
                {service?.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
