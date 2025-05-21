import localFont from "next/font/local";

export const Gambetta = localFont({
  src: [
    {
      path: "../../../public/fonts/Gambetta-Variable.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gambetta",
  display: "swap",
});

export const GtSuperDisplay = localFont({
  src: [
    {
      path: "../../../public/fonts/GT-Super-Display-Bold-Trial.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/fonts/GT-Super-Display-Light-Trial.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/GT-Super-Display-Medium-Trial.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/fonts/GT-Super-Display-Regular-Trial.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gt-super",
  display: "swap",
});

export const Switzer = localFont({
  src: [
    {
      path: "../../../public/fonts/Switzer-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Switzer-Variable.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-switzer",
  display: "swap",
});
