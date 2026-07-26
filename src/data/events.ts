import type { EventItem, BracketRound } from "@/types";

export const liveEvent: EventItem = {
  id: "evt-live-1",
  title: "Bengaluru Regionals",
  description: "Lorem Ipsum",
  status: "live",
};

export const upcomingEvents: EventItem[] = [
  {
    id: "evt-upcoming-1",
    title: "Event in Mumbai",
    description: "Lorem Ipsum",
    status: "upcoming",
    date: "11/11/25",
    location: "BKC",
    category: "Lorem",
  },
  {
    id: "evt-upcoming-2",
    title: "Event in Delhi",
    description: "Lorem Ipsum",
    status: "upcoming",
    date: "11/11/25",
    location: "BKC",
    category: "Lorem",
  },
];

export const pastEvents: EventItem[] = [
  {
    id: "evt-past-1",
    title: "Bengaluru Regionals",
    description: "Lorem Ipsum",
    status: "past",
  },
  {
    id: "evt-past-2",
    title: "Bengaluru Regionals",
    description: "Lorem Ipsum",
    status: "past",
  },
  {
    id: "evt-past-3",
    title: "Bengaluru Regionals",
    description: "Lorem Ipsum",
    status: "past",
  },
];

export const bracketRounds: BracketRound[] = [
  {
    roundName: "Quarterfinals",
    matches: [
      { id: "m1", teamA: "Team Alpha", teamB: "Team Vector", winnerId: "m1-a" },
      { id: "m2", teamA: "Team Nova", teamB: "Team Forge", winnerId: "m2-a" },
      { id: "m3", teamA: "Team Byte", teamB: "Team Circuit", winnerId: "m3-a" },
      { id: "m4", teamA: "Team Spark", teamB: "Team Relay" },
    ],
  },
  {
    roundName: "Semifinals",
    matches: [
      { id: "m5", teamA: "Team Alpha", teamB: "Team Nova" },
      { id: "m6", teamA: "Team Byte" },
    ],
  },
  {
    roundName: "Final",
    matches: [{ id: "m7" }],
  },
];
