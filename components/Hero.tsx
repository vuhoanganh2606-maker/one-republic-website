import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-48 pb-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <p className="text-[#B80000] uppercase tracking-widest text-sm mb-6">
            Creative Design & Illustration Studio
          </p>

          <h1 className="text-7xl font-bold leading-none text-gray-100">
            BIG
          </h1>

          <h1 className="text-7xl font-bold text-[#B80000] leading-none">
            BIGGER
          </h1>

          <p className="mt-10 text-xl text-gray-600 max-w-xl">
            We help ambitious brands grow bigger through strategic
            branding, packaging design and illustration.
          </p>

          <div className="flex gap-4 mt-10">

            <Link
              href="/work"
              className="
                bg-[#B80000]
                text-white
                px-8
                py-4
                rounded-full
                hover:opacity-90
                transition
              "
            >
              View Our Work
            </Link>

<Link
  href="/#contact"
  className="
    px-8 py-4
    rounded-full
    border border-black/20
    text-black
    font-medium
    hover:border-black
    hover:bg-black
    hover:text-white
    transition-all duration-300
  "
>
  Start A Project
</Link>

          </div>
        </div>

        {/* Right Content */}
        <div className="aspect-square rounded-[40px] bg-gray-100 flex items-center justify-center">
          <h2 className="text-[120px] font-bold text-[#B80000]">
            OR
          </h2>
        </div>

      </div>
    </section>
  );
}