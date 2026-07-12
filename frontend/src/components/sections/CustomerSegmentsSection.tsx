import type { CustomerSegment } from "../../types/report";
import { SectionCard, BulletList } from "../ui/SectionCard";

export function CustomerSegmentsSection({ data }: { data: CustomerSegment[] }) {
  return (
    <SectionCard
      id="customer-segments"
      index={7}
      title="Customer Segments"
      subtitle="Who buys, why they buy, and how they behave"
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {data.map((segment) => (
          <div key={segment.name} className="flex flex-col border border-ink-200 bg-white p-5">
            <h4 className="font-serif text-lg text-ink-900">{segment.name}</h4>
            <p className="mt-1 text-sm text-ink-600">{segment.description}</p>
            <div className="mt-4">
              <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-ink-500">
                Needs
              </div>
              <BulletList items={segment.needs} />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink-600">
              <span className="font-semibold text-ink-700">Buying behavior: </span>
              {segment.buying_behavior}
            </p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
