"use client";

import { useEffect } from "react";

const CONTACT_CARDS = [
  {
    title: "Email",
    value: "sikhmentalhealth@gmail.com",
    note: "General inquiries and collaborations",
  },
  {
    title: "Phone",
    value: "(000) 000-0000",
    note: "Weekdays, 9:00 AM to 5:00 PM",
  },
  {
    title: "Address",
    value: "123 Placeholder Street, City, State",
    note: "Visits by appointment only",
  },
  {
    title: "Social",
    value: "@sikhmhsummit",
    note: "Instagram",
  },
];

export default function Contact() {
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
          <div className="absolute top-[-120px] right-[-160px] w-[420px] h-[420px] rounded-full border border-saffron/20" />
          <div className="absolute top-[16%] left-[8%] w-72 h-72 bg-saffron/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-120px] left-[12%] w-[420px] h-[420px] rounded-full border border-cream/10" />
          <div className="absolute bottom-[12%] right-[10%] w-64 h-64 bg-gold-light/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 text-xs tracking-[0.28em] uppercase text-saffron font-bold mb-6">
            Contact Us
          </p>
          <h1 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-display text-4xl md:text-6xl leading-tight mb-6">
            We are here to listen and help you find the right support
          </h1>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            Share what you are looking for and we will follow up with care.
          </p>

          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-300 mt-10 inline-flex flex-wrap items-center justify-center gap-4 bg-white/10 border border-white/15 px-6 py-4 rounded-sm text-sm text-cream/80">
            <span className="uppercase tracking-[0.22em] text-xs text-cream/60">
              Response Time
            </span>
            <span>Within 2 to 3 business days (placeholder)</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.05fr_1.4fr] gap-12">
          <div className="space-y-8">
            <div className="reveal opacity-0 translate-y-6 transition-all duration-700">
              <p className="text-xs tracking-[0.24em] uppercase text-saffron font-bold mb-4">
                Ways To Reach Us
              </p>
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Choose the contact method that feels most comfortable
              </h2>
              <p className="text-navy/70 leading-relaxed">
                These are placeholders you can customize later with your official inboxes,
                phone lines, and office details.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {CONTACT_CARDS.map((card, index) => (
                <div
                  key={card.title}
                  className="reveal opacity-0 translate-y-6 transition-all duration-700 bg-white border border-navy/10 p-5 rounded-sm shadow-[0_14px_40px_rgba(13,27,75,0.08)]"
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-saffron font-semibold mb-3">
                    {card.title}
                  </p>
                  <p className="font-display text-m text-navy mb-2">{card.value}</p>
                  <p className="text-sm text-navy/60">{card.note}</p>
                </div>
              ))}
            </div>

            <div className="reveal opacity-0 translate-y-6 transition-all duration-700 bg-saffron/10 border border-saffron/20 rounded-sm p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-navy/70 font-semibold mb-3">
                Note
              </p>
              <p className="text-navy/75 leading-relaxed">
                If this is urgent, please contact local emergency services or a crisis line in
                your area. Replace this note with your preferred guidance.
              </p>
            </div>
          </div>

          <form
            className="reveal opacity-0 translate-y-6 transition-all duration-700 bg-white border border-navy/10 rounded-sm p-8 shadow-[0_24px_70px_rgba(13,27,75,0.12)]"
            action="#"
            method="post"
          >
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-saffron font-bold mb-2">
                  Send A Message
                </p>
                <h3 className="font-display text-2xl text-navy">
                  Tell us how we can support you
                </h3>
              </div>
              <span className="text-xs text-navy/50 uppercase tracking-[0.2em]">
                Placeholder Form
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <label className="flex flex-col gap-2 text-sm font-semibold text-navy/80">
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full rounded-sm border border-navy/15 bg-cream/60 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-saffron/60"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-navy/80">
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="w-full rounded-sm border border-navy/15 bg-cream/60 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-saffron/60"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-navy/80">
                Phone (optional)
                <input
                  type="tel"
                  name="phone"
                  placeholder="(000) 000-0000"
                  className="w-full rounded-sm border border-navy/15 bg-cream/60 px-4 py-3 text-sm text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-saffron/60"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-navy/80">
                Topic
                <select
                  name="topic"
                  className="w-full rounded-sm border border-navy/15 bg-cream/60 px-4 py-3 text-sm text-navy focus:outline-none focus:ring-2 focus:ring-saffron/60"
                >
                  <option>General inquiry (placeholder)</option>
                  <option>Community events (placeholder)</option>
                  <option>Partnerships (placeholder)</option>
                  <option>Volunteer opportunities (placeholder)</option>
                </select>
              </label>
            </div>

            <label className="mt-6 flex flex-col gap-2 text-sm font-semibold text-navy/80">
              Message
              <textarea
                name="message"
                rows={6}
                placeholder="Share a few details about how we can help..."
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
                I agree to be contacted about my request (placeholder)
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 w-full sm:w-auto bg-saffron text-navy font-bold text-xs tracking-[0.2em] uppercase px-8 py-4 rounded-sm transition-all duration-200 hover:bg-gold-light hover:-translate-y-0.5"
            >
              Send Message
            </button>

            <p className="mt-4 text-xs text-navy/45">
              This form is not connected yet. Replace this text when the form is live.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
