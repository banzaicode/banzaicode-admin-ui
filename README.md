# Banzaicode Admin UI

[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Environment Variables

Create a `.env` file based on `.env.example` and set the following variables:

- `NEWS_API_URL` - Base URL for the news API used in the rewrite configuration. This must be provided in all deployment environments.
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Clerk publishable key used on the client.
- `CLERK_SECRET_KEY` - Clerk secret key for server-side operations.

## Dev Containers

This project includes a [Dev Container](https://containers.dev/) configuration for VS Code.

1. Install [VS Code](https://code.visualstudio.com/) and the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).
2. Open this repository in VS Code.
3. When prompted, choose **Reopen in Container** or run **Dev Containers: Reopen in Container** from the Command Palette.
4. The container runs `npm install` after creation and forwards port `3000`.

The container defines `NEWS_API_URL`, `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, and `CLERK_SECRET_KEY`. Update their values in `.devcontainer/devcontainer.json` or provide a local `.env` file as needed.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Testing

Run unit tests with:

```bash
npm test
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to contribute to this project.
