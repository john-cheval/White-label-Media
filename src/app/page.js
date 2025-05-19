import Awards from "@/components/Home/Awards";
import Clients from "@/components/Home/Clients";
import Hero from "@/components/Home/Hero";
import OurHouses from "@/components/Home/OurHouses";
import Section2 from "@/components/Home/Section2";
import Services from "@/components/Home/Services";
import Works from "@/components/Home/Works";
import Testimonials from "@/components/shared/Testimonial";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      {/*<Section2 />
      <OurHouses /> */}
      <Services />
      <Clients />
      {/* <Works /> */}
      <Testimonials />
      <Awards />
    </>
  );
}
