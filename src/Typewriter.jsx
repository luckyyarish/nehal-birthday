import { useEffect, useMemo, useState } from "react";
import { CODE } from "./config";

const STYLE = {
  c: "text-[#3f7f5f]",
  k: "text-[#7f0055] font-bold",
  s: "text-[#2a36ff]",
  n: "text-[#333]",
};

// Break every line into word tokens (keeping the spaces attached), so we can type word by word.
function buildTokens() {
  const tokens = [];
  CODE.forEach((line, li) => {
    line.forEach(([text, style]) => {
      const parts = Array.from(text);
      parts.forEach((p) => tokens.push({ text: p, style, line: li }));
    });
  });
  return tokens;
}

export default function Typewriter({ speed = 45, startDelay = 600 }) {
  const tokens = useMemo(buildTokens, []);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        setCount((c) => {
          if (c >= tokens.length) {
            clearInterval(timer);
            return c;
          }
          return c + 1;
        });
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [tokens.length, speed, startDelay]);

  const shown = tokens.slice(0, count);
  const lines = CODE.map((_, li) => shown.filter((t) => t.line === li));
  const lastVisibleLine = shown.length ? shown[shown.length - 1].line : 0;
  const done = count >= tokens.length;

  return (
    <div className="font-mono text-[12px] min-[380px]:text-[13px] sm:text-[15px] font-bold leading-6 sm:leading-7 text-left">
      {lines.map((toks, li) =>
        li <= lastVisibleLine ? (
          <div key={li} className="whitespace-pre-wrap break-words min-h-7">
            {toks.map((t, i) => (
              <span key={i} className={STYLE[t.style]}>
                {t.text}
              </span>
            ))}
            {li === lastVisibleLine && !done && (
              <span className="cursor text-[#333]">_</span>
            )}
          </div>
        ) : null,
      )}
    </div>
  );
}
