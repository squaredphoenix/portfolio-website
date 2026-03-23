# Portfolio Website

A personal developer portfolio built with Next.js, showcasing projects, work experience, and a core tech stack. Features a dark, futuristic aesthetic with smooth animations powered by Framer Motion.

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework with App Router
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [React Bootstrap](https://react-bootstrap.netlify.app/) — Layout and UI components
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [Lucide React](https://lucide.dev/) + [React Icons](https://react-icons.github.io/react-icons/) — Icons

## Project Structure

```
src/
├── app/          # Next.js App Router (layout, page, global styles)
├── components/   # Hero, Navbar, Projects, Experience
├── data/         # projects.json, experience.json
├── lib/          # Data fetching utilities
├── styles/       # CSS Modules per component
└── types/        # Shared TypeScript types
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000] to view it in the browser.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Customization

- Edit `src/data/projects.json` to update the projects section
- Edit `src/data/experience.json` to update the experience section
- Update links in `src/components/navbar.tsx` for GitHub and LinkedIn URLs
