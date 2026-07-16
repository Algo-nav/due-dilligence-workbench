import type { DueDiligenceReport } from "../../types/report";

interface ReportHeaderProps {
  report: DueDiligenceReport;
  onReset: () => void;
}

export function ReportHeader({ report, onReset }: ReportHeaderProps) {
  const generated = new Date(report.generated_at);

  return (
    <header className="border-b border-ink-200 bg-paper">
      <div className="no-print flex items-center justify-between bg-ink-900 px-6 py-3 text-xs uppercase tracking-wider text-ink-300 sm:px-10">
        <span>Commercial Due Diligence Workbench</span>
        <div className="flex items-center gap-4">
          <button
            onClick={() => window.print()}
            className="border border-ink-600 px-3 py-1.5 text-paper transition-colors hover:border-paper"
          >
            Export / Print
          </button>
          <button
            onClick={onReset}
            className="border border-ink-600 px-3 py-1.5 text-paper transition-colors hover:border-paper"
          >
            New Engagement
          </button>
        </div>
      </div>
      <div className="px-6 py-8 sm:px-10">
        <div className="text-xs uppercase tracking-widest text-brass-600">
          Commercial Due Diligence Report
        </div>
        <h1 className="mt-2 font-serif text-4xl text-ink-950">{report.input.company_name}</h1>
        <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-ink-600">
          {report.input.website && (
            <div className="flex gap-1.5">
              <dt className="text-ink-400">Website</dt>
              <dd>{report.input.website}</dd>
            </div>
          )}
          <div className="flex gap-1.5">
            <dt className="text-ink-400">Industry</dt>
            <dd>{report.input.industry}</dd>
          </div>
          <div className="flex gap-1.5">
            <dt className="text-ink-400">Geography</dt>
            <dd>{report.input.geography}</dd>
          </div>
          <div className="flex gap-1.5">
            <dt className="text-ink-400">Prepared</dt>
            <dd>
              {generated.toLocaleDateString(undefined, {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </dd>
          </div>
        </dl>
      </div>
    </header>
  );
}
