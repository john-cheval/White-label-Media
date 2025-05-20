import ServiceClients from "@/components/Services/Clients";
import Services from "@/components/Services/Services";
import Works from "@/components/Services/Works";
import generateMetadDataDetails from "../lib/generateMetadata";
import { fetchData } from "../lib/fetchData";
export async function generateMetadata() {
  return await generateMetadDataDetails(13, "services", false);
}
const Service = async () => {
  const servicesData = await fetchData(
    "https://chevaldemo.xyz/demo/white-label/wp-json/custom/v1/full_details?ID=13"
  );
  return (
    <>
      <Services
        heading={servicesData?.main_heading}
        small_heading_one={servicesData?.small_heading_1}
        small_heading_two={servicesData?.small_heading_2}
        linkText={servicesData?.discover_the_group_button_text}
        link={servicesData?.discover_the_group_button_link}
        servicesList={servicesData?.services_list}
      />
      <Works
        heading={servicesData?.work_heading}
        workList={servicesData?.work_list_servicepage}
      />
      <ServiceClients
        heading={servicesData?.client_heading}
        clientsData={servicesData?.client_list_servicepage}
      />
    </>
  );
};

export default Service;
