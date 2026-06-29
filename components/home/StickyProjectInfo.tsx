"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import LayoutGrid from "@/components/common/LayoutGrid";
import { Project } from "@/types/project";

type StickyProjectInfoProps = {
  project: Project;
};

export default function StickyProjectInfo({
  project,
}: StickyProjectInfoProps) {
  return (
    <div className="pointer-events-none sticky top-0 z-40 h-screen">
      <div className="flex h-full items-end">
        <LayoutGrid>
          <div className="pointer-events-auto col-span-12 pb-16 md:col-span-6 md:pb-20 xl:col-span-5 xl:pb-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Number */}

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                  className="mb-10 text-[11px] uppercase tracking-[0.45em] text-white/45"
                >
                  {project.number}
                </motion.p>

                {/* Title */}

                <motion.h1
                  initial={{
                    opacity: 0,
                    y: 16,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.08,
                    duration: 0.45,
                  }}
                  className="max-w-[560px] text-[clamp(4rem,8vw,7rem)] font-light uppercase leading-[0.86] tracking-[-0.06em] text-white"
                >
                  {project.title}
                </motion.h1>

                {/* Subtitle */}

                <motion.p
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.14,
                    duration: 0.45,
                  }}
                  className="mt-8 max-w-md text-base leading-8 text-white/70 md:text-lg"
                >
                  {project.subtitle}
                </motion.p>

                {/* Divider */}

                <motion.div
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.45,
                  }}
                  className="mt-12 h-px w-20 origin-left bg-white/20"
                />

                {/* Meta */}

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.28,
                  }}
                  className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
                >
                  {project.category.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] uppercase tracking-[0.32em] text-white/80"
                    >
                      {item}
                    </span>
                  ))}

                  <span className="hidden text-white/30 md:inline">
                    •
                  </span>

                  <span className="text-[11px] uppercase tracking-[0.32em] text-white/45">
                    {project.year}
                  </span>
                </motion.div>

                {/* CTA */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: 8,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.35,
                  }}
                >
                  <Link
                    href={`/work/${project.slug}`}
                    className="group mt-16 inline-flex items-center gap-3 text-[12px] uppercase tracking-[0.28em] text-white transition-all duration-300 hover:gap-5 hover:text-white/80"
                  >
                    <span>View Project</span>

                    <motion.span
                      whileHover={{
                        x: 6,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </LayoutGrid>
      </div>
    </div>
  );
}