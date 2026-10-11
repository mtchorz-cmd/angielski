// Generatory łamigłówek: wykreślanka i krzyżówka. Deterministyczne (seed),
// więc każdy build daje ten sam układ, a klucz odpowiedzi zawsze się zgadza.

export function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

// --- Wykreślanka ---------------------------------------------------------
// Dla A1–A2 tylko kierunki „czytelne”: w prawo, w dół, ukośnie w dół-prawo.
const WS_DIRS = [
  [0, 1],
  [1, 0],
  [1, 1],
];

export function wordSearch(words, size, seed = 1) {
  const rand = rng(seed);
  for (let attempt = 0; attempt < 500; attempt++) {
    const grid = Array.from({ length: size }, () => Array(size).fill(''));
    const placed = [];
    const order = [...words].sort((a, b) => b.length - a.length);
    let ok = true;
    for (const w of order) {
      let done = false;
      for (let t = 0; t < 400 && !done; t++) {
        const [dr, dc] = WS_DIRS[Math.floor(rand() * WS_DIRS.length)];
        const r0 = Math.floor(rand() * (size - dr * (w.length - 1)));
        const c0 = Math.floor(rand() * (size - dc * (w.length - 1)));
        let fits = true;
        for (let i = 0; i < w.length; i++) {
          const cell = grid[r0 + dr * i][c0 + dc * i];
          if (cell && cell !== w[i]) fits = false;
        }
        if (!fits) continue;
        for (let i = 0; i < w.length; i++) grid[r0 + dr * i][c0 + dc * i] = w[i];
        placed.push({ word: w, r: r0, c: c0, dr, dc });
        done = true;
      }
      if (!done) {
        ok = false;
        break;
      }
    }
    if (!ok) continue;
    const letters = 'ABCDEFGHIKLMNOPRSTUWY';
    for (const row of grid)
      for (let c = 0; c < size; c++) if (!row[c]) row[c] = letters[Math.floor(rand() * letters.length)];
    return { grid, placed };
  }
  throw new Error('Nie udało się ułożyć wykreślanki');
}

// --- Krzyżówka -----------------------------------------------------------
function canPlace(cells, w, r, c, dir) {
  const [dr, dc] = dir === 'across' ? [0, 1] : [1, 0];
  const get = (rr, cc) => cells.get(`${rr},${cc}`);
  if (get(r - dr, c - dc) || get(r + dr * w.length, c + dc * w.length)) return -1;
  let crossings = 0;
  for (let i = 0; i < w.length; i++) {
    const rr = r + dr * i;
    const cc = c + dc * i;
    const cur = get(rr, cc);
    if (cur) {
      if (cur.ch !== w[i] || cur[dir]) return -1;
      crossings++;
    } else {
      // brak sąsiadów z boku, żeby nie powstawały przypadkowe słowa
      if (get(rr + dc, cc + dr) || get(rr - dc, cc - dr)) return -1;
    }
  }
  return crossings;
}

function place(cells, w, r, c, dir) {
  const [dr, dc] = dir === 'across' ? [0, 1] : [1, 0];
  for (let i = 0; i < w.length; i++) {
    const k = `${r + dr * i},${c + dc * i}`;
    const cur = cells.get(k) || { ch: w[i] };
    cur[dir] = true;
    cells.set(k, cur);
  }
}

export function crossword(words, seed = 1) {
  const rand = rng(seed);
  let best = null;
  for (let attempt = 0; attempt < 400; attempt++) {
    const order = [...words].sort(() => rand() - 0.5).sort((a, b) => b.length - a.length + (rand() - 0.5) * 3);
    const cells = new Map();
    const placed = [];
    place(cells, order[0], 0, 0, 'across');
    placed.push({ word: order[0], r: 0, c: 0, dir: 'across' });
    let pending = order.slice(1);
    for (let pass = 0; pass < 3 && pending.length; pass++) {
      const left = [];
      for (const w of pending) {
        const options = [];
        for (const [k, cell] of cells) {
          const [cr, cc] = k.split(',').map(Number);
          for (let i = 0; i < w.length; i++) {
            if (w[i] !== cell.ch) continue;
            for (const dir of ['across', 'down']) {
              const r = dir === 'down' ? cr - i : cr;
              const c = dir === 'across' ? cc - i : cc;
              const x = canPlace(cells, w, r, c, dir);
              if (x > 0) options.push({ r, c, dir, x });
            }
          }
        }
        if (!options.length) {
          left.push(w);
          continue;
        }
        const o = options[Math.floor(rand() * options.length)];
        place(cells, w, o.r, o.c, o.dir);
        placed.push({ word: w, r: o.r, c: o.c, dir: o.dir });
      }
      pending = left;
    }
    if (pending.length) continue;
    const rs = [...cells.keys()].map((k) => +k.split(',')[0]);
    const cs = [...cells.keys()].map((k) => +k.split(',')[1]);
    const h = Math.max(...rs) - Math.min(...rs) + 1;
    const w = Math.max(...cs) - Math.min(...cs) + 1;
    // preferuj układy zbliżone do proporcji strony (wyższe niż szersze) i zwarte
    const score = Math.max(w, h * 0.85) * 10 + w * h * 0.1 + (w > 14 ? 100 : 0);
    if (!best || score < best.score) {
      best = { score, placed, cells, minR: Math.min(...rs), minC: Math.min(...cs), h, w };
    }
  }
  if (!best) throw new Error('Nie udało się ułożyć krzyżówki');

  // normalizacja i numeracja (czytamy od góry, od lewej)
  const items = best.placed.map((p) => ({ ...p, r: p.r - best.minR, c: p.c - best.minC }));
  const starts = [...new Set(items.map((p) => `${p.r},${p.c}`))].sort((a, b) => {
    const [ar, ac] = a.split(',').map(Number);
    const [br, bc] = b.split(',').map(Number);
    return ar - br || ac - bc;
  });
  items.forEach((p) => (p.n = starts.indexOf(`${p.r},${p.c}`) + 1));
  const grid = Array.from({ length: best.h }, () => Array(best.w).fill(null));
  for (const [k, cell] of best.cells) {
    const [r, c] = k.split(',').map(Number);
    grid[r - best.minR][c - best.minC] = cell.ch;
  }
  return { grid, items, rows: best.h, cols: best.w };
}
