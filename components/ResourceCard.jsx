export default function ResourceCard({ icon, title, desc, delay = 0 }) {
  return (
    <div
      className="border border-saffron/20 rounded-sm p-10 bg-white/4 transition-all duration-300 hover:-translate-y-1 hover:bg-saffron/8 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-4xl mb-5">{icon}</div>
      <h3 className="font-display text-xl text-cream mb-3">{title}</h3>
      <p className="text-cream/60 leading-relaxed text-sm font-light">{desc}</p>
    </div>
  );
}