import type { DueDiligenceReport } from "../types/report";
import { ReportHeader } from "../components/layout/ReportHeader";
import { Sidebar } from "../components/layout/Sidebar";
import { CompanyProfileSection } from "../components/sections/CompanyProfileSection";
import { BusinessModelSection } from "../components/sections/BusinessModelSection";
import { MarketOverviewSection } from "../components/sections/MarketOverviewSection";
import { TamSamSomSection } from "../components/sections/TamSamSomSection";
import { IndustryTrendsSection } from "../components/sections/IndustryTrendsSection";
import { CompetitorLandscapeSection } from "../components/sections/CompetitorLandscapeSection";
import { CustomerSegmentsSection } from "../components/sections/CustomerSegmentsSection";
import { SwotSection } from "../components/sections/SwotSection";
import { PortersFiveForcesSection } from "../components/sections/PortersFiveForcesSection";
import { CommercialRisksSection } from "../components/sections/CommercialRisksSection";
import { GrowthOpportunitiesSection } from "../components/sections/GrowthOpportunitiesSection";
import { KeyQuestionsSection } from "../components/sections/KeyQuestionsSection";
import { ExecutiveSummarySection } from "../components/sections/ExecutiveSummarySection";

interface ReportPageProps {
  report: DueDiligenceReport;
  onReset: () => void;
}

export function ReportPage({ report, onReset }: ReportPageProps) {
  return (
    <div>
      <ReportHeader report={report} onReset={onReset} />
      <div className="mx-auto flex max-w-6xl gap-12 px-6 py-10 sm:px-10">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <CompanyProfileSection data={report.company_profile} />
          <BusinessModelSection data={report.business_model} />
          <MarketOverviewSection data={report.market_overview} />
          <TamSamSomSection data={report.tam_sam_som} />
          <IndustryTrendsSection data={report.industry_trends} />
          <CompetitorLandscapeSection data={report.competitor_landscape} />
          <CustomerSegmentsSection data={report.customer_segments} />
          <SwotSection data={report.swot_analysis} />
          <PortersFiveForcesSection data={report.porters_five_forces} />
          <CommercialRisksSection data={report.commercial_risks} />
          <GrowthOpportunitiesSection data={report.growth_opportunities} />
          <KeyQuestionsSection data={report.key_questions} />
          <ExecutiveSummarySection data={report.executive_summary} />
        </main>
      </div>
    </div>
  );
}
