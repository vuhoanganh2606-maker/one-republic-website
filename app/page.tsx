import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import ArchivePreview from "@/components/ArchivePreview";
import AboutPreview from "@/components/AboutPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <ArchivePreview />
      <AboutPreview />
      <Footer />
    </main>
  );
}