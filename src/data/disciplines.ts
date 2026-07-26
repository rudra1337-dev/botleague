import type { DisciplineItem } from "@/types";

import roboRace from "@/assets/images/disciplines/robo-race.png";
import lineFollower from "@/assets/images/disciplines/line-follower.png";
import rcRacing from "@/assets/images/disciplines/rc-racing.png";
import fpvDroneRacing from "@/assets/images/disciplines/fpv-drone-racing.png";
import roboHockey from "@/assets/images/disciplines/robo-hockey.png";
import roboWar from "@/assets/images/disciplines/robo-war.jpg";

export const disciplineItems: DisciplineItem[] = [
  {
    id: "disc-robo-race",
    title: "Robo Race",
    imageSrc: roboRace,
    imageAlt: "Two robots racing head to head in an arena",
  },
  {
    id: "disc-line-follower",
    title: "Line Follower",
    imageSrc: lineFollower,
    imageAlt: "A small robot following a marked line course",
  },
  {
    id: "disc-rc-racing",
    title: "RC Racing",
    imageSrc: rcRacing,
    imageAlt: "A remote-controlled car racing through a track",
  },
  {
    id: "disc-fpv-drone",
    title: "FPV Drone Racing & Aeromodelling",
    imageSrc: fpvDroneRacing,
    imageAlt: "A racing drone in flight",
  },
  {
    id: "disc-robo-hockey",
    title: "Robo Hockey",
    imageSrc: roboHockey,
    imageAlt: "A robot competing in a robo-hockey match",
  },
  {
    id: "disc-robo-war",
    title: "Robo War",
    imageSrc: roboWar,
    imageAlt: "Combat robots facing off in an arena",
  },
];