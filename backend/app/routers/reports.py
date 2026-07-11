from fastapi import APIRouter, HTTPException

from app.models.schemas import DueDiligenceReport
from app.services.report_store import ReportSummary, list_reports, load_report

router = APIRouter(prefix="/api/reports", tags=["reports"])


@router.get("", response_model=list[ReportSummary])
def get_report_list() -> list[ReportSummary]:
    """List curated sample engagements available for the trial."""
    return list_reports()


@router.get("/{target_id}", response_model=DueDiligenceReport)
def get_report(target_id: str) -> DueDiligenceReport:
    """Load a curated sample engagement by target_id."""
    try:
        return load_report(target_id)
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail=f"Unknown report target_id: {target_id!r}")
