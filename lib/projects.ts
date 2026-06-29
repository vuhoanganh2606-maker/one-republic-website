import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    number: "01",

    slug: "nguyet-lam-gia",

    title: "Nguyệt Lâm Gia",

    subtitle: "Packaging as Cultural Memory",

    year: "2025",

    category: [
      "Packaging Design",
      "Illustration"
    ],

    cover: "/work/nguyet-lam-gia/cover.webp",

    featured: true,

    priority: true,
  },

  {
    id: 2,

    number: "02",

    slug: "nguyet-da-dong-duong",

    title: "Nguyệt Dạ Đông Dương",

    subtitle: "A Modern Interpretation of Eastern Luxury",

    year: "2025",

    category: [
      "Packaging Design"
    ],

    cover: "/work/nguyet-da-dong-duong/cover.webp",

    featured: true,
  },

  {
    id: 3,

    number: "03",

    slug: "luan-vu-minh-nguyet",

    title: "Luân Vũ Minh Nguyệt",

    subtitle: "Illustration Beyond Decoration",

    year: "2025",

    category: [
      "Illustration"
    ],

    cover: "/work/luan-vu-minh-nguyet/cover.webp",

    featured: true,
  },
];