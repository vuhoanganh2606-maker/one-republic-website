import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function WorkPage() {
  const projects = [
    {
      title: "Nguyệt Lâm Gia",
      slug: "nguyet-lam-gia",
      category: "Packaging Design",
      description:
        "Premium Mid-Autumn Festival gift box inspired by Vietnamese Hát Bội theatre and traditional storytelling.",
      image: "/work/project-1.jpg",
    },
    {
      title: "Nguyệt Dạ Đông Dương",
      slug: "nguyet-da-dong-duong",
      category: "Packaging Design",
      description:
        "A luxury mooncake gift box inspired by Indochine aesthetics and handcrafted illustration.",
      image: "/work/project-2.jpg",
    },
    {
      title: "Luân Vũ Minh Nguyệt",
      slug: "luan-vu-minh-nguyet",
      category: "Packaging Design",
      description:
        "A premium Mid-Autumn collection celebrating moonlit dances and Vietnamese cultural heritage.",
      image: "/work/project-3.jpg",
    },
  ];

  return (    
    <main className="bg-[#F7F4EE] min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <p className="text-red-600 uppercase tracking-[0.25em] text-sm mb-6">
            Portfolio
          </p>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-black leading-none">
            Selected
            <br />
            Projects
          </h1>

          <p className="mt-8 max-w-2xl text-xl text-gray-600 leading-relaxed">
            A collection of branding, packaging design and illustration
            projects crafted for ambitious brands.
          </p>

        </div>
      </section>

      {/* Projects */}
      <section className="pb-40 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="space-y-40">

            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="block group"
              >

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">

                  <div>

                    <p className="text-sm tracking-[0.25em] uppercase text-red-600 mb-4">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h2 className="text-5xl md:text-7xl font-bold text-black leading-none">
                      {project.title}
                    </h2>

                  </div>

                  <div className="mt-6 md:mt-0">

                    <p className="uppercase tracking-wider text-sm text-gray-500">
                      {project.category}
                    </p>

                  </div>

                </div>

                {/* Image */}
                <div className="overflow-hidden rounded-[32px]">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={1800}
                    height={1200}
                    className="w-full h-auto transition duration-700 group-hover:scale-[1.03]"
                  />

                </div>

                {/* Description */}
                <div className="mt-8 max-w-2xl">

                  <p className="text-xl text-gray-600 leading-relaxed">
                    {project.description}
                  </p>

                  <span className="mt-6 inline-block text-red-600 font-medium">
                    View Case Study →
                  </span>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>
    </main>
  );
}