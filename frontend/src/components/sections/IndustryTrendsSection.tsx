import type { IndustryTrend } from "../../types/report";
import { SectionCard } from "../ui/SectionCard";
import { LevelBadge } from "../ui/Badge";

export function IndustryTrendsSection({ data }: { data: IndustryTrend[] }) {
  return (
    <SectionCard
      id="industry-trends"
      index={5}
      title="Industry Trends"
      subtitle="Forces reshaping the competitive and operating environment"
    >
      <div className="divide-y divide-ink-200 border-y border-ink-200">
        {data.map((trend) => (
          <div key={trend.title} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <div className="font-medium text-ink-900">{trend.title}</div>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{trend.description}</p>
            </div>
            <div className="shrink-0">
              <LevelBadge value={`${trend.impact} Impact`} />
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
