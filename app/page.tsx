import Navbar from "@/components/Navbar";
import ProjectChapter from "@/components/ProjectChapter";
import Archive from "@/components/Archive";
import Footer from "@/components/Footer";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <Navbar />

      {projects.slice(0, 3).map((project) => (
        <ProjectChapter
          key={project.slug}
          project={project}
        />
      ))}

      <Archive />

      <Footer />
    </>
  );
}