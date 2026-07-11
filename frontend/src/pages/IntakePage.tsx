import { EngagementSelector } from "../components/intake/EngagementSelector";

interface IntakePageProps {
  onSelect: (targetId: string) => void;
  loading: boolean;
  error: string | null;
}

export function IntakePage({ onSelect, loading, error }: IntakePageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="w-full max-w-xl">
        <div className="mb-10 text-center">
          <div className="text-xs uppercase tracking-widest text-brass-600">
            Commercial Due Diligence Workbench
          </div>
          <h1 className="mt-3 font-serif text-3xl text-ink-950">
            Select a Sample Engagement
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-500">
            Choose a curated target below to open its commercial due
            diligence report — company profile, market sizing, competitive
            landscape, risk, and an executive summary.
          </p>
        </div>

        <EngagementSelector onSelect={onSelect} loading={loading} error={error} />

        <p className="mt-6 text-center text-xs text-ink-400">
          Internal demonstration tool. Content for each sample engagement is
          manually curated.
        </p>
      </div>
    </div>
  );
}
