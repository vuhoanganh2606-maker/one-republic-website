// lib/design.ts

/**
 * -------------------------------------------------------
 * ONE REPUBLIC DESIGN SYSTEM V4
 * Single source of truth for layout & UI tokens
 * -------------------------------------------------------
 */

export const DESIGN = {
  layout: {
    container: "max-w-[1600px]",
    content: "max-w-[560px]",
    gutter: "px-8 md:px-12 lg:px-16 xl:px-20",
    section: "min-h-screen",
    gridGap: "gap-6",
  },

  spacing: {
    xs: "gap-2",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-10",
    xl: "gap-16",

    sectionTop: "pt-24",
    sectionBottom: "pb-24",

    titleBottom: "mb-10",
    subtitleTop: "mt-8",
    metaTop: "mt-12",
    buttonTop: "mt-16",
  },

  typography: {
    display:
      "text-[clamp(4rem,9vw,9rem)] leading-[0.88] tracking-[-0.06em] uppercase font-light",

    title:
      "text-[clamp(3.8rem,8vw,7rem)] leading-[0.86] tracking-[-0.06em] uppercase font-light",

    h2:
      "text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-[-0.04em] uppercase",

    body:
      "text-base md:text-lg leading-8 text-white/70",

    number:
      "text-[11px] uppercase tracking-[0.45em] text-white/45",

    meta:
      "text-[11px] uppercase tracking-[0.32em] text-white/80",

    year:
      "text-[11px] uppercase tracking-[0.32em] text-white/45",

    button:
      "text-[12px] uppercase tracking-[0.28em] font-medium",
  },

  navbar: {
    height: "h-[72px]",
    padding: "py-8",
  },

  border: {
    default: "border-white/10",
    muted: "border-white/5",
  },

  radius: {
    sm: "rounded-md",
    md: "rounded-xl",
    lg: "rounded-2xl",
  },

  motion: {
    transition: "transition-all duration-500 ease-out",
    hover: "duration-300 ease-out",
  },

  zIndex: {
    navbar: "z-50",
    overlay: "z-40",
    modal: "z-[100]",
  },
} as const;

export default DESIGN;