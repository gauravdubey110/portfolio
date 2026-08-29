# AGENTS.md — Gaurav Dubey Portfolio

## Role

Act as a senior product designer, UX designer, creative developer, and frontend engineer. Build a production-quality personal portfolio for Gaurav Dubey.

The portfolio must feel like the website of an engineer who builds scalable distributed systems — not a generic developer template.

## Source of Truth

Use these sources for professional information:

1. `Gaurav_Dubey_Resume.pdf` — primary source
2. LinkedIn: https://www.linkedin.com/in/gaurav-dubey-79a448190/
3. GitHub: https://github.com/gauravdubey110

Do not invent companies, titles, projects, technologies, achievements, metrics, dates, certifications, or responsibilities.

When sources conflict, generally prioritize Resume → LinkedIn → GitHub. GitHub may be used to discover public projects not listed on the resume.

Do not expose confidential employer information, internal URLs, secrets, credentials, proprietary algorithms, customer information, or non-public architecture.

## Core Positioning

Position Gaurav primarily as a:

**Software Engineer / Full-Stack Engineer specializing in distributed systems, backend engineering, cloud-native architecture, and scalable event-driven platforms.**

His strongest technical identity is:

**Distributed Systems + Backend Engineering + Cloud Infrastructure + Full Stack + AI-assisted Engineering**

Do not position him primarily as a frontend developer or generic AI/web developer.

## Engineering Metrics

Only use metrics supported by the source material. Important resume-backed metrics include:

- 10M+ events/day
- ~10K TPS
- 40M+ records migrated
- 15M+ requests/day
- 25% P95 API latency reduction
- 50% production incident reduction
- 70%+ faster frontend development
- 50% MTTD/MTTR reduction
- 95%+ test coverage

## Design Priorities

Priority order:

1. Content accuracy
2. Usability and accessibility
3. Performance
4. Visual hierarchy
5. Interaction quality
6. Decorative effects

The design should be:

- Premium
- Minimal
- Technical
- Sophisticated
- Dynamic
- Responsive
- Lightweight
- Custom-built

Preferred visual direction:

**Linear × Vercel × modern engineering control plane**

Use a dark-first aesthetic, restrained accents, strong typography, subtle gradients, thin borders, technical grids, and carefully controlled motion.

Avoid:

- Generic Bootstrap-style layouts
- Stock developer illustrations
- Excessive neon
- Rainbow gradients
- Excessive glassmorphism
- Heavy 3D/WebGL
- Giant particle systems
- Animation for animation's sake

## Engineering-First Storytelling

The website should communicate within roughly 10 seconds:

1. Who Gaurav is
2. What kind of engineer he is
3. What systems he builds
4. At what scale
5. What impact he has had
6. What technologies he uses
7. What he has built
8. How to contact him

Treat the portfolio as an engineering story, not a resume pasted into HTML.

## Architecture

Keep the code modular and maintainable.

Prefer a structure similar to:

- `components/`
- `sections/`
- `data/`
- `assets/`

Keep portfolio content separate from presentation where practical, e.g.:

- `data/profile`
- `data/experience`
- `data/projects`
- `data/skills`

Use TypeScript and reusable components.

Use the existing project stack if one exists. If starting from scratch, prefer React + TypeScript + Vite with lightweight CSS/Tailwind.

Do not add dependencies unless they provide meaningful value.

## Performance

The site itself should demonstrate engineering quality.

Prefer:

- CSS animations
- SVG
- IntersectionObserver
- Native browser APIs
- Lazy loading
- Optimized assets
- Minimal JavaScript
- Minimal third-party requests

Avoid heavy animation, 3D, or visualization libraries unless clearly justified.

## Animation

Animations should be subtle and intentional:

- Hero entrance
- Staggered text
- Scroll reveals
- Metric counters
- Timeline progression
- Architecture node/data-flow animation
- Card hover states
- Button micro-interactions

Use roughly 150–400ms for micro-interactions.

Respect `prefers-reduced-motion`.

Disable or simplify unnecessary motion when reduced motion is requested.

## Responsive Design

Design intentionally for:

- 1440px
- 1280px
- 1024px
- 768px
- 390px
- 360px

Do not merely shrink desktop layouts.

On mobile:

- Simplify architecture visualizations
- Remove custom cursor effects
- Reduce animation complexity
- Ensure touch-friendly controls
- Prevent horizontal scrolling

## Accessibility

Implement:

- Semantic HTML
- Keyboard navigation
- Visible focus states
- Proper contrast
- ARIA labels where needed
- Screen-reader-friendly navigation
- Reduced-motion support

Never make animation necessary to understand content.

## SEO

Implement:

- Strong title
- Meta description
- Open Graph metadata
- Twitter/X metadata
- Semantic heading hierarchy
- Canonical URL placeholder
- Appropriate structured data where useful

Suggested title:

`Gaurav Dubey — Software Engineer | Distributed Systems & Full Stack`

## Agent Behavior

Before coding:

1. Inspect the complete resume.
2. Inspect the existing repository/project structure.
3. Inspect GitHub and LinkedIn when accessible.
4. Build an internal understanding of Gaurav's profile.
5. Identify the strongest engineering stories.
6. Define the information architecture.
7. Then implement.

Do not ask for design choices that are already covered by this brief. Make professional design decisions yourself.

Do not fabricate missing information to make a section look complete. If a source does not support a detail, omit it or clearly mark it as unavailable.

Before completion, review the result as a recruiter, engineering manager, senior engineer, designer, performance engineer, and mobile user.

Fix obvious visual, accessibility, performance, content, or responsive issues before declaring the work complete.

## Preferred Frontend Stack

If the project is being created from scratch, prefer:

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Motion for React
- Lucide React

Use native CSS/SVG/browser APIs wherever practical.

Do not add additional UI, animation, icon, chart, particle, or 3D libraries unless there is a clear technical reason.

Preferred animation strategy:

CSS → simple transitions
Motion → scroll, stagger, layout, SVG and interaction animations
SVG → architecture/system visualization

Avoid:
- Three.js
- GSAP
- particle libraries
- large charting libraries
- multiple component libraries
- unnecessary animation dependencies

First inspect the existing project and determine whether React, TypeScript, Tailwind, shadcn/ui and Motion are already configured. Do not reinstall or duplicate dependencies. Only add what is missing or update if its older version.
