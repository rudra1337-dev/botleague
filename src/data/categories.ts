import { Cog, Lightbulb, Settings2, Brain } from "lucide-react";
import type { FeatureItemData } from "@/types";

export const categoryItems: FeatureItemData[] = [
  {
    id: "cat-mini-makers",
    icon: Cog,
    title: "Mini Makers",
    description: "Where Creativity Meets Logic.",
    href: "/categories/mini-makers",
    featured: true,
  },
  {
    id: "cat-junior-innovators",
    icon: Lightbulb,
    title: "Junior Innovators",
    description: "Engineering & Strategy Fundamentals.",
    href: "/categories/junior-innovators",
  },
  {
    id: "cat-young-engineers",
    icon: Settings2,
    title: "Young Engineers",
    description: "Advanced Wireless & Autonomous Control.",
    href: "/categories/young-engineers",
  },
  {
    id: "cat-robo-minds",
    icon: Brain,
    title: "Robo Minds",
    description: "Elite Professional Sports & Robotics.",
    href: "/categories/robo-minds",
  },
];
