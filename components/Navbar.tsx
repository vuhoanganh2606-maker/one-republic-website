"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between py-8">

          {/* Logo Text */}
          <Link
            href="/"
            className="
              text-[#F5F1EA]
              font-semibold
              tracking-[0.25em]
              uppercase
              text-sm
            "
          >
            One Republic
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-10">

            <Link
              href="/work"
              className="
                text-[#F5F1EA]
                text-sm
                uppercase
                tracking-[0.2em]
                hover:text-[#B80000]
                transition
              "
            >
              Work
            </Link>

            <Link
              href="/about"
              className="
                text-[#F5F1EA]
                text-sm
                uppercase
                tracking-[0.2em]
                hover:text-[#B80000]
                transition
              "
            >
              About
            </Link>

            <Link
              href="/contact"
              className="
                text-[#F5F1EA]
                text-sm
                uppercase
                tracking-[0.2em]
                hover:text-[#B80000]
                transition
              "
            >
              Contact
            </Link>

          </nav>

        </div>

      </div>
    </header>
  );
}