// Generator PDF „Ćwiczenia leksykalne” w standardzie gettinenglish.
// Użycie: node build.mjs [slug-tematu]   (domyślnie food-a1-a2)
// Wynik: out/gettinenglish-<slug>.pdf  (+ preview/<slug>.html do podglądu)
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { iconSvg } from './icons.mjs';
import { wordSearch, crossword, rng } from './puzzles.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const slug = process.argv[2] || 'food-a1-a2';
const T = (await import(`./topics/${slug}.mjs`)).default;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const svgFile = (name) => readFileSync(join(ROOT, 'assets/logo', name), 'utf8');
const wordmark = svgFile('gettinenglish-wordmark.svg');
const wordmarkWhite = svgFile('gettinenglish-wordmark-white.svg');

const allWords = T.groups.flatMap((g) => g.words);
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

let pageNo = 0;
const page = (body, { cls = '' } = {}) => {
  pageNo++;
  const footer =
    pageNo === 1
      ? ''
      : `<footer class="foot"><span class="foot-logo">${wordmark}</span><span>${esc(T.footer)}</span><span class="pnum">${pageNo}</span></footer>`;
  return `<section class="page ${cls}"><div class="body">${body}</div>${footer}</section>`;
};

let exNo = 0;
const exHead = (instruction) => `<header class="ex-head"><span class="ex-num">${++exNo}</span><h2>${instruction}</h2></header>`;

