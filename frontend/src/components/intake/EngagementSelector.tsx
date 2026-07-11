import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import type { ReportSummary } from "../../types/report";
import { listReports } from "../../api/client";

interface EngagementSelectorProps {
  onSelect: (targetId: string) => void;
  loading: boolean;
  error: string | null;
}

export function EngagementSelector({ onSelect, loading, error }: EngagementSelectorProps) {
  const [reports, setReports] = useState<ReportSummary[] | null>(null);
  const [listError, setListError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState("");

  useEffect(() => {
    listReports()
      .then(setReports)
      .catch((err) =>
        setListError(
          err instanceof Error ? err.message : "Failed to load sample engagements.",
        ),
      );
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!selectedId || loading) return;
    onSelect(selectedId);
  }

  const ready = reports !== null && reports.length > 0;

  return (
    <form onSubmit={handleSubmit} className="border border-ink-200 bg-white p-8 shadow-sm">
      <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-500">
        Select a sample engagement
      </label>

      {listError && (
        <p className="mb-3 border border-red-200 bg-red-50 px-3 py-2 text-sm text-signal-red">
          {listError}
        </p>
      )}

      <select
        className="w-full border border-ink-300 bg-white px-3.5 py-2.5 text-[15px] text-ink-900 focus:border-ink-900 focus:outline-none disabled:cursor-not-allowed disabled:bg-ink-50"
        value={selectedId}
        onChange={(e) => setSelectedId(e.target.value)}
        disabled={!ready}
        required
      >
        <option value="" disabled>
          {reports === null ? "Loading sample engagements…" : "Choose a company…"}
        </option>
        {reports?.map((r) => (
          <option key={r.target_id} value={r.target_id}>
            {r.company_name}
          </option>
        ))}
      </select>

      {error && (
        <p className="mt-5 border border-red-200 bg-red-50 px-3 py-2 text-sm text-signal-red">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={!selectedId || loading}
        className="mt-7 w-full bg-ink-900 py-3 text-sm font-medium uppercase tracking-wide text-paper transition-colors hover:bg-ink-800 disabled:cursor-not-allowed disabled:bg-ink-300"
      >
        {loading ? "Loading Report…" : "Load Sample Report"}
      </button>
    </form>
  );
}
