import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "@phosphor-icons/react";

// Plays muted while at least half of it is on screen and pauses when it leaves.
// Autoplay is deliberate (owner request) even with prefers-reduced-motion: the video is
// silent, stops off screen, and the button pauses it for good until the visitor resumes.
export default function Showreel({ reel }) {
  const videoRef = useRef(null);
  const userPaused = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !userPaused.current) {
          video.play().catch(() => {});
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  function toggle() {
    const video = videoRef.current;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    } else {
      userPaused.current = true;
      video.pause();
    }
  }

  return (
    <figure className="showreel">
      <div className="frame showreel-frame">
        <video
          ref={videoRef}
          className="shot"
          width={reel.width}
          height={reel.height}
          poster={reel.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={reel.label}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          <source src={reel.src} type="video/mp4" />
        </video>
        <button
          type="button"
          className="showreel-toggle"
          onClick={toggle}
          aria-label={playing ? "Pause video" : "Play video"}
        >
          {playing ? <Pause aria-hidden="true" weight="fill" /> : <Play aria-hidden="true" weight="fill" />}
        </button>
      </div>
      <figcaption>{reel.caption}</figcaption>
    </figure>
  );
}
