"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "About",    href: "/#about" },
  { label: "Members",  href: "/members" },
  { label: "Calendar", href: "/calendar" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const alwaysDark = pathname === '/calendar';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-5 transition-all duration-400 ${
        scrolled || alwaysDark
          ? "bg-navy/97 shadow-[0_2px_24px_rgba(0,0,0,0.18)]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <Link href="/" className="font-display text-cream text-lg tracking-wide no-underline">
        SMHC <span className="text-saffron">·</span> Sikh Mental Health
      </Link>

      {/* Links */}
      <ul className="flex gap-10 list-none">
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
    </nav>
  );
}