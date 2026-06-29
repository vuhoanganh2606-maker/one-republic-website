import Link from "next/link";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#B80000] text-[#F5F1EA] py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[0.25em] text-sm mb-8 text-white/70">
              Contact
            </p>

            <h2 className="text-6xl md:text-8xl font-bold leading-[0.9]">
              Let&apos;s create
              <br />
              something
              <br />
              remarkable.
            </h2>

          </div>

          {/* Right */}
          <div className="flex flex-col justify-between">

            <div>

              <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-4">
                Email
              </p>

              <a
                href="mailto:business@onerepublic.vn"
                className="
                  text-2xl md:text-3xl
                  hover:opacity-80
                  transition
                "
              >
                business@onerepublic.vn
              </a>

            </div>

            <div className="mt-16">

              <p className="text-white/60 text-sm uppercase tracking-[0.2em] mb-6">
                Follow
              </p>

              <div className="flex flex-wrap gap-6 text-lg">

                <Link href="#">
                  Behance
                </Link>

                <Link href="#">
                  Instagram
                </Link>

                <Link href="#">
                  LinkedIn
                </Link>

                <Link href="#">
                  Facebook
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-24 pt-8 border-t border-white/20 flex justify-between text-sm text-white/50">

          <p>© 2026 One Republic</p>

          <p>Branding • Packaging • Illustration</p>

        </div>

      </div>
    </footer>
  );
}
