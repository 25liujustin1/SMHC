"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Members", href: "/members" },
  { label: "Calendar", href: "/calendar" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onEscape = (e) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, []);

  const useSolidBackground = scrolled || pathname !== "/";

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 md:px-12 md:py-5 transition-all duration-400 ${
        useSolidBackground
          ? "bg-navy/97 shadow-[0_2px_24px_rgba(0,0,0,0.18)]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link
        href="/"
        className="font-display text-cream text-lg tracking-wide no-underline"
      >
        SMHC <span className="text-saffron">·</span> Sikh Mental Health
      </Link>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-cream/80 no-underline text-xs font-bold tracking-widest uppercase transition-colors duration-200 hover:text-saffron"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile: hamburger button */}
      <button
        type="button"
        className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 rounded-md text-cream cursor-pointer focus:outline-none"
        onClick={() => setMenuOpen((o) => !o)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`block h-0.5 w-6 bg-current transition-all origin-center ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-all ${
            menuOpen ? "opacity-0 scale-x-0" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition-all origin-center ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>
    </nav>

    {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden bg-black/30"
          aria-hidden="true"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-[57px] left-0 right-0 z-40 md:hidden bg-navy/98 shadow-lg transition-all duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col list-none py-4 px-4 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="block py-3 px-4 text-cream/90 no-underline text-sm font-bold tracking-widest uppercase transition-colors hover:text-saffron hover:bg-white/5 rounded-md"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}