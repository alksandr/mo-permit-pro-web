# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Development:**
- `npm run dev` - Start the Next.js development server (http://localhost:3000)
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint (Note: ESLint is disabled during builds per next.config.mjs)

**Package Management:**
- This project uses pnpm (evidenced by pnpm-lock.yaml). Use `pnpm install` for dependencies.

## Architecture Overview

This is a Next.js 15.2.4 application using the App Router pattern. It serves as a landing page for "MO Permit Pro," a Missouri driver's permit practice test mobile app.

**Key Architectural Decisions:**

1. **Component System**: The project uses shadcn/ui as its component library, with 40+ pre-built components in `/components/ui/`. These components are built on Radix UI primitives for accessibility.

2. **Styling**: Uses Tailwind CSS v4 with OKLCH color space. The `cn()` utility function in `/lib/utils.ts` handles class merging for component variants.

3. **Theme Support**: Dark mode is implemented via `next-themes` with the ThemeProvider in `/components/theme-provider.tsx`.

4. **Form Handling**: Forms use React Hook Form with Zod validation (though no forms are currently implemented in the landing page).

5. **Build Configuration**: The Next.js config has lenient settings - TypeScript errors and ESLint warnings are ignored during builds, suggesting rapid development priorities.

## Project Structure

- `/app/` - Next.js App Router pages and layouts
- `/components/ui/` - shadcn/ui component library
- `/public/screenshots/` - App screenshots (Screenshot_1.jpg through Screenshot_5.jpg)
- No testing infrastructure is currently set up

## Important Notes

- **No Testing Framework**: The project has no test files or testing dependencies. Any testing implementation would need to be set up from scratch.
- **Path Aliases**: Use `@/` to import from the project root (configured in tsconfig.json).
- **Image Optimization**: Disabled in next.config.mjs - images are served as-is.
- **Component Usage**: When creating new UI elements, check `/components/ui/` first - most common patterns are already implemented.