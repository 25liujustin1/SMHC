import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About",    href: "/#about" },
  { label: "Members",  href: "/members" },
  { label: "Calendar", href: "/calendar" },
  { label: "Contact",  href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-saffron/15 px-12 py-8 flex items-center justify-between flex-wrap gap-4">
      <div className="font-display font-semibold text-cream text-base">
        SMHC <span className="text-saffron">·</span> Sikh Mental Health Collective
      </div>

      <ul className="flex gap-6 list-none">
        {FOOTER_LINKS.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-cream/40 no-underline text-xs tracking-widest uppercase hover:text-saffron transition-colors duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <p className="text-cream/35 text-xs tracking-wide">
        © {new Date().getFullYear()} SMHC. Made with seva.
      </p>
    </footer>
  );
}