import { liveEvent, bracketRounds } from "@/data/events";
import { Badge } from "@/components/ui/Badge";
import { BracketView } from "./BracketView";

export function LiveNowPanel() {
  return (
    <div
      id="tabpanel-live"
      role="tabpanel"
      aria-labelledby="tab-live"
      tabIndex={0}
      className="pt-6"
    >
      <div className="mb-4 flex items-center gap-3">
        <h3 className="text-lg font-semibold text-text-primary">{liveEvent.title}</h3>
        <Badge tone="red" pulse>
          Ongoing
        </Badge>
      </div>
      <p className="mb-6 text-sm text-text-secondary">{liveEvent.description}</p>
      <BracketView rounds={bracketRounds} />
    </div>
  );
}
