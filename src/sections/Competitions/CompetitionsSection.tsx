import type { EventStatus } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useTabs } from "@/hooks/useTabs";
import { TabList } from "./TabList";
import { LiveNowPanel } from "./LiveNowPanel";
import { UpcomingPanel } from "./UpcomingPanel";
import { PastResultsPanel } from "./PastResultsPanel";

const tabs: { key: EventStatus; label: string }[] = [
  { key: "live", label: "Live Now" },
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past Results" },
];

export function CompetitionsSection() {
  const { activeTab, setActiveTab } = useTabs<EventStatus>("live");

  return (
    <section
      aria-labelledby="competitions-heading"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8"
    >
      <SectionHeading id="competitions-heading" title="Competitions & Events" />
      <TabList tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      {activeTab === "live" && <LiveNowPanel />}
      {activeTab === "upcoming" && <UpcomingPanel />}
      {activeTab === "past" && <PastResultsPanel />}
    </section>
  );
}
