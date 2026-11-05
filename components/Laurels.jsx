// The app's gold laurel wreath (the PRO avatar's crown), drawn as SVG so it can grow leaf by leaf, once.
const CX = 120, CY = 122, R = 86;

function branch(side) {
  // side -1 = left, +1 = right; leaves run from the bottom of the circle up to just past its top third
  const leaves = [];
  const n = 9;
  for (let k = 0; k < n; k++) {
    const t = k / (n - 1);
    const deg = 98 + t * 122;                       // 98° (bottom) → 220° (upper left), mirrored for the right
    const a = ((side < 0 ? deg : 180 - deg) * Math.PI) / 180;
    const x = CX + R * Math.cos(a), y = CY + R * Math.sin(a);
    const tangent = (Math.atan2(Math.cos(a), -Math.sin(a)) * 180) / Math.PI;
    const size = 1 - t * 0.35;
    // two leaves per node: one outside the stem, one inside, both pointing up the branch
    leaves.push({ x, y, r: tangent + (side < 0 ? 0 : 180) + side * 28, s: size, o: 1 });
    if (k < n - 1) leaves.push({ x, y, r: tangent + (side < 0 ? 0 : 180) - side * 34, s: size * 0.85, o: -1 });
  }
  return leaves;
}

const STEM = (side) => {
  const p = (deg) => {
    const a = ((side < 0 ? deg : 180 - deg) * Math.PI) / 180;
    return `${(CX + R * Math.cos(a)).toFixed(1)} ${(CY + R * Math.sin(a)).toFixed(1)}`;
  };
  return `M ${p(94)} A ${R} ${R} 0 0 ${side < 0 ? 1 : 0} ${p(222)}`;
};

export default function Laurels({ className = "" }) {
  const all = [...branch(-1), ...branch(1)];
  return (
    <svg className={`laurels ${className}`.trim()} viewBox="0 0 240 240" aria-hidden="true">
      <path className="laurels__stem" d={STEM(-1)} />
      <path className="laurels__stem" d={STEM(1)} />
      {all.map((l, i) => (
        <g key={i} transform={`translate(${l.x.toFixed(1)} ${l.y.toFixed(1)}) rotate(${l.r.toFixed(1)})`}>
          <ellipse className="laurels__leaf" style={{ "--i": Math.floor(i % 17 / 2) }} cx="13" cy="0" rx={(13 * l.s).toFixed(1)} ry={(5.4 * l.s).toFixed(1)} />
        </g>
      ))}
      <circle className="laurels__seed" cx={CX} cy={CY + R + 6} r="5" />
      <text className="laurels__pro" x={CX} y={CY + 15} textAnchor="middle">PRO</text>
    </svg>
  );
}
