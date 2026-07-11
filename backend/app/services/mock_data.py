"""
Mock data generation for the Commercial Due Diligence demonstration.

This module produces structured, methodology-driven placeholder content for
every section of a due diligence report. Content is templated against the
user's inputs (company name, industry, geography) so the demo reads as a
live working document rather than static lorem ipsum. No external data
sources are queried — this is illustrative of the deliverable shape, not a
live research pipeline.
"""
from datetime import datetime, timezone

from app.models.schemas import (
    BusinessModel,
    CommercialRisk,
    Competitor,
    CompetitorLandscape,
    CompanyInput,
    CompanyProfile,
    CustomerSegment,
    DueDiligenceReport,
    ExecutiveSummary,
    GrowthOpportunity,
    IndustryTrend,
    KeyFact,
    KeyQuestion,
    KeyStat,
    MarketOverview,
    MarketSizeLayer,
    PorterForce,
    PortersFiveForces,
    SwotAnalysis,
    TamSamSom,
)


def _company_profile(i: CompanyInput) -> CompanyProfile:
    return CompanyProfile(
        legal_name=i.company_name,
        website=i.website,
        industry=i.industry,
        geography=i.geography,
        founded_year="2014 (illustrative)",
        headquarters=f"{i.geography} (illustrative)",
        employee_count="150–300 (estimated range)",
        description=(
            f"{i.company_name} operates in the {i.industry} sector, serving customers "
            f"primarily across {i.geography}. This profile summarizes the company's "
            f"positioning, scale, and operating footprint as understood from public "
            f"sources and management materials. In a live engagement this section "
            f"would be built from the company website, filings, press coverage, and "
            f"management interviews."
        ),
        key_facts=[
            KeyFact(label="Sector", value=i.industry),
            KeyFact(label="Primary Geography", value=i.geography),
            KeyFact(label="Business Type", value="Illustrative placeholder — B2B / B2C mix"),
            KeyFact(label="Ownership", value="Privately held (illustrative)"),
            KeyFact(label="Website", value=i.website or "Not provided"),
        ],
    )


def _business_model(i: CompanyInput) -> BusinessModel:
    return BusinessModel(
        revenue_model=(
            f"{i.company_name}'s revenue model is presented here as a placeholder "
            f"reflecting typical structures observed in {i.industry}: a blend of "
            f"recurring and transactional revenue, with pricing tied to usage, "
            f"seats, or volume depending on the customer segment."
        ),
        value_proposition=(
            f"Delivers differentiated value to customers in {i.geography} through "
            f"a combination of product quality, service reliability, and domain "
            f"expertise specific to {i.industry}."
        ),
        key_activities=[
            "Product / service delivery and quality assurance",
            "Sales and account management",
            "Customer onboarding and support",
            "Supply chain / vendor coordination",
        ],
        key_resources=[
            "Core team and domain expertise",
            "Proprietary processes, tooling, or IP",
            "Customer relationships and contracts",
            "Brand and market reputation",
        ],
        channels=[
            "Direct sales",
            "Partner / channel referrals",
            "Digital / inbound marketing",
        ],
        customer_relationships=(
            "Relationship-driven, with account management for larger accounts and "
            "self-serve or lighter-touch support for smaller customers (illustrative)."
        ),
        cost_structure=[
            "Personnel and talent",
            "Cost of goods / service delivery",
            "Sales & marketing",
            "Technology and infrastructure",
            "General & administrative overhead",
        ],
    )


def _market_overview(i: CompanyInput) -> MarketOverview:
    return MarketOverview(
        narrative=(
            f"The {i.industry} market in {i.geography} is characterized by steady "
            f"underlying demand, a mix of established incumbents and emerging "
            f"challengers, and ongoing shifts in buyer expectations. This section "
            f"would typically synthesize third-party market reports, analyst "
            f"commentary, and trade association data to size the opportunity and "
            f"characterize its trajectory."
        ),
        market_size_summary=(
            f"Illustrative estimate: the addressable {i.industry} market in "
            f"{i.geography} is placeholder-sized in the low-to-mid single-digit "
            f"billions, growing at a mid-single-digit CAGR."
        ),
        key_stats=[
            KeyStat(label="Estimated Market Growth (CAGR)", value="~6–9% (illustrative)"),
            KeyStat(label="Market Maturity", value="Growth / early-maturity (illustrative)"),
            KeyStat(label="Fragmentation", value="Moderately fragmented (illustrative)"),
        ],
        regional_notes=(
            f"Demand dynamics in {i.geography} differ from other regions due to "
            f"regulatory context, buyer maturity, and competitive density — each "
            f"would be explored in a full regional deep-dive."
        ),
    )


