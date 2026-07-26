import type { ReactNode } from "react";

/** Icon component contract — works with lucide-react or any similarly-shaped icon. */
export type IconType = React.ComponentType<{ className?: string }>;

export interface WithChildren {
  children: ReactNode;
}
