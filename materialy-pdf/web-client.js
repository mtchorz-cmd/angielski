// gettinenglish — wersja internetowa: dopasowanie stron do ekranu, zapamiętywanie odpowiedzi
// (tylko w przeglądarce kursanta) oraz przyciski „Sprawdź” / „Wyczyść” pod ćwiczeniami.
// Odpowiedzi z klucza są w atrybutach data-* pól (te same, z których korzysta wersja PDF).
(function () {
  var stack = document.querySelector('.web-stack');
  var KEY = 'gettinenglish:' + stack.getAttribute('data-slug');
  var PAGE_PX = 793.7; // 210 mm

  function fit() {
    var w = document.documentElement.clientWidth - 32;
    stack.style.zoom = Math.min(1, w / PAGE_PX);
  }
  fit();
  window.addEventListener('resize', fit);

  var inputs = [].slice.call(document.querySelectorAll('.fx-in'));
  var toggles = [].slice.call(document.querySelectorAll('.fx-tg'));

  // ---------- zapamiętywanie (localStorage bywa niedostępny: wtedy po prostu nie zapisujemy) ----------
  function save() {
    var st = { i: {}, t: {} };
    inputs.forEach(function (el) { if (el.value) st.i[el.id] = el.value; });
    toggles.forEach(function (el) { if (el.classList.contains('on')) st.t[el.id] = 1; });
    try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {}
  }
  try {
    var st = JSON.parse(localStorage.getItem(KEY) || 'null');
    if (st) {
      inputs.forEach(function (el) { if (st.i[el.id]) el.value = st.i[el.id]; });
      toggles.forEach(function (el) { if (st.t[el.id]) setOn(el, true); });
    }
  } catch (e) {}

  // ---------- przełączniki ----------
  function setOn(el, on) {
    el.classList.toggle('on', on);
    el.setAttribute('aria-pressed', on ? 'true' : 'false');
  }
  toggles.forEach(function (el) {
    el.addEventListener('click', function () {
      var on = !el.classList.contains('on');
      var g = el.getAttribute('data-group');
      if (on && g) toggles.forEach(function (o) { if (o !== el && o.getAttribute('data-group') === g) { setOn(o, false); o.classList.remove('good', 'bad'); } });
      setOn(el, on);
      el.classList.remove('good', 'bad');
      save();
    });
  });

  // ---------- pola tekstowe: krzyżówka przechodzi do następnej kratki ----------
  var cw = {};
  inputs.forEach(function (el) {
    if (el.classList.contains('fx-cw')) cw[el.getAttribute('data-cx') + ',' + el.getAttribute('data-cy')] = el;
  });
  var dir = null;
  inputs.forEach(function (el) {
    el.addEventListener('focus', function (e) { if (e.isTrusted && !el._auto) dir = null; el._auto = false; });
    el.addEventListener('input', function () {
      el.classList.remove('ok', 'bad');
      save();
      if (!el.classList.contains('fx-cw') || !el.value) return;
      var x = +el.getAttribute('data-cx'), y = +el.getAttribute('data-cy');
      var right = cw[(x + 1) + ',' + y], down = cw[x + ',' + (y + 1)];
      var next = dir === 'down' ? down || right : right || down;
      if (next) { dir = next === down ? 'down' : 'across'; next._auto = true; next.focus(); next.select(); }
    });
  });

  // ---------- sprawdzanie ----------
  function N(x) {
    x = ('' + x).toLowerCase().replace(/[‘’`]/g, "'").replace(/\s+/g, ' ').trim();
    return x.replace(/^the /, '');
  }
  function inEx(ex, sel) { return [].slice.call(document.querySelectorAll(sel + '[data-ex="' + ex + '"]')); }
  function mark(el, ok) { el.classList.remove('ok', 'bad'); if (el.value.trim() !== '') el.classList.add(ok ? 'ok' : 'bad'); }

  function check(ex) {
    var ok = 0, tot = 0, bad = [], found = 0, wn = 0;
    var fields = inEx(ex, '.fx-in');
    var tgs = inEx(ex, '.fx-tg');
    // jedno pole = jedna odpowiedź
    fields.forEach(function (el) {
      if (el.hasAttribute('data-grp') || el.hasAttribute('data-words') || el.hasAttribute('data-word') || !el.hasAttribute('data-ans')) return;
      tot++;
      var g = N(el.value) === N(el.getAttribute('data-ans'));
      mark(el, g);
      if (g) ok++; else bad.push(el.getAttribute('data-item'));
    });
    // kolumny (dowolna kolejność)
    var groups = {};
    fields.forEach(function (el) { var g = el.getAttribute('data-grp'); if (g) (groups[g] = groups[g] || []).push(el); });
    Object.keys(groups).forEach(function (g) {
      var els = groups[g], set = els[0].getAttribute('data-set').split('|').map(N), used = {}, c = 0;
      els.forEach(function (el) {
        var v = N(el.value);
        if (!v) { el.classList.remove('ok', 'bad'); return; }
        var e = set.indexOf(v) >= 0 && !used[v];
        if (e) { used[v] = 1; c++; }
        mark(el, e);
      });
      tot += set.length; ok += c;
      if (c < set.length) bad.push(g);
    });
    // słowa złożone z kratek: krzyżówka (data-words) i brakujące litery (data-word)
    var words = {};
    fields.forEach(function (el) {
      var ws = el.getAttribute('data-words') || el.getAttribute('data-word');
      if (!ws) return;
      ws.split(',').forEach(function (w) { (words[w] = words[w] || []).push(el); });
    });
    Object.keys(words).sort(function (a, b) { return a - b; }).forEach(function (w) {
      tot++;
      var all = true;
      words[w].forEach(function (el) { var e = N(el.value) === N(el.getAttribute('data-ans')); mark(el, e); if (!e) all = false; });
      if (all) ok++; else bad.push(w);
    });
    // tak/nie, obrazek do zakreślenia
    var items = {};
    tgs.forEach(function (el) { if (el.hasAttribute('data-ans')) (items[el.getAttribute('data-item')] = items[el.getAttribute('data-item')] || []).push(el); });
    Object.keys(items).forEach(function (it) {
      tot++;
      var g = true;
      items[it].forEach(function (el) {
        var on = el.classList.contains('on'), want = el.getAttribute('data-ans') === 'on';
        el.classList.remove('good', 'bad');
        if (on !== want) g = false;
        if (on) el.classList.add(want ? 'good' : 'bad');
      });
      if (g) ok++; else bad.push(it);
    });
    // wykreślanka: ile ukrytych słów jest całych zakreślonych
    var hits = {};
    tgs.forEach(function (el) {
      var h = el.getAttribute('data-hit');
      if (h) h.split(',').forEach(function (w) { (hits[w] = hits[w] || []).push(el); });
    });
    Object.keys(hits).forEach(function (w) { wn++; if (hits[w].every(function (el) { return el.classList.contains('on'); })) found++; });

    var out = document.querySelector('.chk-score[data-ex="' + ex + '"]');
    var msg = (wn ? 'podpisy ' : '') + ok + '/' + tot + (bad.length ? ' · popraw: ' + bad.join(', ') : ' · Brawo!') + (wn ? ' · w siatce: ' + found + '/' + wn : '');
    out.textContent = msg;
    out.classList.toggle('all', !bad.length);
  }

  function clear(ex) {
    inEx(ex, '.fx-in').forEach(function (el) { el.value = ''; el.classList.remove('ok', 'bad'); });
    inEx(ex, '.fx-tg').forEach(function (el) { setOn(el, false); el.classList.remove('good', 'bad'); });
    var out = document.querySelector('.chk-score[data-ex="' + ex + '"]');
    out.textContent = '';
    out.classList.remove('all');
    save();
  }

  [].slice.call(document.querySelectorAll('.chk-btn')).forEach(function (b) {
    function go() { var ex = b.getAttribute('data-ex'); if (b.getAttribute('data-act') === 'check') check(ex); else clear(ex); }
    b.addEventListener('click', go);
    b.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
  });
})();
