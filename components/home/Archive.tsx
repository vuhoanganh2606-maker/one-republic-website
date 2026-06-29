"use client";

import { useState } from "react";

import { projects } from "@/lib/projects";
import { Project } from "@/types/project";

import ArchiveRow from "./ArchiveRow";
import ArchivePreview from "./ArchivePreview";

export default function Archive() {
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  return (
    <section className="bg-black py-40">
      <div className="mx-auto grid max-w-[1600px] grid-cols-12 gap-12 px-10 lg:px-20">

        {/* LEFT */}

        <div className="col-span-12 lg:col-span-5">

          <h2 className="mb-20 text-5xl font-light tracking-[-0.04em]">
            Archive
          </h2>

          <div>
            {projects.map((project) => (
              <ArchiveRow
                key={project.id}
                project={project}
                isActive={hoveredProject?.id === project.id}
                onHover={() => setHoveredProject(project)}
              />
            ))}
          </div>

        </div>

        {/* RIGHT */}

        <div className="col-span-12 lg:col-span-7">

          <ArchivePreview project={hoveredProject} />

        </div>

      </div>
    </section>
  );
}