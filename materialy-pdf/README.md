# Materiały PDF do samodzielnej nauki słownictwa (gettinenglish)

Generator kart pracy A4 w standardzie marki gettinenglish (kolor `#2663EB`, krój Onest,
prawdziwe pliki logo SVG), z odręcznymi ilustracjami rysowanymi przez rough.js.

Gotowe pliki: `out/`, np. `out/gettinenglish-food-a1-a2.pdf`.

## Struktura PDF
1. Okładka: temat, poziom, logo i ilustracje w tle
2. „Your words”: lista słów w podkategoriach z poziomem CEFR, kratki *now / later*
3. Ćw. 1 „Label the pictures” i ćw. 2 „Odd one out”
4. Ćw. 3: wykreślanka z obrazkami jako wskazówkami
5. Ćw. 4: krzyżówka obrazkowa
6. Ćw. 5: dialog z lukami i ćw. 6 „Your turn”
7. Klucz odpowiedzi i zakończenie

## Nowy temat
1. Skopiuj `topics/food-a1-a2.mjs` jako np. `topics/travel-a1-a2.mjs` i podmień słowa oraz ćwiczenia.
2. Brakujące ilustracje dopisz w `icons.mjs` (proste kształty w układzie 100×100).
   Podgląd wszystkich ikon: `node preview-icons.mjs` → `preview/icons.png`.
3. `npm install` (raz), potem `node build.mjs travel-a1-a2`.

Wykreślanka i krzyżówka układają się automatycznie, a klucz zawsze zgadza się z diagramami.
Build wymaga Playwright z Chromium.
