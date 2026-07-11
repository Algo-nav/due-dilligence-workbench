import type { ReactNode } from "react";

interface SectionCardProps {
  id: string;
  index: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function SectionCard({ id, index, title, subtitle, children }: SectionCardProps) {
  return (
    <section
      id={id}
      className="print-break-before scroll-mt-24 border-b border-ink-200 pb-10 pt-10 first:pt-0"
    >
      <div className="mb-6 flex items-baseline gap-3">
        <span className="font-serif text-sm text-brass-600">
          {String(index).padStart(2, "0")}
        </span>
        <div>
          <h2 className="font-serif text-2xl text-ink-900">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-ink-500">{subtitle}</p>}
        </div>
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-ink-500">
      {children}
    </h3>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <p className="max-w-3xl text-[15px] leading-relaxed text-ink-700">{children}</p>;
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-2.5 text-[15px] leading-relaxed text-ink-700">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function DataTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-ink-200 bg-white px-4 py-3">
      <div className="text-xs uppercase tracking-wide text-ink-500">{label}</div>
      <div className="mt-1 font-serif text-lg text-ink-900">{value}</div>
    </div>
  );
}
