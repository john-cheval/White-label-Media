import Image from "next/image";
import Link from "next/link";
import React from "react";
import * as motion from "motion/react-client";
const Section5 = () => {
  const clientsData = Array.from({ length: 13 }, (_, i) => {
    return `services/clients/${i + 1}.svg`;
  });

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="px-6 md:px-16 lg:px-20 xl:px-[116px] pb-16">
      <motion.div
        className="flex  flex-wrap gap-12 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {clientsData?.map((client, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Image
              src={client}
              alt="client"
              width={100}
              height={100}
              unoptimized={process.env.NEXT_PUBLIC_IMAGE_UNOPTIMIZED === "true"}
              className="w-full h-auto"
            />
          </motion.div>
        ))}
      </motion.div>

      <div className=" justify-center mt-16 hidden md:flex">
        <Link
          href={"/group-of-companies"}
          className="font-switzer text-sm uppercase leading-[118.423%] px-11 py-4 border border-main rounded-full text-center hover:bg-main hover:text-white transition-all duration-300"
        >
          Explore the group
        </Link>
      </div>
    </section>
  );
};

export default Section5;
