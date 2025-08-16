# InfoSewer to ICM Conversion Guide Application

## Overview

This is a React-based web application that provides an interactive step-by-step guide for converting InfoSewer projects to ICM (InfoWorks ICM) format. The application features a modern UI built with React, TypeScript, and Tailwind CSS, offering users a comprehensive workflow through 9 conversion steps with progress tracking, mobile responsiveness, and keyboard navigation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming and shadcn/ui components for consistent UI elements
- **State Management**: React Context API for global state (conversion progress, sidebar state) and TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript running on Node.js
- **Development**: Custom Vite middleware integration for seamless full-stack development
- **API Structure**: RESTful endpoints prefixed with `/api` (currently minimal implementation)
- **Storage**: In-memory storage implementation with interface for future database integration

### Data Storage Solutions
- **Database ORM**: Drizzle ORM configured for PostgreSQL with migration support
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **Local Storage**: Browser localStorage for persisting user progress through conversion steps

### Authentication and Authorization
- **Current Implementation**: Basic user schema defined in Drizzle with username/password fields
- **Session Handling**: Express session middleware with PostgreSQL backing store
- **Security**: Zod validation schemas for input validation

### Component Architecture
- **UI Components**: Comprehensive shadcn/ui component library with Radix UI primitives
- **Custom Components**: Specialized components for conversion workflow (Sidebar, StepContent, ProgressBar, Alert, CodeBlock, ThemeSelector)
- **Theme System**: 8 different color themes (Ocean, Sunset, Forest, Lavender, Corporate, Midnight, Autumn, Arctic) with dark/light mode toggle
- **Responsive Design**: Mobile-first approach with custom hooks for device detection
- **Accessibility**: Keyboard navigation support and ARIA compliance through Radix UI

### Development Tools and Features
- **Type Safety**: Full TypeScript coverage across client, server, and shared modules
- **Code Quality**: ESLint and TypeScript compiler checks
- **Hot Reload**: Vite HMR for instant development feedback
- **Path Aliases**: Configured import aliases for clean module resolution
- **Error Handling**: Runtime error overlay for development environment
- **Theme System**: Multiple color themes with dark/light mode support and persistent storage

## External Dependencies

### Database and Storage
- **Neon Database**: Serverless PostgreSQL using @neondatabase/serverless driver
- **Drizzle Kit**: Database migrations and schema management
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### UI and Styling
- **Radix UI**: Comprehensive primitive component library for accessible UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **shadcn/ui**: Pre-built component library built on Radix UI and Tailwind CSS
- **Lucide React**: Icon library for consistent iconography
- **Font Awesome**: Additional icon set via CDN

### Development and Build
- **Vite**: Build tool and development server with React plugin
- **TanStack Query**: Server state management and data fetching
- **React Hook Form**: Form handling with @hookform/resolvers for validation
- **Wouter**: Lightweight routing library for React
- **class-variance-authority**: Utility for managing component variants
- **clsx/tailwind-merge**: Conditional className utilities

### Utilities and Helpers
- **date-fns**: Date manipulation and formatting
- **zod**: Runtime type validation and schema definition
- **nanoid**: Unique ID generation
- **cmdk**: Command palette functionality
- **embla-carousel-react**: Carousel component implementation