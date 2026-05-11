"use client";

import { useCallback, useEffect, useRef } from "react";

const vimeoOrigin = "https://player.vimeo.com";
const videoSrc =
  "https://player.vimeo.com/video/1191095730?autoplay=1&muted=1&loop=1&autopause=0&playsinline=1&controls=0&api=1&player_id=projects-video-player";

export function ProjectVideoSection() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const sendVimeoCommand = useCallback((method: string, value?: number) => {
    iframeRef.current?.contentWindow?.postMessage(JSON.stringify({ method, value }), vimeoOrigin);
  }, []);

  const playVideo = useCallback(() => {
    sendVimeoCommand("play");
  }, [sendVimeoCommand]);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          playVideo();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(section);
    playVideo();

    return () => observer.disconnect();
  }, [playVideo]);

  return (
    <section id="projects-video" ref={sectionRef} className="bg-background scroll-mt-4">
      <div className="relative left-1/2 aspect-[16/9] w-screen -translate-x-1/2 overflow-hidden bg-[#213164] md:aspect-[21/9]">
        <iframe
          ref={iframeRef}
          id="projects-video-player"
          src={videoSrc}
          title="MURBAN ENGINEERING LTD projects video"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
          allow="autoplay"
        />
      </div>
    </section>
  );
}
