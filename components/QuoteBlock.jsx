export default function QuoteBlock({ quote, attribution }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <div className="w-12 h-0.5 bg-saffron rounded mx-auto mb-10" />
      <p className="font-display text-2xl md:text-3xl text-navy italic leading-snug mb-6">
        "{quote}"
      </p>
      <span className="text-xs tracking-widest uppercase text-saffron font-bold">
        — {attribution}
      </span>
    </div>
  );
}