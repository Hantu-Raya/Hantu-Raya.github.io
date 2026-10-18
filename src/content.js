// All public text for the portfolio lives here.
// Set CONTACT_EMAIL to a professional address to show an email link; null keeps GitHub as the only contact.
export const CONTACT_EMAIL = "roslizaqwan@gmail.com";

export const GITHUB_URL = "https://github.com/Hantu-Raya";

export const WEB_TOOLS = [
  {
    id: "video-compressor",
    name: "Video Compressor",
    summary:
      "Compresses a video toward a file size you choose, inside the browser. Keep one or more time ranges and they are joined into a single MP4.",
    contribution:
      "Designed and built the interface and the encoding flow: browser-native H.264 or VP9 encoding that re-measures the output to use the target size, with an FFmpeg two-pass fallback when native encoding is unavailable.",
    tech: ["React", "TypeScript", "Astro", "WebCodecs (Mediabunny)", "FFmpeg.wasm"],
    demo: "https://hantu-raya.github.io/Web-tools/video-compressor/dist/",
    source: "https://github.com/Hantu-Raya/Web-tools/tree/main/video-compressor",
    video: "clips/video-compressor.mp4",
    image: {
      src: "shots/video-compressor.webp",
      width: 1600,
      height: 900,
      alt: "Video Compressor with a landscape clip loaded: a video preview, a trim timeline split into two segments, and a target output of 0.7 MB.",
    },
  },
  {
    id: "quick-crop",
    name: "Quick Crop",
    summary:
      "Paste, drop or open an image, draw a crop area, rotate or flip it, and download the result.",
    contribution:
      "Built the page and its controls around Cropper.js: clipboard paste, drag and drop, a live preview and keyboard shortcuts for rotation.",
    tech: ["HTML", "CSS", "JavaScript", "Cropper.js"],
    demo: "https://hantu-raya.github.io/Web-tools/crop/",
    source: "https://github.com/Hantu-Raya/Web-tools/tree/main/crop",
    video: "clips/quick-crop.mp4",
    image: {
      src: "shots/quick-crop.webp",
      width: 1600,
      height: 900,
      alt: "Quick Crop with a fjord photo loaded, a crop box drawn over the middle and the cropped result in the live preview panel.",
    },
  },
  {
    id: "image-converter",
    name: "Image Converter",
    summary:
      "Converts a batch of images to PNG, JPEG or WebP. Set one format for every file or a different one per file, then download.",
    contribution:
      "Wrote it in plain JavaScript with the Canvas API, including the file queue, previews, file type and size checks, and per-file or batch conversion.",
    tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
    demo: "https://hantu-raya.github.io/Web-tools/Img-converter/",
    source: "https://github.com/Hantu-Raya/Web-tools/tree/main/Img-converter",
    video: "clips/image-converter.mp4",
    image: {
      src: "shots/image-converter.webp",
      width: 1600,
      height: 900,
      alt: "Image Converter with three landscape photos queued and the convert-all format set to WebP.",
    },
  },
];

export const NATIVUNE = {
  name: "Nativune",
  summary:
    "An unofficial Windows desktop app for YouTube Music. It shows the official website in its own window and adds native controls around it.",
  points: [
    "A Compact mini player that switches between five layouts as the window is resized.",
    "Tray icon, taskbar buttons, a pause timer and an app-only volume control.",
    "Per-user installer with SHA-256 checksums, released through GitHub Releases.",
  ],
  tech: ["C#", ".NET 10", "WinUI 3", "WebView2"],
  source: "https://github.com/Hantu-Raya/Nativune",
  image: {
    src: "shots/nativune-full.webp",
    width: 1266,
    height: 793,
    alt: "Nativune's full window: a native toolbar above the YouTube Music player page, signed out, with a song paused and the Up next queue.",
  },
  compact: {
    src: "shots/nativune-compact.webp",
    width: 800,
    height: 180,
    alt: "Nativune's Compact mini player at 800 by 180 pixels, with album art on a disc, playback controls and a seek bar.",
  },
};

