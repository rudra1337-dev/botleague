import type { EventItem } from "@/types";
import { Button } from "@/components/ui/Button";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <div className="rounded-xl border border-surface-border bg-surface-raised p-5">
      <h3 className="mb-3 text-lg font-semibold text-text-primary">{event.title}</h3>
      <dl className="mb-4 grid grid-cols-3 gap-3 text-sm">
        <div>
          <dt className="text-text-muted">Date</dt>
          <dd className="text-text-secondary">{event.date}</dd>
        </div>
        <div>
          <dt className="text-text-muted">Location</dt>
          <dd className="text-text-secondary">{event.location}</dd>
        </div>
        <div>
          <dt className="text-text-muted">Category</dt>
          <dd className="text-text-secondary">{event.category}</dd>
        </div>
      </dl>
      <Button variant="primary" className="w-full">
        Register
      </Button>
    </div>
  );
}
