import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <Clients />
      <Services />
      <Process />
      <About />
    </>
  );
}