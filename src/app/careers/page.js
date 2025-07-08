import Section1 from "@/components/Careers/Section1";
import Section2 from "@/components/Careers/Section2";
import Section3 from "@/components/Careers/Section3";
import Section4 from "@/components/Careers/Section4";
import React from "react";
import generateMetadDataDetails from "../lib/generateMetadata";
import { fetchData } from "../lib/fetchData";
import { baseUrl } from "../ui/apiUrl";

export async function generateMetadata() {
  return await generateMetadDataDetails(17, "careers", false);
}

const Careers = async () => {
  const careersData = await fetchData(
    `${baseUrl}/custom/v1/full_details?ID=17`
  );
  return (
    <>
      <Section1 data={careersData?.section_list} />
      <Section2 data={careersData?.section_list[2]} />
      <Section3 data={careersData?.section_list[3]} />
      <Section4 data={careersData?.section_list[4]} />
    </>
  );
};

export default Careers;
