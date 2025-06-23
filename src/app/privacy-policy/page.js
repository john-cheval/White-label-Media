import React from "react";
import generateMetadDataDetails from "../lib/generateMetadata";
import { fetchData } from "../lib/fetchData";
import * as motion from "motion/react-client";

export async function generateMetadata() {
  return await generateMetadDataDetails(199, "privacy-policy", false);
}
const PrivacyPolicy = async () => {
  const data = await fetchData(
    "https://chevaldemo.xyz/demo/white-label/wp-json/custom/v1/full_details?ID=199"
  );
  return (
    <section className="mt-20 md:mt-28 containers pt-10 md:pt-14 lg:pt-20  pb-14 md:pb-16 lg:pb-20 xl:pb-24 ">
      <motion.h1
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="main-heading mb-3 md:mb-5 text-center md:text-left"
      >
        Privacy Policy
      </motion.h1>
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col gap-y-3 sm:gap-y-5 text-sm sm:text-base lg:text-lg text-center md:text-left"
        dangerouslySetInnerHTML={{ __html: data?.post_content }}
      ></motion.div>
    </section>
  );
};

export default PrivacyPolicy;
