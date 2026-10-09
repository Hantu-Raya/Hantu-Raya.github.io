import { useEffect, useRef, useState } from "react";
import { ArrowCounterClockwise, Stop } from "@phosphor-icons/react";

// Shows the tool's screenshot. The first time at least half of it is on screen, its demo
// clip plays once over the screenshot, then fades back to the screenshot. The top-right
// button stops a playing demo or replays a finished one. Off screen, playback pauses and
// resumes on return. Autoplay ignores prefers-reduced-motion by owner request; the clip is
// silent and the Stop button ends it.
export default function ToolMedia({ name, image, video }) {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);
  const phaseRef = useRef("idle");
  const [phase, setPhaseState] = useState("idle"); // idle | playing | ended
  const [showVideo, setShowVideo] = useState(false);

  function setPhase(next) {
    phaseRef.current = next;
    setPhaseState(next);
  }

  function start() {
    const el = videoRef.current;
    setPhase("playing");
    el.play().catch(() => setPhase("ended"));
  }

  useEffect(() => {
    const el = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (phaseRef.current === "idle") start();
          else if (phaseRef.current === "playing" && el.paused) el.play().catch(() => {});
        } else if (!el.paused) {
          el.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, []);

  function finish() {
    setShowVideo(false);
    setPhase("ended");
  }

  function onButton() {
    const el = videoRef.current;
    if (phaseRef.current === "playing") {
      el.pause();
      finish();
    } else {
      el.currentTime = 0;
      start();
    }
  }

  const playing = phase === "playing";

  return (
    <div className="frame media" ref={wrapRef}>
      <img className="shot" src={image.src} width={image.width} height={image.height} alt={image.alt} loading="lazy" decoding="async" />
      <video
        ref={videoRef}
        className={`media-video${showVideo ? " is-visible" : ""}`}
        width={image.width}
        height={image.height}
        muted
        playsInline
        preload="none"
        aria-hidden="true"
        tabIndex={-1}
        onPlaying={() => setShowVideo(true)}
        onEnded={finish}
      >
        <source src={video} type="video/mp4" />
      </video>
      {phase !== "idle" && (
        <button type="button" className="media-button" onClick={onButton} aria-label={`${playing ? "Stop" : "Replay"} the ${name} demo`}>
          {playing ? <Stop aria-hidden="true" weight="fill" /> : <ArrowCounterClockwise aria-hidden="true" weight="bold" />}
          <span>{playing ? "Stop" : "Replay"}</span>
        </button>
      )}
    </div>
  );
}
