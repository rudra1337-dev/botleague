import type { DisciplineItem } from "@/types";

/**
 * imageSrc is intentionally empty — real photography assets weren't exported
 * from Figma into this build. DisciplineCard renders a styled gradient
 * placeholder when imageSrc is empty; swap in real asset paths under
 * src/assets/images/disciplines/ before shipping.
 */
export const disciplineItems: DisciplineItem[] = [
  { id: "disc-robo-race", title: "Robo Race", imageSrc: "", imageAlt: "Two robots racing head to head in an arena" },
  { id: "disc-line-follower", title: "Line Follower", imageSrc: "", imageAlt: "A small robot following a marked line course" },
  { id: "disc-rc-racing", title: "RC Racing", imageSrc: "", imageAlt: "A remote-controlled car racing through a track" },
  { id: "disc-fpv-drone", title: "FPV Drone Racing & Aeromodelling", imageSrc: "", imageAlt: "A racing drone in flight" },
  { id: "disc-robo-hockey", title: "Robo Hockey", imageSrc: "", imageAlt: "A robot competing in a robo-hockey match" },
  { id: "disc-robo-war", title: "Robo War", imageSrc: "", imageAlt: "Combat robots facing off in an arena" },
];
