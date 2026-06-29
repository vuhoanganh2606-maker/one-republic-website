"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { Project } from "@/types/project";

type ProjectSlideProps = {
  project: Project;
  isActive: boolean;
  onActive: () => void;
};

export default function ProjectSlide({
  project,
  onActive,
}: ProjectSlideProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onActive();
        }
      },
      {
        threshold: 0.55,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [onActive]);

  return (
    <section
      ref={ref}
      className="relative h-screen overflow-hidden"
    >
      <Image
        src={project.cover}
        alt={project.title}
        fill
        priority={project.priority}
        sizes="100vw"
        className={`object-cover ${
          project.imagePosition ?? "object-center"
        }`}
      />

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
    </section>
  );
}