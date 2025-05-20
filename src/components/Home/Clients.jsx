// "use client";
import React from "react";
import ClientsMobile from "./ClientsMobile";

const Clients = ({ heading, clientsList }) => {
  const firstSet = clientsList?.slice(0, 6);
  const secondSet = clientsList?.slice(6, 12);

  return (
    <section
      className="relative overflow-x-hidden w-full containers pt-10 pb-12 lg:pb-16 xl:pb-24 h-fit"
      id="clients"
    >
      <h3 className="main-heading text-center md:text-left mb-8 ">{heading}</h3>

      <ClientsMobile clientsList={firstSet} />
      <ClientsMobile clientsList={secondSet} isReversed={true} />
    </section>
  );
};

export default Clients;
