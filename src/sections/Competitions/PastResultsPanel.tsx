import { pastEvents } from "@/data/events";
import { ResultCard } from "./ResultCard";

export function PastResultsPanel() {
  return (
    <div
      id="tabpanel-past"
      role="tabpanel"
      aria-labelledby="tab-past"
      tabIndex={0}
      className="grid gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {pastEvents.map((event) => (
        <ResultCard key={event.id} event={event} />
      ))}
    </div>
  );
}
