// Ilustracje w stylu „doodle”: cienka kreska w kolorze grafitu, białe wypełnienie,
// drobne detale (kropki, „błyski”, mały cień pod przedmiotem). Rysuje je rough.js
// z małą „krzywizną”, żeby kreska wyglądała jak odręczna, ale czysta.
// Każda ikona to lista prostych kształtów w układzie 100×100. Ten sam seed daje
// ten sam rysunek przy każdym buildzie.
import rough from 'roughjs/bundled/rough.esm.js';

export const INK = '#20242D';
const gen = rough.generator();

// Skróty kształtów. f = wypełnienie: 'w' (białe) | 'ink' (grafit) | undefined (bez)
const c = (x, y, d, f) => ({ t: 'circle', a: [x, y, d], f });
const e = (x, y, w, h, f) => ({ t: 'ellipse', a: [x, y, w, h], f });
const p = (d, f) => ({ t: 'path', a: [d], f });
const l = (x1, y1, x2, y2) => ({ t: 'line', a: [x1, y1, x2, y2] });
const r = (x, y, w, h, f) => ({ t: 'rectangle', a: [x, y, w, h], f });
const dot = (x, y, rad = 1.6) => ({ t: 'dot', a: [x, y, rad] });
// Cień pod przedmiotem: wypełniony owal przesunięty w prawo, częściowo zasłonięty
const sh = (x, y, w, h = 6) => ({ t: 'shadow', a: [x, y, w, h] });
// „Błysk” świeżości — trzy krótkie kreski
const spark = (x, y) => [l(x, y, x + 2, y - 7), l(x + 6, y + 2, x + 12, y - 3), l(x + 8, y + 9, x + 15, y + 8)];

