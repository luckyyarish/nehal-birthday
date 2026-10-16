import { useMemo } from "react";

// Small flowers drifting down around the main one
function useFalling(n = 12) {
  return useMemo(
    () =>
      Array.from({ length: n }, (_, i) => ({
        left: Math.random() * 100,
        size: 14 + Math.random() * 22,
        delay: Math.random() * 8,
        dur: 7 + Math.random() * 6,
        sway: 20 + Math.random() * 30,
        key: i,
      })),
    [n],
  );
}

export default function FlowerBloom({ children }) {
  const petals = useFalling();

  return (
    <div className="relative w-full max-w-[520px] h-[260px] sm:h-[420px] mx-auto overflow-hidden">
      {petals.map((p) => (
        <img
          key={p.key}
          src="/flower.png"
          alt=""
          className="fall absolute top-0 pointer-events-none select-none opacity-0"
          style={{
            left: `${p.left}%`,
            width: p.size,
            animationDelay: `${3 + p.delay}s`,
            animationDuration: `${p.dur}s`,
            "--sway": `${p.sway}px`,
          }}
        />
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <div className="bloom w-[55%] max-w-[260px]">
          <img
            src="/flower.png"
            alt="Blue flower"
            className="spin-slow w-full h-auto drop-shadow-lg select-none"
            draggable="false"
          />
        </div>
        <div className="text-center px-4 fade-up">{children}</div>
      </div>
    </div>
  );
}
