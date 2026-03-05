"use client";
import { useEffect, useRef, useState } from "react";

const COLORS = {
  navy: "#0D1B4B",
  royal: "#2452A4",
  saffron: "#F4871E",
  gold: "#FAC97E",
  cream: "#FDFAF5",
};

const RESOURCES = [
  {
    icon: "🧠",
    title: "Mental Health Support",
    desc: "Culturally sensitive therapy resources and referrals tailored for the Sikh community.",
    delay: 0,
  },
  {
    icon: "🤝",
    title: "Community Circles",
    desc: "Safe, confidential group spaces to share, listen, and heal — guided by the spirit of Sangat.",
    delay: 120,
  },
  {
    icon: "📖",
    title: "Sikh Philosophy & Wellness",
    desc: "Exploring Gurbani and Sikh teachings as a living foundation for inner peace and resilience.",
    delay: 240,
  },
  {
    icon: "☎️",
    title: "Crisis & Referral Line",
    desc: "Immediate, compassionate guidance connecting you to professionals who understand your culture.",
    delay: 360,
  },
];

const TEAM = [
  { name: "Dr. Harpreet Kaur", role: "Clinical Psychologist", emoji: "👩‍⚕️" },
  { name: "Gurdeep Singh", role: "Community Outreach Lead", emoji: "🧑‍🤝‍🧑" },
  { name: "Manpreet Bains", role: "Gurbani & Wellness Guide", emoji: "🙏" },
];

const QUOTES = [
  { text: "Recognize the human race as one.", author: "Guru Gobind Singh Ji" },
  { text: "Where there is compassion, there is God.", author: "Guru Nanak Dev Ji" },
  { text: "The mind is the farm; actions are the seeds.", author: "Guru Nanak Dev Ji" },
];

