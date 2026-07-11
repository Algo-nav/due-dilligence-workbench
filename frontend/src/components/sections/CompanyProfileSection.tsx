import type { CompanyProfile } from "../../types/report";
import { SectionCard, Prose, DataTile, SubHeading } from "../ui/SectionCard";

export function CompanyProfileSection({ data }: { data: CompanyProfile }) {
  return (
    <SectionCard
      id="company-profile"
      index={1}
      title="Company Profile"
      subtitle="Snapshot of the business, its footprint, and operating scale"
    >
      <Prose>{data.description}</Prose>
      <div>
        <SubHeading>Key Facts</SubHeading>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {data.key_facts.map((fact) => (
            <DataTile key={fact.label} label={fact.label} value={fact.value} />
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        <DataTile label="Founded" value={data.founded_year} />
        <DataTile label="Headquarters" value={data.headquarters} />
        <DataTile label="Employees" value={data.employee_count} />
      </div>
    </SectionCard>
  );
}
