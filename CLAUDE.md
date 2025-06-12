# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Development**: `npm run dev --turbopack` - Start development server with Turbo optimization
- **Build**: `npm run build` - Build production application  
- **Start**: `npm start` - Start production server
- **Lint**: `npm run lint` - Run ESLint checks

## Architecture

This is a Next.js 15 portfolio website using the App Router with React 19 and TypeScript. The site is a single-page application with smooth scrolling between sections.

**Key Structure:**
- `src/app/page.tsx` - Main page component that imports and renders all sections
- `src/app/layout.tsx` - Root layout with metadata and Geist font configuration
- `src/components/` - All UI components (JSX files, not TSX)

**Component Architecture:**
The main page renders components in order: Header → HeroSection → AboutMe → ProjectsSection → Experience → ContactSection. Each component is self-contained and handles its own styling and functionality.

**Styling:**
- Tailwind CSS with custom gradient backgrounds
- Consistent dark theme with yellow accent color (#yellow-500)
- Responsive design with mobile-first approach
- Custom animations (animate-float, hover effects)

**Data Management:**
- Static project data stored in `public/projects.json`
- Project images stored in `public/` directory with consistent naming
- Resume PDF served from `public/resume.pdf`

**External Dependencies:**
- `react-icons` for social media and UI icons
- `react-slick` + `slick-carousel` for project image carousels
- `react-tsparticles` for particle background effects
- `lucide-react` for additional icons

**Component Patterns:**
- Mix of JSX and TSX files (components are JSX, app files are TSX)
- Inline Tailwind classes with multi-line formatting for readability
- External links use proper `target="_blank"` and `rel="noopener noreferrer"`
- Responsive breakpoints: mobile-first, then md: for desktop