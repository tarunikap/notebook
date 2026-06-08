'use client';

import { useEffect, useRef, useState } from 'react';

export default function Rabbit() {
  const earLeftRef = useRef<SVGGElement>(null);
  const eyeRef = useRef<SVGEllipseElement>(null);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    function trigger() {
      if (animating) return;
      setAnimating(true);

      // blink
      if (eyeRef.current) {
        eyeRef.current.classList.add('rabbit-eye');
        setTimeout(() => eyeRef.current?.classList.remove('rabbit-eye'), 400);
      }
      // ear twitch
      if (earLeftRef.current) {
        earLeftRef.current.classList.add('rabbit-ear-left');
        setTimeout(() => earLeftRef.current?.classList.remove('rabbit-ear-left'), 700);
      }

      setTimeout(() => setAnimating(false), 800);
    }

    // trigger every 22–30 seconds
    let timeout: ReturnType<typeof setTimeout>;
    function schedule() {
      const delay = 22000 + Math.random() * 8000;
      timeout = setTimeout(() => { trigger(); schedule(); }, delay);
    }
    schedule();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="rabbit-mascot" title="a quiet companion">
      <svg
        width="28"
        height="28"
        viewBox="0 0 40 44"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: 'var(--text-3)', display: 'block' }}
        aria-hidden="true"
      >
        {/* Left ear */}
        <g ref={earLeftRef}>
          <path d="M14 18 C13 12, 11 6, 12 2 C13 -1, 16 0, 17 3 C18 7, 17 14, 16 18" />
        </g>
        {/* Right ear */}
        <path d="M22 18 C22 12, 23 6, 24 2 C25 -1, 28 0, 28 3 C27 7, 26 14, 24 18" />
        {/* Head */}
        <ellipse cx="19" cy="23" rx="9" ry="8" />
        {/* Body */}
        <ellipse cx="19" cy="36" rx="11" ry="7" />
        {/* Eye */}
        <ellipse ref={eyeRef} cx="16" cy="21" rx="1" ry="1.2" fill="currentColor" stroke="none" />
        {/* Nose */}
        <ellipse cx="19" cy="25" rx="0.8" ry="0.6" fill="currentColor" stroke="none" />
        {/* Tail */}
        <circle cx="30" cy="37" r="2.5" />
        {/* Front paws */}
        <path d="M13 42 C12 40, 11 39, 12 38" />
        <path d="M20 43 C20 41, 20 39, 20 38" />
      </svg>
    </div>
  );
}
