# BotLeague

BotLeague is a responsive, frontend-only React application for a national robotics competition platform. It presents BotLeague as “India’s Ultimate Robotics Arena” with live competitions, upcoming events, rankings, competition categories, disciplines, ecosystem sign-up forms, and sponsor branding.

The project is built with Vite, React, TypeScript, Tailwind CSS, and lucide-react icons. Content is intentionally data-driven so events, categories, disciplines, sponsors, and form roles can be updated without rewriting section components.

## Links

- Repository: [rudra1337-dev/botleague](https://github.com/rudra1337-dev/botleague)
- Live Demo: [botleague-event.vercel.app](https://botleague-event.vercel.app/)

## Table of Contents

- [Links](#links)
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Configuration Notes](#configuration-notes)
- [How to Customize Content](#how-to-customize-content)
- [Build and Deployment](#build-and-deployment)
- [Accessibility and UX](#accessibility-and-ux)
- [Known Limitations](#known-limitations)
- [Troubleshooting](#troubleshooting)

## Project Overview

BotLeague is designed as a polished landing page for a robotics league ecosystem. The interface introduces the league, highlights current and upcoming competitions, explains the user journey, showcases competitive categories and disciplines, displays leaderboard-style rankings, and provides lightweight forms for people who want to join as judges, volunteers, or community members.

This is currently a static frontend project. Form submissions are simulated in the browser and no backend or database is connected yet.

## Features

- Responsive dark-themed landing page
- Sticky navigation bar with desktop and mobile menu states
- Hero section with live-event styling and primary calls to action
- Competitions section with accessible tabs:
  - Live Now
  - Upcoming
  - Past Results
- Live tournament bracket UI with winners and TBD slots
- User journey timeline for onboarding participants
- “What is BotLeague?” section explaining platform value
- Competition categories with icon-based cards
- Robotics discipline cards with image placeholders
- “Why Register?” benefits section
- Leaderboard widget with ranked scores
- Ecosystem sign-up cards for:
  - Judges
  - Volunteers
  - Community members
- Sponsor logo grid
- Reusable UI components for buttons, badges, headings, fields, cards, and layout
- TypeScript types shared across content and components
- Tailwind CSS theme tokens for brand colors, surfaces, and typography
- Basic form validation through a reusable custom hook

## Tech Stack

| Area | Tool |
| --- | --- |
| Framework | React |
| Build Tool | Vite |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Icons | lucide-react |
| Utility Classes | clsx |
| Linting | Oxlint |

## Project Structure

```text
botleague/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── layout/        # Root layout, navbar, footer
│   │   ├── shared/        # Reusable feature, sponsor, and discipline cards
│   │   └── ui/            # Buttons, badges, form fields, headings, icons
│   ├── constants/         # Shared constants such as routes
│   ├── data/              # Editable content for sections
│   ├── hooks/             # Reusable state logic
│   ├── sections/          # Page sections used by App.tsx
│   ├── types/             # TypeScript interfaces and shared types
│   ├── utils/             # Helper functions such as validation
│   ├── App.tsx            # Main page composition
│   ├── index.css          # Tailwind import and theme tokens
│   └── main.tsx           # React entry point
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

Install the following before running the project:

- Node.js 20 or newer recommended
- npm, which comes with Node.js

You can check your installed versions with:

```bash
node -v
npm -v
```

### Installation

Clone the project from GitHub, then open the project folder:

```bash
git clone https://github.com/rudra1337-dev/botleague.git
cd botleague
```

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Vite will print a local URL in the terminal, usually:

```text
http://localhost:5173/
```

Open that URL in your browser to view the app.

## Available Scripts

The project scripts are defined in `package.json`.

```bash
npm run dev
```

Starts the Vite development server with hot module replacement.

```bash
npm run build
```

Runs TypeScript project build checks and creates a production build in the `dist/` folder.

```bash
npm run preview
```

Serves the production build locally so you can test the final output before deployment.

```bash
npm run lint
```

Runs Oxlint against the codebase.

## Configuration Notes

### Path Alias

The project uses `@` as an alias for the `src` directory.

Example:

```ts
import { Button } from "@/components/ui/Button";
```

This alias is configured in `vite.config.ts`.

### Tailwind Theme

Brand colors, surface colors, and text colors are defined in `src/index.css` using Tailwind CSS theme tokens.

Important tokens include:

- `brand-red` for primary actions and live states
- `brand-gold` for highlighted or featured content
- `surface-base`, `surface-raised`, and `surface-raised-2` for the dark UI layers
- `text-primary`, `text-secondary`, and `text-muted` for readable hierarchy

## How to Customize Content

Most visible page content lives in `src/data`. This keeps the UI components clean and makes updates easier.

| Content | File |
| --- | --- |
| Navigation links | `src/data/nav.ts` |
| About section items | `src/data/about.ts` |
| Competition events and bracket | `src/data/events.ts` |
| User journey steps | `src/data/journeySteps.ts` |
| Categories | `src/data/categories.ts` |
| Competition disciplines | `src/data/disciplines.ts` |
| Benefits and leaderboard | `src/data/whyRegister.ts` |
| Ecosystem form fields and roles | `src/data/ecosystemForms.ts` |
| Sponsors | `src/data/sponsors.ts` |

### Updating Events

Edit `src/data/events.ts` to change:

- the live event
- upcoming events
- past result cards
- tournament bracket rounds and teams

### Updating Categories

Edit `src/data/categories.ts` to change category names, descriptions, icons, or links.

Each category supports:

- `id`
- `icon`
- `title`
- `description`
- `href`
- `featured`

### Adding Discipline Images

Discipline image slots currently use styled placeholders. To add real images:

1. Add image assets to a folder such as `src/assets/images/disciplines/`.
2. Import or reference those assets in `src/data/disciplines.ts`.
3. Set each item’s `imageSrc` value.

Example:

```ts
{
  id: "disc-robo-race",
  title: "Robo Race",
  imageSrc: "/images/robo-race.jpg",
  imageAlt: "Two robots racing head to head in an arena"
}
```

### Adding Sponsor Logos

Sponsor logo slots also use placeholders. To add real logos:

1. Add logo files to `public/` or `src/assets/`.
2. Update `src/data/sponsors.ts`.
3. Set each sponsor’s `logoSrc`.

Example:

```ts
{
  id: "sponsor-iit-bombay",
  name: "IIT Bombay",
  logoSrc: "/logos/iit-bombay.svg"
}
```

### Updating Forms

The ecosystem sign-up forms are controlled by `src/data/ecosystemForms.ts`.

You can update:

- field labels
- placeholders
- required fields
- role cards such as judge, volunteer, and member

Validation logic is handled in `src/utils/validation.ts`, and form state is managed by `src/hooks/useSignupForm.ts`.

## Build and Deployment

Create a production build:

```bash
npm run build
```

The generated files will be placed in:

```text
dist/
```

You can deploy the `dist/` folder to static hosting platforms such as:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Firebase Hosting

For most Vite deployments, use:

- Build command: `npm run build`
- Output directory: `dist`

## Accessibility and UX

The project includes several accessibility and interaction details:

- Semantic sections with labelled headings
- Skip-to-content link
- Keyboard-accessible mobile navigation
- Focus trapping while the mobile menu is open
- Escape key support for closing the mobile menu
- Accessible tab roles for the competitions section
- Keyboard navigation for event tabs using Arrow Left, Arrow Right, Home, and End
- Form labels, required indicators, validation messages, and `aria-invalid`
- Reduced-motion handling through CSS media queries

## Known Limitations

- No backend is connected yet.
- Ecosystem form submissions are simulated with a short timeout.
- Some placeholder copy still exists in event and journey descriptions.
- Real hero imagery, discipline images, and sponsor logos are not included yet.
- Navigation links currently point to route-like paths, but the app is a single-page frontend and does not include React Router.
- Login, register, watch live, and event register buttons are currently UI-only.

## Troubleshooting

### Dependencies fail to install

Delete `node_modules` and reinstall:

```bash
npm install
```

If issues continue, check that your Node.js version is current:

```bash
node -v
```

### Development server does not start

Make sure dependencies are installed:

```bash
npm install
npm run dev
```

If the default port is busy, Vite will usually offer another port.

### Build fails

Run:

```bash
npm run build
```

Then read the TypeScript error shown in the terminal. Most build errors will come from incorrect imports, invalid TypeScript types, or missing assets.

### Images or logos do not appear

Check that the path used in the data file matches the real asset location. Files placed in `public/` can be referenced from the site root, such as:

```text
/logos/example.svg
```

## License

No license file is currently included. Add a license before publishing or distributing the project publicly.
