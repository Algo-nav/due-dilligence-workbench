"""Pydantic schemas for the due diligence report."""
from typing import List, Optional
from pydantic import BaseModel, Field


class CompanyInput(BaseModel):
    company_name: str
    website: Optional[str] = None
    industry: str
    geography: str


class KeyFact(BaseModel):
    label: str
    value: str


class CompanyProfile(BaseModel):
    legal_name: str
    website: Optional[str] = None
    industry: str
    geography: str
    founded_year: str
    headquarters: str
    employee_count: str
    description: str
    key_facts: List[KeyFact]


class BusinessModel(BaseModel):
    revenue_model: str
    value_proposition: str
    key_activities: List[str]
    key_resources: List[str]
    channels: List[str]
    customer_relationships: str
    cost_structure: List[str]


class KeyStat(BaseModel):
    label: str
    value: str


class MarketOverview(BaseModel):
    narrative: str
    market_size_summary: str
    key_stats: List[KeyStat]
    regional_notes: str


class MarketSizeLayer(BaseModel):
    value: str
    description: str


class TamSamSom(BaseModel):
    tam: MarketSizeLayer
    sam: MarketSizeLayer
    som: MarketSizeLayer
    methodology_note: str


class IndustryTrend(BaseModel):
    title: str
    description: str
    impact: str  # High / Medium / Low


class Competitor(BaseModel):
    name: str
    positioning: str
    strengths: List[str]
    weaknesses: List[str]
    estimated_market_share: str


class CompetitorLandscape(BaseModel):
    competitors: List[Competitor]
    competitive_intensity_narrative: str


class CustomerSegment(BaseModel):
    name: str
    description: str
    estimated_size: str
    needs: List[str]
    buying_behavior: str


class SwotAnalysis(BaseModel):
    strengths: List[str]
    weaknesses: List[str]
    opportunities: List[str]
    threats: List[str]


class PorterForce(BaseModel):
    force_name: str
    rating: str  # Low / Medium / High
    rationale: str


class PortersFiveForces(BaseModel):
    forces: List[PorterForce]
    overall_attractiveness: str


class CommercialRisk(BaseModel):
    title: str
    description: str
    severity: str  # Low / Medium / High
    likelihood: str  # Low / Medium / High
    mitigation: str


class GrowthOpportunity(BaseModel):
    title: str
    description: str
    potential_impact: str  # Low / Medium / High
    timeframe: str  # Short-term / Medium-term / Long-term


class KeyQuestion(BaseModel):
    category: str
    question: str


class ExecutiveSummary(BaseModel):
    overview: str
    key_findings: List[str]
    investment_thesis_notes: List[str]
    overall_rating: str
    recommendation: str


class DueDiligenceReport(BaseModel):
    input: CompanyInput
    generated_at: str
    company_profile: CompanyProfile
    business_model: BusinessModel
    market_overview: MarketOverview
    tam_sam_som: TamSamSom
    industry_trends: List[IndustryTrend]
    competitor_landscape: CompetitorLandscape
    customer_segments: List[CustomerSegment]
    swot_analysis: SwotAnalysis
    porters_five_forces: PortersFiveForces
    commercial_risks: List[CommercialRisk]
    growth_opportunities: List[GrowthOpportunity]
    key_questions: List[KeyQuestion]
    executive_summary: ExecutiveSummary
