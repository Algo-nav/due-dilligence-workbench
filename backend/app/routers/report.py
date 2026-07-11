from fastapi import APIRouter

from app.models.schemas import CompanyInput, DueDiligenceReport
from app.services.mock_data import generate_report

router = APIRouter(prefix="/api/report", tags=["report"])


@router.post("/generate", response_model=DueDiligenceReport)
def generate(company_input: CompanyInput) -> DueDiligenceReport:
    """Generate a full commercial due diligence report (mock data)."""
    return generate_report(company_input)
