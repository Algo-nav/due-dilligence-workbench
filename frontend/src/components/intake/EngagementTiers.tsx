const CALENDLY_URL = "https://calendly.com/navn07588/30min";

interface Tier {
  name: string;
  pricing: string;
  timeline: string;
  summary: string;
  scope: string[];
}

const TIERS: Tier[] = [
  {
    name: "Screening Report",
    pricing: "From $8,000 per target",
    timeline: "1\u20132 weeks",
    summary:
      "The methodology in the samples above: public filings, regulatory registers, press triangulation, source-graded facts, and flagged gaps.",
    scope: [
      "Full 13-section report with sourced charts",
      "Public and regulatory evidence base",
      "Red flags and key questions for management",
    ],
  },
  {
    name: "Full Commercial Due Diligence",
    pricing: "Scoped per engagement",
    timeline: "3\u20135 weeks",
    summary:
      "Everything in the screening tier, plus the sources the sample evidence notes reserve for commissioned work.",
    scope: [
      "Structured deal data (PitchBook, Grata) and registry pulls (Companies House, SEC ADV, FCA)",
      "Customer, competitor, and expert interviews",
      "Defensible market model and scenario analysis",
      "Sixty-minute findings readout with your deal team",
    ],
  },
  {
    name: "Market Intelligence Retainer",
    pricing: "Scoped, monthly",
    timeline: "Quarterly cadence",
    summary:
      "Standing coverage of a market, competitor set, or thesis, refreshed each quarter with the same evidence discipline.",
    scope: [
      "Quarterly briefing on your named competitor set",
      "Deal, fundraise, and regulatory-filing monitoring",
      "On-call analyst questions between cycles",
    ],
  },
];

export function EngagementTiers() {
  return (
    <section className="border-t border-ink-900 pt-12">
      <div className="mb-8 text-center">
        <div className="text-xs uppercase tracking-widest text-brass-600">
          Engagements
        </div>
        <h2 className="mt-3 font-serif text-2xl text-ink-950">
          From Sample to Mandate
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-ink-500">
          The samples above show the screening methodology end to end.
          Commissioned engagements extend it with the sources each report's
          evidence note names.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className="flex flex-col border border-ink-900 bg-white p-6 shadow-sm"
          >
            <h3 className="font-serif text-lg text-ink-900">{tier.name}</h3>
            <div className="mt-2 text-sm font-medium text-brass-700">
              {tier.pricing}
            </div>
            <div className="text-xs uppercase tracking-wide text-ink-400">
              {tier.timeline}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-700">
              {tier.summary}
            </p>
            <ul className="mt-4 space-y-2">
              {tier.scope.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-sm leading-relaxed text-ink-700"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brass-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-ink-900 px-8 py-3 text-sm font-medium uppercase tracking-wide text-paper transition-colors hover:bg-ink-800"
        >
          Scope a Target
        </a>
        <p className="mt-3 text-xs text-ink-400">
          A thirty-minute call: bring a target or a question and leave with a
          fixed quote.
        </p>
      </div>
    </section>
  );
}
