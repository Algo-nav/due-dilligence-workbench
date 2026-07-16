import { EngagementSelector } from "../components/intake/EngagementSelector";
import { EngagementTiers } from "../components/intake/EngagementTiers";

interface IntakePageProps {
  onSelect: (targetId: string) => void;
  loading: boolean;
  error: string | null;
}

export function IntakePage({ onSelect, loading, error }: IntakePageProps) {
  return (
    <div>
      <div className="relative flex min-h-screen items-center justify-center px-6 py-16">
        <div className="w-full max-w-xl">
          <div className="mb-10 text-center">
            <div className="text-xs uppercase tracking-widest text-brass-600">
              Commercial Due Diligence Workbench
            </div>
            <h1 className="mt-3 font-serif text-3xl text-ink-950">
              Select a Sample Engagement
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              Choose a curated target and open its full report: company
              profile, market sizing, competitive landscape, risks, and an
              executive summary.
            </p>
          </div>

          <EngagementSelector onSelect={onSelect} loading={loading} error={error} />

          <p className="mt-6 text-center text-xs text-ink-400">
            Demonstration tool. A human analyst researched and wrote each
            sample report.
          </p>
        </div>

        <a
          href="#engagements"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-widest text-ink-500 transition-colors hover:text-ink-900"
        >
          Engagement pricing below &darr;
        </a>
      </div>

      <div id="engagements" className="mx-auto w-full max-w-4xl px-6 pb-20">
        <EngagementTiers />
      </div>
    </div>
  );
}
