"use client";
import { useEffect } from "react";

const MESSAGES = [
  {
    role: "helper",
    text: "Hi, I am the SMHC health helper. I can share general wellness resources and community options.",
  },
  {
    role: "user",
    text: "I have been feeling overwhelmed and unsure where to start.",
  },
  {
    role: "helper",
    text: "Thank you for sharing. You are not alone. A good first step can be talking with someone you trust or joining a community circle. Would you like resources or events?",
  },
];

export default function ChatPage() {
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
            Health Helper
          </p>
          <h1 className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-100 font-display text-4xl md:text-6xl leading-tight mb-6">
            A gentle guide, coming soon
          </h1>
          <p className="reveal opacity-0 translate-y-6 transition-all duration-700 delay-200 text-cream/70 text-lg leading-relaxed max-w-2xl mx-auto">
            This AI chat experience will help connect you to community resources and wellness guidance.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="reveal opacity-0 translate-y-6 transition-all duration-700 bg-white border border-navy/10 rounded-sm p-8 shadow-[0_24px_70px_rgba(13,27,75,0.12)]">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-saffron font-bold mb-2">
                  Prototype Preview
                </p>
                <h2 className="font-display text-2xl text-navy">SMHC Health Helper</h2>
              </div>
              <span className="text-xs text-navy/50 uppercase tracking-[0.2em]">
                UI Only
              </span>
            </div>

            <div className="space-y-4 mb-8">
              {MESSAGES.map((msg, i) => (
                <div
                  key={`${msg.role}-${i}`}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-sm px-4 py-3 text-sm leading-relaxed border ${
                      msg.role === "user"
                        ? "bg-saffron text-navy border-saffron/40"
                        : "bg-cream border-navy/10 text-navy"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <input
                type="text"
                disabled
                placeholder="Chat coming soon..."
                className="flex-1 rounded-sm border border-navy/15 bg-cream/60 px-4 py-3 text-sm text-navy placeholder:text-navy/40"
              />
              <button
                type="button"
                disabled
                className="bg-saffron/60 text-navy font-bold text-xs tracking-[0.2em] uppercase px-6 py-3 rounded-sm"
              >
                Send
              </button>
            </div>

            <p className="mt-6 text-xs text-navy/55">
              This chatbot is not a substitute for professional care. If you are in crisis, please contact local
              emergency services or a crisis line in your area.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
