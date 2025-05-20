import Section1 from "@/components/About/Section1";
import Section2 from "@/components/About/Section2";
import Section3 from "@/components/About/Section3";
import Section4 from "@/components/About/Section4";
import Section5 from "@/components/About/Section5";
import Awards from "@/components/Home/Awards";
import React from "react";
import generateMetadDataDetails from "../lib/generateMetadata";
import { fetchData } from "../lib/fetchData";

export async function generateMetadata() {
  return await generateMetadDataDetails(11, "about", false);
}
const About = async () => {
  const aboutData = await fetchData(
    "https://chevaldemo.xyz/demo/white-label/wp-json/custom/v1/full_details?ID=11"
  );
  return (
    <>
      <Section1
        heading={aboutData?.main_heading}
        descriptionOne={aboutData?.about_description_1}
        descriptionTwo={aboutData?.about_description_2}
        image={aboutData?.about_description_image?.url}
      />
      <Section2
        titleOne={aboutData?.sted_by_heading_1}
        titleTwo={aboutData?.sted_by_heading_2}
      />
      <Section3
        list={aboutData?.sted_by_image_list}
        heading={aboutData?.legacy_of_excellence_heading}
        description={aboutData?.legacy_of_excellence_description}
      />
      <Section4
        heading={aboutData?.global_footprint_heading}
        description={aboutData?.global_footprint_description}
        list={aboutData?.global_footprint_list}
      />
      <Section5 compainesList={aboutData?.companies_list} />
      <Awards awardsList={aboutData?.awards_list} />
    </>
  );
};

export default About;
