# Commercial Due Diligence Workbench (v0.1)

An internal demonstration of how commercial due diligence work gets
structured and delivered — built to show prospective clients (boutique PE
firms, search funds, family offices, corporate development and strategy
teams) how an engagement is scoped and packaged, not to sell them AI.

This is **not** a SaaS product. There is no auth, no database, no
deployment story. It's a local workbench: enter a target company, and it
generates a full commercial due diligence report shell across the 13
sections a real engagement would cover — currently filled with structured
placeholder content so the workflow and deliverable format can be
demonstrated end to end.

## What it demonstrates

1. **Intake** — company name, website, industry, geography.
2. **Report generation** — a structured, thirteen-section due diligence
   report: Company Profile, Business Model, Market Overview, TAM/SAM/SOM,
   Industry Trends, Competitor Landscape, Customer Segments, SWOT, Porter's
   Five Forces, Commercial Risks, Growth Opportunities, Key Questions for
   Management, and an Executive Summary.
3. **Presentation** — a sidebar-navigable report view styled like an
   internal consulting deliverable (serif headings, restrained palette, no
   AI branding), with an Export/Print action that produces a clean,
   paginated document via the browser's print-to-PDF.

All report content is illustrative. The point of v0.1 is the workflow and
the presentation layer — swapping in real research/data sources is the
natural next step (see Roadmap).

## Folder structure

```
consulting_demo/
├── backend/
│   ├── app/
│   │   ├── main.py                 FastAPI app, CORS, health check
│   │   ├── routers/report.py       POST /api/report/generate
│   │   ├── models/schemas.py       Pydantic schemas (one per report section)
│   │   ├── services/mock_data.py   Mock report generator, templated on input
│   │   └── data/                   Reserved for future static/reference data
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── api/client.ts           fetch wrapper for the backend
│   │   ├── types/report.ts         TS types mirroring the Pydantic schemas
│   │   ├── pages/
│   │   │   ├── IntakePage.tsx      Company intake form
│   │   │   └── ReportPage.tsx      Report shell (header + sidebar + sections)
│   │   ├── components/
│   │   │   ├── layout/             Sidebar (scroll-spy nav), ReportHeader
│   │   │   ├── sections/           One component per report section
│   │   │   └── ui/                 Shared presentational primitives
│   │   └── App.tsx                 Intake ⇄ Report state machine
│   └── index.html
└── README.md
```

## Architecture

- **Backend — FastAPI.** A single endpoint, `POST /api/report/generate`,
  takes `{ company_name, website, industry, geography }` and returns a
  fully-populated `DueDiligenceReport` JSON payload. `app/services/mock_data.py`
  is the one place that assembles report content — each section has its own
  builder function, templated against the input so the demo reads as a live
  working document rather than static lorem ipsum. There is no persistence;
  every request is generated fresh, in memory.
- **Frontend — React + TypeScript (Vite, Tailwind v4).** `App.tsx` holds a
  minimal state machine: no report yet → `IntakePage`; report loaded →
  `ReportPage`. Each of the 13 sections is its own component under
  `components/sections/`, all consuming the same `DueDiligenceReport` type
  and sharing presentational primitives (`SectionCard`, `Badge`,
  `BulletList`, `DataTile`) from `components/ui/`. The sidebar uses an
  `IntersectionObserver` to highlight the section currently in view.
- **Export.** `window.print()` plus a print stylesheet (`src/index.css`)
  hides the navigation chrome and breaks one section per page, so the report
  prints/saves-as-PDF as a clean client-ready document straight out of the
  browser — no PDF library required for v0.1.

## Adding or editing a section

Each section is intentionally self-contained, so extending the report
doesn't require touching unrelated code:

1. Add/edit the Pydantic model in `backend/app/models/schemas.py`.
2. Add/edit the corresponding builder function in
   `backend/app/services/mock_data.py`.
3. Mirror the type change in `frontend/src/types/report.ts`.
4. Add/edit the section component in `frontend/src/components/sections/`.
5. Register it in `frontend/src/components/sections/meta.ts` (drives the
   sidebar) and render it in `frontend/src/pages/ReportPage.tsx`.

## Running locally

Requires Python 3.11+ and Node 18+.

**Backend** (http://127.0.0.1:8000):

```bash
cd backend
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

**Frontend** (http://localhost:5173):

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:5173, fill in the intake form, and the report renders
using data from the local FastAPI backend. `frontend/src/api/client.ts` calls
a relative `/api` base; Vite's dev server proxies `/api/*` to
`http://127.0.0.1:8000` (see `frontend/vite.config.ts`), so both pieces run
as separate processes exactly as above.

## Deployment

The app deploys to Railway as a single service: FastAPI serves the built
frontend as static files (with an SPA fallback) and answers `/api/*` itself,
so there is one URL and one process, and `/api` resolves same-origin with no
proxy involved. The `Dockerfile` builds the frontend (`npm ci && npm run
build`) in one stage and copies `frontend/dist` into the Python runtime
stage alongside the backend; `uvicorn` binds to `0.0.0.0:$PORT`, which
Railway injects. `railway.toml` points Railway at the Dockerfile and sets a
health check against `/api/health`. Local dev is unaffected — running
backend and frontend as two processes (above) still works the same way.

## Roadmap (post-v0.1)

Roughly in order of value for client-facing demonstrations:

- **Live data integration** — replace mock section builders with real
  research (company site scraping, market data providers, news/filings)
  behind the same section interfaces, so the frontend and report structure
  don't change.
- **Section-level editing** — let the consultant annotate or override any
  generated section before export, since the deliverable is ultimately
  human-reviewed.
- **Native PDF export** — replace browser print with a server-rendered PDF
  (e.g. WeasyPrint or a headless-browser render) for tighter layout control
  and branding (letterhead, page numbers, table of contents).
- **Saved engagements** — lightweight local persistence (e.g. SQLite) so a
  handful of demo companies can be revisited without regenerating, once
  there's a real need to persist state across sessions.
- **Source citations** — once live data is wired in, attach source links to
  claims so the report reads as evidence-backed rather than assertions.

None of the above is required for v0.1 — the goal here was a convincing,
end-to-end demonstration of the workflow and deliverable shape.
