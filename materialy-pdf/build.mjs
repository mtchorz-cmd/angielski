// Generator PDF „Vocabulary practice” w standardzie gettinenglish.
// Użycie: node build.mjs [slug-tematu]   (domyślnie food-a1-a2)
// Wynik: out/gettinenglish-<slug>.pdf  (+ preview/<slug>.html do podglądu)
import { createRequire } from 'node:module';
import { execSync } from 'node:child_process';
import { mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { iconSvg, ICONS } from './icons.mjs';
import { wordSearch, crossword, rng } from './puzzles.mjs';

const ROOT = dirname(fileURLToPath(import.meta.url));
const slug = process.argv[2] || 'food-a1-a2';
const T = (await import(`./topics/${slug}.mjs`)).default;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const svgFile = (name) => readFileSync(join(ROOT, 'assets/logo', name), 'utf8');
const wordmark = svgFile('gettinenglish-wordmark.svg');
const wordmarkWhite = svgFile('gettinenglish-wordmark-white.svg');

const allWords = T.groups.flatMap((g) => g.words);
const iconToWord = Object.fromEntries(allWords.filter((w) => w[2]).map((w) => [w[2], w[0]]));
const wordToIcon = Object.fromEntries(allWords.filter((w) => w[2]).map((w) => [w[0], w[2]]));
const shuffle = (arr, seed) => {
  const rand = rng(seed);
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

let pageNo = 0;
const page = (body, { cls = '' } = {}) => {
  pageNo++;
  const footer =
    pageNo === 1
      ? ''
      : `<footer class="foot"><span class="foot-logo">${wordmark}</span><span>${esc(T.title)} · ${esc(T.level)}</span><span class="pnum">${pageNo}</span></footer>`;
  return `<section class="page ${cls}">${body}${footer}</section>`;
};

const exHead = (n, en, pl) =>
  `<header class="ex-head"><span class="ex-num">${n}</span><div><h2>${esc(en)}</h2><p class="pl">${esc(pl)}</p></div></header>`;

// ---------- 1. Okładka ----------
function cover() {
  // Ręcznie dobrane pozycje (mm) — ilustracje „rozsypane” wokół, z wolnym polem na tytuł.
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

// ---------- 2. Lista słów ----------
function wordList() {
  const card = (g) => `
    <div class="card wl-card">
      <div class="wl-head">
        <span class="lvl lvl-${g.level.toLowerCase()}">${g.level}</span>
        <div class="wl-title"><b>${esc(g.en)}</b><span class="pl">${esc(g.pl)}</span></div>
        <div class="wl-cols"><span>now</span><span>later</span></div>
      </div>
      <ul class="wl">${g.words
        .map(
          ([en, pl, ic]) => `<li>
          ${ic ? iconSvg(ic, { cls: 'wl-ic' }) : '<span class="wl-ic wl-dot"></span>'}
          <span class="wl-en">${esc(en)}</span><span class="wl-pl">${esc(pl)}</span>
          <span class="box"></span><span class="box"></span></li>`
        )
        .join('')}</ul>
    </div>`;
  const total = allWords.length;
  return page(`
    <header class="pg-head">
      <div class="score"><b>My score</b>
        <div class="score-row"><span>now</span><span class="score-box"></span><span>/ ${total}</span></div>
        <div class="score-row"><span>later</span><span class="score-box"></span><span>/ ${total}</span></div>
      </div>
      <h2 class="pg-title">Your words<span class="dot">.</span></h2>
      <p class="lead">Tick <b>✓</b> the words you know <b>now</b>. After the exercises, come back and tick them again <b>later</b>.
      <span class="pl">Zaznacz słowa, które już znasz — teraz i po ćwiczeniach.</span></p>
    </header>
    <div class="wl-grid">${T.groups.map(card).join('')}</div>`);
}

// ---------- 3. Podpisz obrazki + co nie pasuje ----------
function picturesPage() {
  const bank = shuffle(T.labelPictures.map((ic) => iconToWord[ic]), 3);
  const cells = T.labelPictures
    .map(
      (ic, i) => `<div class="lp-cell"><span class="lp-n">${i + 1}</span>${iconSvg(ic, { cls: 'lp-ic' })}<span class="line"></span></div>`
    )
    .join('');
  const odd = T.oddOneOut
    .map(
      (row, i) => `<div class="oo-row"><span class="oo-n">${String.fromCharCode(97 + i)}</span>${row.icons
        .map((ic) => `<span class="oo-cell">${iconSvg(ic, { cls: 'oo-ic' })}</span>`)
        .join('')}</div>`
    )
    .join('');
  return page(`
    <div class="card ex">
      ${exHead(1, 'Label the pictures', 'Podpisz obrazki słowami z ramki.')}
      <div class="bank">${bank.map((w) => `<span class="chip">${esc(w)}</span>`).join('')}</div>
      <div class="lp-grid">${cells}</div>
    </div>
    <div class="card ex">
      ${exHead(2, 'Odd one out', 'Zakreśl obrazek, który nie pasuje do pozostałych.')}
      <div class="oo">${odd}</div>
      <p class="hint">Tip: why doesn’t it match? Say it in English: <i>“Cheese isn’t a fruit.”</i></p>
    </div>`);
}

// ---------- 4. Wykreślanka ----------
const WS = wordSearch(T.wordSearch.words.map((w) => w.toUpperCase()), T.wordSearch.size, T.wordSearch.seed);
function wordSearchPage() {
  const grid = WS.grid
    .map((row) => `<div class="ws-row">${row.map((ch) => `<span>${ch}</span>`).join('')}</div>`)
    .join('');
  const clues = T.wordSearch.words
    .map((w) => {
      const dashes = w.split('').map(() => '<i></i>').join('');
      return `<li><span class="box"></span>${iconSvg(wordToIcon[w], { cls: 'ws-ic' })}<span class="dashes">${dashes}</span></li>`;
    })
    .join('');
  return page(`
    <div class="card ex ex-tall">
      ${exHead(3, 'Word search', 'Znajdź w diagramie 10 słów z obrazków. Szukaj → ↓ ↘.')}
      <div class="ws-wrap"><div class="ws-grid">${grid}</div></div>
      <ul class="ws-clues">${clues}</ul>
      <p class="hint">Found a word? Tick the box and write it on the lines. <span class="pl">Zaznacz znalezione słowo i wpisz je na kreskach.</span></p>
    </div>`);
}

// ---------- 5. Krzyżówka ----------
const CW = crossword(T.crossword.words.map((w) => w.toUpperCase()), T.crossword.seed);
function crosswordGrid(solved = false) {
  const nums = {};
  for (const it of CW.items) nums[`${it.r},${it.c}`] = it.n;
  let html = '';
  for (let r = 0; r < CW.rows; r++) {
    html += '<div class="cw-row">';
    for (let c = 0; c < CW.cols; c++) {
      const ch = CW.grid[r][c];
      if (!ch) html += '<span class="cw-x"></span>';
      else {
        const n = nums[`${r},${c}`];
        html += `<span class="cw-c">${n ? `<sup>${n}</sup>` : ''}${solved ? ch : ''}</span>`;
      }
    }
    html += '</div>';
  }
  return html;
}
function crosswordPage() {
  const list = (dir) =>
    CW.items
      .filter((i) => i.dir === dir)
      .sort((a, b) => a.n - b.n)
      .map((i) => `<li><b>${i.n}</b>${iconSvg(wordToIcon[i.word.toLowerCase()], { cls: 'cw-ic' })}</li>`)
      .join('');
  return page(`
    <div class="card ex ex-tall">
      ${exHead(4, 'Picture crossword', 'Krzyżówka obrazkowa — wpisz nazwy rzeczy z obrazków.')}
      <div class="cw-wrap"><div class="cw-grid" style="--cols:${CW.cols}">${crosswordGrid()}</div></div>
      <div class="cw-clues">
        <div><h3>Across <span class="pl">→ poziomo</span></h3><ul>${list('across')}</ul></div>
        <div><h3>Down <span class="pl">↓ pionowo</span></h3><ul>${list('down')}</ul></div>
      </div>
    </div>`);
}

// ---------- 6. Luki + o sobie ----------
function gapPage() {
  const G = T.gapFill;
  let n = 0;
  const lines = G.lines
    .map(([who, text]) => {
      const html = esc(text).replace(/\{([^}]+)\}/g, () => `<span class="gap"><sup>${++n}</sup></span>`);
      return `<div class="dl-line ${who === 'Anna' ? 'dl-b' : 'dl-a'}"><span class="who">${esc(who)}</span><p>${html}</p></div>`;
    })
    .join('');
  return page(`
    <div class="card ex">
      ${exHead(5, `Fill the gaps: ${G.title}`, 'Uzupełnij dialog słowami z ramki. Każdego słowa użyj raz.')}
      <div class="bank">${shuffle(G.bank, 7).map((w) => `<span class="chip">${esc(w)}</span>`).join('')}</div>
      <div class="dialog">${iconSvg('coffee', { cls: 'dl-art' })}${lines}</div>
    </div>
    <div class="card ex">
      ${exHead(6, 'Your turn', 'Teraz Ty — dokończ zdania o sobie.')}
      <div class="about">${T.aboutYou
        .map((s) => `<div class="about-row"><span>${esc(s)}</span><span class="line"></span></div>`)
        .join('')}</div>
    </div>`);
}

// ---------- 7. Klucz ----------
function keyPage() {
  const inWS = new Set();
  for (const p of WS.placed) for (let i = 0; i < p.word.length; i++) inWS.add(`${p.r + p.dr * i},${p.c + p.dc * i}`);
  const wsMini = WS.grid
    .map((row, r) => `<div class="ws-row">${row.map((ch, c) => `<span class="${inWS.has(`${r},${c}`) ? 'on' : ''}">${ch}</span>`).join('')}</div>`)
    .join('');
  let n = 0;
  const gaps = [];
  T.gapFill.lines.forEach(([, t]) => t.replace(/\{([^}]+)\}/g, (_, w) => gaps.push(`${++n} ${w}`)));
  const cwList = (dir) =>
    CW.items.filter((i) => i.dir === dir).sort((a, b) => a.n - b.n).map((i) => `${i.n} ${i.word.toLowerCase()}`).join(' · ');
  return page(`
    <div class="key">
      <p class="key-label">Answer key <span>· Odpowiedzi</span></p>
      <div class="key-grid">
        <div><h4>1 · Label the pictures</h4><p>${T.labelPictures.map((ic, i) => `${i + 1} ${iconToWord[ic]}`).join(' · ')}</p>
        <h4>2 · Odd one out</h4><p>${T.oddOneOut.map((o, i) => `${String.fromCharCode(97 + i)} ${o.why}`).join('<br>')}</p>
        <h4>4 · Crossword</h4><p><b>Across:</b> ${cwList('across')}<br><b>Down:</b> ${cwList('down')}</p>
        <h4>5 · At the café</h4><p>${gaps.join(' · ')}</p></div>
        <div><h4>3 · Word search</h4><div class="ws-grid ws-mini">${wsMini}</div>
        <div class="cw-grid cw-mini" style="--cols:${CW.cols}">${crosswordGrid(true)}</div></div>
      </div>
    </div>
    <div class="finish">
      <div class="finish-art">${['apple', 'cake', 'coffee'].map((i) => iconSvg(i, { cls: 'fin-ic' })).join('')}</div>
      <p class="finish-big">Well done<span class="dot">.</span></p>
      <p>Go back to <b>page 2</b> and tick the words you know <b>later</b>.<br><span class="pl">Wróć do listy słów i sprawdź, ile już umiesz.</span></p>
      <div class="finish-logo">${wordmark}</div>
    </div>`);
}

// ---------- Złożenie ----------
const pages = [cover(), wordList(), picturesPage(), wordSearchPage(), crosswordPage(), gapPage(), keyPage()];
const css = readFileSync(join(ROOT, 'style.css'), 'utf8');
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>gettinenglish · ${esc(T.title)} ${esc(T.level)}</title>
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
const pdfPath = join(ROOT, 'out', `gettinenglish-${slug}.pdf`);
await pg.pdf({ path: pdfPath, format: 'A4', printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
await browser.close();
console.log(`PDF: ${pdfPath}  (stron: ${pages.length}, krzyżówka ${CW.cols}×${CW.rows}, ikon: ${Object.keys(ICONS).length})`);
