"use client";
import { useEffect } from "react";

const RESEARCH = [
  {
    title: "Cultural barriers to seeking mental health support",
    status: "In progress",
    desc: "Exploring how stigma and cultural expectations shape help-seeking behaviors in Sikh communities.",
  },
  {
    title: "Faith-centered resilience practices",
    status: "Published summary",
    desc: "A review of community resilience strategies grounded in Gurbani and Sikh tradition.",
  },
  {
    title: "Intergenerational wellness conversations",
    status: "Community study",
    desc: "Capturing how families navigate mental health conversations across generations.",
  },
  {
    title: "Peer support outcomes",
    status: "Pilot",
    desc: "Measuring the impact of facilitated support circles on well-being and connection.",
  },
  {
    title: "Access to care mapping",
    status: "Data collection",
    desc: "Identifying where culturally safe mental health resources are most needed.",
  },
];

export default function ResearchPage() {
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
            Research Showcase
          </p>
          <h1 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-display text-4xl md:text-6xl leading-tight mb-6">
            Evidence that strengthens community care
          </h1>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            SMHC partners with researchers and clinicians to explore the unique mental health needs of Sikh communities.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 space-y-6">
            <p className="text-xs tracking-[0.24em] uppercase text-saffron font-bold">Featured Study</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Mental health access and cultural fit in Sikh communities
            </h2>
            <p className="text-navy/70 leading-relaxed">
              This ongoing research explores how cultural values, stigma, and community support networks shape the
              decision to seek professional mental health care. Early findings emphasize the need for trusted, culturally
              attuned providers and peer-based support.
            </p>
            <div className="inline-flex items-center gap-3 bg-saffron/10 border border-saffron/20 px-4 py-3 rounded-sm text-sm text-navy/80">
              <span className="uppercase tracking-[0.2em] text-xs text-navy/60">Status</span>
              <span>Field interviews underway</span>
            </div>
          </div>

          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-150 bg-white border border-navy/10 rounded-sm p-6 shadow-[0_24px_60px_rgba(13,27,75,0.1)]">
            <p className="text-xs uppercase tracking-[0.24em] text-saffron font-bold mb-3">Research Goals</p>
            <ul className="text-navy/70 leading-relaxed space-y-3 text-sm">
              <li>Document barriers to culturally safe care.</li>
              <li>Highlight community-led healing practices.</li>
              <li>Translate findings into accessible resources.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-navy px-6 py-24 text-cream">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12 reveal opacity-0 translate-y-6 transition-all duration-700">
            <p className="text-xs tracking-[0.22em] uppercase text-saffron font-bold mb-4">Active Projects</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Research with community impact
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESEARCH.map((item, i) => (
              <div
                key={item.title}
                className="reveal opacity-0 translate-y-6 transition-all duration-700 bg-white/5 border border-white/10 rounded-sm p-6"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold mb-2">
                  {item.status}
                </p>
                <h3 className="font-display text-xl text-cream mb-3">{item.title}</h3>
                <p className="text-cream/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