export const ICONS = {
  apple: [
    sh(56, 90, 46),
    p('M50 30 C 30 16, 10 32, 15 56 C 20 80, 38 94, 50 85 C 62 94, 80 80, 85 56 C 90 32, 70 16, 50 30 Z', 'w'),
    p('M50 30 C 50 22, 51 16, 54 9'),
    p('M54 20 C 60 9, 74 8, 78 13 C 72 22, 62 25, 54 20 Z', 'w'), p('M56 19 C 63 15, 70 13, 76 13'),
    p('M26 44 C 24 52, 26 60, 30 65'),
    ...spark(80, 22),
  ],
  banana: [
    sh(60, 82, 50),
    p('M18 26 C 18 66, 54 92, 88 70 C 82 66, 78 64, 76 58 C 56 70, 32 56, 30 26 Z', 'w'),
    p('M18 26 L 20 16 L 28 16 L 30 26'),
    p('M28 40 C 34 56, 46 64, 62 66'),
    dot(44, 72), dot(52, 76, 1.2), dot(66, 74),
  ],
  orange: [
    sh(56, 88, 52),
    c(50, 56, 66, 'w'),
    p('M50 23 C 54 13, 66 9, 76 13 C 70 22, 60 26, 50 23 Z', 'w'), p('M52 22 C 60 18, 68 15, 74 14'),
    dot(34, 50), dot(42, 40, 1.2), dot(60, 44), dot(66, 60, 1.2), dot(40, 66), dot(54, 72, 1.2), dot(70, 74),
    ...spark(80, 34),
  ],
  grapes: [
    sh(54, 94, 30, 5),
    c(38, 40, 20, 'w'), c(58, 40, 20, 'w'),
    c(28, 56, 20, 'w'), c(48, 56, 20, 'w'), c(68, 56, 20, 'w'),
    c(38, 72, 20, 'w'), c(58, 72, 20, 'w'),
    c(48, 87, 18, 'w'),
    p('M48 30 C 48 22, 50 16, 54 10'),
    p('M54 14 C 62 6, 76 6, 80 14 C 72 22, 60 22, 54 14 Z', 'w'), p('M58 14 L 76 13'),
    p('M44 18 C 36 18, 34 10, 40 8 C 44 8, 44 12, 41 13'),
  ],
  tomato: [
    sh(56, 88, 60),
    e(50, 58, 76, 60, 'w'),
    p('M50 30 L 38 22 L 44 32 L 32 36 L 46 36 L 50 44 L 54 36 L 68 36 L 56 32 L 62 22 Z', 'w'),
    p('M50 30 L 52 16'),
    p('M26 50 C 26 58, 30 64, 34 68'),
    ...spark(80, 28),
  ],
  carrot: [
    sh(70, 90, 30, 5),
    p('M24 36 C 30 24, 46 20, 54 30 C 62 46, 76 70, 86 90 C 64 80, 36 60, 24 36 Z', 'w'),
    p('M38 27 C 32 18, 24 14, 20 6'), p('M43 25 C 42 16, 44 8, 46 2'), p('M48 26 C 54 18, 60 14, 66 10'),
    l(38, 46, 46, 42), l(50, 62, 58, 58), l(62, 76, 68, 73),
  ],
  potato: [
    sh(56, 82, 60),
    p('M16 54 C 14 34, 42 26, 62 30 C 82 34, 90 52, 84 66 C 76 82, 40 84, 26 74 C 19 68, 16 62, 16 54 Z', 'w'),
    p('M32 48 C 34 46, 37 46, 38 48'), p('M56 40 C 58 38, 61 38, 62 40'), p('M66 60 C 68 58, 71 58, 72 60'), p('M42 64 C 44 62, 47 62, 48 64'),
    dot(26, 60, 1.2), dot(50, 52, 1.2), dot(76, 48, 1.2),
  ],
  onion: [
    sh(56, 86, 44),
    p('M50 20 C 46 34, 18 44, 22 66 C 26 84, 74 84, 78 66 C 82 44, 54 34, 50 20 Z', 'w'),
    p('M50 28 C 38 48, 38 70, 46 82'),
    p('M50 28 C 62 48, 62 70, 54 82'),
    l(44, 84, 40, 94), l(50, 84, 50, 95), l(56, 84, 60, 94),
    l(50, 20, 46, 8), l(50, 20, 56, 9),
  ],
  bread: [
    sh(54, 82, 76),
    p('M12 60 C 10 34, 30 26, 50 26 C 70 26, 90 34, 88 60 L 88 80 L 12 80 Z', 'w'),
    p('M26 48 C 30 42, 34 38, 40 34'), p('M44 48 C 48 42, 52 38, 58 34'), p('M62 48 C 66 42, 70 38, 76 34'),
    dot(22, 66, 1.2), dot(36, 72, 1.2), dot(56, 68, 1.2), dot(74, 72, 1.2),
  ],
  cheese: [
    sh(56, 82, 74),
    p('M12 56 L 74 28 L 88 46 Z', 'w'),
    p('M12 56 L 88 46 L 88 76 L 12 82 Z', 'w'),
    c(30, 68, 9), c(54, 62, 7), c(72, 68, 10), c(44, 76, 5), e(48, 46, 8, 4),
  ],
  egg: [
    sh(56, 90, 44),
    p('M50 12 C 30 12, 20 48, 22 62 C 24 80, 38 90, 50 90 C 62 90, 76 80, 78 62 C 80 48, 70 12, 50 12 Z', 'w'),
    p('M34 40 C 32 48, 32 56, 34 62'),
    ...spark(76, 18),
  ],
  rice: [
    sh(56, 88, 60),
    p('M20 50 C 22 30, 78 30, 80 50', 'w'),
    p('M32 42 L 35 40'), p('M44 37 L 47 36'), p('M57 39 L 60 40'), p('M67 44 L 69 46'), p('M39 46 L 42 45'), p('M52 45 L 55 45'),
    p('M12 50 L 88 50 C 86 72, 70 86, 50 86 C 30 86, 14 72, 12 50 Z', 'w'),
    l(60, 30, 92, 10), l(66, 34, 96, 18),
    p('M30 66 C 40 70, 60 70, 70 66'),
  ],
  pasta: [
    sh(56, 82, 80),
    e(50, 66, 90, 30, 'w'),
    e(50, 64, 62, 18),
    p('M28 62 C 32 36, 46 66, 50 42 C 54 22, 66 60, 72 40'),
    p('M36 66 C 40 48, 52 70, 58 52'),
    l(78, 10, 74, 44), l(72, 10, 70, 22), l(84, 10, 82, 22), p('M70 22 C 70 30, 82 30, 82 22'),
  ],
  chicken: [
    sh(48, 86, 50),
    p('M44 56 C 32 40, 42 14, 64 14 C 86 14, 92 44, 74 58 C 64 66, 52 64, 44 56 Z', 'w'),
    l(44, 56, 28, 72), l(52, 62, 36, 78),
    c(24, 70, 12, 'w'), c(32, 80, 12, 'w'),
    p('M60 26 C 70 24, 78 30, 80 38'),
    dot(58, 40, 1.2), dot(70, 46, 1.2), dot(66, 32, 1.2),
  ],
  fish: [
    sh(54, 78, 70),
    p('M70 50 L 92 32 L 90 68 Z', 'w'),
    p('M10 50 C 28 24, 62 24, 76 50 C 62 76, 28 76, 10 50 Z', 'w'),
    dot(26, 46, 2.6),
    p('M38 36 C 44 44, 44 56, 38 64'),
    p('M50 44 C 53 47, 53 51, 50 54'), p('M58 40 C 61 43, 61 47, 58 50'), p('M58 52 C 61 55, 61 59, 58 62'),
  ],
  soup: [
    sh(56, 88, 60),
    p('M40 34 C 34 28, 46 24, 40 14'), p('M56 34 C 50 28, 62 24, 56 14'),
    p('M10 46 L 90 46 C 88 70, 72 86, 50 86 C 28 86, 12 70, 10 46 Z', 'w'),
    e(50, 46, 80, 10, 'w'),
    l(70, 40, 94, 22),
    p('M26 62 C 36 66, 64 66, 74 62'),
  ],
  water: [
    sh(54, 92, 40, 5),
    r(42, 4, 16, 8, 'w'),
    p('M42 12 L 58 12 L 58 18 C 58 24, 70 26, 70 38 L 70 88 C 70 92, 30 92, 30 88 L 30 38 C 30 26, 42 24, 42 18 Z', 'w'),
    r(30, 48, 40, 22, 'w'),
    p('M36 60 C 42 54, 48 64, 54 58 C 58 54, 62 60, 64 58'),
    ...spark(74, 22),
  ],
  milk: [
    sh(56, 90, 50),
    p('M28 36 L 50 14 L 72 36 L 72 90 L 28 90 Z', 'w'),
    l(28, 36, 72, 36), r(44, 6, 12, 8, 'w'),
    p('M50 50 C 42 62, 40 70, 50 74 C 60 70, 58 62, 50 50 Z'),
  ],
  coffee: [
    p('M34 24 C 28 18, 40 14, 34 6'), p('M48 24 C 42 18, 54 14, 48 6'),
    sh(52, 88, 70, 5),
    e(46, 84, 78, 10, 'w'),
    p('M18 34 L 72 34 L 68 74 C 66 82, 24 82, 22 74 Z', 'w'),
    p('M71 42 C 88 42, 88 64, 69 64'),
  ],
  tea: [
    sh(54, 88, 54),
    p('M22 32 L 70 32 L 70 80 C 70 88, 22 88, 22 80 Z', 'w'),
    p('M70 42 C 88 42, 88 66, 70 66'),
    l(46, 32, 46, 18), l(46, 18, 58, 12),
    r(56, 4, 14, 14, 'w'),
    p('M28 46 C 40 48, 54 44, 64 46'),
  ],
  juice: [
    sh(56, 92, 34, 5),
    l(56, 26, 72, 4), l(72, 4, 80, 6),
    p('M30 26 L 70 26 L 64 90 L 36 90 Z', 'w'),
    p('M32 40 C 44 36, 56 44, 68 40'),
    p('M18 30 A 14 14 0 0 1 46 30 Z', 'w'), l(32, 30, 24, 22), l(32, 30, 32, 18), l(32, 30, 40, 22),
  ],
  cake: [
    sh(56, 88, 80, 5),
    r(16, 50, 68, 36, 'w'),
    p('M16 50 C 18 62, 26 62, 28 52 C 30 62, 38 62, 40 52 C 42 62, 50 62, 52 52 C 54 62, 62 62, 64 52 C 66 62, 74 62, 76 52 C 78 62, 84 60, 84 50'),
    r(46, 30, 8, 20, 'w'), l(46, 36, 54, 40), l(46, 43, 54, 47),
    p('M50 28 C 44 20, 48 14, 50 8 C 54 16, 58 20, 50 28 Z', 'ink'),
    dot(26, 72, 1.3), dot(40, 76, 1.3), dot(60, 72, 1.3), dot(74, 78, 1.3),
  ],
  chocolate: [
    sh(56, 90, 50),
    r(24, 12, 52, 76, 'w'),
    l(50, 12, 50, 60), l(24, 31, 76, 31), l(24, 50, 76, 50),
    p('M24 60 L 76 52 L 76 88 L 24 88 Z', 'w'),
    p('M24 60 L 30 64 L 36 59 L 44 64 L 52 58 L 60 62 L 68 56 L 76 58'),
  ],
  icecream: [
    sh(54, 94, 24, 4),
    p('M30 48 L 70 48 L 50 94 Z', 'w'),
    l(36, 56, 60, 72), l(44, 52, 64, 64), l(62, 56, 42, 76),
    c(40, 40, 30, 'w'), c(60, 40, 30, 'w'), c(50, 24, 30, 'w'),
    dot(52, 8, 3),
  ],
  breakfast: [
    sh(56, 82, 86, 6),
    e(50, 58, 92, 52, 'w'),
    p('M24 56 C 20 40, 42 34, 50 40 C 62 30, 82 42, 74 58 C 80 72, 56 78, 48 72 C 36 80, 18 70, 24 56 Z', 'w'),
    c(50, 56, 18, 'w'), p('M45 52 C 46 50, 48 49, 50 49'),
  ],
  lunch: [
    sh(54, 86, 72),
    p('M38 40 C 38 26, 62 26, 62 40'),
    r(14, 40, 72, 44, 'w'),
    l(14, 54, 86, 54),
    r(44, 49, 12, 10, 'w'),
    dot(26, 70, 1.3), dot(40, 74, 1.3), dot(60, 70, 1.3), dot(74, 74, 1.3),
  ],
  sandwich: [
    sh(54, 82, 80),
    p('M12 70 L 50 22 L 88 70 Z', 'w'),
    p('M14 66 C 24 60, 32 72, 42 64 C 52 58, 60 72, 70 64 C 76 60, 82 66, 86 64'),
    r(12, 70, 76, 10, 'w'),
    dot(42, 48, 1.3), dot(52, 40, 1.3), dot(58, 52, 1.3),
  ],
  dinner: [
    sh(56, 88, 60),
    c(50, 56, 60, 'w'), c(50, 56, 40),
    l(10, 34, 10, 82), l(5, 34, 5, 48), l(15, 34, 15, 48), p('M5 48 C 5 54, 15 54, 15 48'),
    p('M90 34 C 98 44, 96 60, 90 62 L 90 82'),
    p('M76 6 C 64 8, 62 24, 74 28 C 66 22, 68 12, 76 6 Z', 'w'),
  ],
  plate: [
    sh(56, 90, 70),
    c(50, 50, 84, 'w'), c(50, 50, 56),
    p('M30 36 C 34 30, 40 26, 46 25'),
  ],
  knife: [
    sh(54, 94, 20, 4),
    p('M40 10 C 58 18, 60 48, 56 56 L 44 56 Z', 'w'),
    r(42, 56, 12, 36, 'w'), dot(48, 66, 1.3), dot(48, 82, 1.3),
  ],
  fork: [
    sh(54, 94, 16, 4),
    l(38, 10, 38, 34), l(46, 10, 46, 34), l(54, 10, 54, 34), l(62, 10, 62, 34),
    p('M38 34 C 38 46, 62 46, 62 34'),
    p('M46 44 L 54 44 L 54 92 L 46 92 Z', 'w'),
  ],
  spoon: [
    sh(54, 94, 16, 4),
    e(50, 26, 30, 40, 'w'), p('M44 18 C 44 24, 45 30, 47 34'),
    p('M46 46 L 54 46 L 54 92 L 46 92 Z', 'w'),
  ],
  bill: [
    sh(56, 92, 50),
    p('M26 8 L 74 8 L 74 86 L 68 81 L 62 86 L 56 81 L 50 86 L 44 81 L 38 86 L 32 81 L 26 86 Z', 'w'),
    l(34, 22, 66, 22), l(34, 32, 58, 32), l(34, 42, 62, 42), l(34, 52, 54, 52),
    l(34, 64, 66, 64), p('M58 70 L 66 70'),
  ],
  strawberry: [
    sh(56, 92, 36, 5),
    p('M50 30 C 30 24, 14 40, 22 58 C 28 74, 42 88, 50 92 C 58 88, 72 74, 78 58 C 86 40, 70 24, 50 30 Z', 'w'),
    p('M32 32 L 38 22 L 44 30 L 50 18 L 56 30 L 62 22 L 68 32', 'w'),
    l(50, 18, 53, 8),
    dot(36, 46), dot(50, 42), dot(64, 46), dot(30, 58), dot(44, 56), dot(58, 56), dot(70, 60), dot(40, 70), dot(54, 70), dot(48, 82),
  ],
  lemon: [
    sh(54, 82, 64),
    p('M14 54 C 14 36, 34 26, 52 28 C 70 30, 86 40, 86 54 C 86 70, 66 80, 48 78 C 30 76, 14 70, 14 54 Z', 'w'),
    p('M86 54 C 90 52, 93 54, 95 57'), p('M14 54 C 10 56, 7 54, 5 51'),
    p('M54 28 C 56 18, 66 12, 78 12 C 74 22, 64 28, 54 28 Z', 'w'), p('M57 26 C 63 20, 70 16, 76 14'),
    dot(32, 48, 1.3), dot(44, 42, 1.3), dot(62, 46, 1.3), dot(38, 62, 1.3), dot(56, 64, 1.3), dot(72, 58, 1.3),
    ...spark(84, 26),
  ],
  mushroom: [
    sh(56, 90, 40, 5),
    p('M38 50 L 35 86 C 44 91, 56 91, 65 86 L 62 50 Z', 'w'),
    p('M12 52 C 12 28, 32 14, 50 14 C 68 14, 88 28, 88 52 C 74 56, 26 56, 12 52 Z', 'w'),
    c(34, 34, 9), c(56, 26, 7), c(70, 42, 8), c(46, 44, 5),
    p('M42 66 C 44 72, 44 78, 42 82'),
  ],
  pepper: [
    sh(56, 90, 50),
    p('M30 36 C 16 40, 14 70, 28 84 C 38 92, 46 88, 50 84 C 54 88, 62 92, 72 84 C 86 70, 84 40, 70 36 C 62 32, 56 36, 50 36 C 44 36, 38 32, 30 36 Z', 'w'),
    p('M50 36 C 50 26, 54 18, 62 14'),
    p('M50 42 C 47 56, 47 72, 50 84'),
    p('M28 50 C 26 58, 27 66, 30 72'),
    ...spark(78, 24),
  ],
  butter: [
    sh(54, 80, 74),
    p('M12 48 L 40 34 L 88 42 L 60 58 Z', 'w'),
    p('M12 48 L 60 58 L 60 78 L 12 66 Z', 'w'),
    p('M60 58 L 88 42 L 88 62 L 60 78 Z', 'w'),
    p('M34 46 C 42 38, 54 40, 60 46'),
    l(20, 58, 52, 65),
  ],
  meat: [
    sh(54, 84, 70),
    p('M14 50 C 12 30, 40 20, 58 26 C 80 32, 92 48, 86 62 C 80 78, 56 82, 40 78 C 22 74, 16 64, 14 50 Z', 'w'),
    p('M24 50 C 26 36, 46 30, 58 34 C 74 38, 80 50, 74 60'),
    c(40, 54, 12, 'w'), c(40, 54, 4),
  ],
  salad: [
    sh(56, 88, 60),
    p('M18 50 C 14 34, 30 26, 40 40 C 40 24, 58 20, 62 38 C 66 26, 84 30, 82 50 Z', 'w'),
    p('M30 44 L 34 50'), p('M50 34 L 50 48'), p('M70 40 L 66 48'),
    c(46, 44, 12, 'w'), l(46, 38, 46, 50), l(40, 44, 52, 44),
    p('M12 50 L 88 50 C 86 72, 70 86, 50 86 C 30 86, 14 72, 12 50 Z', 'w'),
    p('M30 66 C 40 70, 60 70, 70 66'),
  ],
  biscuit: [
    sh(56, 88, 60),
    c(50, 52, 72, 'w'),
    dot(34, 40, 3), dot(56, 32, 2.6), dot(66, 52, 3), dot(42, 62, 2.6), dot(56, 70, 3), dot(30, 56, 2.2), dot(70, 38, 2),
    p('M22 66 C 24 70, 26 72, 30 74'),
  ],
  sugar: [
    sh(58, 84, 70),
    p('M46 42 L 64 32 L 84 40 L 66 50 Z', 'w'),
    p('M46 42 L 66 50 L 66 74 L 46 66 Z', 'w'),
    p('M66 50 L 84 40 L 84 64 L 66 74 Z', 'w'),
    p('M16 50 L 34 40 L 54 48 L 36 58 Z', 'w'),
    p('M16 50 L 36 58 L 36 82 L 16 74 Z', 'w'),
    p('M36 58 L 54 48 L 54 72 L 36 82 Z', 'w'),
    dot(24, 62, 1.1), dot(28, 72, 1.1), dot(44, 66, 1.1), dot(56, 58, 1.1), dot(74, 56, 1.1), dot(78, 48, 1.1),
  ],
  snack: [
    sh(54, 90, 50),
    p('M24 12 L 76 12 L 72 28 C 78 50, 78 70, 72 86 L 28 86 C 22 70, 22 50, 28 28 Z', 'w'),
    p('M24 12 L 30 18 L 36 12 L 42 18 L 48 12 L 54 18 L 60 12 L 66 18 L 72 12'),
    p('M36 46 C 40 38, 60 38, 64 48 C 60 58, 40 60, 36 46 Z', 'w'),
    l(38, 68, 62, 68), l(42, 74, 58, 74),
  ],
  glass: [
    sh(54, 90, 34, 5),
    p('M28 18 L 72 18 L 66 88 L 34 88 Z', 'w'),
    p('M38 28 L 36 76'),
    e(50, 18, 44, 6),
    ...spark(76, 24),
  ],
};

