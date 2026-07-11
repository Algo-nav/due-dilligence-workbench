import type { CommercialRisk } from "../../types/report";
import { SectionCard } from "../ui/SectionCard";
import { LevelBadge } from "../ui/Badge";

export function CommercialRisksSection({ data }: { data: CommercialRisk[] }) {
  return (
    <SectionCard
      id="commercial-risks"
      index={10}
      title="Commercial Risks"
      subtitle="Key risk factors and suggested mitigations for diligence"
    >
      <div className="space-y-4">
        {data.map((risk) => (
          <div key={risk.title} className="border border-ink-200 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-serif text-lg text-ink-900">{risk.title}</h4>
              <div className="flex gap-2">
                <LevelBadge value={`Severity: ${risk.severity}`} />
                <LevelBadge value={`Likelihood: ${risk.likelihood}`} />
              </div>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">{risk.description}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              <span className="font-semibold">Suggested mitigation: </span>
              {risk.mitigation}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
