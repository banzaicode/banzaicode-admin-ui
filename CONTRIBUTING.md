# Contributing

Thank you for considering contributing to scrap-news-admin-ui. To get started, follow these steps:

1. Fork the repository and create your branch from `main`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Make your changes, ensuring code adheres to the project guidelines.
4. Run linting and tests:
   ```bash
   npm run lint
   npm test
   ```
5. Commit your changes with a clear commit message in English.
6. Push your branch and open a pull request.

# UI Contribution Guide

This guide explains how to extend the project with new components, pages, and sidebar menu items.

## Prerequisites
- Use Node 18+ and run `npm install` if dependencies change.
- Run `npm run lint` and `npm test` before committing.

## Adding a Component
1. Create a new folder in `components/` using PascalCase (e.g., `components/Example`).
2. Inside it, create `Example.tsx` with a functional React component.
3. Add an `index.ts` that re-exports the component:  
   ```ts
   export { default } from "./Example";
   ```
4. Use Tailwind CSS and primitives from components/ui.
5. Document complex logic with inline comments and add tests where appropriate.

## Adding a Page
1. Under `app/(routes)`, create a folder named after the route (e.g., `app/(routes)/about`).
2. Add `page.tsx` exporting the page component.
3. Include a `layout.tsx` if the route needs a custom layout.
4. Update `components/SidebarRoutes/SidebarRoutes.data.ts` to register the new route.

## Adding a Sidebar Menu Item
1. Open `components/SidebarRoutes/SidebarRoutes.data.ts`.
2. Insert a new object into the relevant array (`dataGeneralSidebar`, `dataToolsSidebar`, etc.) with:
   * `icon` (imported from `lucide-react`)
   * `label`
   * `href`
3. Ensure the link points to the new page’s route.
