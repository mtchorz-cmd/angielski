# DECYZJE — A2 Quest

Najnowsze na górze. Tylko decyzje trwałe; kolejne rundy poprawek zebrane w jeden wpis.

## 2026-10-12 · Styl mapy i strony lekcji zamrożony (po 15 rundach uwag właściciela)
**Decyzja.**
- **Kolory:** papier mapy `#F7F6F2`, tło lekcji ciepła biel `#FBFAF7`, atrament `#2A3140`, akcent niebieski `#3768D8`, morze `#E1EBF6` / linie `#6F92C6`, delikatne akcenty `#7FA0D4`. Bez czerwieni i bez ciepłego pomarańczowego pergaminu.
- **Kroje:** Onest dominuje; Cinzel (odstępstwo od brandbooka, zgoda właściciela) tylko w tytułach lekcji, tytule mapy, nazwach krain i „Smocza Twierdza”.
- **Ilustracje = rycina jak reszta mapy:** cienka kreska ok. 1,2 px, kreskowanie prawej części brył (przezroczystość 0,5), ciemne partie krzyżowym kreskowaniem, proste linie z zaokrąglonymi narożnikami (`roundPoly`). Te same rysunki na mapie i w lekcjach.
  - Odrzucone kolejno: płaska ikona, kreskowanie rough.js, gruby kontur z cieniem („3D”), płaskie („2D”), drżąca linia („zbyt krzywe”).
- **Mapa:**
  - trasa to rzadkie niebieskie ślady stóp (przerywana linia była „generyczna”);
  - jeden smok, obok Smoczej Twierdzy; twierdza bez skały, największa (finał), a medalion „12” lekko zachodzi na bramę;
  - las stopniowany od gęstego kreskowania do jasnego skraju;
  - galeon stonowany;
  - na Wyspie Echa drobne elementy, przy Kuźni Run unoszą się runy;
  - tytuł bez wstęgi: ornament, napis, linia z zawijasami, podtytuł.
- **Każde miejsce ma własny znak:**
  - wioska: okrągłe strzechy i studnia,
  - karczma: piętro, ciemny dach i szyld,
  - biblioteka: regały w łukowym oknie,
  - etap 10 to „Krąg Wróżbitów” (menhiry i kula), a nie wieża,
  - zamiast Kręgu Kamieni jest „Magiczne Źródło”.
- **Strona lekcji:**
  - 4 punkty gramatyki, 2 umiejętności;
  - wyzwanie tygodnia tylko z kratką, bez pola do wpisywania;
  - 30 pozycji słownictwa w 3 kolumnach: Słowa, Kolokacje, Zwroty i reakcje (ambitne A2, BrE);
  - brama: suma punktów, próg 80% zaokrąglony w górę, kodeks bohatera, data;
  - ilustracje: przy tytule (winieta z ikoną miejsca), przy wstępie, przy łupie, skrzynia przy bramie — umiarkowanej wielkości, „nie przytłaczające”.

**Dlaczego.** Właściciel chce „magicznego świata RPG” jak stare mapy Baldur's Gate, ale delikatnego i spójnego z marką (błękit). Ślad prób jest w lekcji `LEKCJE/wizualne.md` (2026-10-12).

**Konsekwencje.** Lekcje 4–12, okładka i Sala Chwały powstają w tym samym stylu, bez ponownych prób. Nowe ilustracje dopisuj do `DD` w HTML.

## 2026-10-12 · Struktura i treść materiału
- 1 etap = 1 tydzień, 12 etapów, trzy krainy: Dolina Nowicjuszy (1–4), Pogranicze (5–8), Smocze Ziemie (9–12).
- PDF interaktywny: numery na mapie to linki do lekcji, na każdej lekcji „← Mapa” i „Ruszaj dalej”. Działa też wydrukowany.
- Na końcu Sala Chwały z certyfikatem i wezwaniem „Kolejna wyprawa: B1”.
- Projekt przeniesiony z folderu tymczasowego sesji do repo `angielski/a2-quest/`.
