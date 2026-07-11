import type { BusinessModel } from "../../types/report";
import { SectionCard, Prose, BulletList, SubHeading } from "../ui/SectionCard";

export function BusinessModelSection({ data }: { data: BusinessModel }) {
  return (
    <SectionCard
      id="business-model"
      index={2}
      title="Business Model"
      subtitle="How the company creates, delivers, and captures value"
    >
      <div>
        <SubHeading>Value Proposition</SubHeading>
        <Prose>{data.value_proposition}</Prose>
      </div>
      <div>
        <SubHeading>Revenue Model</SubHeading>
        <Prose>{data.revenue_model}</Prose>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <SubHeading>Key Activities</SubHeading>
          <BulletList items={data.key_activities} />
        </div>
        <div>
          <SubHeading>Key Resources</SubHeading>
          <BulletList items={data.key_resources} />
        </div>
        <div>
          <SubHeading>Channels</SubHeading>
          <BulletList items={data.channels} />
        </div>
        <div>
          <SubHeading>Cost Structure</SubHeading>
          <BulletList items={data.cost_structure} />
        </div>
      </div>
      <div>
        <SubHeading>Customer Relationships</SubHeading>
        <Prose>{data.customer_relationships}</Prose>
      </div>
    </SectionCard>
  );
}