def _tam_sam_som(i: CompanyInput) -> TamSamSom:
    return TamSamSom(
        tam=MarketSizeLayer(
            value="$4.2B (illustrative)",
            description=f"Total global demand for {i.industry} offerings across all geographies and customer types.",
        ),
        sam=MarketSizeLayer(
            value="$980M (illustrative)",
            description=f"Portion of TAM addressable given {i.company_name}'s current product scope and focus on {i.geography}.",
        ),
        som=MarketSizeLayer(
            value="$85M (illustrative)",
            description=f"Realistic 3–5 year capture based on {i.company_name}'s go-to-market capacity and competitive position.",
        ),
        methodology_note=(
            "Sizing shown here is illustrative placeholder data. A live engagement "
            "would triangulate top-down (industry reports), bottom-up (unit economics "
            "× addressable customer count), and value-theory approaches, with sources "
            "cited for each layer."
        ),
    )


def _industry_trends(i: CompanyInput) -> list[IndustryTrend]:
    return [
        IndustryTrend(
            title="Digitization of buyer workflows",
            description=(
                f"Buyers in {i.industry} increasingly expect digital-first "
                f"purchasing, onboarding, and support experiences."
            ),
            impact="High",
        ),
        IndustryTrend(
            title="Consolidation among mid-market players",
            description=(
                f"M&A activity in {i.industry} is compressing the number of "
                f"credible mid-market competitors in {i.geography}."
            ),
            impact="Medium",
        ),
        IndustryTrend(
            title="Rising regulatory / compliance scrutiny",
            description=(
                "Evolving compliance requirements are raising the cost of doing "
                "business and creating moats for well-capitalized incumbents."
            ),
            impact="Medium",
        ),
        IndustryTrend(
            title="Shift toward outcome-based pricing",
            description=(
                "Customers are pushing vendors toward pricing tied to measurable "
                "outcomes rather than flat fees or seats."
            ),
            impact="Low",
        ),
    ]


def _competitor_landscape(i: CompanyInput) -> CompetitorLandscape:
    return CompetitorLandscape(
        competitors=[
            Competitor(
                name="Competitor A (illustrative)",
                positioning=f"Established incumbent with broad {i.industry} coverage across {i.geography}.",
                strengths=["Brand recognition", "Large installed base", "Balance sheet strength"],
                weaknesses=["Slower product velocity", "Legacy technology debt"],
                estimated_market_share="~18%",
            ),
            Competitor(
                name="Competitor B (illustrative)",
                positioning="Fast-growing challenger targeting the mid-market with a modern product.",
                strengths=["Strong product-led growth", "High customer satisfaction"],
                weaknesses=["Limited enterprise features", "Thin services layer"],
                estimated_market_share="~9%",
            ),
            Competitor(
                name="Competitor C (illustrative)",
                positioning="Niche specialist focused on a specific sub-segment of the market.",
                strengths=["Deep domain expertise", "High customer stickiness"],
                weaknesses=["Narrow addressable market", "Limited geographic reach"],
                estimated_market_share="~5%",
            ),
        ],
        competitive_intensity_narrative=(
            f"Competitive intensity in {i.industry} is moderate-to-high, with "
            f"differentiation increasingly driven by service quality, "
            f"implementation speed, and depth of domain expertise rather than "
            f"price alone. {i.company_name}'s relative position would be assessed "
            f"against each named competitor on the dimensions above."
        ),
    )


