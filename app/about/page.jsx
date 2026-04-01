"use client";
import { useEffect } from "react";

const VALUES = [
  {
    title: "Seva in Action",
    desc: "We lead with service, offering support that is compassionate, practical, and grounded in community care.",
  },
  {
    title: "Cultural Integrity",
    desc: "Our work honors Sikh teachings and lived experience, ensuring mental wellness resources feel familiar and safe.",
  },
  {
    title: "Clinical Trust",
    desc: "We collaborate with professionals and researchers to provide guidance that is evidence-informed and ethical.",
  },
];

const IMPACT = [
  { label: "Community circles hosted", value: "24+" },
  { label: "Volunteers engaged", value: "60+" },
  { label: "Resource guides created", value: "12" },
  { label: "Years of service", value: "4" },
];

export default function AboutPage() {
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
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-[#172c66] to-royal px-6 pt-28 pb-20 text-cream">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-120px] right-[-160px] w-[420px] h-[420px] rounded-full border border-saffron/20" />
          <div className="absolute top-[16%] left-[8%] w-72 h-72 bg-saffron/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-120px] left-[12%] w-[420px] h-[420px] rounded-full border border-cream/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 text-xs tracking-[0.28em] uppercase text-saffron font-bold mb-6">
            About Us
          </p>
          <h1 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-display text-4xl md:text-6xl leading-tight mb-6">
            A collective rooted in faith, healing, and shared responsibility
          </h1>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            We create spaces where Sikh identity and mental wellness are honored together.
            Our work blends community care, spiritual grounding, and professional support.
          </p>
        </div>
      </section>

      {/* ORIGIN + MISSION */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div className="space-y-6 reveal opacity-0 translate-y-6 transition-all duration-700">
            <p className="text-xs tracking-[0.24em] uppercase text-saffron font-bold">
              Our Story
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Born from a need for culturally grounded care
            </h2>
            <p className="text-navy/70 leading-relaxed">
              SMHC emerged from conversations across gurdwaras, campuses, and living rooms —
              where community members shared the same hope: mental health support that feels
              aligned with Sikh values, language, and lived experience.
            </p>
            <p className="text-navy/70 leading-relaxed">
              We bring together clinicians, counselors, researchers, and volunteers to build
              pathways to care that honor the spirit of Chardi Kala and collective healing.
            </p>
          </div>

          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-150 bg-white border border-navy/10 rounded-sm p-8 shadow-[0_24px_60px_rgba(13,27,75,0.1)]">
            <p className="text-xs uppercase tracking-[0.24em] text-saffron font-bold mb-4">
              Our Mission
            </p>
            <p className="font-display text-2xl text-navy mb-4">
              To make mental wellness accessible, dignified, and culturally safe for Sikh communities.
            </p>
            <p className="text-navy/70 leading-relaxed">
              We center compassion, education, and connection so that seeking help is never
              a solitary journey.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-navy px-6 py-24 text-cream">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14 reveal opacity-0 translate-y-6 transition-all duration-700">
            <p className="text-xs tracking-[0.22em] uppercase text-saffron font-bold mb-4">Our Values</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Principles that guide every program
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className="reveal opacity-0 translate-y-6 transition-all duration-700 bg-white/5 border border-white/10 rounded-sm p-6"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <h3 className="font-display text-xl text-gold-light mb-3">{value.title}</h3>
                <p className="text-cream/70 leading-relaxed text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 mb-10">
            <p className="text-xs tracking-[0.22em] uppercase text-saffron font-bold mb-3">Our Impact</p>
            <h2 className="font-display text-3xl md:text-4xl">A growing movement of care</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT.map((item, i) => (
              <div
                key={item.label}
                className="reveal opacity-0 translate-y-6 transition-all duration-700 bg-white border border-navy/10 rounded-sm p-6 shadow-[0_18px_40px_rgba(13,27,75,0.08)]"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <p className="text-3xl font-display text-navy mb-2">{item.value}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-saffron font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-cream px-6 pb-24">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
            <p className="text-xs tracking-[0.22em] uppercase text-saffron font-bold mb-4">Our Community</p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
              Supported by professionals, volunteers, and elders
            </h2>
            <p className="text-navy/70 leading-relaxed">
              Our team includes mental health clinicians, community organizers, and Sikh scholars
              who work together to ensure our programs are both clinically sound and spiritually meaningful.
            </p>
          </div>
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-150 bg-navy text-cream rounded-sm p-8 shadow-[0_24px_60px_rgba(13,27,75,0.15)]">
            <p className="text-xs uppercase tracking-[0.22em] text-saffron font-bold mb-3">Partners</p>
            <p className="text-cream/75 leading-relaxed mb-4">
              We collaborate with counselors, gurdwaras, student organizations, and research labs
              to expand access to care and deepen cultural understanding.
            </p>
            <p className="text-cream/70 text-sm">
              If you would like to partner with SMHC, we would love to hear from you.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-block bg-saffron text-navy font-bold text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-sm transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5"
            >
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
