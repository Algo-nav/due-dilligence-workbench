"""Loads curated, pre-built due diligence reports from app/data/reports/."""
import json
from pathlib import Path
from typing import List, TypedDict

from app.models.schemas import DueDiligenceReport

REPORTS_DIR = Path(__file__).resolve().parent.parent / "data" / "reports"


class ReportSummary(TypedDict):
    target_id: str
    company_name: str


def list_reports() -> List[ReportSummary]:
    """Return {target_id, company_name} for every curated report on disk whose
    content is complete (i.e. not still a PENDING stub)."""
    summaries: List[ReportSummary] = []
    for path in sorted(REPORTS_DIR.glob("*.json")):
        with path.open() as f:
            data = json.load(f)
        if data.get("generated_at", "").startswith("PENDING"):
            continue
        summaries.append(
            {
                "target_id": path.stem,
                "company_name": data["input"]["company_name"],
            }
        )
    return summaries


def load_report(target_id: str) -> DueDiligenceReport:
    """Load and validate a curated report by target_id. Raises FileNotFoundError if unknown."""
    path = REPORTS_DIR / f"{target_id}.json"
    if not path.exists():
        raise FileNotFoundError(target_id)
    with path.open() as f:
        data = json.load(f)
    return DueDiligenceReport(**data)
