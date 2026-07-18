import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { Chart } from "../../types/report";

const ACCENT = "#e34948";
const NEUTRAL = "#B4B2A9";
const POSITIVE = "#2a78d6";
const GRIDLINE = "#e2e8f0";

function formatValue(value: number, unit: string, signed: boolean): string {
  const abs = Math.abs(value);
  const num = Number.isInteger(abs) ? String(abs) : String(abs);
  const sign = value < 0 ? "-" : signed && value > 0 ? "+" : "";
  if (unit === "$M") return `${sign}$${num}M`;
  if (unit === "$B") return `${sign}$${num}B`;
  if (unit === "€M") return `${sign}€${num}M`;
  if (unit === "€B") return `${sign}€${num}B`;
  if (unit === "%") return `${sign}${num}%`;
  return `${sign}${num}${unit}`;
}

function barColor(chart: Chart, label: string, value: number): string {
  if (chart.emphasis.includes(label)) return ACCENT;
  if (chart.type === "diverging" && value > 0) return POSITIVE;
  return NEUTRAL;
}

function DivergingBar(props: any) {
  const { x, y, width, height, fill, value } = props;
  const r = Math.min(6, height / 2, width / 2);
  const isPositive = value >= 0;
  const path = isPositive
    ? `M${x},${y + r} A${r},${r} 0 0 1 ${x + r},${y} L${x + width - r},${y} A${r},${r} 0 0 1 ${x + width},${y + r} L${x + width},${y + height} L${x},${y + height} Z`
    : `M${x},${y} L${x + width},${y} L${x + width},${y + height - r} A${r},${r} 0 0 1 ${x + width - r},${y + height} L${x + r},${y + height} A${r},${r} 0 0 1 ${x},${y + height - r} Z`;
  return <path d={path} fill={fill} />;
}

function ChartTooltip({ active, payload, label, unit, signed }: any) {
  if (!active || !payload?.length) return null;
  return (
    <div className="border border-ink-900 bg-white px-3 py-2 text-xs shadow-sm">
      <div className="font-medium text-ink-900">{label}</div>
      <div className="text-ink-600">{formatValue(payload[0].value, unit, signed)}</div>
    </div>
  );
}

export function ChartCard({ chart }: { chart: Chart }) {
  const data = chart.series.map((s) => ({ label: s.label, value: s.value }));
  const signed = chart.type === "diverging";
  const tickFormatter = (v: number) => formatValue(v, chart.unit, signed);

  return (
    <div className="print-avoid-break">
      <h4 className="font-serif text-base text-ink-900">{chart.title}</h4>
      {chart.subtitle && <p className="mt-1 text-sm text-ink-500">{chart.subtitle}</p>}
      <div className="mt-4 h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {chart.type === "bar_horizontal" ? (
            <BarChart data={data} layout="vertical" margin={{ top: 4, right: 24, bottom: 4, left: 4 }}>
              <CartesianGrid horizontal vertical={false} stroke={GRIDLINE} />
              <XAxis
                type="number"
                tickFormatter={tickFormatter}
                tick={{ fontSize: 12, fill: "#64748b" }}
                axisLine={{ stroke: GRIDLINE }}
                tickLine={false}
              />
              <YAxis
                type="category"
                dataKey="label"
                tick={{ fontSize: 12, fill: "#2c3e50" }}
                axisLine={{ stroke: GRIDLINE }}
                tickLine={false}
                width={110}
              />
              <Tooltip
                cursor={{ fill: "#f8f9fb" }}
                content={<ChartTooltip unit={chart.unit} signed={signed} />}
              />
              <Bar dataKey="value" maxBarSize={44} radius={[0, 6, 6, 0]} isAnimationActive={false}>
                {data.map((d) => (
                  <Cell key={d.label} fill={barColor(chart, d.label, d.value)} />
                ))}
              </Bar>
            </BarChart>
          ) : (
            <BarChart data={data} margin={{ top: 4, right: 8, bottom: 4, left: 4 }}>
              <CartesianGrid horizontal vertical={false} stroke={GRIDLINE} />
              <XAxis
                dataKey="label"
                tick={{ fontSize: 12, fill: "#2c3e50" }}
                axisLine={{ stroke: GRIDLINE }}
                tickLine={false}
              />
              <YAxis
                tickFormatter={tickFormatter}
                tick={{ fontSize: 12, fill: "#64748b" }}
                axisLine={false}
                tickLine={false}
              />
              {chart.type === "diverging" && (
                <ReferenceLine y={0} stroke="#94a3b8" strokeWidth={1} />
              )}
              <Tooltip
                cursor={{ fill: "#f8f9fb" }}
                content={<ChartTooltip unit={chart.unit} signed={signed} />}
              />
              <Bar
                dataKey="value"
                maxBarSize={44}
                radius={chart.type === "diverging" ? undefined : [6, 6, 0, 0]}
                shape={chart.type === "diverging" ? <DivergingBar /> : undefined}
                isAnimationActive={false}
              >
                {data.map((d) => (
                  <Cell key={d.label} fill={barColor(chart, d.label, d.value)} />
                ))}
              </Bar>
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
