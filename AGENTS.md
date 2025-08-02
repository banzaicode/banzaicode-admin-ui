# Project Guidelines

## Tech Stack
- Use **Next.js 14** with **React 18** and **TypeScript** for application development.
- Style components with **Tailwind CSS**, leveraging `class-variance-authority` and `tailwind-merge`.
- Build UI elements using **Radix UI** primitives and the existing `components/ui` pattern (shadcn/ui).

## Code Organization
- Keep component responsibilities isolated. Each component lives in its own directory within `components`.
- Place reusable primitives under `components/ui` and compose higher level pieces elsewhere.
- Follow functional, declarative React patterns and avoid mixing unrelated concerns.

## Documentation
- Write all documentation, comments, and commit messages **in English**.
- Provide clear inline comments for complex logic and update README or component docs when behavior changes.

## Testing
- Maintain existing unit tests and add tests for new features.
- Use **Jest** with **@testing-library/react**. Prefer accessible queries (e.g., `getByRole`).
- Run `npm test` and `npm run lint` before committing to ensure code quality.

## UI Best Practices
- Keep components accessible, responsive, and reusable.
- Respect existing naming conventions and file structure when adding new components.
- Avoid duplication; reuse utilities and shared components whenever possible.
