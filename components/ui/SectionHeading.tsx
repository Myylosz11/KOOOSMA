export function SectionHeading({
  eyebrow,
  title,
  lead
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">{eyebrow}</p>
      <h2 className="font-display text-3xl font-black leading-tight md:text-5xl">{title}</h2>
      {lead ? <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted)] md:text-lg">{lead}</p> : null}
    </div>
  );
}
