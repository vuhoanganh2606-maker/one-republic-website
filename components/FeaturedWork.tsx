import Image from "next/image";
import Link from "next/link";

export default function FeaturedWork() {
  const projects = [
    {
      title: "Nguyệt Lâm Gia",
      slug: "nguyet-lam-gia",
      category: "Packaging Design",
      image: "/work/nguyet-lam-gia/cover.webp",
      description:
        "Premium mooncake packaging inspired by traditional oriental culture and storytelling.",
    },
    {
      title: "Nguyệt Dạ Đông Dương",
      slug: "nguyet-da-dong-duong",
      category: "Packaging Design",
      image: "/work/project-2.jpg",
      description:
        "Luxury visual identity system created for a premium seasonal gifting experience.",
    },
    {
      title: "Luân Vũ Minh Nguyệt",
      slug: "luan-vu-minh-nguyet",
      category: "Illustration",
      image: "/work/project-3.jpg",
      description:
        "Illustration-driven packaging concept celebrating Mid-Autumn traditions.",
    },
  ];

  return (
    <section
      id="work"
      className="py-32 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">

          <p className="text-[#B80000] uppercase tracking-[0.25em] text-sm mb-4">
            Selected Projects
          </p>

          <div className="flex items-end justify-between">

            <h2 className="text-5xl md:text-6xl font-bold text-black">
              Featured Work
            </h2>

            <Link
              href="/work"
              className="hidden md:block text-black font-medium hover:text-red-600 transition"
            >
              View All Projects →
            </Link>

          </div>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <Link
              href={`/work/${project.slug}`}
              key={index}
              className="group block"
            >

              {/* Image */}
              <div className="relative overflow-hidden rounded-[24px]">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={800}
                  className="w-full aspect-[4/5] object-cover transition duration-700 ease-out group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

                {/* Button */}
                <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium">
                    View Case Study
                  </div>
                </div>

              </div>

              {/* Content */}
              <div className="mt-6">

                <p className="text-sm uppercase tracking-wider text-red-600">
                  {project.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-black transition duration-300 group-hover:text-red-600">
                  {project.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-5">
                  <span className="font-medium text-black group-hover:text-red-600 transition">
                    View Project →
                  </span>
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}