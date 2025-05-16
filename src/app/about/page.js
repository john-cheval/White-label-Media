import Section1 from "@/components/About/Section1";
import Section2 from "@/components/About/Section2";
import Section3 from "@/components/About/Section3";
import Section4 from "@/components/About/Section4";
import Section5 from "@/components/About/Section5";
import Awards from "@/components/Home/Awards";
import dynamic from "next/dynamic";
import React from "react";

const About = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Awards />
    </>
  );
};

export default About;
