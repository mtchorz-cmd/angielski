# Materiały PDF do samodzielnej nauki słownictwa (gettinenglish)

Generator kart pracy A4 („Ćwiczenia leksykalne”) w standardzie marki gettinenglish (kolor `#2663EB`, krój Onest,
prawdziwe pliki logo SVG), z odręcznymi ilustracjami w stylu doodle (grafitowa kreska, rough.js).

Gotowe pliki: `out/`, np. `out/gettinenglish-food-a1-a2.pdf`.

## Struktura PDF
1. Okładka: temat, poziom, logo i ilustracje w tle
2. „Your words”: słowa w podkategoriach (A1/A2) oraz „Useful phrases”, z kratkami *znam / nowe*
3. Podpisz obrazki · Co nie pasuje?
4. Wykreślanka 10×10 (obrazki jako wskazówki)
5. Krzyżówka ze zdaniami z luką (siatka rysowana w SVG)
6. Co powiesz w tych sytuacjach? (dopasuj zwroty)
7. Dialog z lukami · Odpowiedz na pytania o siebie
8. Odpowiedzi i „Well done”

Polecenia są po polsku, a wszystkie ćwiczenia używają wyłącznie słów i zwrotów ze strony 2.
Build sprawdza, czy treść kończy się co najmniej 8 mm nad stopką.

## Nowy temat
1. Skopiuj `topics/food-a1-a2.mjs` jako np. `topics/travel-a1-a2.mjs` i podmień słowa oraz ćwiczenia.
2. Brakujące ilustracje dopisz w `icons.mjs` (proste kształty w układzie 100×100).
   Podgląd wszystkich ikon: `node preview-icons.mjs` → `preview/icons.png`.
3. `npm install` (raz), potem `node build.mjs travel-a1-a2`.

Wykreślanka i krzyżówka układają się automatycznie, a klucz zawsze zgadza się z diagramami.
Build wymaga Playwright z Chromium.
