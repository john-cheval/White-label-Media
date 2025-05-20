import ContactForm from "@/components/Contact/Contact";
import Map from "@/components/Contact/Map";
import React from "react";
import generateMetadDataDetails from "../lib/generateMetadata";
import { fetchData } from "../lib/fetchData";

export async function generateMetadata() {
  return await generateMetadDataDetails(19, "scontact-us", false);
}

const ContactUs = async () => {
  const contactData = await fetchData(
    "https://chevaldemo.xyz/demo/white-label/wp-json/custom/v1/full_details?ID=19"
  );
  return (
    <>
      <ContactForm data={contactData} />
      <Map />
    </>
  );
};

export default ContactUs;
