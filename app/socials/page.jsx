"use client";
import { useEffect } from "react";

export default function SocialsPage() {
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
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-[#172c66] to-royal px-6 pt-28 pb-20 text-cream">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[12%] left-[8%] w-72 h-72 bg-saffron/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-90px] right-[-120px] w-[380px] h-[380px] rounded-full border border-cream/10" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 text-xs tracking-[0.28em] uppercase text-saffron font-bold mb-6">
            Socials
          </p>
          <h1 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-display text-4xl md:text-6xl leading-tight mb-6">
            Stay connected with SMHC
          </h1>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Follow us for community updates, event highlights, and mental wellness resources.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <p className="text-xs tracking-[0.24em] uppercase text-saffron font-bold mb-4">
              Instagram
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              @sikhmhsummit
            </h2>
            <p className="text-navy/70 leading-relaxed">
              Our Instagram is the best place to find upcoming events, mental wellness tips, and
              community stories. We post regularly and share ways to get involved.
            </p>
          </div>

          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-150 bg-white border border-navy/10 rounded-sm p-8 shadow-[0_24px_60px_rgba(13,27,75,0.1)] text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-saffron/15 flex items-center justify-center text-2xl mb-4">
              ✦
            </div>
            <p className="text-navy/70 mb-6">
              Follow SMHC on Instagram for the latest updates.
            </p>
            <a
              href="https://instagram.com/sikhmhsummit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-saffron text-navy font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-sm transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5"
            >
              Visit Instagram
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
