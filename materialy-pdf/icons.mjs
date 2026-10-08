// Odręczne ilustracje (rough.js) w barwach gettinenglish.
// Każda ikona to lista prostych kształtów w układzie 100×100; rough.js nadaje im
// „rysowany ręcznie” charakter. Ten sam seed = ten sam rysunek przy każdym buildzie.
import rough from 'roughjs/bundled/rough.esm.js';

export const BRAND = '#2663EB';
export const TINT = '#E9F0FE';
export const HATCH = '#8FAEF3';

const gen = rough.generator();

// Skróty kształtów. f = wypełnienie: 'tint' | 'hatch' | 'white' | 'brand' | undefined (bez)
const c = (x, y, d, f) => ({ t: 'circle', a: [x, y, d], f });
const e = (x, y, w, h, f) => ({ t: 'ellipse', a: [x, y, w, h], f });
const p = (d, f) => ({ t: 'path', a: [d], f });
const l = (x1, y1, x2, y2) => ({ t: 'line', a: [x1, y1, x2, y2] });
const r = (x, y, w, h, f) => ({ t: 'rectangle', a: [x, y, w, h], f });

export const ICONS = {
  apple: [
    p('M50 30 C 30 16, 10 32, 15 56 C 20 80, 38 94, 50 85 C 62 94, 80 80, 85 56 C 90 32, 70 16, 50 30 Z', 'tint'),
    p('M50 30 C 50 22, 51 16, 54 10'),
    p('M54 20 C 60 9, 74 8, 78 13 C 72 22, 62 25, 54 20 Z', 'hatch'),
    p('M28 46 C 26 54, 28 62, 32 66'),
  ],
  banana: [
    p('M18 26 C 18 66, 54 92, 88 70 C 82 66, 78 64, 76 58 C 56 70, 32 56, 30 26 Z', 'tint'),
    p('M18 26 L 20 16 L 28 16 L 30 26'),
    p('M30 34 C 34 52, 46 62, 64 64'),
  ],
  orange: [
    c(50, 56, 66, 'tint'),
    p('M50 23 C 54 14, 66 10, 74 14 C 68 22, 58 25, 50 23 Z', 'hatch'),
    c(36, 48, 2), c(56, 42, 2), c(64, 62, 2), c(42, 70, 2), c(50, 56, 2),
  ],
  grapes: [
    c(38, 40, 20, 'tint'), c(58, 40, 20, 'tint'),
    c(28, 56, 20, 'tint'), c(48, 56, 20, 'tint'), c(68, 56, 20, 'tint'),
    c(38, 72, 20, 'tint'), c(58, 72, 20, 'tint'),
    c(48, 87, 18, 'tint'),
    p('M48 30 C 48 22, 52 16, 58 12'),
    p('M54 20 C 64 12, 76 14, 80 20 C 70 26, 60 26, 54 20 Z', 'hatch'),
  ],
  tomato: [
    e(50, 58, 76, 62, 'tint'),
    p('M50 30 L 40 22 M50 30 L 60 22 M50 30 L 36 34 M50 30 L 64 34'),
    p('M50 30 L 52 16'),
    p('M28 52 C 28 60, 32 66, 36 70'),
  ],
  carrot: [
    p('M24 36 C 30 24, 46 20, 54 30 C 62 46, 76 70, 86 90 C 64 80, 36 60, 24 36 Z', 'tint'),
    l(38, 26, 26, 8), l(43, 25, 42, 4), l(48, 26, 60, 10),
    l(38, 46, 46, 42), l(50, 62, 58, 58), l(62, 76, 68, 73),
  ],
  potato: [
    p('M16 54 C 14 34, 42 26, 62 30 C 82 34, 90 52, 84 66 C 76 82, 40 84, 26 74 C 19 68, 16 62, 16 54 Z', 'tint'),
    c(34, 48, 4), c(56, 42, 4), c(70, 60, 4), c(44, 66, 4),
  ],
  onion: [
    p('M50 20 C 46 34, 18 44, 22 66 C 26 84, 74 84, 78 66 C 82 44, 54 34, 50 20 Z', 'tint'),
    p('M50 28 C 38 48, 38 70, 46 82'),
    p('M50 28 C 62 48, 62 70, 54 82'),
    l(44, 84, 40, 94), l(50, 84, 50, 95), l(56, 84, 60, 94),
    l(50, 20, 46, 8), l(50, 20, 56, 9),
  ],
  bread: [
    p('M12 60 C 10 34, 30 26, 50 26 C 70 26, 90 34, 88 60 L 88 80 L 12 80 Z', 'tint'),
    l(28, 46, 38, 34), l(46, 46, 56, 34), l(64, 46, 74, 34),
  ],
  cheese: [
    p('M12 56 L 74 28 L 88 46 Z', 'hatch'),
    p('M12 56 L 88 46 L 88 76 L 12 82 Z', 'tint'),
    c(30, 68, 9), c(54, 62, 7), c(72, 68, 10), c(44, 76, 5),
  ],
  egg: [
    p('M50 12 C 30 12, 20 48, 22 62 C 24 80, 38 90, 50 90 C 62 90, 76 80, 78 62 C 80 48, 70 12, 50 12 Z', 'tint'),
    p('M34 40 C 32 48, 32 56, 34 62'),
  ],
  rice: [
    p('M20 50 C 22 30, 78 30, 80 50', 'white'),
    c(34, 42, 3), c(46, 38, 3), c(58, 40, 3), c(68, 45, 3), c(40, 47, 3), c(54, 46, 3),
    p('M12 50 L 88 50 C 86 72, 70 86, 50 86 C 30 86, 14 72, 12 50 Z', 'tint'),
    l(60, 30, 92, 10), l(66, 34, 96, 18),
  ],
  pasta: [
    e(50, 66, 90, 30, 'tint'),
    e(50, 64, 62, 18),
    p('M28 62 C 32 36, 46 66, 50 42 C 54 22, 66 60, 72 40'),
    p('M36 66 C 40 48, 52 70, 58 52'),
    l(78, 10, 74, 44), l(72, 10, 70, 22), l(84, 10, 82, 22), p('M70 22 C 70 30, 82 30, 82 22'),
  ],
  chicken: [
    p('M44 56 C 32 40, 42 14, 64 14 C 86 14, 92 44, 74 58 C 64 66, 52 64, 44 56 Z', 'tint'),
    l(44, 56, 28, 72), l(52, 62, 36, 78),
    c(24, 70, 12, 'white'), c(32, 80, 12, 'white'),
    p('M60 26 C 70 24, 78 30, 80 38'),
  ],
  fish: [
    p('M70 50 L 92 32 L 90 68 Z', 'hatch'),
    p('M10 50 C 28 24, 62 24, 76 50 C 62 76, 28 76, 10 50 Z', 'tint'),
    c(26, 46, 5, 'brand'),
    p('M38 36 C 44 44, 44 56, 38 64'),
    p('M50 42 C 52 46, 52 54, 50 58'),
  ],
  soup: [
    p('M40 34 C 34 28, 46 24, 40 14'), p('M56 34 C 50 28, 62 24, 56 14'),
    p('M10 46 L 90 46 C 88 70, 72 86, 50 86 C 28 86, 12 70, 10 46 Z', 'tint'),
    e(50, 46, 80, 10, 'hatch'),
    l(70, 40, 94, 22),
  ],
  water: [
    p('M30 14 L 70 14 L 64 88 L 36 88 Z', 'white'),
    p('M33 42 C 42 38, 56 46, 67 42 L 64 88 L 36 88 Z', 'hatch'),
    p('M30 14 L 70 14 L 64 88 L 36 88 Z'),
  ],
  milk: [
    p('M28 36 L 50 14 L 72 36 L 72 90 L 28 90 Z', 'tint'),
    l(28, 36, 72, 36), l(44, 14, 56, 14), l(44, 14, 44, 8), l(56, 14, 56, 8), l(44, 8, 56, 8),
    p('M50 50 C 42 62, 40 70, 50 74 C 60 70, 58 62, 50 50 Z', 'white'),
  ],
  coffee: [
    p('M34 24 C 28 18, 40 14, 34 6'), p('M48 24 C 42 18, 54 14, 48 6'),
    p('M18 34 L 72 34 L 68 74 C 66 82, 24 82, 22 74 Z', 'tint'),
    p('M71 42 C 88 42, 88 64, 69 64'),
    e(46, 84, 78, 10),
  ],
  tea: [
    p('M22 32 L 70 32 L 70 80 C 70 88, 22 88, 22 80 Z', 'tint'),
    p('M70 42 C 88 42, 88 66, 70 66'),
    l(46, 32, 46, 18), l(46, 18, 58, 12),
    r(56, 4, 14, 14, 'hatch'),
    l(28, 46, 64, 46),
  ],
  juice: [
    l(56, 26, 72, 4), l(72, 4, 80, 6),
    p('M30 26 L 70 26 L 64 90 L 36 90 Z', 'tint'),
    p('M32 40 L 68 40 L 64 90 L 36 90 Z', 'hatch'),
    p('M18 30 A 14 14 0 0 1 46 30 Z', 'white'),
  ],
  cake: [
    r(16, 50, 68, 36, 'tint'),
    p('M16 50 C 18 62, 26 62, 28 52 C 30 62, 38 62, 40 52 C 42 62, 50 62, 52 52 C 54 62, 62 62, 64 52 C 66 62, 74 62, 76 52 C 78 62, 84 60, 84 50 Z', 'white'),
    r(46, 30, 8, 20, 'hatch'),
    p('M50 28 C 44 20, 48 14, 50 8 C 54 16, 58 20, 50 28 Z', 'brand'),
    l(10, 86, 90, 86),
  ],
  chocolate: [
    r(24, 12, 52, 76, 'tint'),
    l(50, 12, 50, 88), l(24, 31, 76, 31), l(24, 50, 76, 50), l(24, 69, 76, 69),
    p('M24 60 L 76 50 L 76 88 L 24 88 Z', 'hatch'),
  ],
  icecream: [
    p('M30 48 L 70 48 L 50 94 Z', 'hatch'),
    c(40, 40, 30, 'tint'), c(60, 40, 30, 'tint'), c(50, 24, 30, 'tint'),
    c(52, 8, 6, 'brand'),
  ],
  breakfast: [
    e(50, 58, 92, 52, 'white'),
    p('M24 56 C 20 40, 42 34, 50 40 C 62 30, 82 42, 74 58 C 80 72, 56 78, 48 72 C 36 80, 18 70, 24 56 Z', 'tint'),
    c(50, 56, 18, 'hatch'),
  ],
  lunch: [
    p('M12 70 L 50 22 L 88 70 Z', 'tint'),
    p('M14 66 C 30 60, 40 72, 50 64 C 60 58, 72 70, 86 64', 'none'),
    p('M12 70 L 88 70 L 88 80 L 12 80 Z', 'hatch'),
    p('M12 70 L 50 22 L 88 70'),
  ],
  dinner: [
    c(50, 56, 60, 'tint'), c(50, 56, 40),
    l(10, 34, 10, 82), l(5, 34, 5, 48), l(15, 34, 15, 48), p('M5 48 C 5 54, 15 54, 15 48'),
    p('M90 34 C 98 44, 96 60, 90 62 L 90 82'),
    p('M74 10 C 64 12, 62 26, 72 30 C 66 24, 68 14, 74 10 Z', 'brand'),
  ],
  plate: [
    c(50, 50, 84, 'tint'), c(50, 50, 56, 'white'),
  ],
  knife: [
    p('M40 10 C 58 18, 60 48, 56 56 L 44 56 Z', 'tint'),
    r(42, 56, 12, 36, 'hatch'),
  ],
  fork: [
    l(38, 10, 38, 34), l(46, 10, 46, 34), l(54, 10, 54, 34), l(62, 10, 62, 34),
    p('M38 34 C 38 46, 62 46, 62 34'),
    p('M46 44 L 54 44 L 54 92 L 46 92 Z', 'tint'),
  ],
  spoon: [
    e(50, 26, 30, 40, 'tint'),
    p('M46 46 L 54 46 L 54 92 L 46 92 Z', 'tint'),
  ],
};

