"use client";
import { useEffect } from "react";
import ResourceCard from "@/components/ResourceCard";
import QuoteBlock from "@/components/QuoteBlock";

const RESOURCES = [
  {
    icon: "🧠",
    title: "Mental Health Support",
    desc: "Culturally sensitive therapy resources and referrals tailored for the Sikh community.",
  },
  {
    icon: "🤝",
    title: "Community Circles",
    desc: "Safe, confidential group spaces to share, listen, and heal together.",
  },
  {
    icon: "📖",
    title: "Sikh Philosophy & Wellness",
    desc: "Exploring Gurbani and Sikh teachings as a foundation for inner peace.",
  },
];

export default function HomePage() {
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
    <main className="overflow-x-hidden">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-28 pb-16 bg-gradient-to-br from-navy via-[#1a3072] to-royal">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-saffron/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[15%] right-[10%] w-80 h-80 bg-saffron/8 rounded-full blur-3xl" />
        </div>
        <div className="absolute top-[-100px] right-[-120px] w-[500px] h-[500px] rounded-full border border-saffron/15 pointer-events-none" />
        <div className="absolute top-[-40px]  right-[-30px]  w-[340px] h-[340px] rounded-full border border-saffron/9  pointer-events-none" />
        <div className="absolute bottom-[60px] left-[-60px]  w-[260px] h-[260px] rounded-full border border-cream/7   pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl">
          <span className="inline-block text-xs tracking-[0.22em] uppercase text-saffron font-bold mb-6 animate-[fadeUp_0.9s_0.2s_both]">
            Sikh Mental Health Collective
          </span>
          <h1 className="font-display text-cream text-5xl md:text-7xl leading-tight mb-6 animate-[fadeUp_0.9s_0.45s_both]">
            Healing begins with{" "}
            <em className="text-gold-light">community</em>
          </h1>
          <p className="text-cream/70 text-lg leading-relaxed max-w-xl mx-auto mb-10 font-light animate-[fadeUp_0.9s_0.7s_both]">
            A safe, culturally grounded space for Sikhs to explore mental wellness —
            rooted in our values of seva, compassion, and Chardi Kala.
          </p>
          <a
            href="/contact"
            className="inline-block bg-saffron text-navy font-bold text-xs tracking-[0.14em] uppercase px-10 py-4 rounded-sm transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5 animate-[fadeUp_0.9s_0.9s_both]"
          >
            Get Involved
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream/40 text-[0.65rem] tracking-widest uppercase animate-[fadeUp_1s_1.4s_both]">
          <div className="w-px h-10 bg-gradient-to-b from-saffron/60 to-transparent animate-pulse" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-cream py-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <p className="text-xs tracking-[0.22em] uppercase text-saffron font-bold mb-4">Who We Are</p>
            <h2 className="font-display text-navy text-4xl md:text-5xl leading-tight mb-6">
              A collective built on faith, compassion & care
            </h2>
            <p className="text-navy/65 leading-relaxed font-light mb-4">
              The Sikh Mental Health Collective (SMHC) was founded to bridge the gap between
              Sikh values and modern mental health support. We believe that seeking help is
              an act of courage — not weakness — and that our community deserves a space
              where culture and healing are never at odds.
            </p>
            <p className="text-navy/65 leading-relaxed font-light">
              We bring together mental health professionals, community members, and Sikh
              scholars to create resources that are both clinically sound and spiritually meaningful.
            </p>
          </div>

          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-150 flex justify-center relative">
            <div className="w-72 h-96 bg-gradient-to-br from-royal to-navy rounded-sm flex flex-col items-center justify-center gap-4 shadow-[16px_24px_60px_rgba(13,27,75,0.18)]">
              <span className="text-6xl">☬</span>
              <p className="font-display text-gold-light italic text-center px-8 leading-relaxed text-lg">
                "In the company of the holy, the mind is illumined."
              </p>
            </div>
            <div className="absolute bottom-[-18px] right-[-18px] w-28 h-28 bg-saffron/50 rounded-sm -z-10" />
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="bg-navy py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal opacity-0 translate-y-6 transition-all duration-700">
            <p className="text-xs tracking-[0.22em] uppercase text-saffron font-bold mb-4">What We Offer</p>
            <h2 className="font-display text-cream text-4xl md:text-5xl leading-tight">
              Support for every step of the journey
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {RESOURCES.map((r, i) => (
              <div
                key={r.title}
                className="reveal opacity-0 translate-y-6 transition-all duration-700"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <ResourceCard {...r} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="bg-cream py-28 px-6">
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
          <QuoteBlock
            quote="Recognize the human race as one."
            attribution="Guru Gobind Singh Ji"
          />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-saffron to-[#e07010] py-20 px-6 text-center">
        <div className="reveal opacity-0 translate-y-6 transition-all duration-700 max-w-2xl mx-auto">
          <h2 className="font-display text-navy text-4xl md:text-5xl mb-4">
            You don't have to walk this path alone.
          </h2>
          <p className="text-navy/70 mb-8 font-light">
            Join our community, attend an event, or simply reach out — we're here.
          </p>
          <a
            href="/contact"
            className="inline-block bg-navy text-cream font-bold text-xs tracking-[0.14em] uppercase px-10 py-4 rounded-sm transition-all duration-200 hover:bg-[#0a1438] hover:-translate-y-0.5"
          >
            Connect With Us
          </a>
        </div>
      </section>

    </main>
  );
}