// Keep ids in sync with the inline script in index.html and [data-theme] blocks in styles.css.
export const THEMES = [
  // The first entry is the default theme.
  { id: "panorama", label: "Panorama", color: "#121410", description: "Dark theme based on my Deadlock Panorama HUD mods" },
  { id: "workbench", label: "Workbench", color: "#f5f5f4", description: "Light theme based on the Video Compressor" },
  { id: "compact", label: "Compact", color: "#202020", description: "Dark theme based on Nativune's Windows 11 look" },
];

const IDS = new Set(THEMES.map((t) => t.id));
const KEY = "theme";

export function readTheme() {
  const fromUrl = new URLSearchParams(window.location.search).get(KEY);
  if (IDS.has(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem(KEY);
    if (IDS.has(saved)) return saved;
  } catch {
    // Storage can be blocked; fall through to the default.
  }
  return document.documentElement.dataset.theme || THEMES[0].id;
}

export function applyTheme(id) {
  const theme = THEMES.find((t) => t.id === id) ?? THEMES[0];
  document.documentElement.dataset.theme = theme.id;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme.color);
  try {
    localStorage.setItem(KEY, theme.id);
  } catch {
    // Not persisted when storage is blocked.
  }
}
