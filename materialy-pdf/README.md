# Materiały PDF do samodzielnej nauki słownictwa (gettinenglish)

Generator kart pracy A4 („Ćwiczenia leksykalne”) w standardzie marki gettinenglish (kolor `#2663EB`, krój Onest,
prawdziwe pliki logo SVG), z odręcznymi ilustracjami w stylu doodle (grafitowa kreska, rough.js).

Gotowe pliki: `out/`, np. `out/gettinenglish-food-a1-a2.pdf`.

## Struktura PDF (11 stron)
1. Okładka: temat, poziom, logo i ilustracje w tle
2. Słownictwo, część 1: owoce i warzywa, codzienne jedzenie, napoje, słodycze
3. Słownictwo, część 2: posiłki, przy stole, przymiotniki, przydatne zwroty (kratki *znam / nowe*)

Wspólne ustawienia w `style.css`: `--ex-ic` (rozmiar ikon w ćwiczeniach) i `--task` (wielkość tekstu w zadaniach).
4. Ćw. 1 Podpisz obrazki · Ćw. 2 Co nie pasuje?
5. Ćw. 3 Brakujące litery · Ćw. 4 Przymiotniki w zdaniach
6. Ćw. 5 Wykreślanka 10×10
7. Ćw. 6 Krzyżówka ze zdaniami z luką (siatka w SVG)
8. Ćw. 7 Co powiesz? Sytuacje i zwroty
9. Ćw. 8 Dialog z lukami · Ćw. 9 Pytania o siebie
10. Ćw. 10 Gra słowna (karty: wpisz 3 owoce, 2 napoje…)
11. Odpowiedzi i „Well done”

Polecenia są po polsku. Ćwiczenia korzystają tylko ze słownictwa ze stron 2–3, a każde
ćwiczenie, w którym kursant wpisuje słowa, ma własną pulę wyrazów.
Build sprawdza, czy treść kończy się co najmniej 8 mm nad stopką i czy ilustracje na okładce
nie dotykają logo ani tytułu.

## Nowy temat
1. Skopiuj `topics/food-a1-a2.mjs` jako np. `topics/travel-a1-a2.mjs` i podmień słowa oraz ćwiczenia.
2. Brakujące ilustracje dopisz w `icons.mjs` (proste kształty w układzie 100×100).
   Podgląd wszystkich ikon: `node preview-icons.mjs` → `preview/icons.png`.
3. `npm install` (raz), potem `node build.mjs travel-a1-a2`.

Wykreślanka i krzyżówka układają się automatycznie, a klucz zawsze zgadza się z diagramami.
Build wymaga Playwright z Chromium.
