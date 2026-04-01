import Link from "next/link";

const FOOTER_LINKS = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "FAQ", href: "/faq" },
  { label: "Survey", href: "/survey" },
  { label: "Socials", href: "/socials" },
  { label: "Chatbot", href: "/chat" },
  { label: "Members", href: "/members" },
  { label: "Calendar", href: "/calendar" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-saffron/15 px-12 py-10 flex flex-wrap items-start justify-between gap-8">
      <div className="space-y-3">
        <div className="font-display font-semibold text-cream text-base">
          SMHC <span className="text-saffron">·</span> Sikh Mental Health Collective
        </div>
        <p className="text-cream/45 text-xs max-w-xs">
          A safe, culturally grounded space for Sikhs to explore mental wellness with care.
        </p>
      </div>

      <div className="space-y-3">
        <p className="text-xs uppercase tracking-[0.22em] text-saffron font-semibold">
          Contact
        </p>
        <div className="text-cream/55 text-xs space-y-2">
          <p>
            <span className="text-cream/70">Email:</span> sikhmentalhealth@gmail.com
          </p>
          <p>
            <span className="text-cream/70">Instagram:</span> @sikhmhsummit
          </p>
        </div>
      </div>

      <ul className="flex flex-wrap gap-4 max-w-md list-none">
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
        Â© {new Date().getFullYear()} SMHC. Made with seva.
      </p>
    </footer>
  );
}