export const SKILLS = [
  {
    group: "Main skills",
    items: ["HTML", "CSS", "JavaScript"],
    note: "Used in all three web tools.",
  },
  {
    group: "Used in projects",
    items: ["React", "TypeScript", "Astro"],
    note: "Used to build the Video Compressor.",
  },
  {
    group: "Desktop",
    items: ["C#", "WinUI 3", "WebView2"],
    note: "Used to build Nativune.",
  },
];

// Deadlock mods on GameBanana. Totals are as of the stats date.
export const GAMEBANANA = {
  profile: "https://gamebanana.com/members/4577138",
  collection: "https://github.com/Hantu-Raya/Deadlock-mods-collection",
  statsDate: "18 October 2026",
  totalDownloads: 1471225,
  count: 13,
};

// Published Deadlock mods, highest downloads first.
export const MODS = [
  {
    id: 601444,
    name: "Always Show Passive Items and Actives Icons",
    url: "https://gamebanana.com/mods/601444",
    category: "Quality of Life",
    summary:
      "Keeps your passive and active item icons always visible so you can see when cooldowns are ready. It also includes a Custom Passive Builder in the browser and an optional ammo buff notifier.",
    downloads: 1077784,
    likes: 78,
    updated: "2026-10-16",
    image: {
      src: "mods/601444.webp",
      width: 757,
      height: 400,
      alt: "A street fight with a row of circular item icons and cooldown numbers along the bottom, and a white diamond reticle on the target.",
      fit: "cover",
    },
  },
  {
    id: 603113,
    name: "Health Color",
    url: "https://gamebanana.com/mods/603113",
    category: "HUD",
    summary:
      "Custom health bar colors for enemies and allies, with an in-game Escape menu editor that has search, live preview and presets saved on your PC.",
    downloads: 116742,
    likes: 31,
    updated: "2026-10-17",
    image: {
      src: "mods/603113.webp",
      width: 960,
      height: 540,
      alt: "An HP Colors graphic with an Escape menu color editor, a live hero preview, and three inset health bars over Infernus labeled V1, V2 and OLD.",
      fit: "cover",
    },
  },
  {
    id: 602711,
    name: "See Ranks, Stats and See Account ID",
    url: "https://gamebanana.com/mods/602711",
    category: "Quality of Life",
    summary:
      "Shows stats, favorite heroes and the Steam3 account ID on the profile card, for friends and other players.",
    downloads: 80259,
    likes: 34,
    updated: "2026-10-01",
    image: {
      src: "mods/602711.webp",
      width: 960,
      height: 606,
      alt: "A dark stats page with a hero list on the left and ranked combat, survival, damage and economy metrics with percentile labels.",
      fit: "cover",
    },
  },
  {
    id: 606414,
    name: "Mid and Bridge Buff Timer",
    url: "https://gamebanana.com/mods/606414",
    category: "HUD",
    summary:
      "HUD timers for the Rejuvenator, bridge buffs, Rift and Urn. You can move them, and one click sends a team chat ping.",
    downloads: 76623,
    likes: 39,
    updated: "2026-10-11",
    image: {
      src: "mods/606414.webp",
      width: 960,
      height: 506,
      alt: "A minimap graphic placed at the bottom right, with Rift and Urn timers on the map and a Buff Timer panel for colors, opacity and layout.",
      fit: "cover",
    },
  },
  {
    id: 681028,
    name: "Show Rank / Lane missing warning (Early ver.)",
    url: "https://gamebanana.com/mods/681028",
    category: "Quality of Life",
    summary:
      "Shows enemies' predicted ranks from the Deadlock API in the top bar. A web merger tool helps when top bar mods conflict.",
    downloads: 74431,
    likes: 23,
    updated: "2026-10-11",
    image: {
      src: "mods/681028.webp",
      width: 960,
      height: 150,
      alt: "A wide match top bar of hero portraits with rank badges and KDA lines, and kill totals in the center.",
      fit: "contain",
    },
  },
  {
    id: 609804,
    name: "Fps config For Competitive",
    url: "https://gamebanana.com/mods/609804",
    category: "Quality of Life",
    summary:
      "A gameinfo.gi config that adjusts field of view and raises FPS by changing shadows, decals, physics, particles, HDR, SSAO, fog and more.",
    downloads: 24047,
    likes: 26,
    updated: "2026-02-05",
    image: {
      src: "mods/609804.webp",
      width: 960,
      height: 600,
      alt: "A very wide view looking down over rooftops and a street, with an FPS counter in the corner and ability icons along the bottom.",
      fit: "cover",
    },
  },
  {
    id: 606247,
    name: "Translucent Damage Indicator",
    url: "https://gamebanana.com/mods/606247",
    category: "Quality of Life",
    summary:
      "Sets damage indicator opacity to 35% for the first 9 minutes, then back to 100%.",
    downloads: 6122,
    likes: 7,
    updated: "2026-01-23",
    image: {
      src: "mods/606247.webp",
      width: 906,
      height: 628,
      alt: "Third person view down a stone plaza. A character aims a revolver while red damage numbers and a large soul counter float on screen.",
      fit: "cover",
    },
  },
  {
    id: 607559,
    name: "Objective Damage Revealer",
    url: "https://gamebanana.com/mods/607559",
    category: "Quality of Life",
    summary: "Reveals objective damage per player at the end of the game.",
    downloads: 4384,
    likes: 15,
    updated: "2026-01-07",
    image: {
      src: "mods/607559.webp",
      width: 400,
      height: 228,
      alt: "A cropped end of game player card with a hero portrait, soul count, KDA boxes and an objective damage line.",
      fit: "cover",
    },
  },
  {
    id: 607703,
    name: "Overhaul Recent Purchases Revived [Rework]",
    url: "https://gamebanana.com/mods/607703",
    category: "HUD",
    summary: "Brings back the Recent Purchases list, including the old item icons.",
    downloads: 3916,
    likes: 13,
    updated: "2026-10-01",
    image: {
      src: "mods/607703.webp",
      width: 960,
      height: 1200,
      alt: "A tall shop panel with a colored item queue and costs, and a Recent Purchases list with times and item icons below it.",
      fit: "contain",
    },
  },
  {
    id: 645020,
    name: "Unsecure Souls Timer",
    url: "https://gamebanana.com/mods/645020",
    category: "Quality of Life",
    summary:
      "A timer for how long until your unsecured souls are fully secured. The color changes with how many souls you are holding.",
    downloads: 3725,
    likes: 4,
    updated: "2026-10-18",
    image: {
      src: "mods/645020.webp",
      width: 406,
      height: 152,
      alt: "A short HUD strip with a green soul total, a countdown, and a red unsecured souls count.",
      fit: "contain",
    },
  },
  {
    id: 82247,
    name: "Neon Prime Sound for Shiv",
    url: "https://gamebanana.com/sounds/82247",
    category: "Sound",
    summary:
      "A Shiv sound pack that brings back the old gun, dash, knife and killing blow sounds, plus voice lines after the ultimate.",
    downloads: 1638,
    likes: 0,
    updated: "2026-03-11",
    image: null,
  },
  {
    id: 618438,
    name: "Color Blind UI Early ver.",
    url: "https://gamebanana.com/mods/618438",
    category: "Accessibility",
    summary: "An early color blind interface for deuteranopia.",
    downloads: 958,
    likes: 5,
    updated: "2026-10-18",
    image: {
      src: "mods/618438.webp",
      width: 960,
      height: 600,
      alt: "A plaza fight with blue and yellow team markers, overhead hero portraits, an Enemy Guardian bar and a circular minimap.",
      fit: "cover",
    },
  },
  {
    id: 725013,
    name: "Feeder Feed",
    url: "https://gamebanana.com/mods/725013",
    category: "HUD",
    summary:
      "Adds a Feeder Feed tab to the damage report. It shows how many souls each death gave the other team, and who collected them.",
    downloads: 596,
    likes: 5,
    updated: "2026-10-07",
    image: {
      src: "mods/725013.webp",
      width: 420,
      height: 678,
      alt: "A Feeder Feed panel with donor and recipient rows, death and kill counts, and colored bars for souls given to the other team.",
      fit: "contain",
    },
  },
];

