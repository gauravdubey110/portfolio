---
name: frontend-performance
description: Audit and optimize React portfolio applications for fast loading, low JavaScript cost, responsive rendering, accessibility, and production-ready web performance.
---
# Frontend Performance Skill

The portfolio itself should demonstrate engineering quality.

Prioritize fast initial load, low JavaScript cost, efficient rendering, stable layout, small asset footprint, and responsive interaction.

Preferred stack when appropriate:
- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- Motion
- Lucide React

Before adding a dependency, ask whether CSS, SVG, or a browser API can solve the problem.

Avoid duplicate UI frameworks, duplicate animation frameworks, particle libraries, unnecessary charting, heavy 3D, large widgets, and unnecessary third-party scripts.

Prefer static/pre-rendered content where practical, lazy loading for below-the-fold media, optimized images, modern formats, SVG for simple graphics, and minimal runtime API calls.

Animation should prefer transform/opacity/CSS/SVG.

After implementation, inspect build output, bundle size where available, console errors/warnings, network requests, layout shifts, mobile behavior, and unnecessary dependencies. Fix obvious issues rather than only documenting them.

Performance improvements must not reduce accessibility.
