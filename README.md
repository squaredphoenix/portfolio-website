# Portfolio Website

Hello — this is a small personal portfolio built with Next.js. I wrote this README as a junior developer would: clear, simple, and focused on getting started quickly.

## What this is

- A developer portfolio that lists projects and experience.
- Built with the Next.js App Router and TypeScript.
- Uses component-based layout and small JSON files for content.

## Quick features

- Project showcase with titles, descriptions, and links
- Experience / timeline section
- Simple responsive layout using component styles

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- React Bootstrap (for simple layout/components)
- Framer Motion (for small animations)
- Lucide React / React Icons (for icons)

## Project structure

```
src/
├── app/          # Next.js App Router (layout, pages, global styles)
├── components/   # Reusable UI components (Navbar, Hero, ProjectCard)
├── data/         # JSON files (projects.json, experience.json)
├── lib/          # Helper functions or small data utilities
├── styles/       # CSS Modules per component
└── types/        # Shared TypeScript types
```

## Getting started (local)

1. Install dependencies

```bash
npm install
```

2. Start the dev server

```bash
npm run dev
```

3. Open the site

Open `http://localhost:3000` in your browser.

## Useful scripts

- `npm run dev` — start the dev server
- `npm run build` — build the app for production
- `npm run start` — start the production server after building
- `npm run lint` — run ESLint checks (if available)

## How to edit content

- Projects and experience are stored in `src/data/`. Edit `projects.json` and `experience.json` to change what's shown on the site.
- Update links and social profiles in the navbar component (for example `src/components/navbar.tsx`).
- Components live in `src/components/` — try copying `ProjectCard` to create a new card type.

## Components

This project uses a few main components. Below is a short explanation of each one so you know where to look and what to change.

- `Experience.tsx` — Renders the experience/timeline section. It accepts an array of experience objects and maps them into visual items. Uses `framer-motion` for entrance animations, `react-bootstrap` for layout (`Container`, `Badge`), and `src/styles/Experiences.module.css` for styling. Edit the `experiences` data or the component's markup to change how each item looks.

- `hero.tsx` — The top (hero) section of the homepage. It shows the main headline, a short description, action buttons, and a small list of core skills with icons. Animations are done with `framer-motion`, and skill icons come from `react-icons`. Update text, buttons, or `MAIN_SKILLS` to change the hero content.

- `navbar.tsx` — A fixed-top navigation bar built with `react-bootstrap`. It contains brand text, nav links, and social icons (from `lucide-react`). Edit this file to change nav targets, add/remove social links, or tweak layout and accessibility attributes.

- `projects.tsx` — Renders the projects grid. It receives a `projects` array and maps each project into a Bootstrap `Card` with title, description, tags, and optional links (GitHub/demo). Icons and small interactions are included using `lucide-react` and `framer-motion`. To add new projects, update `src/data/projects.json` and ensure objects match the expected shape (id, title, description, tags, urls).

## Styling and UI

- The site uses CSS Modules in `src/styles/` for component-level styles.
- React Bootstrap is used for layout helpers; you can replace these with your own styles if you prefer.

## Contributing / notes

- If you want to add a new project: add an entry to `src/data/projects.json` and follow the shape of existing objects.
- Keep commits small and descriptive (e.g., `add: project - weather-app`).
- If you add new dependencies, run `npm install` and update the README if needed.

## Next steps / ideas

- Add a small script to generate a static JSON from a CMS or Google Sheet
- Add screenshots for each project in `public/` and show them on project cards
- Add a simple GitHub Actions workflow to run lint/tests on push
