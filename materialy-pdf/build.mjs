// Generator PDF „Ćwiczenia leksykalne” w standardzie gettinenglish.
// Użycie: node build.mjs [slug-tematu]   (domyślnie food-a1-a2)
// Wynik: out/gettinenglish-<slug>.pdf  (+ preview/<slug>.html do podglądu)
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { iconSvg, iconPaths, sketch } from './icons.mjs';
import { wordSearch, crossword, rng } from './puzzles.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const slug = process.argv[2] || 'food-a1-a2';
const T = (await import(`./topics/${slug}.mjs`)).default;
const G = T.groups;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const svgFile = (name) => readFileSync(join(ROOT, 'assets/logo', name), 'utf8');
const wordmark = svgFile('gettinenglish-wordmark.svg');
const wordmarkWhite = svgFile('gettinenglish-wordmark-white.svg');

const allWords = Object.values(G).flatMap((g) => g.words.filter((w) => w[2]));
const iconToWord = Object.fromEntries(allWords.map((w) => [w[2], w[0]]));
const wordToIcon = Object.fromEntries(allWords.map((w) => [w[0], w[2]]));
const shuffle = (arr, seed) => {
  const rand = rng(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const letter = (i) => String.fromCharCode(97 + i);
const bank = (words, cls = '') => `<div class="bank ${cls}">${words.map((w) => `<span>${esc(w)}</span>`).join('')}</div>`;
// Ramka w rzędach o zadanej liczbie słów (np. [6, 4]), dopasowana szerokością do treści
const bankRows = (words, sizes) => {
  let i = 0;
  return `<div class="bank bank-fit bank-rows">${sizes.map((n) => `<div>${words.slice(i, (i += n)).map((w) => `<span>${esc(w)}</span>`).join('')}</div>`).join('')}</div>`;
};
// Luka w tekście: blady box z niebieskim numerem w środku
const gapBox = (n, cls = '') => `<span class="gap ${cls}">${n ? `<i>${n}</i>` : ''}</span>`;

let pageNo = 0;
const page = (body, { cls = '' } = {}) => {
  pageNo++;
  const footer =
    pageNo === 1
      ? ''
      : `<footer class="foot"><span></span><span class="pnum">${pageNo}</span><span class="foot-logo">${wordmark}</span></footer>`;
  return `<section class="page ${cls}"><div class="body">${body}</div>${footer}</section>`;
};

let exNo = 0;
const exHead = (instruction) => `<header class="ex-head"><span class="ex-num">${++exNo}</span><h2>${instruction}</h2></header>`;

// ---------- Okładka ----------
function cover() {
  // Pozycje (mm): x, y, rozmiar, obrót. Pole tytułu i logo zostaje wolne
  // (build sprawdza to automatycznie — patrz „kontrola okładki” na dole).
  const spots = [
    [12, 14, 34, -12], [62, 8, 26, 8], [104, 20, 38, -4], [154, 10, 30, 14],
    [168, 62, 34, -10], [8, 56, 28, 10], [150, 112, 40, 6], [6, 196, 34, -8],
    [52, 214, 30, 12], [96, 204, 40, -6], [150, 196, 32, 10],
    [88, 254, 26, -12], [124, 250, 32, 8], [168, 246, 28, -4], [160, 158, 26, -14],
  ];
  const art = spots
    .map(([x, y, s, rot], i) => {
      const name = T.coverIcons[i % T.coverIcons.length];
      return `<div class="cv-ic" style="left:${x}mm;top:${y}mm;width:${s}mm;height:${s}mm;transform:rotate(${rot}deg)">${iconSvg(name, { mode: 'line', stroke: '#FFFFFF' })}</div>`;
    })
    .join('');
  return page(
    `<div class="cv-art">${art}</div>
     <div class="cv-main">
       <span class="cv-pill">${esc(T.level)}</span>
       <h1 class="cv-title">${esc(T.title)}<span class="dot">.</span></h1>
       <p class="cv-sub">${esc(T.subtitle)}</p>
     </div>
     <div class="cv-logo">${wordmarkWhite}</div>`,
    { cls: 'cover' }
  );
}

// ---------- Słownictwo ----------
const marks = '<span class="box"></span><span class="box"></span>';
const colLabels = '<div class="wl-cols"><span>znam</span><span>nowe</span></div>';
const head = (g, withCols = true) =>
  `<div class="wl-head"><div class="wl-t"><b>${esc(g.en)}</b><span class="pl">${esc(g.pl)}</span></div>${withCols ? colLabels : ''}</div>`;
const row = ([en, pl, ic]) =>
  `<li>${ic ? iconSvg(ic, { cls: 'wl-ic' }) : ''}<span class="wl-txt"><span class="wl-en">${esc(en)}</span><span class="wl-pl">${esc(pl)}</span></span>${marks}</li>`;
const card = (g) => `<div class="wcard">${head(g)}<ul class="wl">${g.words.map(row).join('')}</ul></div>`;
// Karta szeroka: lista w kilku kolumnach, każda kolumna z własnymi etykietami znam/nowe
const wideCard = (g, items, cols) => {
  const per = Math.ceil(items.length / cols);
  const parts = Array.from({ length: cols }, (_, i) => items.slice(i * per, (i + 1) * per));
  return `<div class="wcard">${head(g, false)}<div class="wide" style="--cols:${cols}">${parts
    .map((p) => `<ul class="wl">${'<li class="cols-row">' + colLabels + '</li>'}${p.map(row).join('')}</ul>`)
    .join('')}</div></div>`;
};

function vocabPage1() {
  return page(`
    <header class="pg-head">
      <h2 class="pg-title">Słownictwo<span class="dot">.</span></h2>
      <p class="lead">Zaznacz słowa i zwroty, które już znasz.</p>
    </header>
    <div class="wl-grid">
      <div class="wl-col">${card(G.fruit)}${card(G.drinks)}</div>
      <div class="wl-col">${card(G.food)}${card(G.sweet)}</div>
    </div>`);
}
function vocabPage2() {
  return page(`
    <div class="wl-grid">
      <div class="wl-col">${card(G.meals)}</div>
      <div class="wl-col">${card(G.table)}</div>
    </div>
    ${wideCard(G.adjectives, G.adjectives.words, 3)}
    ${wideCard({ level: 'A2', en: 'Useful phrases', pl: 'przydatne zwroty' }, T.phrases, 2)}`);
}

// ---------- Ćw. 1 + 2 ----------
function picturesPage() {
  const cells = T.labelPictures
    .map((ic, i) => `<div class="lp-cell"><span class="n">${i + 1}</span>${iconSvg(ic, { cls: 'lp-ic' })}<span class="line"></span></div>`)
    .join('');
  const odd = T.oddOneOut
    .map((r, i) => `<div class="oo-row"><span class="n">${letter(i)}</span>${r.icons.map((ic) => `<span class="oo-cell">${iconSvg(ic, { cls: 'oo-ic' })}</span>`).join('')}</div>`)
    .join('');
  return page(`
    <div class="ex">
      ${exHead('Podpisz obrazki. Wybierz wyrazy z ramki.')}
      ${bankRows(shuffle(T.labelPictures.map((ic) => iconToWord[ic]), 3), [6, 4])}
      <div class="lp-grid">${cells}</div>
    </div>
    <div class="ex">
      ${exHead('Zakreśl obrazek, który nie pasuje do pozostałych.')}
      <div class="oo">${odd}</div>
    </div>`);
}

// ---------- Ćw. 3 + 4 ----------
const hideVowels = (w) => w.split('').map((ch, i) => (i > 0 && 'aeiou'.includes(ch) ? null : ch));
function lettersPage() {
  const items = T.missingLetters
    .map((w, i) => {
      const letters = hideVowels(w)
        .map((ch) => (ch ? `<span class="ml-l">${ch}</span>` : '<span class="ml-l ml-gap"></span>'))
        .join('');
      return `<div class="ml-item"><span class="n">${i + 1}</span>${iconSvg(wordToIcon[w], { cls: 'ml-ic' })}<span class="ml-word">${letters}</span></div>`;
    })
    .join('');
  let n = 0;
  const adjWords = T.adjectivesGap.map(([t]) => t.match(/\{([^}]+)\}/)[1]);
  const sentences = T.adjectivesGap
    .map(([t]) => `<li><span class="n">${++n}</span><p>${esc(t).replace(/\{[^}]+\}/, gapBox(''))}</p></li>`)
    .join('');
  return page(`
    <div class="ex">
      ${exHead('Uzupełnij brakujące litery.')}
      <div class="ml-grid">${items}</div>
    </div>
    <div class="ex">
      ${exHead('Uzupełnij zdania przymiotnikami z ramki.')}
      ${bank(shuffle(adjWords, 4), 'bank-fit')}
      <ol class="sent">${sentences}</ol>
    </div>`);
}

// ---------- Ćw. 5: wykreślanka ----------
const WS = wordSearch(T.wordSearch.words.map((w) => w.toUpperCase()), T.wordSearch.size, T.wordSearch.seed);
function wordSearchPage() {
  const grid = WS.grid.map((r) => `<div class="ws-row">${r.map((ch) => `<span>${ch}</span>`).join('')}</div>`).join('');
  const clues = T.wordSearch.words
    .map((w) => `<li>${iconSvg(wordToIcon[w], { cls: 'ws-ic' })}<span class="dashes">${w.split('').map(() => '<i></i>').join('')}</span></li>`)
    .join('');
  return page(`
    <div class="ex ex-fill">
      ${exHead('Odszukaj w wykreślance ukryte słowa (→ ↓ ↘), a następnie podpisz obrazki.')}
      <div class="ws-wrap"><div class="ws-grid">${grid}</div></div>
      <ul class="ws-clues">${clues}</ul>
    </div>`);
}

// ---------- Ćw. 6: krzyżówka (SVG — idealnie równa siatka) ----------
const CW = crossword(Object.keys(T.crossword.clues).map((w) => w.toUpperCase()), T.crossword.seed);
function crosswordSvg(cellMm) {
  const nums = {};
  for (const it of CW.items) nums[`${it.r},${it.c}`] = it.n;
  const s = 10;
  let out = '';
  for (let r = 0; r < CW.rows; r++)
    for (let c = 0; c < CW.cols; c++) {
      if (!CW.grid[r][c]) continue;
      out += `<rect x="${c * s}" y="${r * s}" width="${s}" height="${s}" fill="#fff" stroke="#20242D" stroke-width="0.3"/>`;
      const n = nums[`${r},${c}`];
      if (n) out += `<text x="${c * s + 0.9}" y="${r * s + 2.9}" class="cw-n">${n}</text>`;
    }
  return `<svg class="cw-svg" viewBox="-0.5 -0.5 ${CW.cols * s + 1} ${CW.rows * s + 1}" width="${CW.cols * cellMm}mm" height="${CW.rows * cellMm}mm" xmlns="http://www.w3.org/2000/svg">${out}</svg>`;
}
function crosswordPage() {
  const list = (dir) =>
    CW.items
      .filter((i) => i.dir === dir)
      .sort((a, b) => a.n - b.n)
      .map((i) => `<li><b>${i.n}</b><span>${esc(T.crossword.clues[i.word.toLowerCase()]).replace(/(\S+) _+([.,?!]?)/, '<span class="nw">$1 <span class="cgap"></span>$2</span>')}</span></li>`)
      .join('');
  const cell = Math.min(10.5, 150 / CW.rows, 172 / CW.cols);
  return page(`
    <div class="ex ex-fill">
      ${exHead('Uzupełnij zdania, a brakujące wyrazy wpisz do krzyżówki.')}
      <div class="cw-wrap">${crosswordSvg(cell)}</div>
      <div class="cw-clues">
        <div><h3>Poziomo →</h3><ul>${list('across')}</ul></div>
        <div><h3>Pionowo ↓</h3><ul>${list('down')}</ul></div>
      </div>
    </div>`);
}

// ---------- Ćw. 7: co powiesz? ----------
const SIT_ORDER = shuffle(T.situations.map((_, i) => i), 9);
function situationsPage() {
  const left = T.situations
    .map(([pl, , ic], i) => `<li><span class="n">${i + 1}</span>${iconSvg(ic, { cls: 'st-ic' })}<span class="st-pl">${esc(pl)}</span><span class="st-box"></span></li>`)
    .join('');
  const right = SIT_ORDER.map((idx, k) => `<li><span class="n">${letter(k)}</span><span>${esc(T.situations[idx][1])}</span></li>`).join('');
  return page(`
    <div class="ex ex-fill">
      ${exHead('Co powiesz? Połącz sytuacje 1–8 ze zwrotami a–h.')}
      <div class="st-wrap"><ul class="st-left">${left}</ul><ul class="st-right">${right}</ul></div>
    </div>`);
}

// ---------- Ćw. 8 + 9 ----------
function dialogPage() {
  const D = T.gapFill;
  let n = 0;
  const lines = D.lines
    .map(([who, text]) =>
      who
        ? `<div class="dl-line"><span class="who">${esc(who)}</span><p>${esc(text).replace(/\{([^}]+)\}/g, () => gapBox(++n))}</p></div>`
        : '<div class="dl-sep"><span>później</span></div>'
    )
    .join('');
  return page(`
    <div class="ex">
      ${exHead('Uzupełnij dialog wyrazami z ramki.')}
      ${bank(shuffle(D.bank, 7))}
      <div class="dialog"><p class="dl-title">${esc(D.title)}</p>${lines}</div>
    </div>
    <div class="ex">
      ${exHead('Odpowiedz na pytania o siebie. Skorzystaj z podpowiedzi.')}
      <div class="about">${T.aboutYou
        .map(([q, hint], i) => `<div class="about-q"><p><span class="n">${i + 1}</span>${esc(q)} <span class="about-hint">${esc(hint)}</span></p><span class="line"></span></div>`)
        .join('')}</div>
    </div>`);
}

// ---------- Ćw. 10: mapa myśli (SVG w milimetrach) ----------
// Środek „Food.” → gładkie, zaokrąglone gałęzie (krzywe S) do kategorii →
// pod każdą kategorią kropkowane linie na notatki.
// x, y = lewy górny róg ikony; nazwa zawsze po prawej stronie ikony.
const MM_LAYOUT = [
  { x: 14, y: 14 },   // owoce
  { x: 120, y: 8 },   // warzywa
  { x: 128, y: 72 },  // napoje
  { x: 130, y: 140 }, // słodycze
  { x: 118, y: 188 }, // przymiotniki
  { x: 12, y: 182 },  // na stole
  { x: 6, y: 132 },   // posiłek rano
  { x: 6, y: 74 },    // zamów kawę
];
function gamePage() {
  const W = 176, H = 228, UL = 46, NOTE = 40;
  const C = { x: 88, y: 114, w: 50, h: 25 };
  let branches = '', nodes = '';
  T.game.cards.forEach(([count, label, ic], i) => {
    const L = MM_LAYOUT[i];
    // podkreślenie ma stałą szerokość, kropki są od strony dalszej od środka — gałąź ich nie przecina
    const x0 = L.x, x1 = L.x + UL;
    const uy = L.y + 13.5;
    const right = (x0 + x1) / 2 > C.x;
    const dotX = right ? x1 - NOTE : x0;
    // gałąź: wychodzi poziomo z boku owalu i dochodzi poziomo do podkreślenia
    const ax = right ? x0 : x1;
    // start na obwodzie owalu w kierunku kategorii; wyjście promieniste, dojście poziome — łagodny łuk
    const ang = Math.atan2(uy - C.y, ax - C.x);
    const sx = C.x + (C.w / 2 - 1) * Math.cos(ang), sy = C.y + (C.h / 2 - 1) * Math.sin(ang);
    const dist = Math.hypot(ax - sx, uy - sy);
    const c1x = sx + Math.cos(ang) * dist * 0.5, c1y = sy + Math.sin(ang) * dist * 0.5;
    const c2x = ax + (right ? -1 : 1) * Math.abs(ax - sx) * 0.9;
    branches += sketch('path', [`M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${uy}, ${ax} ${uy}`], { seed: 40 + i, stroke: '#2663EB', strokeWidth: 0.7, roughness: 0.25 });
    branches += sketch('line', [x0, uy, x1, uy], { seed: 60 + i, stroke: '#2663EB', strokeWidth: 0.7, roughness: 0.25 });
    nodes += `<svg x="${L.x}" y="${L.y}" width="12" height="12" viewBox="-4 -4 108 108">${iconPaths(ic)}</svg>`;
    nodes += `<text x="${L.x + 13}" y="${L.y + 8.6}" class="mm-label">${esc(label)}</text>`;
    for (let k = 0; k < count; k++) {
      const ly = uy + 9 + k * 9;
      nodes += `<line x1="${dotX}" y1="${ly}" x2="${dotX + NOTE}" y2="${ly}" stroke="#9BA2B1" stroke-width="0.35" stroke-linecap="round" stroke-dasharray="0.1 1.4"/>`;
    }
  });
  const center =
    sketch('ellipse', [C.x, C.y, C.w, C.h], { seed: 9, fill: '#F2F6FE', stroke: '#2663EB', strokeWidth: 0.7, roughness: 0.4 }) +
    `<text x="${C.x}" y="${C.y + 2.6}" class="mm-center">${esc(T.title)}<tspan fill="#2663EB">.</tspan></text>`;
  return page(`
    <div class="ex ex-fill">
      ${exHead('Uzupełnij mapę myśli. Dopisz dowolne słowa, które pamiętasz.')}
      <svg class="mm" viewBox="0 0 ${W} ${H}" width="${W}mm" height="${H}mm" xmlns="http://www.w3.org/2000/svg">${branches}${nodes}${center}</svg>
    </div>`);
}

// ---------- Klucz ----------
function keyPage() {
  const inWS = new Set();
  for (const p of WS.placed) for (let i = 0; i < p.word.length; i++) inWS.add(`${p.r + p.dr * i},${p.c + p.dc * i}`);
  const wsMini = WS.grid
    .map((r, ri) => `<div class="ws-row">${r.map((ch, c) => `<span class="${inWS.has(`${ri},${c}`) ? 'on' : ''}">${ch}</span>`).join('')}</div>`)
    .join('');
  const ol = (items, cols = 2) => `<ol style="columns:${cols}">${items.map((t) => `<li>${t}</li>`).join('')}</ol>`;
  const gaps = (lines) => {
    const out = [];
    lines.forEach(([, t]) => t.replace(/\{([^}]+)\}/g, (_, w) => out.push(esc(w))));
    return out;
  };
  const cw = (dir) => CW.items.filter((i) => i.dir === dir).sort((a, b) => a.n - b.n).map((i) => `<span class="nw">${i.n} ${i.word.toLowerCase()}</span>`).join(', ');
  const block = (n, body) => `<div class="kb"><span class="kn">${n}</span><div class="kb-body">${body}</div></div>`;
  return page(`
    <h2 class="pg-title">Odpowiedzi<span class="dot">.</span></h2>
    <div class="key">
      <div class="key-col">
        ${block(1, ol(T.labelPictures.map((ic) => esc(iconToWord[ic]))))}
        ${block(2, `<p>${T.oddOneOut.map((o, i) => `<span class="kl">${letter(i)}</span> ${esc(o.why)}`).join('<br>')}</p>`)}
        ${block(3, ol(T.missingLetters.map(esc)))}
        ${block(4, ol(gaps(T.adjectivesGap.map((t) => ['', t[0]])), 1))}
        ${block(6, `<p><span class="kl">Poziomo</span> ${cw('across')}</p><p><span class="kl">Pionowo</span> ${cw('down')}</p>`)}
      </div>
      <div class="key-col">
        ${block(5, `<div class="ws-grid ws-mini">${wsMini}</div>`)}
        ${block(7, `<p class="pairs">${T.situations.map((_, i) => `<span><span class="kl">${i + 1}</span> ${letter(SIT_ORDER.indexOf(i))}</span>`).join('')}</p>`)}
        ${block(8, ol(gaps(T.gapFill.lines), 1))}
        ${block(10, `<p class="k-note">Przykładowe odpowiedzi:</p>${ol(T.game.examples.map(esc), 1)}`)}
      </div>
    </div>
    <div class="finish">
      <p class="finish-big">Well done<span class="dot">.</span></p>
      <p>Wróć do listy słów na stronach 2–3 i sprawdź, ile pamiętasz.</p>
    </div>`);
}

