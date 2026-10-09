# Materiały PDF do samodzielnej nauki słownictwa (gettinenglish)

Generator kart pracy A4 („Ćwiczenia leksykalne”) w standardzie marki gettinenglish (kolor `#2663EB`, krój Onest,
prawdziwe pliki logo SVG), z odręcznymi ilustracjami w stylu doodle (grafitowa kreska, rough.js).

Gotowe pliki w `out/`:
- `gettinenglish-food-a1-a2.pdf` – Food · A1–A2
- `gettinenglish-free-time-a1-a2.pdf` – Free time · A1–A2

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
10. Ćw. 10 Odręczna mapa myśli: kategorie i linie na słowa
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

## Opcje w pliku tematu
- `vocabLayout` – które grupy słów trafiają na stronę 2 i 3 (dwie kolumny) oraz karty szerokie.
- `missingLetters` **albo** `matchPairs` (łączenie czasowników z wyrazami) – wariant zad. 3.
- `adjectivesGap` (zdania z przymiotnikami) **albo** `sortColumns` (np. play / go / do) – wariant zad. 4.
- `labelRows` – podział słów w ramce zad. 1 na rzędy, np. `[4, 3, 3]`.
- `wordSearch.words` – słowo albo `[słowo, ikona]`, gdy wyraz w wykreślance różni się od hasła (np. *piano*).
- `coverSkip` – numery ilustracji na okładce do pominięcia, gdy dłuższy tytuł by na nie nachodził.
