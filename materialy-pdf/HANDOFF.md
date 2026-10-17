# Przekazanie pracy — e-booki gettinenglish (ćwiczenia leksykalne PDF)

Ten plik opisuje stan prac i zasady, żeby kolejna sesja (np. lokalna) mogła od razu kontynuować.

## Następny krok (2026-10-17)

Trzy e-booki zamknięte (Holidays — wersja 7 na `main`). Następny: nowy temat od autora — skopiuj `topics/holidays-a2-b1.mjs`, `node build.mjs <slug>`.

## Uruchomienie lokalnie

```bash
git clone https://github.com/mtchorz-cmd/angielski.git
cd angielski
git checkout claude/blissful-albattani-wjekfo
cd materialy-pdf
npm install                      # roughjs
npm install -g playwright        # build.mjs szuka Playwrighta w globalnych modułach (npm root -g)
npx playwright install chromium
pip install pymupdf pillow       # add-fields.py (wersja interaktywna) i podglądy
node build.mjs holidays-a2-b1    # → out/gettinenglish-holidays-a2-b1.pdf + -interaktywny.pdf
```

Windows: polecenia te same (PowerShell); `python` zamiast `python3`, jeśli tak jest skonfigurowany —
`build.mjs` wywołuje `python3 add-fields.py`, w razie potrzeby zmień to w jednej linii na końcu pliku.

## Gotowe e-booki (`topics/*.mjs` → `out/`)

| Temat | Plik tematu | Stan |
|---|---|---|
| Food · A1–A2 | `food-a1-a2.mjs` | gotowy |
| Free time · A1–A2 | `free-time-a1-a2.mjs` | gotowy |
| Holidays and celebrations · A2–B1 | `holidays-a2-b1.mjs` | wersja 7 — gotowy |

Każdy build tworzy dwie wersje: do druku i `-interaktywny` (pola do wpisywania, kratki do zaznaczania,
zakreślanie liter w wykreślance, zakreślanie obrazków; bez automatycznego sprawdzania — `CHECK_BUTTONS = false`).

## Zasady ustalone z autorem (nauczyciel angielskiego)

- Styl marki: białe tło, błękit #2663EB tylko jako akcent, ikony doodle jednego rozmiaru, bez emoji,
  stopka: numer strony na środku, logo po prawej. Okładka: temat, poziom, logo, ilustracje w tle.
- Polecenia po polsku, krótkie, podręcznikowe. Pisownia brytyjska.
- Słowniczek z kratkami „znam / nowe”; ćwiczenia z wpisywaniem mają rozłączne pule słów;
  całe słownictwo ma być przećwiczone w e-booku.
- Zdania opieramy na słownikach (Cambridge, Oxford, Longman, Collins), tłumaczenia sprawdzamy w diki.pl i PONS.
  Bezpośrednie pobieranie stron słowników bywa blokowane — działa WebSearch z `allowed_domains`.
- Zmiany autora wprowadzamy dosłownie; nie dopowiadamy niedokończonych wypowiedzi.
- Dialogi: oszczędnie z wykrzyknikami (zostają głównie w życzeniach), bez potocznego „Loads!” — autor woli spokojniejszy, naturalny ton.
- Ostatnia strona: „Klucz odpowiedzi.” + link do słowniczka.
- Wykreślanka (interaktywna): zaznaczenie = zaokrąglone kafelki z równymi przerwami.
- Kontrole w `build.mjs`: treść ≥ 8 mm nad stopką, ilustracje okładki ≥ 4 mm od tytułu (`coverSkip`).

## Opcje tematu (skrót — szczegóły w README.md)

`vocabLayout` (page1/page2/page3, wide/wide3), `labelRows`, `labelBankWide`, `pictureTrueFalse` / `oddOneOut` /
`matchDates` (ćw. 2), `matchPairs` / `missingLetters` (ćw. 3), `sortColumns` / `adjectivesGap` (ćw. 4),
`wordSearch`, `crossword` (hasła mogą mieć wielką literę), `situations` + `situationsInstruction`,
`gapFill` (+ `sep`), `aboutYou` + `aboutLines`, `game` + `mindMapTitle`, `coverSkip`, `stackTranslations`.

## Decyzje autora (Holidays, 2026-10-11)

- `gingerbread cookies` → `gingerbread biscuits` (BrE) — wprowadzone.
- `Women's Day` → `International Women's Day` (słowniczek, zad. 2, klucz zad. 10) — wprowadzone.
- `Christmas ball` — zostaje bez zmian.
- Dialog (zad. 8): bez „Loads!” (→ „Yes, quite a few.”), wykrzykniki tylko w życzeniach ze słowniczka.
