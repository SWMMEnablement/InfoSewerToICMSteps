# InfoSewer to ICM Conversion Toolkit

An interactive web application for helping engineers convert **InfoSewer** projects into **InfoWorks ICM** format with less manual effort, better validation, and fewer conversion errors.

**Repository:** [SWMMEnablement/InfoSewerToICMSteps](https://github.com/SWMMEnablement/InfoSewerToICMSteps)  
**Replit app:** [replit.com/@robertdickinson/InfoSewerToICMSteps](https://replit.com/@robertdickinson/InfoSewerToICMSteps)

---

## Overview

InfoSewer to ICM Conversion Toolkit is a React-based engineering web application that serves as an interactive guide and validation environment for moving **InfoSewer** models into **InfoWorks ICM**. According to the project handover, the application has shifted from being a static step-by-step guide into a practical toolkit focused on **reducing manual work, validating conversion data, and preventing common errors**. [page:44]

The app presents two migration paths:

- The **recommended path** is the newer **single-script InfoSewer Import Tool (Nov 2025)**. [page:44]
- The **alternate path** is the older **9-step ODIC process**, which remains available as a fallback workflow. [page:44]

This makes the repository useful both as a learning resource and as a hands-on conversion assistant.

---

## What the toolkit does

The application helps users prepare and validate InfoSewer data before import into ICM. Instead of relying only on documentation, it adds interactive checks and helper tools that make it easier to identify problems before they appear during migration. [page:44]

Its stated goals are to:

- reduce repetitive manual preparation work,
- validate file and naming conventions,
- support SQL and CSV preparation,
- guide users through a pre-conversion workflow,
- and provide a fallback step-based method when automated import is not available. [page:44]

---

## Main features

### Recommended conversion path
The toolkit highlights the **single-script InfoSewer Import Tool (Nov 2025)** as the preferred migration approach. This is presented as the modern path compared with the older ODIC-based step sequence. [page:44]

### Legacy 9-step fallback workflow
The original ODIC-style conversion process is still preserved and clearly marked as an alternate fallback route. This is useful for users working in environments where the newer tool cannot be used directly. [page:44]

### Interactive browser tools
The app includes four interactive validation and preparation tools:

- **Node ID Compliance Checker** — validates naming/ID compliance before conversion. [page:44]
- **CSV Field Validator** — checks field content and structure for conversion readiness. [page:44]
- **SQL Script Builder** — helps create SQL scripts for data preparation or transformation. [page:44]
- **Pre-Conversion Readiness Checklist** — provides a guided checklist to reduce missed steps. [page:44]

These tools make the application more than a document viewer; they turn it into a practical conversion workbench.

---

## Target audience

This project is intended for:

- InfoSewer users migrating to InfoWorks ICM,
- hydraulic and wastewater modelers,
- drainage engineers handling legacy model conversions,
- consultants standardizing migration workflows,
- and teams that want a repeatable QA/QC process before import.

Because the toolkit combines documentation with validation helpers, it is valuable both for experienced users and for engineers who only perform conversions occasionally.

---

## Tech stack

The project uses a modern TypeScript full-stack architecture. The handover describes the following stack: [page:44]

### Frontend
- **React 18** with **TypeScript**. [page:44]
- **Wouter** for lightweight client-side routing. [page:44]
- **Tailwind CSS** with custom CSS variables for theming. [page:44]
- **shadcn/ui** and **Radix UI** for reusable, accessible components. [page:44]
- **TanStack Query** for server-state management. [page:44]

### Backend
- **Express.js** with **TypeScript** running on Node.js. [page:44]
- REST-style API endpoints under `/api`. [page:44]
- In-memory storage abstraction with a path toward future database integration. [page:44]

### Data and persistence
- **Drizzle ORM** configured for PostgreSQL. [page:44]
- **connect-pg-simple** for PostgreSQL-backed session storage. [page:44]
- **localStorage** for storing user progress through conversion steps. [page:44]

### Validation and tooling
- **Zod** for input validation and schemas. [page:44]
- **React Hook Form** for forms. [page:44]
- **Vite** for dev/build workflow and hot module reload. [page:44]

GitHub reports the repository is **97.0% TypeScript**, with a small CSS footprint, which fits the documented architecture. [page:44]

---

## User interface

The handover notes a specialized component set tailored to the conversion workflow, including: [page:44]

- `Sidebar`
- `StepContent`
- `ProgressBar`
- `Alert`
- `CodeBlock`
- `ThemeSelector`

The UI also includes:

- mobile-first responsive design,
- keyboard navigation support,
- accessibility through Radix primitives,
- custom hooks for device detection,
- and a theme system with persistent dark/light mode. [page:44]

---

## Theme system

The app includes **8 color themes** with dark/light mode support. The named themes are: [page:44]

- Ocean
- Sunset
- Forest
- Lavender
- Corporate
- Midnight
- Autumn
- Arctic

Theme preferences are persisted, which makes the toolkit feel more like a polished application than a one-off guide.

---

## Repository structure

The repository layout shown on GitHub indicates a conventional full-stack TypeScript app: [page:44]

```text
InfoSewerToICMSteps/
├── attached_assets/       # Images, examples, and support content
├── client/                # React frontend
├── server/                # Express backend
├── shared/                # Shared types and schema definitions
├── .replit                # Replit runtime config
├── components.json        # shadcn/ui config
├── drizzle.config.ts      # Drizzle ORM config
├── package.json
├── package-lock.json
├── postcss.config.js
├── replit.md              # Project architecture and handover notes
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

The repo has **36 commits** on `main`, and recent commit messages mention adding the interactive toolkit, conversion-data validation tools, and responsive layout adjustments. [page:44]

---

## Development

### Install dependencies

```bash
npm install
```

### Start locally

```bash
npm run dev
```

The project uses **Vite** for fast development and optimized builds, with custom middleware integration so the React frontend and Express backend can run together in a unified development workflow. [page:44]

---

## Storage and authentication

The handover documents a basic user schema with username/password fields, Express session handling, and PostgreSQL-backed session storage via `connect-pg-simple`. At the same time, it notes that the current storage implementation is still an in-memory abstraction, which suggests the database layer is prepared for growth even if the app’s present workflows are lightweight. [page:44]

This means the repository is architected like a scalable application even though its immediate purpose is a focused engineering conversion toolkit. [page:44]

---

## Why this repo matters

Converting legacy sewer models from one platform to another can involve repetitive cleanup, naming checks, field validation, and SQL preparation. Those tasks are easy to underestimate and often become the source of migration errors. [page:44]

This repository matters because it packages that knowledge into an interactive workflow tool rather than leaving it buried in static instructions. By combining a recommended modern import path with a validated fallback process, it supports both current and legacy conversion needs. [page:44]

---

## Documentation

The most useful technical reference in the repository is `replit.md`, which documents:

- the app’s architectural overview,
- frontend and backend design,
- storage strategy,
- authentication model,
- component structure,
- theme system,
- development tooling,
- and external dependencies. [page:44]

Since the repository currently shows GitHub’s **Add a README** prompt, replacing the missing README with this file would make the project much easier to understand for users and collaborators. [page:44]

---

## References

- [SWMMEnablement/InfoSewerToICMSteps](https://github.com/SWMMEnablement/InfoSewerToICMSteps)
- [Replit app](https://replit.com/@robertdickinson/InfoSewerToICMSteps)

---

## License

Add the project license here if one is intended for public reuse.