function hash(s) {
  let h = 7;
  for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h % 100000 || 1;
}

// Zwraca wnętrze <svg> (same ścieżki) dla ikony.
// mode 'color' = doodle (grafitowa kreska, białe wypełnienie, cień);
// mode 'line'  = kontur do okładki (np. biała kreska, bez wypełnień i cieni).
export function iconPaths(name, { mode = 'color', stroke } = {}) {
  const shapes = ICONS[name];
  if (!shapes) throw new Error(`Brak ikony: ${name}`);
  const line = mode === 'line';
  const ink = stroke || INK;
  const seed = hash(name);
  const out = [];
  shapes.forEach((s, i) => {
    if (s.t === 'shadow') {
      if (line) return;
      const [x, y, w, h] = s.a;
      out.push(`<ellipse cx="${x}" cy="${y}" rx="${w / 2}" ry="${h / 2}" fill="${ink}"/>`);
      return;
    }
    if (s.t === 'dot') {
      const [x, y, rad] = s.a;
      out.push(`<circle cx="${x}" cy="${y}" r="${rad}" fill="${ink}"/>`);
      return;
    }
    const base = line
      ? { seed: seed + i, roughness: 1.15, bowing: 0.9, stroke: ink, strokeWidth: 2.6 }
      : { seed: seed + i, roughness: 0.55, bowing: 0.6, stroke: ink, strokeWidth: 2.3, disableMultiStroke: true };
    let fill = {};
    if (!line && s.f === 'w') fill = { fill: '#FFFFFF', fillStyle: 'solid' };
    if (s.f === 'ink') fill = { fill: ink, fillStyle: 'solid' };
    const d = gen[s.t](...s.a, { ...base, ...fill });
    for (const path of gen.toPaths(d)) {
      const f = path.fill && path.fill !== 'none' ? path.fill : 'none';
      out.push(
        `<path d="${path.d}" fill="${f}" stroke="${path.stroke}" stroke-width="${path.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`
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

// Odręczny kształt (np. ramka lub gałąź mapy myśli) jako ścieżki SVG,
// w tym samym stylu kreski co ikony.
export function sketch(type, args, { seed = 1, stroke = INK, fill, strokeWidth = 0.45, roughness = 0.9 } = {}) {
  const opts = { seed, stroke, strokeWidth, roughness, bowing: 1, disableMultiStroke: true };
  if (fill) Object.assign(opts, { fill, fillStyle: 'solid' });
  return gen
    .toPaths(gen[type](...args, opts))
    .map((p) => `<path d="${p.d}" fill="${p.fill && p.fill !== 'none' ? p.fill : 'none'}" stroke="${p.stroke}" stroke-width="${p.strokeWidth}" stroke-linecap="round" stroke-linejoin="round"/>`)
    .join('');
}
