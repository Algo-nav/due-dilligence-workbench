import type { MarketSizeLayer, TamSamSom } from "../../types/report";
import { SectionCard, Prose } from "../ui/SectionCard";

function Layer({ label, layer }: { label: string; layer: MarketSizeLayer }) {
  return (
    <div className="border border-ink-200 bg-white p-5">
      <div className="text-xs uppercase tracking-wide text-ink-500">{label}</div>
      <div className="mt-2 font-serif text-3xl text-ink-900">{layer.value}</div>
      <p className="mt-3 text-sm leading-relaxed text-ink-600">{layer.description}</p>
    </div>
  );
}

export function TamSamSomSection({ data }: { data: TamSamSom }) {
  return (
    <SectionCard
      id="tam-sam-som"
      index={4}
      title="TAM / SAM / SOM"
      subtitle="Total, serviceable, and obtainable market sizing"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Layer label="Total Addressable Market" layer={data.tam} />
        <Layer label="Serviceable Addressable Market" layer={data.sam} />
        <Layer label="Serviceable Obtainable Market" layer={data.som} />
      </div>
      <Prose>{data.methodology_note}</Prose>
    </SectionCard>
  );
}
