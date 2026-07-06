# Bergen Laundry Service

Single-page site cloned from `singh-laundry-static` — same components, styles, animations, and content as the main site’s Bergen Laundry Service page.

## Develop

```bash
npm install
npm run dev
```

Open `http://localhost:5173/#/` (HashRouter).

## Build

```bash
npm run build
```

Deploy the `dist/` folder. Upload `public/images/site/` assets with the build (included when you deploy all of `dist`).

## Deploy base path

Set `VITE_BASE` in `.env` if hosting under a subfolder (e.g. `VITE_BASE=/bergen/`). Default is `./`.
