# hantu-raya.github.io

Portfolio site for Hantu-Raya: https://hantu-raya.github.io/

Built with React and Vite. It has three themes, switched from the header or with `?theme=panorama`, `?theme=workbench` or `?theme=compact`:

- **Panorama** (default): dark, gold accents, based on my Deadlock Panorama HUD mods.
- **Workbench**: light, based on the Video Compressor in [Web-tools](https://github.com/Hantu-Raya/Web-tools).
- **Compact**: dark Windows 11 style, based on [Nativune](https://github.com/Hantu-Raya/Nativune).

## Run locally

```sh
pnpm install
pnpm dev
```

`pnpm build` writes the static site to `dist/`. Pushing to `main` deploys it to GitHub Pages through `.github/workflows/deploy.yml`.

## Editing

- Page text and links: `src/content.js`
- Themes: `src/theme.js` and the `[data-theme]` blocks at the top of `src/styles.css`
- Screenshots: `public/shots/`
