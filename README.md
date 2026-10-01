[![Site CI/CD](https://github.com/kevinslawinski/about/actions/workflows/pipeline.yml/badge.svg?branch=main)](https://github.com/kevinslawinski/about/actions/workflows/pipeline.yml)
[![Website status](https://img.shields.io/website?url=https%3A%2F%2Fslawnet.dev&label=website)](https://slawnet.dev)

# About

A space on the internet that is about...me.

**Live site:** [slawnet.dev](https://slawnet.dev)

## Local development

Requires Node.js 24 and npm.

```bash
npm ci
npm start
```

Open `http://localhost:4200/`. The development server reloads as source files change.

## Checks

Run the test suite in watch mode during development:

```bash
npm test
```

Run tests once, as in CI:

```bash
npm run test:ci
```

Create a production build:

```bash
npm run build
```

The browser-ready output is written to `dist/about-me/browser/`.

## CI and deployment

The **Site CI/CD** workflow runs on pushes to `main` and `feature/**`, pull requests targeting `main`, and manual dispatches. Build and Test run independently. A successful `main` run uploads the production build and deploys it to GitHub Pages through the `github-pages` environment.
