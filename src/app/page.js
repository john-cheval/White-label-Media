import Clients from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero";
import OurHouses from "@/components/Home/OurHouses";
import Section2 from "@/components/Home/Section2";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Section2 />
      <OurHouses />
      <Clients />
      <Testimonials />
    </>
  );
}
