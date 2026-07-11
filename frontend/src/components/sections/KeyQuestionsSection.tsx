import type { KeyQuestion } from "../../types/report";
import { SectionCard } from "../ui/SectionCard";

export function KeyQuestionsSection({ data }: { data: KeyQuestion[] }) {
  return (
    <SectionCard
      id="key-questions"
      index={12}
      title="Key Questions for Management"
      subtitle="Discussion topics to sharpen the diligence narrative"
    >
      <div className="divide-y divide-ink-200 border-y border-ink-200">
        {data.map((q, idx) => (
          <div key={idx} className="flex gap-4 py-4">
            <span className="w-40 shrink-0 text-xs font-semibold uppercase tracking-wide text-brass-700">
              {q.category}
            </span>
            <p className="text-[15px] leading-relaxed text-ink-700">{q.question}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
