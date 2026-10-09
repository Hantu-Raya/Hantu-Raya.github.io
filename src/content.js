// All public text for the portfolio lives here.
// Set CONTACT_EMAIL to a professional address to show an email link; null keeps GitHub as the only contact.
export const CONTACT_EMAIL = "roslizaqwan@gmail.com";

export const GITHUB_URL = "https://github.com/Hantu-Raya";

export const SHOWREEL = {
  src: "reel/web-tools-reel.mp4",
  poster: "reel/web-tools-reel-poster.webp",
  width: 1280,
  height: 720,
  label:
    "Silent walkthrough of the three web tools: compressing a video toward a target size, cropping and flipping a photo, and batch converting images to WebP.",
  caption: "A 27-second walkthrough recorded on the live tools.",
};

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
    image: {
      src: "shots/video-compressor.webp",
      width: 1600,
      height: 1000,
      alt: "Video Compressor with a landscape clip loaded: a video preview, a trim timeline split into two segments, and a target output of 0.9 MB.",
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
    image: {
      src: "shots/quick-crop.webp",
      width: 1600,
      height: 1000,
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
    image: {
      src: "shots/image-converter.webp",
      width: 1600,
      height: 1000,
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
