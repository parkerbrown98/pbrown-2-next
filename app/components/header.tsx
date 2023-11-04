"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center gap-x-1">
        <Link
          href="/"
          className="font-mono font-black text-4xl md:text-5xl px-2 py-0.5 md:px-4 md:py-2 bg-black text-white"
        >
          pbrown
        </Link>
        <span className="font-mono font-bold text-3xl md:text-5xl text-black">
          .dev
        </span>
        <div className="bg-black w-1 h-6 md:h-9 mt-1 animate-terminal-cursor"></div>
      </div>
      {/* Navigation separated by light slashes */}
      <nav className="flex items-center gap-x-2 md:gap-x-4">
        <Link
          href="/about"
          className={`font-bold text-xl md:text-2xl text-black hover:text-gray-500 ${
            pathname.startsWith("/about") ? "text-gray-500" : ""
          }`}
        >
          about
        </Link>
        <span className="font-bold text-xl md:text-2xl text-black">/</span>
        <Link
          href="/blog"
          className={`font-bold text-xl md:text-2xl text-black hover:text-gray-500 ${
            pathname.startsWith("/blog") ? "text-gray-500" : ""
          }`}
        >
          blog
        </Link>
        <span className="font-bold text-xl md:text-2xl text-black">/</span>
        <Link
          href="/projects"
          className={`font-bold text-xl md:text-2xl text-black hover:text-gray-500 ${
            pathname.startsWith("/projects") ? "text-gray-500" : ""
          }`}
        >
          projects
        </Link>
        <span className="font-bold text-xl md:text-2xl text-black">/</span>
        <Link
          href="/contact"
          className={`font-bold text-xl md:text-2xl text-black hover:text-gray-500 ${
            pathname.startsWith("/contact") ? "text-gray-500" : ""
          }`}
        >
          contact
        </Link>
      </nav>
    </header>
  );
}
