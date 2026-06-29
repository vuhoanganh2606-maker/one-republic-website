"use client";

import Link from "next/link";
import { Project } from "@/types/project";

type StickyProjectInfoProps = {
  project: Project;
};

export default function StickyProjectInfo({
  project,
}: StickyProjectInfoProps) {
  return (
    <div className="sticky top-0 z-40 h-screen pointer-events-none">

      <div className="flex h-full items-end">

        <div className="pointer-events-auto w-full max-w-2xl px-20 pb-24">

          {/* Number */}
          <p className="mb-8 text-xs uppercase tracking-[0.35em] text-white/60">
            {project.number}
          </p>

          {/* Title */}
          <h1 className="text-[clamp(4rem,8vw,7rem)] font-light uppercase leading-[0.88] tracking-[-0.05em] text-white">
            {project.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-white/70">
            {project.subtitle}
          </p>

          {/* Meta */}
          <div className="mt-12 space-y-2">
            {project.category.map((item) => (
              <p
                key={item}
                className="text-xs uppercase tracking-[0.3em] text-white"
              >
                {item}
              </p>
            ))}

            <p className="pt-2 text-xs uppercase tracking-[0.3em] text-white/60">
              {project.year}
            </p>
          </div>

          {/* CTA */}
          <Link
            href={`/work/${project.slug}`}
            className="mt-14 inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-white transition-all duration-300 hover:gap-6"
          >
            View Project
            <span>→</span>
          </Link>

        </div>

      </div>

    </div>
  );
}