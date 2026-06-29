"use client";

import { useState } from "react";

import { projects } from "@/lib/projects";
import { Project } from "@/types/project";

import StickyProjectInfo from "./StickyProjectInfo";
import ProjectSlide from "./ProjectSlide";

export default function ProjectGallery() {
  const [currentProject, setCurrentProject] = useState<Project>(projects[0]);

  return (
    <section className="relative">

      <StickyProjectInfo project={currentProject} />

      {projects.map((project) => (
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