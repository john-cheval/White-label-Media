import { Gambetta, GtSuperDisplay, Switzer } from "./ui/fonts";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { fetchData } from "./lib/fetchData";
import ServerNavbar from "@/components/shared/ServerNavbar/ServerNavbar";
import FloatingWhatsapp from "@/components/shared/FloatingWhatsapp";
import { baseUrl } from "./ui/apiUrl";

export const metadata = {
  title: "White Label Media",
  description:
    "White Label Group is a curated collective and an integrated hub of upscale creative consultancies, marketing, technology and production studios, crafting the future of brands. ",
};

export default async function RootLayout({ children }) {
  const [headerData, footerData] = await Promise.all([
    fetchData(`${baseUrl}/custom/v1/menu/primary`),
    fetchData(`${baseUrl}/custom/v1/menu/footer`),
  ]);

  return (
    <html lang="en" className="h-full">
      <head>
        <link
          rel="preload"
          href="/fonts/Gambetta-Variable.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Switzer-Light.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${Gambetta.variable} ${GtSuperDisplay.variable} ${Switzer.variable} antialiased flex flex-col min-h-full`}
      >
        <ServerNavbar navLinksData={headerData?.menu_tree} />
        <main className="flex-grow">{children}</main>
        <FloatingWhatsapp />
        <Footer footerLink={footerData} />
      </body>
    </html>
  );
}
