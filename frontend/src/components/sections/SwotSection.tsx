import type { SwotAnalysis } from "../../types/report";
import { SectionCard, BulletList } from "../ui/SectionCard";

const QUADRANTS: { key: keyof SwotAnalysis; label: string; accent: string }[] = [
  { key: "strengths", label: "Strengths", accent: "border-t-signal-green" },
  { key: "weaknesses", label: "Weaknesses", accent: "border-t-signal-red" },
  { key: "opportunities", label: "Opportunities", accent: "border-t-brass-600" },
  { key: "threats", label: "Threats", accent: "border-t-signal-amber" },
];

export function SwotSection({ data }: { data: SwotAnalysis }) {
  return (
    <SectionCard
      id="swot-analysis"
      index={8}
      title="SWOT Analysis"
      subtitle="Internal strengths and weaknesses set against external opportunities and threats"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {QUADRANTS.map((q) => (
          <div key={q.key} className={`border border-ink-200 border-t-4 bg-white p-5 ${q.accent}`}>
            <h4 className="mb-2 text-sm font-semibold uppercase tracking-wide text-ink-700">
              {q.label}
            </h4>
            <BulletList items={data[q.key]} />
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
