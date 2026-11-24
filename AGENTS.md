<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Naveen Kumar P - Portfolio Master Guidelines & Architectural Constraints

## 1. Candidate Identity & Profile Rules
- **Full Name**: `Naveen Kumar P` (MUST strictly render on a SINGLE LINE, e.g., `whitespace-nowrap leading-none` or `font-display tracking-tight text-white block leading-tight`). Never break or wrap the name.
- **Professional Title**: `Software Consultant & Full-Stack AI Engineer`.
- **Academic Foundation**: Bachelor of Engineering (B.E.) in **Mechanical Engineering** from Sengunthar Engineering College, graduated with **9.10 CGPA (First Class with Distinction)**. Mental model: first-principles engineering decomposes mechanical equilibrium/stress into software concurrency, state determinism, and zero-bloat modular systems.
- **Current Position**: Software Consultant at **Virdhi Tech Lab P Ltd**, Chennai (02/2025 – Present). Full-stack web engineering (React.js, Next.js, Node.js) and structured AI prompt engineering workflows.

## 2. Project Authorship & Highlighting Rules
- **Daily Tracker** (`https://github.com/Naveenkumar-2310/daily-tracker`):
  - **CRITICAL**: This is Naveen's **ONE AND ONLY 100% Solo Personal Project**. All other projects were during study or company consulting.
  - Daily Tracker must ALWAYS be spotlighted as 100% Solo Authorship, Personal Project, Open Source, and prominently featured with its GitHub link.
- **Zenmarks.ai**: EdTech AI platform, prompt engineering pipelines, textbook decomposition, refer-and-earn.
- **ZenSecure**: Security operations, personnel tracking dashboards, ad-hoc dispatch.
- **Parenting Platform**: Child developmental milestones platform.

## 3. Hydration & React 19 / Next.js 16 Rules (Zero Warnings Allowed)
- **HTML/Body Hydration Suppression**: `suppressHydrationWarning` must remain on `<html>` and `<body>` in `src/app/layout.tsx` to handle browser extensions (e.g., ColorZilla `cz-shortcut-listen="true"`).
- **Deterministic CSS Styles (No Floats in Inline Styles)**: Never use unrounded continuous trigonometric floats (`Math.sin()`) in inline CSS `style` props. Turbopack SSR truncates floating decimals differently than browser JavaScript, causing hydration diffs. Always use deterministic integer arrays (like `CARD_TILTS` with `3deg`, `-3deg`, etc.).
- **No CSS Transition Shorthand in Inline Styles**: Always use Tailwind utility classes (`transition-all duration-300`) instead of `style={{ transition: "..." }}` because browsers expand transitions into multiple vendor sub-properties that differ from SSR HTML strings.
- **Tailwind Utility Classes**: Use `[transform-style:preserve-3d]` instead of inline `style={{ transformStyle: "preserve-3d" }}`.
- **No Synchronous setState in useEffect**: React 19 flags `react-hooks/set-state-in-effect`. Use `useSyncExternalStore` for client mount checks, `useRef` for timing, and static constants outside render functions.

## 4. Modal Stacking & Viewport Geometry Rules
- **React Portal with z-[9999]**: Any modal (such as the Project Blueprint modal) MUST be rendered via `createPortal(..., document.body)` with `z-[9999]`. It must NEVER be placed directly inside a container with `perspective-[...]` or `transform`, which traps `position: fixed` inside the container behind the Navbar (`z-40`).
- **Pinned Header & Footer Architecture**: Modals must always have:
  1. A pinned, non-scrolling header with Project Icon, Title, Role, and `[X]` Close button.
  2. An independently scrollable body (`overflow-y-auto flex-1`).
  3. A pinned footer with GitHub repo link and "Close Blueprint" button.
  Never rely on flex `items-center` on an overflowing container without fixed boundaries, which pushes the top half off-screen into unreachable negative coordinate space.

## 5. Contact Form & Google Sheets Webhook Rules
- **Google Sheets Webhook**: `https://script.google.com/macros/s/AKfycbxSIqYjVifvHMzd52V6oNjKImNSQaIRkMvr9XtbFV5Bx48S0oPBcUuqR6lr0PJHZyEX/exec`. Always include fallback in `src/app/api/contact/route.ts` and `netlify.toml` with `{ redirect: "follow" }`.
- **Anti-Bot Defense**: Invisible honeypot field (`formData.honeypot`) and time-gating (< 1500ms drops bot spam).
- **Client Mail Options**: Provide browser-based Gmail compose link (`https://mail.google.com/mail/?view=cm...`) alongside the Outlook button so users without Outlook installed can open Gmail directly in Chrome.

## 6. Repository, Deployments & Verification
- **GitHub Repository**: `https://github.com/Naveenkumar-2310/portfolio` (branch `main`).
- **Live Netlify URL**: `https://pnaveenkumar-portfolio.netlify.app`.
- **Verification Rule**: Any code modification must be verified with `npx eslint src` (0 errors, 0 warnings) and `yarn build` (0 errors).

## 7. Clean Code & Modular Style Architecture
- **Separation of Component Styles**:
  - Keep styling tokens and long Tailwind class groups organized in dedicated files under `src/styles/<component-name>.styles.ts` (e.g., `interactive-stage.styles.ts`, `projects.styles.ts`, `contact.styles.ts`, `footer.styles.ts`), exported via `src/styles/index.ts`.
  - Maintain component JSX clean, legible, and focused on layout and reactivity rather than cluttered inline Tailwind strings.
- **Card & Component Reusability (Anti-Copy-Paste Rule)**:
  - When multiple cards share the same structural wireframe and only differ by `title`, `subtitle`, `badge`, `icon`, or `color theme` (e.g., in `InteractiveStageModal.tsx` or feature sections), **DO NOT copy-paste repetitive card markup**.
  - Always extract reusable components into dedicated modules (e.g., `src/components/deck/StageStatCard.tsx`, `StageThinkingCard.tsx`, `StageProjectCard.tsx`, `StageJourneyCard.tsx`).
  - Map over strongly-typed configuration/data arrays instead of hardcoding repetitive DOM blocks.
- **Data-Driven Orchestration**:
  - Keep parent components and modal orchestrators lean by delegating specialized rendering to subcomponents with typed theme variants.
