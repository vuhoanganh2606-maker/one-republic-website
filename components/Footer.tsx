import Link from "next/link";

export default function Footer() {
return ( <footer id="contact" className="bg-black text-white"> <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-32"> <p className="text-red-500 uppercase tracking-[0.3em] text-xs md:text-sm mb-6">
Let's Talk </p>
    <h2 className="text-3xl md:text-7xl font-bold leading-none mb-6 md:mb-8">
      Have a project
      <br />
      in mind?
    </h2>

    <a
      href="mailto:hello@onerepublic.vn"
      className="inline-block text-xl md:text-4xl font-medium hover:text-red-500 transition break-all"
    >
      hello@onerepublic.vn
    </a>

    <div className="border-t border-white/10 my-10 md:my-20" />

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
      <div>
        <p className="text-gray-500 mb-4">Navigation</p>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <Link
            href="/"
            className="hover:text-red-500 transition"
          >
            Home
          </Link>

          <Link
            href="/work"
            className="hover:text-red-500 transition"
          >
            Work
          </Link>
        </div>
      </div>

      <div>
        <p className="text-gray-500 mb-4">Services</p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-white/80">
          <p>Brand Identity</p>
          <p>Packaging Design</p>
          <p>Illustration</p>
          <p>Creative Direction</p>
        </div>
      </div>

      <div>
        <p className="text-gray-500 mb-4">Social</p>

        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <a
            href="https://www.behance.net/onethink"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            Behance
          </a>

          <a
            href="https://www.instagram.com/onerepublic.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  </div>

  <div className="border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row justify-between gap-3">
      <p className="text-gray-500 text-sm">
        © 2025 One Republic Studio
      </p>

      <p className="text-gray-500 text-sm">
        Branding • Packaging • Illustration • Creative Direction
      </p>
    </div>
  </div>
</footer>
);
}