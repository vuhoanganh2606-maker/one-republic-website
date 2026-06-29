import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import ProjectGallery from "@/components/home/ProjectGallery";
import Archive from "@/components/home/Archive";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Navbar />

      <ProjectGallery />

      <Archive />

      <Footer />
    </main>
  );
}