# Kandy Public Library

A responsive, frontend-only public library website built with React, TypeScript, Vite, Tailwind CSS and React Router.

## Features

- Editorial library homepage
- Local six-page React application
- Searchable and filterable book catalogue
- Book details modal
- Library services catalogue
- Membership information and validated frontend demo form
- Contact information and validated frontend demo form
- Responsive navigation and layouts
- Hash-based routing for GitHub Pages compatibility

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- Zod
- Lucide React

## Project structure

```text
frontend/
  src/
    components/
    data/
    pages/
    types/
  public/
  vite.config.ts
.github/workflows/deploy.yml
```

## Run locally

```bash
npm --prefix frontend install
npm --prefix frontend run dev
```

Open the URL printed by Vite.

## Build and lint

```bash
npm --prefix frontend run build
npm --prefix frontend run lint
```

## GitHub Pages deployment

1. Push the project to the `main` branch.
2. In GitHub repository settings, open **Pages**.
3. Set **Source** to **GitHub Actions**.
4. Ensure the repository workflow `.github/workflows/deploy.yml` is enabled.
5. Push a commit to trigger deployment.

The Vite build uses a portable relative base and the application uses `HashRouter`, so routes remain usable on repository subpaths.

## Live website

- Live site: `https://<github-username>.github.io/<repository-name>/`
- Repository: `https://github.com/<github-username>/<repository-name>`

## Image and brand credits

- Library photography: downloaded locally from Unsplash for this frontend portfolio demonstration. Source images:
  [library interior](https://images.unsplash.com/photo-1507842217343-583bb7270b66),
  [reading room](https://images.unsplash.com/photo-1521587760476-6c12a4b040da),
  [library shelves](https://images.unsplash.com/photo-1481627834876-b7833e8f5570),
  and [reading space](https://images.unsplash.com/photo-1495446815901-a7297e633e8d).
- Book covers: existing project cover assets stored in `frontend/public/images/books`; verify cover usage rights before commercial publication.
- Kandy Public Library logo and favicon: original SVG brand assets created for this project.

## Author

- Project author: `<your-name>`
