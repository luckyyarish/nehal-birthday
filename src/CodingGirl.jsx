// Original illustration: a girl typing on a laptop next to a floating code window.
export default function CodingGirl({ className = "" }) {
  const lines = [
    { x: 145, y: 82, w: 40, c: "#ff79c6", d: "0s" },
    { x: 153, y: 92, w: 52, c: "#8be9fd", d: "0.15s" },
    { x: 153, y: 102, w: 34, c: "#f1fa8c", d: "0.3s" },
    { x: 145, y: 112, w: 46, c: "#50fa7b", d: "0.45s" },
    { x: 145, y: 122, w: 28, c: "#bd93f9", d: "0.6s" },
  ];

  return (
    <svg
      viewBox="0 0 230 200"
      className={className}
      role="img"
      aria-label="A girl coding on a laptop"
    >
      {/* floating code window */}
      <g>
        <rect x="132" y="58" width="86" height="82" rx="8" fill="#1e1e2e" stroke="#cbd5e1" strokeWidth="1.5" />
        <circle cx="143" cy="68" r="2.4" fill="#ff5f56" />
        <circle cx="152" cy="68" r="2.4" fill="#ffbd2e" />
        <circle cx="161" cy="68" r="2.4" fill="#27c93f" />
        {lines.map((l, i) => (
          <rect
            key={i}
            className="screen-line"
            x={l.x + 3}
            y={l.y - 4}
            width={l.w}
            height="5"
            rx="2.5"
            fill={l.c}
            style={{ animationDelay: l.d }}
          />
        ))}
        <path
          d="M200 132 c-3 -4 -9 -1 -6 4 l6 5 l6 -5 c3 -5 -3 -8 -6 -4z"
          fill="#ff4d6d"
          transform="translate(-2,-4) scale(0.9)"
        />
      </g>

      {/* body */}
      <rect x="52" y="120" width="68" height="84" rx="24" fill="#7c5cff" />
      <rect x="82" y="104" width="12" height="20" rx="5" fill="#f1c9a5" />

      {/* head */}
      <g className="head">
        <ellipse cx="88" cy="88" rx="31" ry="33" fill="#2b1b17" />
        <circle cx="122" cy="96" r="9" fill="#2b1b17" />
        <circle cx="88" cy="86" r="26" fill="#f6d2b0" />
        <path
          d="M60 84 Q62 52 88 52 Q116 52 116 84 Q99 66 82 75 Q68 71 60 84Z"
          fill="#2b1b17"
        />
        <g className="eyes">
          <ellipse cx="78" cy="90" rx="2.8" ry="3.6" fill="#222" />
          <ellipse cx="98" cy="90" rx="2.8" ry="3.6" fill="#222" />
        </g>
        <circle cx="70" cy="98" r="4" fill="#ff9aa2" opacity="0.5" />
        <circle cx="106" cy="98" r="4" fill="#ff9aa2" opacity="0.5" />
        <path d="M81 100 Q88 107 95 100" stroke="#a5493f" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* laptop (seen from the back) */}
      <rect x="50" y="128" width="76" height="30" rx="4" fill="#e5e7eb" stroke="#cbd5e1" />
      <path
        d="M88 150 c-6 -6 -14 -1 -9 5 c3 3 7 6 9 8 c2 -2 6 -5 9 -8 c5 -6 -3 -11 -9 -5z"
        fill="#ff4d6d"
        transform="translate(0,-14) scale(1)"
      />
      <rect x="44" y="158" width="88" height="7" rx="3" fill="#cfd4dc" />

      {/* arms & hands, typing */}
      <g className="hand-l">
        <path d="M60 132 Q54 146 68 158" stroke="#7c5cff" strokeWidth="11" strokeLinecap="round" fill="none" />
        <ellipse cx="70" cy="160" rx="7" ry="5" fill="#f1c9a5" />
      </g>
      <g className="hand-r">
        <path d="M112 132 Q122 146 106 158" stroke="#7c5cff" strokeWidth="11" strokeLinecap="round" fill="none" />
        <ellipse cx="104" cy="160" rx="7" ry="5" fill="#f1c9a5" />
      </g>

      {/* desk */}
      <rect x="20" y="165" width="200" height="8" rx="3" fill="#c9a27a" />
    </svg>
  );
}
