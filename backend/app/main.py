from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers import report, reports

app = FastAPI(
    title="Commercial Due Diligence Workbench",
    description="Internal demonstration toolkit for commercial due diligence workflows.",
    version="0.1.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(report.router)
app.include_router(reports.router)


@app.get("/api/health")
def health() -> dict:
    return {"status": "ok"}
