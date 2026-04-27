"use client";

import { useMemo } from "react";

type ServiceWordRevealProps = {
  text: string;
  className?: string;
  startDelayMs?: number;
  wordDelayMs?: number;
};

export function ServiceWordReveal({
  text,
  className,
  startDelayMs = 0,
  wordDelayMs = 32,
}: ServiceWordRevealProps) {
  const words = useMemo(() => text.trim().split(/\s+/), [text]);

  return (
    <p className={className}>
      {words.map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="inline-block opacity-0 animate-[wordReveal_400ms_ease-out_forwards]"
          style={{ animationDelay: `${startDelayMs + index * wordDelayMs}ms` }}
        >
          {word}
          {index < words.length - 1 ? "\u00a0" : ""}
        </span>
      ))}
    </p>
  );
}
