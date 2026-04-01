"use client";
import { useEffect } from "react";

export default function SurveyPage() {
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
            Public Survey
          </p>
          <h1 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-display text-4xl md:text-6xl leading-tight mb-6">
            Help shape community mental wellness
          </h1>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Your insights guide our programs, resources, and future research. This survey is anonymous and for community listening.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl grid lg:grid-cols-[1.05fr_1.4fr] gap-12">
          <div className="space-y-6 reveal opacity-0 translate-y-6 transition-all duration-700">
            <p className="text-xs tracking-[0.24em] uppercase text-saffron font-bold">
              Why We Ask
            </p>
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Community feedback guides every initiative
            </h2>
            <p className="text-navy/70 leading-relaxed">
              We are collecting perspectives on mental health needs, preferred resources, and cultural considerations.
              Your responses help us build programs that feel safe and relevant.
            </p>
            <div className="bg-saffron/10 border border-saffron/20 rounded-sm p-6 text-sm text-navy/80">
              <p className="uppercase tracking-[0.2em] text-xs text-navy/60 mb-2">Note</p>
              <p>
                This form is a placeholder and is not connected to a database yet. Replace or connect it when ready.
              </p>
            </div>
          </div>

          <form className="reveal opacity-0 translate-y-6 transition-all duration-700 bg-white border border-navy/10 rounded-sm p-8 shadow-[0_24px_70px_rgba(13,27,75,0.12)]">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-saffron font-bold mb-2">
                  Survey Form
                </p>
                <h3 className="font-display text-2xl text-navy">
                  Share your perspective
                </h3>
              </div>
              <span className="text-xs text-navy/50 uppercase tracking-[0.2em]">
                Placeholder
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2 text-sm font-semibold text-navy/80">
                Name (optional)
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-sm border border-navy/15 bg-cream/60 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-saffron/60"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-navy/80">
                Email (optional)
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-sm border border-navy/15 bg-cream/60 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-saffron/60"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-navy/80">
                Age range
                <select
                  name="age"
                  className="w-full rounded-sm border border-navy/15 bg-cream/60 px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-saffron/60"
                >
                  <option>Under 18</option>
                  <option>18-24</option>
                  <option>25-34</option>
                  <option>35-44</option>
                  <option>45-54</option>
                  <option>55+</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-navy/80">
                Preferred support
                <select
                  name="support"
                  className="w-full rounded-sm border border-navy/15 bg-cream/60 px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-saffron/60"
                >
                  <option>Peer support circles</option>
                  <option>One-on-one referrals</option>
                  <option>Workshops and education</option>
                  <option>Family-focused support</option>
                </select>
              </label>
            </div>

            <label className="mt-6 flex flex-col gap-2 text-sm font-semibold text-navy/80">
              What does culturally safe care mean to you?
              <textarea
                name="feedback"
                rows={5}
                placeholder="Share your thoughts..."
                className="w-full rounded-sm border border-navy/15 bg-cream/60 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-saffron/60"
              />
            </label>

            <div className="mt-6 flex items-center gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                className="h-4 w-4 border-navy/30 text-saffron focus:ring-saffron"
              />
              <label htmlFor="consent" className="text-xs text-navy/60">
                I understand this is a placeholder survey and not yet connected to a database.
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 w-full sm:w-auto bg-saffron text-navy font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-sm transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5"
            >
              Submit Survey
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
