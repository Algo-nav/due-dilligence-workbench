import type { GrowthOpportunity } from "../../types/report";
import { SectionCard } from "../ui/SectionCard";
import { LevelBadge } from "../ui/Badge";

export function GrowthOpportunitiesSection({ data }: { data: GrowthOpportunity[] }) {
  return (
    <SectionCard
      id="growth-opportunities"
      index={11}
      title="Growth Opportunities"
      subtitle="Levers for value creation over the hold period"
    >
      <div className="space-y-4">
        {data.map((opp) => (
          <div key={opp.title} className="border border-ink-200 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-lg text-ink-900">{opp.title}</h4>
              <div className="flex gap-2">
                <LevelBadge value={`Impact: ${opp.potential_impact}`} />
                <span className="inline-flex items-center rounded-full border border-ink-200 px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-ink-500">
                  {opp.timeframe}
                </span>
              </div>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">{opp.description}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
