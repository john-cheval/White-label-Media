import React from "react";
import generateMetadDataDetails from "../lib/generateMetadata";
import { fetchData } from "../lib/fetchData";

export async function generateMetadata() {
  return await generateMetadDataDetails(199, "privacy-policy", false);
}
const PrivacyPolicy = async () => {
  const data = await fetchData(
    "https://chevaldemo.xyz/demo/white-label/wp-json/custom/v1/full_details?ID=199"
  );
  return (
    <section className="mt-20 md:mt-28 containers pt-10 md:pt-14 lg:pt-20  pb-14 md:pb-16 lg:pb-20 xl:pb-24 ">
      <div
        className="flex flex-col gap-y-5"
        dangerouslySetInnerHTML={{ __html: data?.post_content }}
      ></div>
    </section>
  );
};

export default PrivacyPolicy;
