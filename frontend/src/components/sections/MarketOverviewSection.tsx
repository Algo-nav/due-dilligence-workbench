import type { MarketOverview } from "../../types/report";
import { SectionCard, Prose, DataTile, SubHeading } from "../ui/SectionCard";

export function MarketOverviewSection({ data }: { data: MarketOverview }) {
  return (
    <SectionCard
      id="market-overview"
      index={3}
      title="Market Overview"
      subtitle="Sizing, growth, and structural characteristics of the market"
    >
      <Prose>{data.narrative}</Prose>
      <div>
        <SubHeading>Market Sizing Summary</SubHeading>
        <Prose>{data.market_size_summary}</Prose>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {data.key_stats.map((stat) => (
          <DataTile key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
      <div>
        <SubHeading>Regional Notes</SubHeading>
        <Prose>{data.regional_notes}</Prose>
      </div>
    </SectionCard>
  );
}
