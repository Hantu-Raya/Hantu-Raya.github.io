import { useEffect, useState } from "react";

// Compares this bundle's build id (__BUILD_ID__, set in vite.config.js) with version.json on the server.
// Just after load it reloads once automatically; later (tab refocus, every 15 minutes) it shows a notice instead.
const RECHECK_MS = 15 * 60 * 1000;
const AUTO_RELOAD_WINDOW_MS = 15000;

async function latestBuild() {
  try {
    const res = await fetch(`version.json?t=${Date.now()}`, { cache: "no-store" });
    if (!res.ok) return null;
    return (await res.json()).build ?? null;
  } catch {
    return null;
  }
}

export default function UpdateNotice() {
  const [stale, setStale] = useState(false);

  useEffect(() => {
    if (!import.meta.env.PROD) return undefined;
    let cancelled = false;

    async function check() {
      const latest = await latestBuild();
      if (cancelled || !latest || latest === __BUILD_ID__) return;
      const justLoaded = performance.now() < AUTO_RELOAD_WINDOW_MS;
      if (justLoaded && window.__reloadFresh?.(true)) return;
      setStale(true);
    }

    function onVisible() {
      if (document.visibilityState === "visible") check();
    }

    check();
    const timer = setInterval(check, RECHECK_MS);
    document.addEventListener("visibilitychange", onVisible);
    return () => {
      cancelled = true;
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, []);

  if (!stale) return null;

  return (
    <div className="update-notice" role="status">
      <p>A newer version of this page is available.</p>
      <button type="button" className="button button-primary" onClick={() => window.__reloadFresh?.(false)}>
        Reload
      </button>
    </div>
  );
}
