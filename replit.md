# Overview

A modern React portfolio website showcasing professional experience, projects, and skills. Built with TypeScript and styled-components, the site features smooth animations, responsive design, and a clean interface to present developer credentials and work samples.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: React 18 with TypeScript for type safety and modern development patterns. The application uses Create React App as the build tool and development environment.

**Styling**: Styled-components for CSS-in-JS styling with a comprehensive design system including:
- Global styles with CSS custom properties for consistent theming
- Responsive mixins and breakpoints for mobile-first design
- Dark navy color scheme with green accent colors
- Custom font loading (Calibre and SF Mono)

**Component Structure**: Modular component architecture with clear separation of concerns:
- Layout components (Nav, Footer, Side panels)
- Section components (Hero, About, Skills, Jobs, Projects, Contact)
- Utility components (Loader, Icons, Email/Social links)
- Reusable styled components with theme integration

**Routing**: React Router DOM for client-side navigation, configured for single-page application with hash-based section navigation.

**Animations**: 
- Anime.js for complex loading animations
- React Transition Group for component enter/exit animations
- ScrollReveal for scroll-triggered animations
- CSS transitions for hover effects and micro-interactions

**State Management**: Local React state using hooks (useState, useEffect) with custom hooks for:
- Scroll direction detection
- Reduced motion preferences
- Click outside detection

## Data Management

**Static Data**: Portfolio content stored in JavaScript modules (data.js, config.js) containing:
- Job experience with company details and descriptions
- Project information with technologies and links
- Social media links and contact information
- Navigation structure and site metadata

**Content Structure**: Projects and jobs data structured with frontmatter-style objects containing metadata (title, company, tech stack) and HTML content descriptions.

## Performance Optimizations

**Code Splitting**: Component-level imports with dynamic loading capabilities
**Asset Optimization**: Custom font loading with WOFF/WOFF2 formats
**Animation Performance**: Reduced motion support and optimized transition timing
**Responsive Images**: Styled-components media queries for optimal loading

## Accessibility Features

**Keyboard Navigation**: Full keyboard support with proper focus management
**Screen Reader Support**: Semantic HTML with ARIA labels and proper heading hierarchy
**Reduced Motion**: Respects user preferences for reduced motion
**Focus Management**: Custom focus styles and proper tab order

## Development Tools

**TypeScript Configuration**: Strict type checking with modern ES features
**Testing Setup**: Jest and React Testing Library for component testing
**Code Quality**: ESLint configuration with React and accessibility rules
**Build Process**: Create React App with custom HOST/PORT configuration for deployment