const FILLS = {
  tint: { fill: TINT, fillStyle: 'solid' },
  white: { fill: '#FFFFFF', fillStyle: 'solid' },
  brand: { fill: BRAND, fillStyle: 'solid' },
  hatch: { fill: HATCH, fillStyle: 'hachure', hachureGap: 5.5, fillWeight: 1.3, hachureAngle: -41 },
};

function hash(s) {
  let h = 7;
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h % 100000 || 1;
}

// Zwraca wnętrze <svg> (same <path>) dla ikony.
// mode 'line' = wersja konturowa do okładki (biała kreska, bez wypełnień).
export function iconPaths(name, { mode = 'color', stroke } = {}) {
  const shapes = ICONS[name];
  if (!shapes) throw new Error(`Brak ikony: ${name}`);
  const seed = hash(name);
  const out = [];
  shapes.forEach((s, i) => {
    const base = {
      seed: seed + i,
      roughness: 1.15,
      bowing: 0.9,
      stroke: stroke || BRAND,
      strokeWidth: 2.6,
      preserveVertices: false,
    };
    const fillOpts = mode === 'color' && s.f && s.f !== 'none' ? FILLS[s.f] : {};
    const d = gen[s.t](...s.a, { ...base, ...fillOpts });
    for (const path of gen.toPaths(d)) {
      const fill = path.fill && path.fill !== 'none' ? path.fill : 'none';
      out.push(
        `<path d="${path.d}" fill="${fill}" stroke="${path.stroke}" stroke-width="${path.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`
      );
    }
  });
  return out.join('');
}

export function iconSvg(name, opts = {}) {
  const { size, cls = 'ic' } = opts;
  const dim = size ? ` width="${size}" height="${size}"` : '';
  return `<svg class="${cls}" viewBox="-4 -4 108 108"${dim} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${iconPaths(name, opts)}</svg>`;
}
