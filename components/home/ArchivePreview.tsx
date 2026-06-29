"use client";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import { Project } from "@/types/project";

type Props = {
  project: Project | null;
};

export default function ArchivePreview({
  project,
}: Props) {
  return (
    <div className="sticky top-28">

      <AnimatePresence mode="wait">

        {project && (

          <motion.div
            key={project.id}
            initial={{
              opacity: 0,
              scale: 1.02,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative aspect-[4/3] overflow-hidden"
          >

            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover"
            />

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}