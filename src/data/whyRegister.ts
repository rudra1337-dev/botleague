import { Medal, Gavel, Briefcase, Zap } from "lucide-react";
import type { FeatureItemData, LeaderboardEntry } from "@/types";

export const benefitItems: FeatureItemData[] = [
  {
    id: "benefit-recognition",
    icon: Medal,
    title: "National Recognition",
    description: "Lorem Ipsum",
  },
  {
    id: "benefit-judging",
    icon: Gavel,
    title: "Fair Judging",
    description: "Lorem Ipsum",
  },
  {
    id: "benefit-career",
    icon: Briefcase,
    title: "Career Ops",
    description: "Bridge the gap between arena victories and top-tier tech placements.",
  },
  {
    id: "benefit-energy",
    icon: Zap,
    title: "High-Energy Eco",
    description: "Join a nationwide community of elite innovators and robotics athletes.",
  },
];

export const leaderboardEntries: LeaderboardEntry[] = [
  { rank: 1, playerName: "Player Name", score: 508754 },
  { rank: 2, playerName: "Player Name", score: 22005 },
  { rank: 3, playerName: "Player Name", score: 20039 },
  { rank: 4, playerName: "Player Name", score: 19520 },
  { rank: 5, playerName: "Player Name", score: 15060 },
  { rank: 6, playerName: "Player Name", score: 13855 },
  { rank: 7, playerName: "Player Name", score: 10954 },
  { rank: 8, playerName: "Player Name", score: 9057 },
];
