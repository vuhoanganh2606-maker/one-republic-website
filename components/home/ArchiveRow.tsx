"use client";

import { motion } from "framer-motion";

import { Project } from "@/types/project";

type Props = {
  project: Project;
  isActive: boolean;
  onHover: () => void;
};

export default function ArchiveRow({
  project,
  isActive,
  onHover,
}: Props) {
  return (
    <motion.div
      onMouseEnter={onHover}
      className="group cursor-pointer border-t border-white/10 py-8"
    >
      <div className="flex items-center justify-between">

        <div>

          <h3
            className={`text-2xl transition-colors duration-300 ${
              isActive
                ? "text-[#B80000]"
                : "text-white"
            }`}
          >
            {project.title}
          </h3>

          <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/50">
            {project.category.join(" · ")}
          </p>

        </div>

        <motion.span
          animate={{
            x: isActive ? 8 : 0,
            opacity: isActive ? 1 : 0,
          }}
        >
          →
        </motion.span>

      </div>
    </motion.div>
  );
}