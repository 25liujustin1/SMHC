"use client";
import { useEffect, useState } from "react";

const FAQS = [
  {
    q: "Who is SMHC for?",
    a: "SMHC supports Sikh community members of all ages who are seeking culturally grounded mental wellness resources, education, or support.",
  },
  {
    q: "Is this clinical therapy?",
    a: "We are not a therapy provider. We connect community members to culturally sensitive resources and create spaces for education and support.",
  },
  {
    q: "Do you offer support in Punjabi?",
    a: "We aim to offer resources that are accessible in Punjabi and English. Please contact us to learn about current offerings.",
  },
  {
    q: "How can I volunteer?",
    a: "We welcome volunteers across community outreach, research, and event support. Reach out through the Contact page to get started.",
  },
  {
    q: "Are events confidential?",
    a: "Yes. We prioritize privacy and create respectful, trauma-informed spaces for participants.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("opacity-100", "translate-y-0");
            e.target.classList.remove("opacity-0", "translate-y-6");
          }
        }),
      { threshold: 0.15 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main className="bg-cream text-navy">
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-[#172c66] to-royal px-6 pt-28 pb-16 text-cream">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-80 h-80 bg-saffron/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-80px] right-[-120px] w-[380px] h-[380px] rounded-full border border-cream/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 text-xs tracking-[0.28em] uppercase text-saffron font-bold mb-6">
            FAQ
          </p>
          <h1 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-display text-4xl md:text-6xl leading-tight mb-6">
            Answers to common questions
          </h1>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Learn more about how SMHC supports the community and how to get involved.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl space-y-4">
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <button
                key={item.q}
                type="button"
                className="reveal opacity-0 translate-y-6 transition-all duration-700 w-full text-left bg-white border border-navy/10 rounded-sm p-6 shadow-[0_18px_40px_rgba(13,27,75,0.08)]"
                style={{ transitionDelay: `${i * 80}ms` }}
                onClick={() => setOpenIndex(open ? -1 : i)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="font-display text-xl md:text-2xl text-navy">
                    {item.q}
                  </h2>
                  <span className="text-saffron text-xl">{open ? "–" : "+"}</span>
                </div>
                {open && (
                  <p className="mt-4 text-navy/70 leading-relaxed text-sm md:text-base">
                    {item.a}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </section>
    </main>
  );
}
