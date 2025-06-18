import { cache } from "react";

export const fetchData = cache(async (url) => {
  try {
    const response = await fetch(url, {
      next: {
        revalidate: 1, // Revalidate every 1 hour
      },
    });
    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${url}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
});
