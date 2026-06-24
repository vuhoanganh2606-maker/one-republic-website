"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
return ( <header className="fixed top-0 left-0 right-0 z-50"> <div className="max-w-7xl mx-auto px-4 md:px-6 pt-4"> <div
       className="
         flex items-center justify-between
         px-4 md:px-6 py-2
         rounded-2xl
         bg-white/80
         backdrop-blur-md
         border border-black/5
         shadow-sm
       "
     > <Link href="/" className="block shrink-0"> <Image
           src="/Logo_Color.png"
           alt="One Republic"
           width={70}
           height={70}
           priority
         /> </Link>


      <nav className="flex items-center gap-3 md:gap-10">
        <Link
          href="/work"
          className="text-black text-xs md:text-sm uppercase tracking-wider hover:text-[#B80000] transition"
        >
          Work
        </Link>

        <a
          href="/#services"
          className="text-black text-xs md:text-sm uppercase tracking-wider hover:text-[#B80000] transition"
        >
          Services
        </a>

        <a
          href="/#about"
          className="text-black text-xs md:text-sm uppercase tracking-wider hover:text-[#B80000] transition"
        >
          About
        </a>

        <a
          href="/#contact"
          className="text-black text-xs md:text-sm uppercase tracking-wider hover:text-[#B80000] transition"
        >
          Contact
        </a>
      </nav>
    </div>
  </div>
</header>

);
}