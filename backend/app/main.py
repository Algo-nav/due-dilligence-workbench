from pathlib import Path

from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles

from app.routers import report, reports

app = FastAPI(
    title="Commercial Due Diligence Workbench",
    description="Internal demonstration toolkit for commercial due diligence workflows.",
    version="0.1.0",
)

app.include_router(report.router)
app.include_router(reports.router)


@app.get("/api/health")
def health() -> dict:
    return {"status": "ok"}


# Serve the built frontend (frontend/dist) as static files, with an SPA
# fallback for client-side routes. Routes above take precedence since
# Starlette matches routes in registration order. Skipped in local dev
# when the frontend hasn't been built (it runs as its own Vite process).
FRONTEND_DIST = Path(__file__).resolve().parent.parent.parent / "frontend" / "dist"

if FRONTEND_DIST.is_dir():
    app.mount("/assets", StaticFiles(directory=FRONTEND_DIST / "assets"), name="assets")

    @app.get("/{full_path:path}")
    def spa(full_path: str) -> FileResponse:
        candidate = FRONTEND_DIST / full_path
        if full_path and candidate.is_file():
            return FileResponse(candidate)
        return FileResponse(FRONTEND_DIST / "index.html")
