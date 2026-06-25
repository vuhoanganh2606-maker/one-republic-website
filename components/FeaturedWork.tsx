import Image from "next/image";
import Link from "next/link";

export default function FeaturedWork() {
  const projects = [
    {
      title: "Nguyệt Lâm Gia",
      slug: "nguyet-lam-gia",
      services: ["Packaging Design", "Illustration"],
      year: "2024",
      image: "/work/nguyet-lam-gia/cover.webp",
    },
    {
      title: "Nguyệt Dạ Đông Dương",
      slug: "nguyet-da-dong-duong",
      services: ["Branding", "Packaging Design"],
      year: "2024",
      image: "/work/project-2.jpg",
    },
    {
      title: "Luân Vũ Minh Nguyệt",
      slug: "luan-vu-minh-nguyet",
      services: ["Branding", "Packaging Design"],
      year: "2024",
      image: "/work/project-3.jpg",
    },
  ];

  return (
    <>
      {projects.map((project) => (
        <section
          key={project.slug}
          className="
            min-h-screen
            bg-[#F5F1EA]
            border-t border-black/10
            flex items-center
            px-6
            py-24
          "
        >
          <div className="max-w-[1700px] mx-auto w-full">

            <div className="grid lg:grid-cols-[0.22fr_0.78fr] gap-12 items-center">

              {/* Left */}
              <div>

                <h2
                  className="
                    text-6xl
                    md:text-7xl
                    xl:text-[7rem]
                    font-light
                    tracking-[-0.05em]
                    leading-[0.88]
                    text-[#1A1A1A]
                  "
                >
                  {project.title}
                </h2>

                <div
                  className="
                    mt-12
                    space-y-4
                    uppercase
                    tracking-[0.2em]
                    text-xs
                    text-black/60
                  "
                >
                  {project.services.map((service) => (
                    <p key={service}>{service}</p>
                  ))}

                  <p>({project.year})</p>
                </div>

                <Link
                  href={`/work/${project.slug}`}
                  className="
                    inline-flex
                    items-center
                    gap-4
                    mt-16
                    text-[#1A1A1A]
                    hover:text-[#B80000]
                    transition-colors
                  "
                >
                  <span className="uppercase tracking-[0.2em] text-sm">
                    View Project
                  </span>

                  <span>→</span>
                </Link>

              </div>

              {/* Right */}
              <Link
                href={`/work/${project.slug}`}
                className="group block"
              >
                <div className="overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.title}
                    width={2200}
                    height={1600}
                    className="
                      w-full
                      aspect-[4/3]
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-[1.02]
                    "
                  />

                </div>
              </Link>

            </div>

          </div>
        </section>
      ))}
    </>
  );
}