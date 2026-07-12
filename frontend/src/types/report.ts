export interface ReportSummary {
  target_id: string;
  company_name: string;
}

export interface CompanyInput {
  company_name: string;
  website?: string;
  industry: string;
  geography: string;
}

export interface KeyFact {
  label: string;
  value: string;
}

export interface CompanyProfile {
  legal_name: string;
  website?: string;
  industry: string;
  geography: string;
  founded_year: string;
  headquarters: string;
  employee_count: string;
  description: string;
  key_facts: KeyFact[];
}

export interface ChartSeries {
  label: string;
  value: number;
}

export interface Chart {
  type: "bar" | "bar_horizontal" | "diverging";
  title: string;
  subtitle?: string;
  unit: string;
  series: ChartSeries[];
  emphasis: string[];
}

export interface BusinessModel {
  revenue_model: string;
  value_proposition: string;
  key_activities: string[];
  key_resources: string[];
  channels: string[];
  customer_relationships: string;
  cost_structure: string[];
  chart?: Chart;
}

export interface KeyStat {
  label: string;
  value: string;
}

export interface MarketOverview {
  narrative: string;
  market_size_summary: string;
  key_stats: KeyStat[];
  regional_notes: string;
}

export interface MarketSizeLayer {
  value: string;
  description: string;
}

export interface TamSamSom {
  tam: MarketSizeLayer;
  sam: MarketSizeLayer;
  som: MarketSizeLayer;
  methodology_note: string;
}

export interface IndustryTrend {
  title: string;
  description: string;
  impact: string;
}

export interface Competitor {
  name: string;
  positioning: string;
  strengths: string[];
  weaknesses: string[];
  estimated_market_share: string;
}

export interface CompetitorLandscape {
  competitors: Competitor[];
  competitive_intensity_narrative: string;
}

export interface CustomerSegment {
  name: string;
  description: string;
  estimated_size: string;
  needs: string[];
  buying_behavior: string;
}

export interface SwotAnalysis {
  strengths: string[];
  weaknesses: string[];
  opportunities: string[];
  threats: string[];
}

export interface PorterForce {
  force_name: string;
  rating: string;
  rationale: string;
}

export interface PortersFiveForces {
  forces: PorterForce[];
  overall_attractiveness: string;
}

export interface CommercialRisk {
  title: string;
  description: string;
  severity: string;
  likelihood: string;
  mitigation: string;
}

export interface GrowthOpportunity {
  title: string;
  description: string;
  potential_impact: string;
  timeframe: string;
}

export interface KeyQuestion {
  category: string;
  question: string;
}

export interface ExecutiveSummary {
  overview: string;
  key_findings: string[];
  investment_thesis_notes: string[];
  overall_rating: string;
  recommendation: string;
}

export interface DueDiligenceReport {
  input: CompanyInput;
  generated_at: string;
  company_profile: CompanyProfile;
  business_model: BusinessModel;
  market_overview: MarketOverview;
  tam_sam_som: TamSamSom;
  industry_trends: IndustryTrend[];
  competitor_landscape: CompetitorLandscape;
  customer_segments: CustomerSegment[];
  swot_analysis: SwotAnalysis;
  porters_five_forces: PortersFiveForces;
  commercial_risks: CommercialRisk[];
  growth_opportunities: GrowthOpportunity[];
  key_questions: KeyQuestion[];
  executive_summary: ExecutiveSummary;
}
