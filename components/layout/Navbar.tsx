"use client";

import Link from "next/link";
import DESIGN from "@/lib/design";

const navigation = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        ${DESIGN.zIndex.navbar}
      `}
    >
      <div
        className={`
          ${DESIGN.layout.gutter}
          ${DESIGN.navbar.padding}
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`
              ${DESIGN.typography.meta}
              transition-colors
              duration-300
              hover:text-[var(--brand-red)]
            `}
          >
            ONE REPUBLIC
          </Link>

          {/* Navigation */}
          <nav
            className="flex items-center gap-10"
            aria-label="Primary Navigation"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  ${DESIGN.typography.meta}
                  transition-colors
                  duration-300
                  hover:text-[var(--brand-red)]
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}