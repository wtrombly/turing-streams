# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Type-check (tsc -b) then produce production bundle
npm run lint       # Run ESLint across all TS/TSX files
npm run preview    # Serve the production build locally
```

There is no test runner configured.

## Architecture

**turing-streams** is a single-page consulting website built with React 19 + TypeScript + Vite. Entry points:

- `index.html` → `src/main.tsx` (React root, StrictMode) → `src/App.tsx` (entire site — header, hero, services, contact form, footer)

**Contact form:** handled client-side via [Formspree](https://formspree.io) (`FORMSPREE_ENDPOINT` constant at the top of `App.tsx`). No backend required. To activate: sign up at formspree.io, create a form, and replace `YOUR_FORM_ID` with the form's ID.

**Notable tooling choices:**

- **React Compiler** (`babel-plugin-react-compiler`) is enabled via `@rolldown/plugin-babel` in `vite.config.ts`. It automatically memoizes components and hooks at build time — avoid manual `useMemo`/`useCallback` unless profiling shows a specific need.
- **Vite 8** uses the Oxc parser internally (`@vitejs/plugin-react` with `oxc` option).
- **TypeScript 6** with `noUnusedLocals` and `noUnusedParameters` set to `true` — the build will fail on unused variables.
- **ESLint 9** flat config (`eslint.config.js`). The `dist/` directory is globally ignored.
- Two tsconfig files: `tsconfig.app.json` for `src/` code and `tsconfig.node.json` for `vite.config.ts`. Both compile to ES2023.

**Styling:** plain CSS files imported directly into components (`App.css`, `index.css`). No CSS modules or utility framework.

**Assets:** images/SVGs imported directly in components live in `src/assets/`; truly static files (served as-is) go in `public/`.
