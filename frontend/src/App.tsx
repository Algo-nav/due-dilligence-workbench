import { useState } from "react";
import type { DueDiligenceReport } from "./types/report";
import { getReport } from "./api/client";
import { IntakePage } from "./pages/IntakePage";
import { ReportPage } from "./pages/ReportPage";

export default function App() {
  const [report, setReport] = useState<DueDiligenceReport | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSelect(targetId: string) {
    setLoading(true);
    setError(null);
    try {
      const result = await getReport(targetId);
      setReport(result);
    } catch (err) {
      setError(
        err instanceof Error
          ? `${err.message}. Is the backend running on port 8000?`
          : "Something went wrong loading the report.",
      );
    } finally {
      setLoading(false);
    }
  }

  if (!report) {
    return <IntakePage onSelect={handleSelect} loading={loading} error={error} />;
  }

  return <ReportPage report={report} onReset={() => setReport(null)} />;
}
