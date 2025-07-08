import Section1 from "@/components/Sectors/Section1";
import React from "react";
import generateMetadDataDetails from "../lib/generateMetadata";
import { fetchData } from "../lib/fetchData";
import { baseUrl } from "../ui/apiUrl";

export async function generateMetadata() {
  return await generateMetadDataDetails(15, "group-of-companies", false);
}

const Sectors = async () => {
  const { companies_list } = await fetchData(
    `${baseUrl}/custom/v1/full_details?ID=15`
  );

  return (
    <>
      <Section1 companiesList={companies_list} />
    </>
  );
};

export default Sectors;
