# A2 Quest — materiał dla kursanta w formie gry RPG (gettinenglish / Szkoła Językowa)

Interaktywny PDF A4: mapa wyprawy i 12 lekcji-tygodni na poziomie A2, z bramą 80% i kodeksem uczciwości.
Repo: `angielski` (ten folder). Stan prac: [STATUS.md](STATUS.md), decyzje i zasady stylu: [DECYZJE.md](DECYZJE.md), plan: [ETAPY.md](ETAPY.md).

## Kluczowe ustalenia
- **Styl jest zamrożony** (DECYZJE.md, 2026-10-12): delikatna rycina, niebieski akcent, bez czerwieni. Onest dominuje, Cinzel tylko w tytułach.
- **Treść lekcji:**
  - angielski brytyjski, ambitne A2;
  - słownictwo w 3 kolumnach po 10 (Słowa, Kolokacje, Zwroty i reakcje);
  - każdy angielski tekst przez skill `angielski-native`.
- **Pamięć o właścicielu:** `feedback_gamified_rpg_materials`.

## Jak budować
- `./build.sh`: Chrome headless drukuje [a2-quest.html](a2-quest.html), `--dump-dom` oddaje JSON z prostokątami pól i linków, PyMuPDF dokłada kratki, pola i linki. Wynik: `A2-Quest.pdf`.
- Wymaga: Chrome (Playwright Chromium z `~/Library/Caches/ms-playwright` albo systemowy) i `pymupdf`.
- **Gdzie co jest w HTML:**
  - nowa lekcja to obiekt w `STAGE_DATA` (`g`, `u`, `ch`, `w:{words,coll,phr}`, `art`);
  - nowa ilustracja to wpis w `DD` (prefiksy `w`/`b`/`i`/`n`/`bn`);
  - miejsca na mapie: `STAGES` i `LANDMARKS`.
- Linki do nieistniejących stron build pomija i wypisuje; pojawią się same, gdy powstanie strona.
- **Po każdej zmianie** obejrzyj render PNG strony (PyMuPDF `get_pixmap`) i sprawdź, czy nic na siebie nie nachodzi.
