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
        threshold: 0.6,
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
      {/* Background Image */}
      <Image
        src={project.cover}
        alt={project.title}
        fill
        priority={project.priority}
        className="object-cover"
        sizes="100vw"
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/10" />
    </section>
  );
}