// ---------- 1. Okładka ----------
function cover() {
  // Ręcznie dobrane pozycje (mm): x, y, rozmiar, obrót — wolne pole na tytuł i logo.
  const spots = [
    [12, 14, 34, -12], [62, 8, 26, 8], [104, 20, 38, -4], [154, 10, 30, 14],
    [168, 62, 34, -10], [8, 66, 28, 10], [150, 112, 40, 6], [6, 200, 36, -8],
    [52, 222, 30, 12], [96, 206, 42, -6], [150, 196, 32, 10],
    [70, 258, 26, -12], [118, 252, 34, 8], [166, 246, 30, -4], [160, 158, 26, -14],
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

// ---------- 2. Lista słów i zwrotów ----------
function wordList() {
  const marks = '<span class="box"></span><span class="box"></span>';
  const cols = '<div class="wl-cols"><span>znam</span><span>nowe</span></div>';
  const card = (g) => `
    <div class="wcard">
      <div class="wl-head"><div class="wl-t"><b>${esc(g.en)}</b><span class="pl">${esc(g.pl)}</span></div><span class="lvl">${g.level}</span>${cols}</div>
      <ul class="wl">${g.words
        .map(([en, pl, ic]) => `<li>${iconSvg(ic, { cls: 'wl-ic' })}<span class="wl-en">${esc(en)}</span><span class="wl-pl">${esc(pl)}</span>${marks}</li>`)
        .join('')}</ul>
    </div>`;
  const left = T.groups.slice(0, 2);
  const right = T.groups.slice(2);
  const half = Math.ceil(T.phrases.length / 2);
  const phraseCol = (list) =>
    `<ul class="wl ph"><li class="ph-cols">${cols}</li>${list.map(([en, pl]) => `<li><span class="ph-txt"><span class="wl-en">${esc(en)}</span><span class="wl-pl">${esc(pl)}</span></span>${marks}</li>`).join('')}</ul>`;
  return page(`
    <header class="pg-head">
      <h2 class="pg-title">Your words<span class="dot">.</span></h2>
      <p class="lead">Zaznacz, które słowa i zwroty już znasz, a które są dla ciebie nowe.</p>
    </header>
    <div class="wl-grid">
      <div class="wl-col">${left.map(card).join('')}</div>
      <div class="wl-col">${right.map(card).join('')}</div>
    </div>
    <div class="wcard">
      <div class="wl-head"><div class="wl-t"><b>Useful phrases</b><span class="pl">przydatne zwroty</span></div><span class="lvl">A2</span></div>
      <div class="ph-grid">${phraseCol(T.phrases.slice(0, half))}${phraseCol(T.phrases.slice(half))}</div>
    </div>`);
}

// ---------- 3. Podpisz obrazki + co nie pasuje ----------
function picturesPage() {
  const bank = shuffle(T.labelPictures.map((ic) => iconToWord[ic]), 3);
  const cells = T.labelPictures
    .map((ic, i) => `<div class="lp-cell"><span class="n">${i + 1}</span>${iconSvg(ic, { cls: 'lp-ic' })}<span class="line"></span></div>`)
    .join('');
  const odd = T.oddOneOut
    .map((row, i) => `<div class="oo-row"><span class="n">${letter(i)}</span>${row.icons.map((ic) => `<span class="oo-cell">${iconSvg(ic, { cls: 'oo-ic' })}</span>`).join('')}</div>`)
    .join('');
  return page(`
    <div class="ex">
      ${exHead('Podpisz obrazki. Wybierz wyrazy z ramki.')}
      <div class="bank">${bank.map((w) => `<span>${esc(w)}</span>`).join('')}</div>
      <div class="lp-grid">${cells}</div>
    </div>
    <div class="ex">
      ${exHead('Zakreśl obrazek, który nie pasuje do pozostałych.')}
      <div class="oo">${odd}</div>
      <p class="hint">Wyjaśnij swój wybór po angielsku, np. <i>Cheese isn’t a fruit.</i></p>
    </div>`);
}

// ---------- 4. Wykreślanka ----------
const WS = wordSearch(T.wordSearch.words.map((w) => w.toUpperCase()), T.wordSearch.size, T.wordSearch.seed);
function wordSearchPage() {
  const grid = WS.grid.map((row) => `<div class="ws-row">${row.map((ch) => `<span>${ch}</span>`).join('')}</div>`).join('');
  const clues = T.wordSearch.words
    .map((w) => `<li>${iconSvg(wordToIcon[w], { cls: 'ws-ic' })}<span class="dashes">${w.split('').map(() => '<i></i>').join('')}</span></li>`)
    .join('');
  return page(`
    <div class="ex ex-fill">
      ${exHead('Znajdź w diagramie słowa z obrazków (→ ↓ ↘) i wpisz je pod obrazkami.')}
      <div class="ws-wrap"><div class="ws-grid">${grid}</div></div>
      <ul class="ws-clues">${clues}</ul>
    </div>`);
}

// ---------- 5. Krzyżówka (SVG — idealnie równa siatka) ----------
const CW = crossword(Object.keys(T.crossword.clues).map((w) => w.toUpperCase()), T.crossword.seed);
function crosswordSvg(cellMm, solved = false) {
  const nums = {};
  for (const it of CW.items) nums[`${it.r},${it.c}`] = it.n;
  const s = 10; // jednostka siatki w SVG
  let out = '';
  for (let r = 0; r < CW.rows; r++)
    for (let c = 0; c < CW.cols; c++) {
      const ch = CW.grid[r][c];
      if (!ch) continue;
      out += `<rect x="${c * s}" y="${r * s}" width="${s}" height="${s}" fill="#fff" stroke="#20242D" stroke-width="0.3"/>`;
      const n = nums[`${r},${c}`];
      if (n) out += `<text x="${c * s + 0.9}" y="${r * s + 2.9}" class="cw-n">${n}</text>`;
      if (solved) out += `<text x="${c * s + 5}" y="${r * s + 6.9}" class="cw-l">${ch}</text>`;
    }
  const W = CW.cols * s;
  const H = CW.rows * s;
  return `<svg class="cw-svg" viewBox="-0.5 -0.5 ${W + 1} ${H + 1}" width="${CW.cols * cellMm}mm" height="${CW.rows * cellMm}mm" xmlns="http://www.w3.org/2000/svg">${out}</svg>`;
}
function crosswordPage() {
  const list = (dir) =>
    CW.items
      .filter((i) => i.dir === dir)
      .sort((a, b) => a.n - b.n)
      .map((i) => `<li><b>${i.n}</b><span>${esc(T.crossword.clues[i.word.toLowerCase()]).replace(/\s*_+\s*/, (m) => `${m.startsWith(' ') ? ' ' : ''}<span class="cgap"></span>${m.endsWith(' ') ? ' ' : ''}`)}</span></li>`)
      .join('');
  return page(`
    <div class="ex ex-fill">
      ${exHead('Uzupełnij zdania, a brakujące wyrazy wpisz do krzyżówki.')}
      <div class="cw-wrap">${crosswordSvg(11)}</div>
      <div class="cw-clues">
        <div><h3>Poziomo →</h3><ul>${list('across')}</ul></div>
        <div><h3>Pionowo ↓</h3><ul>${list('down')}</ul></div>
      </div>
    </div>`);
}

// ---------- 6. Co powiesz? ----------
const SIT_ORDER = shuffle(T.situations.map((_, i) => i), 9);
function situationsPage() {
  const left = T.situations
    .map(([pl, , ic], i) => `<li><span class="n">${i + 1}</span>${iconSvg(ic, { cls: 'st-ic' })}<span class="st-pl">${esc(pl)}</span><span class="st-box"></span></li>`)
    .join('');
  const right = SIT_ORDER.map((idx, k) => `<li><span class="n">${letter(k)}</span><span>${esc(T.situations[idx][1])}</span></li>`).join('');
  return page(`
    <div class="ex ex-fill">
      ${exHead('Co powiesz w tych sytuacjach? Dopasuj zwroty (a–h) do sytuacji (1–8).')}
      <div class="st-wrap">
        <ul class="st-left">${left}</ul>
        <ul class="st-right">${right}</ul>
      </div>
      <p class="hint">Przeczytaj zwroty na głos. Wszystkie znajdziesz w sekcji <i>Useful phrases</i> na stronie 2.</p>
    </div>`);
}

// ---------- 7. Dialog + o sobie ----------
function gapPage() {
  const G = T.gapFill;
  let n = 0;
  const lines = G.lines
    .map(([who, text]) => {
      const html = esc(text).replace(/\{([^}]+)\}/g, () => `<span class="gap"><sup>${++n}</sup></span>`);
      return `<div class="dl-line"><span class="who">${esc(who)}</span><p>${html}</p></div>`;
    })
    .join('');
  return page(`
    <div class="ex">
      ${exHead('Uzupełnij dialog wyrazami z ramki.')}
      <div class="bank">${shuffle(G.bank, 7).map((w) => `<span>${esc(w)}</span>`).join('')}</div>
      <div class="dialog"><p class="dl-title">${esc(G.title)}</p>${iconSvg('coffee', { cls: 'dl-art' })}${lines}</div>
    </div>
    <div class="ex">
      ${exHead('Odpowiedz na pytania o siebie. Skorzystaj z podpowiedzi.')}
      <div class="about">${T.aboutYou
        .map(([q, hint], i) => `<div class="about-q"><p><span class="n">${i + 1}</span>${esc(q)} <span class="about-hint">${esc(hint)}</span></p><span class="line"></span></div>`)
        .join('')}</div>
    </div>`);
}

// ---------- 8. Klucz ----------
function keyPage() {
  const inWS = new Set();
  for (const p of WS.placed) for (let i = 0; i < p.word.length; i++) inWS.add(`${p.r + p.dr * i},${p.c + p.dc * i}`);
  const wsMini = WS.grid
    .map((row, r) => `<div class="ws-row">${row.map((ch, c) => `<span class="${inWS.has(`${r},${c}`) ? 'on' : ''}">${ch}</span>`).join('')}</div>`)
    .join('');
  const ol = (items) => `<ol>${items.map((t) => `<li>${t}</li>`).join('')}</ol>`;
  const gaps = [];
  T.gapFill.lines.forEach(([, t]) => t.replace(/\{([^}]+)\}/g, (_, w) => gaps.push(esc(w))));
  const cw = (dir) =>
    CW.items.filter((i) => i.dir === dir).sort((a, b) => a.n - b.n).map((i) => `${i.n} ${i.word.toLowerCase()}`);
  const sitKey = T.situations.map((_, i) => `${i + 1} ${letter(SIT_ORDER.indexOf(i))}`);
  const block = (n, body) => `<div class="kb"><span class="kn">${n}</span><div>${body}</div></div>`;
  return page(`
    <p class="key-label">Odpowiedzi</p>
    <div class="key">
      <div class="key-col">
        ${block(1, ol(T.labelPictures.map((ic) => iconToWord[ic])))}
        ${block(2, `<p>${T.oddOneOut.map((o, i) => `${letter(i)}&nbsp; ${esc(o.why)}`).join('<br>')}</p>`)}
        ${block(5, `<p class="pairs">${sitKey.map((s) => `<span>${s}</span>`).join('')}</p>`)}
      </div>
      <div class="key-col">
        ${block(3, `<div class="ws-grid ws-mini">${wsMini}</div>`)}
        ${block(4, `<p><span class="kl">Poziomo</span> ${cw('across').map((x) => `<span class="nw">${x}</span>`).join(', ')}</p><p><span class="kl">Pionowo</span> ${cw('down').map((x) => `<span class="nw">${x}</span>`).join(', ')}</p>`)}
        ${block(6, `<p>${gaps.map((g, i) => `<span class="nw">${i + 1} ${g}</span>`).join(', ')}</p>`)}
      </div>
    </div>
    <div class="finish">
      <div class="finish-art">${['apple', 'cake', 'coffee'].map((i) => iconSvg(i, { cls: 'fin-ic' })).join('')}</div>
      <p class="finish-big">Well done<span class="dot">.</span></p>
      <p>Wróć do listy słów na stronie 2 i sprawdź, ile pamiętasz.</p>
    </div>`);
}

// ---------- Złożenie ----------
const pages = [cover(), wordList(), picturesPage(), wordSearchPage(), crosswordPage(), situationsPage(), gapPage(), keyPage()];
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
// Kontrola: treść strony musi kończyć się co najmniej 8 mm nad stopką
const overflow = await pg.evaluate(() =>
  [...document.querySelectorAll('.page')].flatMap((p, i) => {
    const foot = p.querySelector('.foot');
    const body = p.querySelector('.body');
    if (!foot) return [];
    const mm = 96 / 25.4;
    const max = Math.max(...[...body.querySelectorAll('*')].map((el) => el.getBoundingClientRect().bottom));
    const room = (foot.getBoundingClientRect().top - max) / mm;
    return room < 8 ? [`strona ${i + 1}: odstęp od stopki tylko ${room.toFixed(1)} mm`] : [];
  })
);
const pdfPath = join(ROOT, 'out', `gettinenglish-${slug}.pdf`);
await pg.pdf({ path: pdfPath, format: 'A4', printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
await browser.close();
console.log(`PDF: ${pdfPath}  (stron: ${pages.length}, krzyżówka ${CW.cols}×${CW.rows})`);
if (overflow.length) console.log('UWAGA:\n' + overflow.join('\n'));
