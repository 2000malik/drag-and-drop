# Drag-and-Drop Dashboard

A simple React + TypeScript + Vite application demonstrating a drag‑and‑drop dashboard with reusable components and hooks. Built for learning and experimentation with modern frontend patterns.

---

## 🔧 Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Bundler:** Vite
- **Styling:** CSS modules / global CSS
- **Drag-and-drop:** `@dnd-kit/react` (installed)
- **Linting:** ESLint (configured via `eslint.config.js`)

---

## 📁 Folder Structure

```
/ (root)
├─ public/              Static assets (favicon, index.html)
├─ src/
│  ├─ assets/           Images, SVGs, icons
│  ├─ components/       Shared UI components (buttons, cards, form inputs)
│  ├─ constants/        App constants (e.g. sidebar links)
│  ├─ features/         Feature modules (dashboard, charts, etc.)
│  ├─ hooks/             Custom React hooks (drag context, item handling)
│  └─ libs/              Utility helpers
├─ tsconfig*.json       TypeScript configuration
├─ vite.config.ts       Vite configuration file
└─ package.json         Project metadata and scripts
```

> See `/src` for the full breakdown; components are grouped by responsibility and feature.

---

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```
   Open http://localhost:5173 in your browser. HMR is enabled.

3. **Build for production**
   ```bash
   npm run build
   ```
   Output is generated in `dist/`.

4. **Preview production build locally**
   ```bash
   npm run preview
   ```

---

## ⚙️ Scripts

| Command         | Description                         |
|-----------------|-------------------------------------|
| `npm run dev`   | Start dev server (hot reload)       |
| `npm run build` | Create optimized production build   |
| `npm run preview` | Serve the production build locally |
| `npm run lint`  | Run ESLint across the source set    |

---

## 🧩 Features

- Drag‑and‑drop ordering using custom hooks (`use-draggable-list.ts`, `use-drag-item.ts`)
- Dashboard layout with collapsible sidebar
- Reusable form components (button, input, select)
- Various chart and card components under `/src/features/dashboard/components`

---

## 📦 Dependencies

Key packages (see `package.json` for full list):

- `react`, `react-dom`
- `vite`, `typescript`
- `@dnd-kit/react` – drag-and-drop utilities

---

## 📄 Notes

- The project uses absolute imports via `tsconfig.json` with baseUrl set to `src`.
- ESLint configuration lives in `eslint.config.js` and can be extended for stricter rules as needed.
- Styles are simple CSS, adjust to your own preferred approach (CSS modules, Tailwind, etc.).

---

Feel free to fork and extend the application to fit your use case!
