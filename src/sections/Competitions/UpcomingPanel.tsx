import { upcomingEvents } from "@/data/events";
import { EventCard } from "./EventCard";

export function UpcomingPanel() {
  return (
    <div
      id="tabpanel-upcoming"
      role="tabpanel"
      aria-labelledby="tab-upcoming"
      tabIndex={0}
      className="grid gap-4 pt-6 sm:grid-cols-2"
    >
      {upcomingEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
