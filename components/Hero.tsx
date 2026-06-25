import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#002963] text-[#F5F1EA] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-16 items-end">

          {/* Left */}
          <div>

            <p className="uppercase tracking-[0.3em] text-sm text-[#F5F1EA]/60 mb-8">
              Creative Agency
            </p>

            <h1 className="text-7xl md:text-8xl lg:text-[8rem] xl:text-[9rem] font-bold leading-[0.85]">
              ONE
              <br />
              REPUBLIC
            </h1>

          </div>

          {/* Right */}
          <div className="max-w-md ml-auto">

            <p className="text-xl md:text-2xl leading-relaxed text-[#F5F1EA]/80">
              Creating brands, packaging and visual stories
              that people remember.
            </p>

            <div className="mt-12 space-y-3 text-lg text-[#F5F1EA]/90">

              <p>Brand Identity</p>

              <p>Packaging Design</p>

              <p>Illustration</p>

              <p>Creative Direction</p>

            </div>

            <Link
              href="/work"
              className="
                inline-flex
                mt-12
                border-b-2
                border-[#B80000]
                pb-2
                text-[#F5F1EA]
                hover:text-[#B80000]
                transition-colors
              "
            >
              View Work →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}