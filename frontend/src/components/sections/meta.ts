export interface SectionMeta {
  id: string;
  label: string;
  index: number;
}

export const SECTION_META: SectionMeta[] = [
  { id: "company-profile", label: "Company Profile", index: 1 },
  { id: "business-model", label: "Business Model", index: 2 },
  { id: "market-overview", label: "Market Overview", index: 3 },
  { id: "tam-sam-som", label: "TAM / SAM / SOM", index: 4 },
  { id: "industry-trends", label: "Industry Trends", index: 5 },
  { id: "competitor-landscape", label: "Competitor Landscape", index: 6 },
  { id: "customer-segments", label: "Customer Segments", index: 7 },
  { id: "swot-analysis", label: "SWOT Analysis", index: 8 },
  { id: "porters-five-forces", label: "Porter's Five Forces", index: 9 },
  { id: "commercial-risks", label: "Commercial Risks", index: 10 },
  { id: "growth-opportunities", label: "Growth Opportunities", index: 11 },
  { id: "key-questions", label: "Key Questions for Management", index: 12 },
  { id: "executive-summary", label: "Executive Summary", index: 13 },
];
