/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["swiper-slide-next"],
  theme: {
    extend: {
      fontFamily: {
        gambetta: "var(--font-gambetta)",
        gt: "var(--font-gt-super)",
        switzer: "var(--font-switzer)",
      },
      colors: {
        main: "#22334F",
        sec: "#F7F7F7",
      },
      screens: {
        "5xl": "2000px",
        "3xl": "1600px",
      },
      backgroundImage: {
        "home-hero-video-grad":
          " linear-gradient(180deg, rgba(34, 51, 79, 0.00) 0%, #22334F 100%)",
        "sector-grad":
          "linear-gradient(180deg, rgba(34, 51, 79, 0.00) 0%, #22334F 100%)",
        "sector-grad-1":
          " linear-gradient(180deg, rgba(34, 51, 79, 0.35) 0%, #22334F 100%)",
        "sector-grad-2":
          "linear-gradient(180deg, rgba(34, 51, 79, 0.00) 0%, #22334F 100%)",
        "events-grad-1":
          "linear-gradient(180deg, #EAE4D6 0%, rgba(234, 228, 214, 0.00) 100%)",
        "events-grad-2":
          "linear-gradient(360deg, #EAE4D6 0%, rgba(234, 228, 214, 0.00) 100%)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
