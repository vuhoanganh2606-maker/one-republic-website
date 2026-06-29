"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function ArchivePreview() {
  const projects = [
    {
      number: "01",
      title: "Nguyệt Lâm Gia",
      image: "/work/nguyet-lam-gia/cover.webp",
    },
    {
      number: "02",
      title: "Nguyệt Dạ Đông Dương",
      image: "/work/project-2.jpg",
    },
    {
      number: "03",
      title: "Luân Vũ Minh Nguyệt",
      image: "/work/project-3.jpg",
    },
  ];

  const [active, setActive] = useState(projects[0]);

  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section Label */}
        <p className="text-[#B80000] uppercase tracking-[0.25em] text-sm mb-8">
          Archive
        </p>

        {/* Heading */}
        <h2 className="text-6xl md:text-8xl font-bold text-[#002963] mb-20">
          All Projects
        </h2>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-start">

          {/* LEFT */}
          <div>

            <div className="space-y-8">

              {projects.map((project) => (
                <div
                  key={project.number}
                  onMouseEnter={() => setActive(project)}
                  className="
                    group
                    cursor-pointer
                    border-b
                    border-black/10
                    pb-6
                  "
                >
                  <div className="flex gap-6 items-baseline">

                    <span className="text-sm text-black/40 w-8">
                      {project.number}
                    </span>

                    <h3
                      className={`
                        text-3xl md:text-5xl
                        font-medium
                        transition-all duration-300
                        ${
                          active.title === project.title
                            ? "text-[#002963]"
                            : "text-black/30"
                        }
                      `}
                    >
                      {project.title}
                    </h3>

                  </div>
                </div>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <div className="overflow-hidden rounded-[32px]">

              <Image
                src={active.image}
                alt={active.title}
                width={1200}
                height={1500}
                className="
                  w-full
                  aspect-[4/5]
                  object-cover
                  transition-all
                  duration-500
                "
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}