// Forks, adaptations and contributions that were merged or submitted upstream.
export const OPEN_SOURCE = [
  {
    id: "memreduct",
    name: "Mem Reduct for Windows 11",
    upstream: { name: "henrypp/memreduct", url: "https://github.com/henrypp/memreduct" },
    kind: "Fork",
    status: "3 releases",
    summary:
      "An unofficial Windows 11 fork of Mem Reduct. I added pagefile reporting, background cleaning and verified update downloads, and updated the routine SDK it uses for signed update checks.",
    tech: ["C", "Win32"],
    links: [{ label: "Source", href: "https://github.com/Hantu-Raya/memreduct" }],
  },
  {
    id: "gta-prop-fix",
    name: "GTA Prop Fix",
    upstream: { name: "RAZORRZR0/GTA_Prop_Fix", url: "https://github.com/RAZORRZR0/GTA_Prop_Fix" },
    kind: "Contribution",
    status: "Merged upstream",
    summary:
      "Contributed configurable prop and debris physics to GTA Prop Fix for GTA San Andreas Definitive Edition. The changes were merged upstream.",
    tech: ["C++", "Physics"],
    links: [{ label: "Pull request", href: "https://github.com/RAZORRZR0/GTA_Prop_Fix/pull/1" }],
  },
  {
    id: "barebones-better-lyrics",
    name: "Barebones Better Lyrics",
    upstream: {
      name: "better-lyrics/better-lyrics",
      url: "https://github.com/better-lyrics/better-lyrics",
    },
    kind: "Adaptation",
    status: "Used in Nativune",
    summary:
      "Adapted Better Lyrics into a focused lyrics extension for Nativune. It keeps synced lyrics and optional translation, and removes account features, themes and unrelated controls.",
    tech: ["TypeScript", "Chrome extensions"],
    links: [{ label: "Source", href: "https://github.com/Hantu-Raya/barebones-better-lyrics" }],
  },
  {
    id: "optilockcomfig",
    name: "OptiLockcomfig",
    upstream: { name: "mastercomfig/comfig-app", url: "https://github.com/mastercomfig/comfig-app" },
    kind: "Fork",
    status: "Deadlock configurator",
    summary:
      "Built a Deadlock configuration route on comfig-app, with presets, add-ons and video settings. I also fixed missing item data handling and a HUD build failure.",
    tech: ["TypeScript", "React", "Astro"],
    links: [{ label: "Source", href: "https://github.com/Hantu-Raya/OptiLockcomfig" }],
  },
  {
    id: "qollock-bridge",
    name: "QOLLOCK storage bridge",
    upstream: { name: "civo7/QOLLOCK", url: "https://github.com/civo7/QOLLOCK" },
    kind: "Contribution",
    status: "Merged upstream",
    summary:
      "Contributed a storage bridge fix after Deadlock blocked javascript URLs, plus the matching mod side transport. Save and load requests go through URL fragments. Both changes were merged.",
    tech: ["JavaScript", "Service workers"],
    links: [
      { label: "Mod PR", href: "https://github.com/civo7/QOLLOCK/pull/61" },
      { label: "Bridge PR", href: "https://github.com/Predi-i/qollock-updates/pull/1" },
    ],
  },
  {
    id: "nativune-winget",
    name: "WinGet manifest for Nativune",
    upstream: { name: "microsoft/winget-pkgs", url: "https://github.com/microsoft/winget-pkgs" },
    kind: "Contribution",
    status: "PR open",
    summary:
      "Prepared WinGet manifests for Nativune and submitted them to the community package repository. The pull request is still open, so Nativune is not installable through WinGet yet.",
    tech: ["WinGet", "YAML"],
    links: [{ label: "Pull request", href: "https://github.com/microsoft/winget-pkgs/pull/442614" }],
  },
];

// Not public yet. No download link.
export const UPCOMING = [
  {
    id: "squish",
    name: "Squish",
    status: "Not public yet",
    note: "Squish is a working name.",
    summary: "A Windows app that makes video files smaller without leaving File Explorer.",
    points: [
      "Compresses videos from the File Explorer right-click menu.",
      "Keeps the original file and writes a separate output.",
      "Runs on your PC, with named presets and a target file size.",
    ],
    planned: [
      "NVIDIA and Intel encoder support.",
      "A WinGet package.",
      "Trimming in Custom settings.",
    ],
    tech: ["Rust", "Win32", "FFmpeg", "AMD AMF"],
  },
];
