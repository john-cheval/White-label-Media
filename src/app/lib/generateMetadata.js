async function generateMetadDataDetails(id, path, slug = false) {
  try {
    const res = await fetch(
      `https://chevaldemo.xyz/demo/white-label/wp-json/custom/v1/full_details?${
        slug ? "slug" : "ID"
      }=${id}`
    );
    const data = await res.json();

    const title = data?.meta_title || "White Label Media";
    const description = data?.meta_description || "White Label Media";
    const image =
      data?.meta_image ||
      "https://images.squarespace-cdn.com/content/v1/5952754eff7c50422f06ed84/1509519189436-0V1E4NFWZAAUFTO63696/favicon.ico?format=100w";

    return {
      title,
      description,
      alternates: {
        canonical: `https://www.whitelabelmedia.live/${path}`,
      },
      openGraph: {
        title,
        description,
        url: `https://www.whitelabelmedia.live/${path}`,
        type: "website",
        images: [{ url: image, width: 1200, height: 630, alt: title }],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: [image],
      },
    };
  } catch (error) {
    console.error("Metadata fetch error:", error);
    return {
      title: "White Label Media",
      description: "White Label Media",
      openGraph: {
        title: "White Label Media",
        description: "White Label Media",
        images: [
          {
            url: "https://images.squarespace-cdn.com/content/v1/5952754eff7c50422f06ed84/1509519189436-0V1E4NFWZAAUFTO63696/favicon.ico?format=100w",
            width: 1200,
            height: 630,
            alt: "White Label Media",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        images: [
          "https://images.squarespace-cdn.com/content/v1/5952754eff7c50422f06ed84/1509519189436-0V1E4NFWZAAUFTO63696/favicon.ico?format=100w",
        ],
      },
    };
  }
}

export default generateMetadDataDetails;
