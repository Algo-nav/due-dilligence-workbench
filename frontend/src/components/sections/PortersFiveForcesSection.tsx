import type { PortersFiveForces } from "../../types/report";
import { SectionCard, Prose } from "../ui/SectionCard";
import { LevelBadge } from "../ui/Badge";

export function PortersFiveForcesSection({ data }: { data: PortersFiveForces }) {
  return (
    <SectionCard
      id="porters-five-forces"
      index={9}
      title="Porter's Five Forces"
      subtitle="Structural attractiveness of the industry"
    >
      <div className="divide-y divide-ink-200 border-y border-ink-200">
        {data.forces.map((f) => (
          <div key={f.force_name} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-2xl">
              <div className="font-medium text-ink-900">{f.force_name}</div>
              <p className="mt-1 text-sm leading-relaxed text-ink-600">{f.rationale}</p>
            </div>
            <div className="shrink-0">
              <LevelBadge value={f.rating} />
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
          Overall Assessment
        </div>
        <Prose>{data.overall_attractiveness}</Prose>
      </div>
    </SectionCard>
  );
}
