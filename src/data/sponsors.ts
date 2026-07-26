import type { SponsorItem } from "@/types";

import nitDelhiLogo from "@/assets/images/sponsors/nit-delhi.png";
import indianIITLogo from "@/assets/images/sponsors/indian-bit.png";
import nitSilcharLogo from "@/assets/images/sponsors/nit-silchar.png";
import roboCompany1Logo from "@/assets/images/sponsors/robo-company-1.png";
import iitBombayLogo from "@/assets/images/sponsors/iit-bombay.png";
import roboCompany2Logo from "@/assets/images/sponsors/robo-company-2.png";

export const sponsorItems: SponsorItem[] = [
  {
    id: "sponsor-nit-delhi",
    name: "NIT Delhi",
    logoSrc: nitDelhiLogo,
  },
  {
    id: "sponsor-indian-iit",
    name: "Indian BIT",
    logoSrc: indianIITLogo,
  },
  {
    id: "sponsor-nit-silchar",
    name: "NIT Silchar",
    logoSrc: nitSilcharLogo,
  },
  {
    id: "sponsor-robo-company-1",
    name: "Robo Company",
    logoSrc: roboCompany1Logo,
  },
  {
    id: "sponsor-iit-bombay",
    name: "IIT Bombay",
    logoSrc: iitBombayLogo,
  },
  {
    id: "sponsor-robo-company-2",
    name: "Robo Company",
    logoSrc: roboCompany2Logo,
  },
];