import { Gambetta, GtSuperDisplay, Switzer } from "./ui/fonts";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export const metadata = {
  title: "White Label Media",
  description:
    "White Label Group is a curated collective and an integrated hub of upscale creative consultancies, marketing, technology and production studios, crafting the future of brands. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${Gambetta.variable} ${GtSuperDisplay.variable} ${Switzer.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