export default function HomePage() {
  const [activeQuote, setActiveQuote] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const revealRefs = useRef([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = "1";
            e.target.style.transform = "translateY(0)";
          }
        }),
      { threshold: 0.12 }
    );
    revealRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActiveQuote((q) => (q + 1) % QUOTES.length), 4500);
    return () => clearInterval(t);
  }, []);

  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --navy: #0D1B4B;
          --royal: #2452A4;
          --saffron: #F4871E;
          --gold: #FAC97E;
          --cream: #FDFAF5;
          --font-display: 'Cormorant Garamond', Georgia, serif;
          --font-body: 'DM Sans', sans-serif;
        }

        html { scroll-behavior: smooth; }
        body { font-family: var(--font-body); background: var(--cream); color: var(--navy); overflow-x: hidden; }

        .reveal {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; } to { opacity: 1; }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(1);   opacity: 0.4; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
        @keyframes slideQuote {
          0%   { opacity: 0; transform: translateY(10px); }
          15%  { opacity: 1; transform: translateY(0); }
          85%  { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-10px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }



        /* HERO */
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, var(--navy) 0%, #112060 50%, var(--royal) 100%);
          display: flex; align-items: center; justify-content: center;
          position: relative; overflow: hidden;
          padding: 8rem 2rem 4rem;
        }
        .hero-bg-circle {
          position: absolute; border-radius: 50%; pointer-events: none;
          border: 1px solid rgba(244,135,30,0.12);
        }
        .hero-glow {
          position: absolute; border-radius: 50%; pointer-events: none;
          filter: blur(80px);
        }
        .hero-content {
          position: relative; z-index: 2;
          text-align: center; max-width: 760px;
        }
        .hero-eyebrow {
          display: inline-block;
          font-size: 0.72rem; letter-spacing: 0.28em; text-transform: uppercase;
          color: var(--saffron); font-weight: 700;
          margin-bottom: 1.5rem;
          animation: fadeUp 1s 0.2s both;
        }
        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 600; line-height: 1.08;
          color: var(--cream);
          margin-bottom: 1.75rem;
          animation: fadeUp 1s 0.4s both;
        }
        .hero-title em { color: var(--gold); font-style: italic; }
        .hero-sub {
          color: rgba(253,250,245,0.68);
          font-size: 1.1rem; font-weight: 300; line-height: 1.75;
          max-width: 520px; margin: 0 auto 2.5rem;
          animation: fadeUp 1s 0.6s both;
        }
        .hero-actions {
          display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;
          animation: fadeUp 1s 0.8s both;
        }
        .btn-primary {
          background: var(--saffron); color: var(--navy);
          font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 1rem 2.5rem; border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 24px rgba(244,135,30,0.3);
        }
        .btn-primary:hover { background: var(--gold); transform: translateY(-2px); box-shadow: 0 8px 32px rgba(244,135,30,0.4); }
        .btn-outline {
          border: 1px solid rgba(253,250,245,0.3); color: var(--cream);
          font-size: 0.75rem; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 1rem 2.5rem; border-radius: 2px;
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-outline:hover { border-color: var(--saffron); background: rgba(244,135,30,0.08); }

        .hero-khanda {
          position: absolute; bottom: 2.5rem; left: 50%; transform: translateX(-50%);
          font-size: 1.8rem; opacity: 0.18;
          animation: float 4s ease-in-out infinite, fadeIn 1s 1.2s both;
        }
        .scroll-hint {
          position: absolute; bottom: 2rem; right: 3rem;
          display: flex; flex-direction: column; align-items: center; gap: 0.4rem;
          font-size: 0.62rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: rgba(253,250,245,0.35);
          animation: fadeIn 1s 1.5s both;
        }
        .scroll-line {
          width: 1px; height: 48px;
          background: linear-gradient(to bottom, rgba(244,135,30,0.6), transparent);
          animation: fadeIn 1s 1.5s both;
        }

        /* MARQUEE */
        .marquee-wrap {
          background: var(--saffron); overflow: hidden;
          padding: 0.85rem 0;
        }
        .marquee-track {
          display: flex; gap: 3rem; width: max-content;
          animation: marquee 28s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-item {
          font-size: 0.72rem; letter-spacing: 0.2em; text-transform: uppercase;
          color: var(--navy); font-weight: 700; white-space: nowrap;
          display: flex; align-items: center; gap: 1rem;
        }
        .marquee-dot { width: 4px; height: 4px; background: var(--navy); border-radius: 50%; opacity: 0.4; }

        /* ABOUT */
        .about { background: var(--cream); padding: 8rem 2rem; }
        .about-inner {
          max-width: 1100px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr 1fr; gap: 6rem; align-items: center;
        }
        .section-tag {
          font-size: 0.7rem; letter-spacing: 0.24em; text-transform: uppercase;
          color: var(--saffron); font-weight: 700; margin-bottom: 1rem;
        }
        .section-title {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 4vw, 3.5rem);
          font-weight: 600; line-height: 1.12;
          color: var(--navy); margin-bottom: 1.75rem;
        }
        .section-title em { color: var(--royal); font-style: italic; }
        .body-text {
          color: rgba(13,27,75,0.65); line-height: 1.85;
          font-weight: 300; font-size: 0.97rem;
          margin-bottom: 1rem;
        }
        .about-visual {
          position: relative; display: flex; justify-content: center;
        }
        .about-card {
          width: 300px; height: 380px;
          background: linear-gradient(145deg, var(--royal), var(--navy));
          border-radius: 4px;
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          gap: 1.5rem; padding: 2.5rem;
          box-shadow: 20px 28px 60px rgba(13,27,75,0.22);
          position: relative; z-index: 1;
          animation: float 6s ease-in-out infinite;
        }
        .about-card-symbol { font-size: 4rem; }
        .about-card-quote {
          font-family: var(--font-display);
          font-size: 1.15rem; font-style: italic;
          color: var(--gold); text-align: center; line-height: 1.6;
        }
        .about-accent {
          position: absolute; bottom: -18px; right: -18px;
          width: 120px; height: 120px;
          background: rgba(244,135,30,0.45); border-radius: 3px;
          z-index: 0;
        }
        .about-accent-2 {
          position: absolute; top: -14px; left: -14px;
          width: 70px; height: 70px;
          border: 2px solid rgba(36,82,164,0.3); border-radius: 3px;
          z-index: 0;
        }
        .about-stat-row {
          display: flex; gap: 2.5rem; margin-top: 2.5rem;
        }
        .stat { }
        .stat-num {
          font-family: var(--font-display);
          font-size: 2.8rem; font-weight: 700;
          color: var(--royal); line-height: 1;
        }
        .stat-label {
          font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(13,27,75,0.5); margin-top: 0.3rem;
        }

        /* QUOTE ROTATOR */
        .quote-band {
          background: var(--navy); padding: 6rem 2rem;
          text-align: center; overflow: hidden;
          position: relative;
        }
        .quote-band::before {
          content: '☬';
          position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
          font-size: 20rem; color: rgba(253,250,245,0.025);
          pointer-events: none;
        }
        .quote-rotator {
          position: relative; min-height: 120px;
          display: flex; align-items: center; justify-content: center;
        }
        .quote-text {
          font-family: var(--font-display);
          font-size: clamp(1.8rem, 3.5vw, 2.8rem);
          font-style: italic; color: var(--cream);
          font-weight: 400; max-width: 700px;
          position: absolute;
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .quote-author {
          font-size: 0.72rem; letter-spacing: 0.22em; text-transform: uppercase;
          color: var(--saffron); margin-top: 3.5rem;
          font-weight: 700; min-height: 1.5em;
          transition: opacity 0.4s ease;
        }
        .quote-dots {
          display: flex; gap: 0.5rem; justify-content: center; margin-top: 2rem;
        }
        .quote-dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: rgba(253,250,245,0.25);
          cursor: pointer; transition: background 0.3s, transform 0.3s;
          border: none;
        }
        .quote-dot.active { background: var(--saffron); transform: scale(1.3); }

        /* RESOURCES */
        .resources { background: #F5F1E8; padding: 8rem 2rem; }
        .resources-inner { max-width: 1100px; margin: 0 auto; }
        .section-header { text-align: center; margin-bottom: 4rem; }
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.5rem;
        }
        .resource-card {
          background: white; border-radius: 4px;
          padding: 2.5rem 2rem;
          border: 1px solid rgba(13,27,75,0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s;
          cursor: default;
        }
        .resource-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(13,27,75,0.12);
          border-color: rgba(244,135,30,0.3);
        }
        .card-icon { font-size: 2.5rem; margin-bottom: 1.25rem; }
        .card-title {
          font-family: var(--font-display);
          font-size: 1.35rem; font-weight: 600;
          color: var(--navy); margin-bottom: 0.75rem; line-height: 1.2;
        }
        .card-desc { color: rgba(13,27,75,0.6); font-size: 0.9rem; line-height: 1.7; font-weight: 300; }
        .card-bar {
          width: 32px; height: 2px; background: var(--saffron);
          margin-bottom: 1.25rem; border-radius: 2px;
        }

        /* TEAM */
        .team { background: var(--navy); padding: 8rem 2rem; }
        .team-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .team-title { color: var(--cream); }
        .team-tag { color: var(--saffron) !important; }
        .team-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 2rem; margin-top: 4rem;
        }
        .team-card {
          background: rgba(253,250,245,0.05);
          border: 1px solid rgba(253,250,245,0.08);
          border-radius: 4px; padding: 2.5rem 1.5rem;
          transition: background 0.3s, border-color 0.3s, transform 0.3s;
        }
        .team-card:hover {
          background: rgba(253,250,245,0.09);
          border-color: rgba(244,135,30,0.3);
          transform: translateY(-4px);
        }
        .team-avatar {
          width: 72px; height: 72px; border-radius: 50%;
          background: linear-gradient(135deg, var(--royal), var(--saffron));
          display: flex; align-items: center; justify-content: center;
          font-size: 2rem; margin: 0 auto 1.25rem;
        }
        .team-name {
          font-family: var(--font-display);
          font-size: 1.2rem; font-weight: 600;
          color: var(--cream); margin-bottom: 0.35rem;
        }
        .team-role { font-size: 0.75rem; letter-spacing: 0.1em; color: var(--gold); text-transform: uppercase; }

        /* VALUES */
        .values { background: var(--cream); padding: 8rem 2rem; }
        .values-inner { max-width: 900px; margin: 0 auto; }
        .values-list { display: flex; flex-direction: column; gap: 0; margin-top: 3rem; }
        .value-item {
          display: flex; gap: 2rem; align-items: flex-start;
          padding: 2rem 0; border-bottom: 1px solid rgba(13,27,75,0.1);
        }
        .value-item:last-child { border-bottom: none; }
        .value-num {
          font-family: var(--font-display);
          font-size: 3.5rem; font-weight: 700; color: rgba(13,27,75,0.07);
          line-height: 1; min-width: 64px;
        }
        .value-body {}
        .value-title {
          font-family: var(--font-display);
          font-size: 1.5rem; font-weight: 600;
          color: var(--navy); margin-bottom: 0.5rem;
        }
        .value-desc { color: rgba(13,27,75,0.6); font-size: 0.9rem; line-height: 1.75; font-weight: 300; }

        /* CTA */
        .cta {
          background: linear-gradient(120deg, var(--saffron) 0%, #e07010 100%);
          padding: 7rem 2rem; text-align: center;
          position: relative; overflow: hidden;
        }
        .cta::before {
          content: '';
          position: absolute; inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230D1B4B' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .cta-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
        .cta-title {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 700; color: var(--navy);
          line-height: 1.15; margin-bottom: 1rem;
        }
        .cta-sub {
          color: rgba(13,27,75,0.7); font-size: 1rem;
          font-weight: 300; margin-bottom: 2.5rem; line-height: 1.7;
        }
        .btn-dark {
          display: inline-block;
          background: var(--navy); color: var(--cream);
          font-size: 0.75rem; font-weight: 700;
          letter-spacing: 0.14em; text-transform: uppercase;
          padding: 1rem 2.75rem; border-radius: 2px;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 4px 24px rgba(13,27,75,0.2);
        }
        .btn-dark:hover { background: #071030; transform: translateY(-2px); }

        @media (max-width: 768px) {
          .about-inner { grid-template-columns: 1fr; gap: 3rem; }
          .about-card { width: 260px; height: 320px; }
          .team-grid { grid-template-columns: 1fr; }
          .hero-content { padding: 0 1rem; }
        }
      `}</style>

    

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" style={{ width: 500, height: 500, background: "rgba(244,135,30,0.08)", top: "5%", left: "5%" }} />
        <div className="hero-glow" style={{ width: 400, height: 400, background: "rgba(36,82,164,0.12)", bottom: "10%", right: "8%" }} />
        <div className="hero-bg-circle" style={{ width: 600, height: 600, top: -150, right: -150 }} />
        <div className="hero-bg-circle" style={{ width: 380, height: 380, top: -60, right: -40 }} />
        <div className="hero-bg-circle" style={{ width: 240, height: 240, bottom: 80, left: -60 }} />

        <div className="hero-content">
          <span className="hero-eyebrow">Sikh Mental Health Collective</span>
          <h1 className="hero-title">
            Healing begins<br />with <em>community</em>
          </h1>
          <p className="hero-sub">
            A safe, culturally grounded space for Sikhs to explore mental wellness —
            rooted in our values of Seva, compassion, and Chardi Kala.
          </p>
          <div className="hero-actions">
            <a href="#resources" className="btn-primary">Explore Resources</a>
            <a href="#about" className="btn-outline">Our Story</a>
          </div>
        </div>

        <div className="hero-khanda">☬</div>
        <div className="scroll-hint">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...Array(2)].map((_, pass) =>
            ["Seva · Service", "Sangat · Community", "Chardi Kala · Resilience", "Simran · Reflection", "Waheguru · Divine Grace", "Healing · Growth", "Seva · Service", "Sangat · Community", "Chardi Kala · Resilience", "Simran · Reflection"].map((item, i) => (
              <div key={`${pass}-${i}`} className="marquee-item">
                {item}<div className="marquee-dot" />
              </div>
            ))
          )}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="about-inner">
          <div ref={addReveal} className="reveal">
            <p className="section-tag">Who We Are</p>
            <h2 className="section-title">
              A collective built on<br /><em>faith, compassion & care</em>
            </h2>
            <p className="body-text">
              The Sikh Mental Health Collective (SMHC) was founded to bridge the gap between
              Sikh values and modern mental health support. We believe seeking help is an act
              of courage — not weakness — and that our community deserves a space where
              culture and healing are never at odds.
            </p>
            <p className="body-text">
              We bring together mental health professionals, community members, and Sikh
              scholars to create resources that are both clinically sound and spiritually meaningful.
            </p>
            <div className="about-stat-row">
              <div className="stat">
                <div className="stat-num">500+</div>
                <div className="stat-label">Community Members</div>
              </div>
              <div className="stat">
                <div className="stat-num">3</div>
                <div className="stat-label">Cities Served</div>
              </div>
              <div className="stat">
                <div className="stat-num">12</div>
                <div className="stat-label">Wellness Programs</div>
              </div>
            </div>
          </div>

          <div ref={addReveal} className="reveal about-visual" style={{ transitionDelay: "150ms" }}>
            <div className="about-card">
              <div className="about-card-symbol">☬</div>
              <p className="about-card-quote">
                "In the company of the holy, the mind is illumined."
              </p>
            </div>
            <div className="about-accent" />
            <div className="about-accent-2" />
          </div>
        </div>
      </section>

      {/* ROTATING QUOTE */}
      <section className="quote-band">
        <div ref={addReveal} className="reveal">
          <p className="section-tag" style={{ color: "rgba(253,250,245,0.4)", marginBottom: "2rem" }}>Words of Wisdom</p>
          <div className="quote-rotator">
            {QUOTES.map((q, i) => (
              <p
                key={i}
                className="quote-text"
                style={{
                  opacity: i === activeQuote ? 1 : 0,
                  transform: i === activeQuote ? "translateY(0)" : "translateY(12px)",
                  pointerEvents: i === activeQuote ? "auto" : "none",
                }}
              >
                "{q.text}"
              </p>
            ))}
          </div>
          <p className="quote-author">{QUOTES[activeQuote].author}</p>
          <div className="quote-dots">
            {QUOTES.map((_, i) => (
              <button
                key={i}
                className={`quote-dot${i === activeQuote ? " active" : ""}`}
                onClick={() => setActiveQuote(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="resources">
        <div className="resources-inner">
          <div ref={addReveal} className="reveal section-header">
            <p className="section-tag">What We Offer</p>
            <h2 className="section-title">Support for every step<br />of the journey</h2>
          </div>
          <div className="cards-grid">
            {RESOURCES.map((r, i) => (
              <div
                key={r.title}
                ref={addReveal}
                className="reveal resource-card"
                style={{ transitionDelay: `${r.delay}ms` }}
              >
                <div className="card-bar" />
                <div className="card-icon">{r.icon}</div>
                <h3 className="card-title">{r.title}</h3>
                <p className="card-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="team">
        <div ref={addReveal} className="reveal team-inner">
          <p className="section-tag team-tag">The People Behind SMHC</p>
          <h2 className="section-title team-title">Guided by <em style={{ color: "var(--gold)" }}>dedicated hearts</em></h2>
          <div className="team-grid">
            {TEAM.map((m, i) => (
              <div
                key={m.name}
                ref={addReveal}
                className="reveal team-card"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="team-avatar">{m.emoji}</div>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section id="values" className="values">
        <div className="values-inner">
          <div ref={addReveal} className="reveal">
            <p className="section-tag">Our Guiding Principles</p>
            <h2 className="section-title">What we stand for</h2>
          </div>
          <div className="values-list">
            {[
              { title: "Seva — Selfless Service", desc: "Every resource, event, and connection we offer comes from a place of genuine service — to the community, and to the sacred dignity of every person." },
              { title: "Chardi Kala — Eternal Optimism", desc: "Even in darkness, we hold onto hope. We help our community cultivate resilience rooted in the Sikh spirit of unwavering positivity." },
              { title: "Sangat — Community", desc: "Healing does not happen in isolation. We build spaces where people can gather, share, and hold one another with compassion and without judgment." },
              { title: "Simran — Mindful Reflection", desc: "We draw from the Sikh practice of Simran to encourage grounded, intentional engagement with one's own mind, feelings, and inner life." },
            ].map((v, i) => (
              <div key={v.title} ref={addReveal} className="reveal value-item" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="value-num">0{i + 1}</div>
                <div className="value-body">
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="cta">
        <div ref={addReveal} className="reveal cta-inner">
          <h2 className="cta-title">You don't have to walk this path alone.</h2>
          <p className="cta-sub">
            Join our community, attend an event, or simply reach out — we are here,
            and we are glad you came.
          </p>
          <a href="mailto:hello@smhc.org" className="btn-dark">Connect With Us</a>
        </div>
      </section>

    </>
  );
}