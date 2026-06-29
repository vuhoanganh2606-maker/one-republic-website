import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[#F5F1EA] py-40 px-6">
      <div className="max-w-7xl mx-auto">

        <p className="text-[#B80000] uppercase tracking-[0.25em] text-sm mb-10">
          About
        </p>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20">

          {/* Left */}
          <div>

            <h2 className="text-6xl md:text-8xl font-bold text-[#002963] leading-[0.95]">
              About
              <br />
              One Republic
            </h2>

          </div>

          {/* Right */}
          <div>

            <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
              We are a creative agency specializing in branding,
              packaging design and visual storytelling for ambitious
              brands seeking meaningful differentiation.
            </p>

            <p className="mt-8 text-lg text-black/50 leading-relaxed">
              Through strategy, design and illustration, we help
              businesses create distinctive experiences that connect
              with people and endure over time.
            </p>

            <Link
              href="/about"
              className="
                inline-flex
                mt-12
                border-b-2
                border-[#B80000]
                pb-2
                text-[#002963]
                hover:text-[#B80000]
                transition-colors
              "
            >
              Learn More →
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}