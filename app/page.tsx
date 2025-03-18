import Image from "next/image";
import Hero from "./components/hero/hero";
import Services from "./components/services/services";
import Pricing from "./components/pricing/pricing";
import Contact from "./components/contact/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Pricing />
      <Contact />
    </>
  );
}
