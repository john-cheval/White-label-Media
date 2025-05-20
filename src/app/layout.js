import { Gambetta, GtSuperDisplay, Switzer } from "./ui/fonts";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { fetchData } from "./lib/fetchData";

export const metadata = {
  title: "White Label Media",
  description:
    "White Label Group is a curated collective and an integrated hub of upscale creative consultancies, marketing, technology and production studios, crafting the future of brands. ",
};

export default async function RootLayout({ children }) {
  const headerData = await fetchData(
    "https://chevaldemo.xyz/demo/white-label/wp-json/custom/v1/menu/primary"
  );
  const footerData = await fetchData(
    "https://chevaldemo.xyz/demo/white-label/wp-json/custom/v1/menu/footer"
  );
  return (
    <html lang="en" className="h-full">
      <body
        className={`${Gambetta.variable} ${GtSuperDisplay.variable} ${Switzer.variable} antialiased flex flex-col min-h-full`}
      >
        <Navbar navLinks={headerData?.menu_tree} />
        <main className="flex-grow">{children}</main>
        <Footer footerLink={footerData} />
      </body>
    </html>
  );
}