def _customer_segments(i: CompanyInput) -> list[CustomerSegment]:
    return [
        CustomerSegment(
            name="Enterprise accounts",
            description=f"Large organizations in {i.geography} with complex, multi-stakeholder buying processes.",
            estimated_size="~15% of customer base, ~45% of revenue (illustrative)",
            needs=["Reliability at scale", "Dedicated support", "Integration flexibility"],
            buying_behavior="Long sales cycles, procurement-led, multi-year contracts.",
        ),
        CustomerSegment(
            name="Mid-market accounts",
            description="Growing organizations that value speed of implementation and ROI clarity.",
            estimated_size="~35% of customer base, ~35% of revenue (illustrative)",
            needs=["Fast onboarding", "Predictable pricing", "Responsive support"],
            buying_behavior="Moderate sales cycles, champion-led buying with light procurement.",
        ),
        CustomerSegment(
            name="Small / emerging accounts",
            description="Smaller organizations that are price-sensitive and self-serve oriented.",
            estimated_size="~50% of customer base, ~20% of revenue (illustrative)",
            needs=["Low friction onboarding", "Transparent pricing", "Self-service tools"],
            buying_behavior="Short sales cycles, often self-serve or low-touch sales assisted.",
        ),
    ]


def _swot(i: CompanyInput) -> SwotAnalysis:
    return SwotAnalysis(
        strengths=[
            f"Established relationships within {i.geography}",
            f"Domain expertise specific to {i.industry}",
            "Reasonably diversified customer base (illustrative)",
        ],
        weaknesses=[
            "Reliance on a small number of key personnel (illustrative)",
            "Limited product breadth relative to larger competitors",
            "Constrained sales & marketing investment to date",
        ],
        opportunities=[
            f"Expansion into adjacent segments within {i.industry}",
            f"Geographic expansion beyond {i.geography}",
            "Potential for pricing optimization / packaging changes",
        ],
        threats=[
            "New entrants with venture-backed capital",
            "Consolidation among competitors increasing scale advantages",
            "Macroeconomic pressure on customer budgets",
        ],
    )


def _porters_five_forces(i: CompanyInput) -> PortersFiveForces:
    return PortersFiveForces(
        forces=[
            PorterForce(
                force_name="Threat of New Entrants",
                rating="Medium",
                rationale=f"Moderate capital and expertise requirements to enter {i.industry} credibly.",
            ),
            PorterForce(
                force_name="Bargaining Power of Suppliers",
                rating="Low",
                rationale="Fragmented supplier base with limited switching costs (illustrative).",
            ),
            PorterForce(
                force_name="Bargaining Power of Buyers",
                rating="Medium",
                rationale="Larger customers can exert pricing pressure; smaller accounts have less leverage.",
            ),
            PorterForce(
                force_name="Threat of Substitutes",
                rating="Medium",
                rationale="Alternative approaches (in-house builds, adjacent categories) present partial substitutes.",
            ),
            PorterForce(
                force_name="Competitive Rivalry",
                rating="High",
                rationale=f"A moderately fragmented but actively competing set of players in {i.geography}.",
            ),
        ],
        overall_attractiveness=(
            "Moderately attractive: structural forces are manageable, though "
            "competitive rivalry warrants close attention in diligence."
        ),
    )


def _commercial_risks(i: CompanyInput) -> list[CommercialRisk]:
    return [
        CommercialRisk(
            title="Customer concentration",
            description=f"A meaningful share of {i.company_name}'s revenue may sit with a small number of accounts.",
            severity="High",
            likelihood="Medium",
            mitigation="Validate top-10 customer concentration and contract renewal terms during diligence.",
        ),
        CommercialRisk(
            title="Key person dependency",
            description="Commercial relationships and institutional knowledge may be concentrated in a few individuals.",
            severity="Medium",
            likelihood="Medium",
            mitigation="Assess management depth and retention/incentive structures.",
        ),
        CommercialRisk(
            title="Pricing pressure",
            description=f"Competitive dynamics in {i.industry} could compress margins over the hold period.",
            severity="Medium",
            likelihood="Medium",
            mitigation="Stress-test unit economics under a pricing compression scenario.",
        ),
        CommercialRisk(
            title="Regulatory exposure",
            description=f"Evolving regulation affecting {i.industry} in {i.geography} could raise compliance costs.",
            severity="Low",
            likelihood="Low",
            mitigation="Confirm current compliance posture with legal counsel.",
        ),
    ]


