import { Wrench, Building2, Award, Users } from "lucide-react";
import type { JourneyStep } from "@/types";

export const journeySteps: JourneyStep[] = [
  {
    stepNumber: 1,
    title: "Build Your Team",
    description: "Lorem Ipsum",
    icon: Wrench,
  },
  {
    stepNumber: 2,
    title: "Compete Across India",
    description: "Lorem Ipsum",
    icon: Building2,
  },
  {
    stepNumber: 3,
    title: "Earn National Ranking & Value",
    description: "Lorem Ipsum",
    icon: Award,
  },
  {
    stepNumber: 4,
    title: "Join the League",
    description: "Lorem Ipsum",
    icon: Users,
  },
];
