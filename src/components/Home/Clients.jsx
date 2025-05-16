// "use client";
import { clientsData } from "@/app/lib/homeData";

import Image from "next/image";
import React from "react";

import ClientsMobile from "./ClientsMobile";

const Clients = () => {
  const firstSet = clientsData.slice(0, 6);
  const secondSet = clientsData.slice(6, 12);

  return (
    <section
      className="relative overflow-x-hidden w-full containers pt-10 pb-12 lg:pb-16 xl:pb-24 h-fit"
      id="clients"
    >
      <h3 className="main-heading text-center md:text-left mb-8 ">Clients</h3>

      <div className="md:hidden-">
        <ClientsMobile clientsList={firstSet} />
        <ClientsMobile clientsList={secondSet} isReversed={true} />
      </div>
    </section>
  );
};

export default Clients;