def _growth_opportunities(i: CompanyInput) -> list[GrowthOpportunity]:
    return [
        GrowthOpportunity(
            title="Adjacent product expansion",
            description=f"Extend the current offering into adjacent needs within {i.industry}.",
            potential_impact="High",
            timeframe="Medium-term",
        ),
        GrowthOpportunity(
            title="Geographic expansion",
            description=f"Replicate the go-to-market model in geographies adjacent to {i.geography}.",
            potential_impact="Medium",
            timeframe="Long-term",
        ),
        GrowthOpportunity(
            title="Pricing & packaging optimization",
            description="Revisit pricing tiers and packaging to better capture value across segments.",
            potential_impact="Medium",
            timeframe="Short-term",
        ),
        GrowthOpportunity(
            title="Channel partnerships",
            description="Develop referral or reseller partnerships to accelerate distribution.",
            potential_impact="Medium",
            timeframe="Short-term",
        ),
    ]


def _key_questions(i: CompanyInput) -> list[KeyQuestion]:
    return [
        KeyQuestion(category="Revenue Quality", question="What share of revenue is contractual/recurring versus one-off?"),
        KeyQuestion(category="Customer Concentration", question="What is the revenue contribution of the top 10 customers, and what are their renewal terms?"),
        KeyQuestion(category="Competitive Position", question=f"How does {i.company_name} win or lose deals against its top three competitors?"),
        KeyQuestion(category="Unit Economics", question="What are gross margins by product line or customer segment?"),
        KeyQuestion(category="Management & Team", question="What is the depth of the leadership team beyond the founder(s)?"),
        KeyQuestion(category="Growth Plan", question="What specific initiatives underpin the next 24 months of growth, and what is required to fund them?"),
        KeyQuestion(category="Market Position", question=f"What structural advantages, if any, does {i.company_name} hold in {i.geography}?"),
    ]


def _executive_summary(i: CompanyInput) -> ExecutiveSummary:
    return ExecutiveSummary(
        overview=(
            f"This report presents an illustrative commercial due diligence "
            f"assessment of {i.company_name}, a {i.industry} business operating "
            f"primarily in {i.geography}. Findings below are placeholder content "
            f"structured to reflect the methodology and deliverable format used "
            f"in a live engagement."
        ),
        key_findings=[
            f"{i.company_name} holds a defensible, if not dominant, position within {i.industry}.",
            "Customer and revenue concentration are the primary areas warranting deeper diligence.",
            "Market growth and structural forces are supportive of continued expansion.",
            "Management depth beyond key individuals should be validated directly.",
        ],
        investment_thesis_notes=[
            "Underlying market growth supports a credible expansion thesis.",
            "Competitive position is solid but not yet dominant — a value-creation plan should address differentiation.",
            "Commercial risks are manageable with standard diligence-stage mitigations.",
        ],
        overall_rating="Moderately Attractive (illustrative)",
        recommendation=(
            "Proceed to deeper diligence with a focus on customer concentration, "
            "management depth, and unit economics by segment."
        ),
    )


def generate_report(company_input: CompanyInput) -> DueDiligenceReport:
    """Assemble a full mock due diligence report for the given company input."""
    return DueDiligenceReport(
        input=company_input,
        generated_at=datetime.now(timezone.utc).isoformat(),
        company_profile=_company_profile(company_input),
        business_model=_business_model(company_input),
        market_overview=_market_overview(company_input),
        tam_sam_som=_tam_sam_som(company_input),
        industry_trends=_industry_trends(company_input),
        competitor_landscape=_competitor_landscape(company_input),
        customer_segments=_customer_segments(company_input),
        swot_analysis=_swot(company_input),
        porters_five_forces=_porters_five_forces(company_input),
        commercial_risks=_commercial_risks(company_input),
        growth_opportunities=_growth_opportunities(company_input),
        key_questions=_key_questions(company_input),
        executive_summary=_executive_summary(company_input),
    )
