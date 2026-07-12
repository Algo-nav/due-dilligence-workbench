import type { CompetitorLandscape } from "../../types/report";
import { SectionCard, Prose, BulletList } from "../ui/SectionCard";

export function CompetitorLandscapeSection({ data }: { data: CompetitorLandscape }) {
  return (
    <SectionCard
      id="competitor-landscape"
      index={6}
      title="Competitor Landscape"
      subtitle="Positioning and relative strengths of key market participants"
    >
      <div className="space-y-4">
        {data.competitors.map((c) => (
          <div key={c.name} className="border border-ink-200 bg-white p-5">
            <h4 className="font-serif text-lg text-ink-900">{c.name}</h4>
            <p className="mt-1 text-sm text-ink-600">{c.positioning}</p>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Strengths
                </div>
                <BulletList items={c.strengths} />
              </div>
              <div>
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                  Weaknesses
                </div>
                <BulletList items={c.weaknesses} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Prose>{data.competitive_intensity_narrative}</Prose>
    </SectionCard>
  );
}
