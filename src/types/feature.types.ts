import type { IconType } from "./common.types";

export type FeatureItemVariant = "numbered" | "icon-card" | "plain-icon";

export interface FeatureItemData {
  id: string;
  title: string;
  description: string;
  icon?: IconType;
  number?: number;
  href?: string;
  /** One-off highlight treatment (e.g. "Mini Makers" gold border) — explicit, not inferred. */
  featured?: boolean;
}

export interface DisciplineItem {
  id: string;
  title: string;
  imageSrc: string;
  /** Deliberately separate from title — alt text often needs different phrasing than a display title. */
  imageAlt: string;
}

export interface SponsorItem {
  id: string;
  name: string;
  logoSrc: string;
}

export interface LeaderboardEntry {
  rank: number;
  playerName: string;
  score: number;
  avatarSrc?: string;
}

export interface JourneyStep {
  stepNumber: number;
  title: string;
  description: string;
  icon: IconType;
}

export interface NavLink {
  label: string;
  href: string;
}
