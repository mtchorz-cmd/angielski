# STATUS — A2 Quest (PDF dla kursanta, gettinenglish / Szkoła Językowa)

**Ostatnia aktualizacja:** 2026-10-12 · **Etap:** E1 zamknięty (mapa + lekcje 1–3 zaakceptowane: „kawał dobrej roboty”) → E2 nierozpoczęty

## Zrobione (zweryfikowane)
- [A2-Quest.pdf](A2-Quest.pdf), 4 strony: mapa na całą stronę + lekcje 1–3 (Wioska Startowa, Targ Kupiecki, Karczma pod Smokiem).
  Build: `./build.sh` (Chrome headless → PDF, PyMuPDF dokłada pola i linki). v1 w [v1/](v1/).
- Sprawdzone w PyMuPDF: 117 checkboxów + 18 pól tekstowych, 11 linków (mapa 1–3 → lekcje, „← Mapa”, „Ruszaj dalej” 1→2→3).
  Render każdej strony obejrzany po każdej zmianie.
- **NIE sprawdzone:** klikanie w Acrobacie, Podglądzie i na iPadzie; słownictwo z EVP / listą Cambridge A2 Key.

## W toku
- Nic otwartego. Styl mapy i strony lekcji zamrożony (szczegóły i historia rund: [DECYZJE.md](DECYZJE.md)).

## Następny krok
0. **Najpierw rozmiar PDF:** `A2-Quest.pdf` ma ~28 MB, bo Chrome rastruje wzory kreskowania (`<pattern>` z `patternTransform`)
   do 790 bitmap. Zamień kreskowanie (`ddPatterns`/`ddShade`, wzory `fhL`/`fhD` lasu) na wektorowe linie przycięte `clipPath`
   i sprawdź rozmiar (cel: poniżej 1–2 MB) oraz identyczny wygląd renderu. PDF jest w `.gitignore` do czasu naprawy.
Lekcja 4 „Miasto Gildii” (there is/are, przyimki miejsca, tryb rozkazujący; miasto i drogi): dopisać obiekt do `STAGE_DATA`
w [a2-quest.html](a2-quest.html) wg wzoru lekcji 1–3 (4 gramatyka, 2 umiejętności, wyzwanie bez pola, 10+10+10 słownictwa)
i 2 nowe ilustracje do `DD` (hero = ikona „city” z mapy, skrzynia przy bramie bez zmian). Plan lekcji 5–12: [ETAPY.md](ETAPY.md).

## Blokery / do decyzji właściciela
- 6 pozycji słownictwa na granicy A2/B1 (bargain, have a lie-in, run out of, be into, What are you up to?, Count me in!) — zostają, chyba że właściciel zechce bezpieczniej.
- Źródła zacommitowane w repo `angielski` (2026-10-13); `A2-Quest.pdf` poza gitem, odtwarzany `./build.sh`.
