import type { ExecutiveSummary } from "../../types/report";
import { SectionCard, Prose, BulletList, SubHeading } from "../ui/SectionCard";
import { Badge } from "../ui/Badge";

export function ExecutiveSummarySection({ data }: { data: ExecutiveSummary }) {
  return (
    <SectionCard
      id="executive-summary"
      index={13}
      title="Executive Summary"
      subtitle="Synthesis and recommendation"
    >
      <div className="flex flex-wrap items-center gap-3">
        <Badge>{data.overall_rating}</Badge>
      </div>
      <Prose>{data.overview}</Prose>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <SubHeading>Key Findings</SubHeading>
          <BulletList items={data.key_findings} />
        </div>
        <div>
          <SubHeading>Investment Thesis Notes</SubHeading>
          <BulletList items={data.investment_thesis_notes} />
        </div>
      </div>
      <div className="border border-ink-800 bg-ink-900 p-5">
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-brass-500">
          Recommendation
        </h3>
        <p className="text-[15px] leading-relaxed text-ink-100">{data.recommendation}</p>
      </div>
    </SectionCard>
  );
}
