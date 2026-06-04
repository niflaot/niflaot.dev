# Repository Guidelines

- All code must be written in TypeScript.
- All TypeScript code must be documented where the intent is not self-evident, typed explicitly at module boundaries, and structured for reuse.
- Components, data modules, API handlers, and utilities must use reusable typed interfaces or type aliases instead of implicit `any` shapes.
- Linting/formatting must allow no semicolons and no double-quoted strings in TypeScript, TSX, JavaScript, and JSX source.
- TSLint is deprecated; enforce the requested TSLint-style rules through the active ESLint and Prettier configuration.
- Keep the project on the Next.js App Router. Do not reintroduce the legacy Pages Router.
