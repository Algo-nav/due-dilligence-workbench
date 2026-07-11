import { useEffect, useState } from "react";
import { SECTION_META } from "../sections/meta";

export function Sidebar() {
  const [activeId, setActiveId] = useState<string>(SECTION_META[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.boundingClientRect.top - a.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );

    SECTION_META.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="no-print sticky top-24 hidden w-64 shrink-0 self-start lg:block">
      <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-ink-400">
        Report Sections
      </div>
      <ol className="space-y-0.5 border-l border-ink-200">
        {SECTION_META.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className={`block border-l-2 py-1.5 pl-4 text-sm transition-colors ${
                activeId === s.id
                  ? "border-brass-600 font-medium text-ink-900"
                  : "border-transparent text-ink-500 hover:text-ink-800"
              }`}
            >
              <span className="mr-2 text-ink-400">{String(s.index).padStart(2, "0")}</span>
              {s.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