// ---------- Złożenie ----------
const pages = [cover(), vocabPage1(), vocabPage2(), picturesPage(), lettersPage(), wordSearchPage(), crosswordPage(), situationsPage(), dialogPage(), gamePage(), keyPage()];
const css = readFileSync(join(ROOT, 'style.css'), 'utf8');
const html = `<!doctype html><html lang="pl"><head><meta charset="utf-8"><title>gettinenglish · ${esc(T.title)} ${esc(T.level)}</title>
<style>${css}</style></head><body>${pages.join('\n')}</body></html>`;

mkdirSync(join(ROOT, 'preview'), { recursive: true });
mkdirSync(join(ROOT, 'out'), { recursive: true });
const htmlPath = join(ROOT, 'preview', `${slug}.html`);
writeFileSync(htmlPath, html);

const require = createRequire(execSync('npm root -g').toString().trim() + '/');
const { chromium } = require('playwright');
const browser = await chromium.launch();
const pg = await browser.newPage();
await pg.goto(pathToFileURL(htmlPath).href, { waitUntil: 'networkidle' });
await pg.evaluate(() => document.fonts.ready);
const problems = await pg.evaluate(() => {
  const mm = 96 / 25.4;
  const out = [];
  // 1) treść każdej strony kończy się co najmniej 8 mm nad stopką
  document.querySelectorAll('.page').forEach((p, i) => {
    const foot = p.querySelector('.foot');
    if (!foot) return;
    const max = Math.max(...[...p.querySelector('.body').querySelectorAll('*')].map((el) => el.getBoundingClientRect().bottom));
    const room = (foot.getBoundingClientRect().top - max) / mm;
    if (room < 8) out.push(`strona ${i + 1}: odstęp od stopki tylko ${room.toFixed(1)} mm`);
  });
  // 2) kontrola okładki: ilustracje nie mogą dotykać logo ani tytułu (margines 4 mm)
  const cov = document.querySelector('.cover');
  const keep = [cov.querySelector('.cv-logo svg'), cov.querySelector('.cv-main')].map((el) => el.getBoundingClientRect());
  cov.querySelectorAll('.cv-ic').forEach((ic, k) => {
    const a = ic.getBoundingClientRect();
    for (const b of keep) {
      const m = 4 * mm;
      if (a.left < b.right + m && a.right > b.left - m && a.top < b.bottom + m && a.bottom > b.top - m) out.push(`okładka: ilustracja ${k + 1} za blisko logo/tytułu`);
    }
  });
  return out;
});
const pdfPath = join(ROOT, 'out', `gettinenglish-${slug}.pdf`);
await pg.pdf({ path: pdfPath, format: 'A4', printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
await browser.close();
console.log(`PDF: ${pdfPath}  (stron: ${pages.length}, krzyżówka ${CW.cols}×${CW.rows})`);
if (problems.length) console.log('UWAGA:\n' + problems.join('\n'));
