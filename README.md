# Aura Lounge

Aura Lounge is a portfolio concept for a contemporary Dominican restaurant and lounge in Santo Domingo. The site pairs Caribbean hospitality and food with an editorial dark-luxury visual direction.

**Live site:** [aura-restaurant-teal.vercel.app](https://aura-restaurant-teal.vercel.app)

## Project goals

- Build a polished restaurant landing page that feels warm, distinctive, and easy to navigate.
- Give the menu, reservation flow, evening experience, and visit information clear visual priority.
- Carry one consistent identity across desktop and mobile using deep charcoal, muted gold, and editorial typography.
- Keep the interactions useful and lightweight: guests can filter the menu, open a reservation request, and find the venue details.

## Why this stack

- **Next.js App Router** provides the application structure, shared layout, and production-ready rendering used for the site.
- **React** keeps interactive pieces such as the menu filters, mobile navigation, and reservation dialog manageable as reusable components.
- **JavaScript** keeps this portfolio project focused on the interface and its interactions without adding a type-system setup.
- **Tailwind CSS 4 and custom CSS** provide a small utility layer alongside the bespoke design tokens, responsive layouts, and component styling.
- **Framer Motion** adds restrained transitions when menu categories change and cards rearrange.
- **Lucide React** supplies a consistent set of lightweight interface icons.
- **Inter and Playfair Display**, loaded with `next/font`, pair a legible sans-serif interface with an editorial serif for headings.
- **Next.js Image** sizes and serves the remote food and interior photography used in the content sections.

## Features

- Responsive navigation with a mobile menu.
- Hero section with reservation and menu calls to action.
- Restaurant story and menu with filters for small plates, main courses, and cocktails.
- Evening experience and testimonial sections.
- Reservation dialog with required fields, date and time selection, and a confirmation state.
- Address, directions, and opening hours in the footer.

## Run locally

Use a Node.js version supported by the installed Next.js release.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Available scripts:

```bash
npm run lint
npm run build
npm start
```

## Project structure

```text
src/
├── app/                 # App Router page, shared layout, and global styles
├── components/
│   ├── layout/           # Site navigation and footer
│   ├── sections/         # Hero, story, menu, experience, and testimonial
│   └── ui/               # Reservation dialog
└── data/                 # Sample menu and opening hours
```

## Scope and assets

This is a visual portfolio demo, not a live restaurant booking system. Reservation details are validated in the browser and shown in a confirmation state; they are not stored or sent to a service. The menu, prices, address, hours, and testimonial are sample content. Photography is loaded from Unsplash image URLs.

Environment files, dependencies, build output, and local agent instructions are excluded from Git by `.gitignore`.
