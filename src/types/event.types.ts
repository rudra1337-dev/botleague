export type EventStatus = "live" | "upcoming" | "past";

export interface EventItem {
  id: string;
  title: string;
  description: string;
  status: EventStatus;
  /** Not present on past-result items — Past Results cards show no metadata. */
  date?: string;
  location?: string;
  category?: string;
}

export interface BracketMatch {
  id: string;
  /** Undefined when a slot is not yet decided (TBD), rather than a placeholder string. */
  teamA?: string;
  teamB?: string;
  winnerId?: string;
}

export interface BracketRound {
  roundName: string;
  matches: BracketMatch[];
}
