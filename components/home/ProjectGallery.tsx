"use client";

import { useState } from "react";

import { projects } from "@/lib/projects";
import { Project } from "@/types/project";

import StickyProjectInfo from "./StickyProjectInfo";
import ProjectSlide from "./ProjectSlide";

export default function ProjectGallery() {
  const featuredProjects = projects.filter((project) => project.featured);
  const [currentProject, setCurrentProject] = useState<Project>(
    featuredProjects[0] ?? projects[0]
  );

  return (
    <section className="relative">

      <StickyProjectInfo project={currentProject} />

      {featuredProjects.map((project) => (
        <ProjectSlide
          key={project.id}
          project={project}
          isActive={currentProject.id === project.id}
          onActive={() => setCurrentProject(project)}
        />
      ))}

    </section>
  );
}
