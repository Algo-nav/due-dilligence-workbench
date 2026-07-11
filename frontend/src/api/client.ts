import type {
  CompanyInput,
  DueDiligenceReport,
  ReportSummary,
} from "../types/report";

const API_BASE = import.meta.env.VITE_API_BASE ?? "http://127.0.0.1:8000";

export async function generateReport(
  input: CompanyInput,
): Promise<DueDiligenceReport> {
  const res = await fetch(`${API_BASE}/api/report/generate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    throw new Error(`Failed to generate report (${res.status})`);
  }

  return res.json();
}

export async function listReports(): Promise<ReportSummary[]> {
  const res = await fetch(`${API_BASE}/api/reports`);

  if (!res.ok) {
    throw new Error(`Failed to load sample engagements (${res.status})`);
  }

  return res.json();
}

export async function getReport(targetId: string): Promise<DueDiligenceReport> {
  const res = await fetch(`${API_BASE}/api/reports/${encodeURIComponent(targetId)}`);

  if (!res.ok) {
    throw new Error(`Failed to load report "${targetId}" (${res.status})`);
  }

  return res.json();
}
