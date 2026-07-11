const LEVEL_STYLES: Record<string, string> = {
  high: "bg-red-50 text-signal-red border-red-200",
  medium: "bg-amber-50 text-signal-amber border-amber-200",
  low: "bg-emerald-50 text-signal-green border-emerald-200",
};

function levelKey(value: string): string {
  const v = value.toLowerCase();
  if (v.includes("high")) return "high";
  if (v.includes("medium")) return "medium";
  if (v.includes("low")) return "low";
  return "neutral";
}

export function LevelBadge({ value }: { value: string }) {
  const key = levelKey(value);
  const styles = LEVEL_STYLES[key] ?? "bg-ink-100 text-ink-600 border-ink-200";
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide ${styles}`}
    >
      {value}
    </span>
  );
}

export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-brass-500/40 bg-brass-100 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-brass-700">
      {children}
    </span>
  );
}
