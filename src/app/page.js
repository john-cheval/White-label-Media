import Awards from "@/components/Home/Awards";
import Clients from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero";
import OurHouses from "@/components/Home/OurHouses";
import Section2 from "@/components/Home/Section2";
import Services from "@/components/Home/Services";
import Works from "@/components/Home/Works";
import Testimonials from "@/components/shared/Testimonial";
import { fetchData } from "./lib/fetchData";
import generateMetadDataDetails from "./lib/generateMetadata";

export async function generateMetadata() {
  return await generateMetadDataDetails(6, "", false);
}

export default async function Home() {
  const homeData = await fetchData(
    "https://chevaldemo.xyz/demo/white-label/wp-json/custom/v1/full_details?ID=6"
  );
  return (
    <>
      {/* <Hero
        titleTop={homeData?.slider_heading_top}
        titleBottom={homeData?.slider_heading_bottom}
        videoLink={homeData?.slider_video}
        homeLinkText={homeData?.slider_video_heading}
        homeLink={homeData?.slider_video_link}
        description={homeData?.slider_video_description}
        clientName={homeData?.slider_video_description_title}
        position={homeData?.slider_video_description_position}
      />

      <Section2
        heading={homeData?.about_heading}
        description={homeData?.about_description}
        linkText={homeData?.about_link_text}
        link={homeData?.about_link}
        image={homeData?.about_image?.url}
      /> */}
      <OurHouses
        houseHeading={homeData?.our_houses_heading}
        houseDesc={homeData?.our_houses_description}
        house_video={homeData?.our_houses_video?.url}
        companiesList={homeData?.companies_list}
      />
      <Services
        heading={homeData?.our_services_heading}
        description={homeData?.our_services_description}
        services={homeData?.services_list_home}
      />
      <Clients
        heading={homeData?.clients_heading}
        clientsList={homeData?.client_list_home}
      />
      <Works
        heading={homeData?.selection_of_our_works_heading}
        description={homeData?.selection_of_our_works_description}
        workList={homeData?.work_list_home}
      />
      <Testimonials
        heading={homeData?.testimonials_heading}
        testiList={homeData?.testimonials_list}
      />
      <Awards
        heading={homeData?.awards_heading}
        awardsList={homeData?.awards_list}
      />
    </>
  );
}
