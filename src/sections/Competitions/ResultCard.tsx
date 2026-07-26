import type { EventItem } from "@/types";

export function ResultCard({ event }: { event: EventItem }) {
  return (
    <div className="rounded-xl border border-surface-border bg-surface-raised p-5">
      <h3 className="mb-1 text-lg font-semibold text-text-primary">{event.title}</h3>
      <p className="text-sm text-text-secondary">{event.description}</p>
    </div>
  );
}
