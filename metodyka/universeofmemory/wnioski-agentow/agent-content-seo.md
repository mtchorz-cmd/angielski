# Wnioski dla agenta content/SEO (agent-content-seo)

Podstawa: `STYL-PISANIA.md` i `ZASADY-DYDAKTYKI.md` (synteza 67 artykułów universeofmemory.pl), stan na 2026-10-14. Dotyczy marek gettinenglish, anglokursy, kursyangielskiego i szkolajezykowa. Teksty piszemy dalej przez `tresci-marki` i `copywriter` (playbook `artykul-seo.md`), a każdą tezę metodyczną sprawdzamy w źródle pierwotnym.

---

## 1. Reguły pisania artykułów blogowych (12)

1. **Jedna intencja na artykuł, dobrana do etapu ucznia.** Informacyjna („jak szybko nauczyć się słówek”), porównawcza („fiszki czy aplikacja”), diagnostyczna („dlaczego rozumiem, ale nie mówię”). Diagnoza to nasz wyróżnik: odpowiada na frustrację, a nie na samo hasło.
2. **H1 = fraza główna, pokazana jako obietnica albo obalenie mitu.** Wzór z metodyki: konkretny wynik albo paradoks. Liczby wolno dać tylko wtedy, gdy wynikają z treści („3 powody”), a nie z obietnicy („w 30 dni”). Meta title ≤60 znaków, description 150–160.
3. **Wstęp na 3–6 zdań:** obserwacja z życia dorosłego ucznia, potem zwrot i to, co czytelnik dostanie. Odpowiedź na pytanie z frazy pada w pierwszych 2–3 zdaniach, bo tak łapie się featured snippet i AI Overviews. Bez definicji słownikowej na otwarcie.
4. **H2 jako pytania z wyszukiwarki (PAA), H3 jako mechanizm i reguła.** Każda sekcja ma schemat teza → mechanizm → przykład z liczbą → „Co z tym zrobić”. Nagłówki w sentence case, bez wersalików i bez numeracji 01/02/03.
5. **Mechanizm przed poradą.** Najpierw wyjaśniamy, dlaczego coś działa (wydobywanie z pamięci, limit 3–5 elementów, rozłożone powtórki), dopiero potem dajemy krok. To odróżnia nas od list „10 sposobów” i podnosi E-E-A-T.
6. **Badania z nazwiskiem i rokiem, z typem dowodu i linkiem do źródła pierwotnego.** Piszemy wprost, co to za dowód: metaanaliza, eksperyment, korelacja, case study. Liczb z drugiej ręki („1000 słów = 80%”) nie podajemy bez zastrzeżenia i bez weryfikacji (sekcja 10 syntezy). Przed publikacją przepuszczamy tekst przez `blog-factcheck`.
7. **Ostro wobec mitów, łagodnie wobec ludzi.** Krytykujemy „style uczenia się”, ćwiczenia z lukami i ponowne czytanie, ale nigdy nauczycieli, szkół, konkurencji z nazwy ani uczniów. Bez wulgaryzmów, bez skatologii, bez „bzdura” i bez absolutów w rodzaju „99,9%”.
8. **Technikę bierzemy, znaków firmowych autora nie.** Nie używamy jego fraz, rubryk ani nazw pojęć („Perełki wiedzy”, „Studium szaleństwa”, „Skończyłeś czytać? Czas na naukę!”). Własne etykiety zjawisk tworzymy dla marki i zapisujemy w karcie marki, żeby były spójne między tekstami. Autora możemy cytować jako źródło z linkiem, ale nie parafrazować całych artykułów.
9. **Każdy artykuł kończy się krokiem na dziś i wersją minimum.** Na przykład: „5 zdań o swojej pracy, powiedz je na głos bez kartki”. Jest też uczciwe zastrzeżenie: kiedy to nie działa i na czym opieramy tezę. Podsumowanie w 3–7 punktach, które dają się zastosować.
10. **FAQ na 3–5 pytań z PAA i z realnych pytań uczniów (lektorzy, formularze).** Odpowiedź ma 40–60 słów i zaczyna się od sedna, do tego schema FAQPage. Nie powtarzamy w FAQ treści z H2.
11. **Linkowanie wewnętrzne 3–5 według klastra metodycznego.** Filar („jak uczyć się angielskiego jako dorosły”) prowadzi do artykułów satelitarnych (pamięć, słownictwo, mówienie, słuchanie, nawyk), a te linkują z powrotem do filaru i do jednej strony oferty. Anchor opisowy, nie „kliknij tutaj”. Ofertę dajemy wyłącznie w wyraźnie oznaczonym bloku na końcu, nigdy w środku wywodu.
12. **Przykłady angielskie przez `angielski-native` i zgodne z metodyką.** Jedno nowe słowo na zdanie przykładowe, z oznaczonym rejestrem (formalny albo potoczny) i zdaniami z życia dorosłego Polaka (praca, dojazd, urząd). Polski tekst kontrolujemy walidatorem `check-tekst.mjs` i katalogiem anty-slop.

---

## 2. 15 tematów (tytuł roboczy · intencja · teza · dowód do sprawdzenia)

Oznaczenie **[W]** = twierdzenie wymaga weryfikacji w źródle pierwotnym przed publikacją. Autora (universeofmemory) traktujemy jako trop, nie jako źródło dowodu.

| # | Tytuł roboczy | Intencja | Teza | Dowód / źródło do sprawdzenia |
|---|---|---|---|---|
| 1 | Rozumiem, ale nie mówię. Skąd ta blokada i jak z niej wyjść | diagnostyczna | Rozpoznawanie to inna umiejętność niż wydobywanie. Mówienie trzeba ćwiczyć jako wydobywanie. | Efekt testowania: Roediger i Karpicke 2006 **[W]**. Transfer-appropriate processing: Morris, Bransford, Franks 1977 **[W]** |
| 2 | Dlaczego ponowne czytanie notatek nie działa (choć daje dobre samopoczucie) | informacyjna | Iluzja kompetencji: płynność czytania myli się ze znajomością. | Dunlosky i in. 2013, ocena 10 technik **[W]**. Kornell i Bjork o metapamięci **[W]** |
| 3 | Ile słów trzeba znać na B1? Uczciwa odpowiedź | informacyjna | Liczba słów to mapa, nie obietnica, a B1 to też tematy i płynność. | Skala ×2 to szacunek autora **[W]**. Dane o pokryciu tekstu: Nation 2006, Laufer **[W]** (pokrycie tekstu ≠ rozmowa) |
| 4 | „1000 słów wystarczy do rozmowy”? Skąd się wziął ten mit | porównawcza / mit | Odsetki pokrycia dotyczą tekstu i rodzin wyrazów, nie swobodnej mowy ani kolokacji. | Nation, Adolphs i Schmitt 2013 (mowa) **[W]**. Nie cytujemy liczb bez źródła pierwotnego |
| 5 | Ćwiczenia z lukami: dlaczego niewiele uczą i co robić zamiast nich | informacyjna (uczniowie i lektorzy) | Uzupełnianie to rozpoznawanie. Zdanie o sobie to produkcja. | Badania nad efektem generowania: Slamecka i Graf 1978 **[W]**. Teza o lukach to w dużej mierze opinia autora, więc piszemy ją jako argument, nie jako fakt |
| 6 | Style uczenia się (wzrokowiec, słuchowiec) nie istnieją. Co to zmienia | mit | Dopasowanie do „stylu” nie poprawia wyników. Liczy się forma zgodna z celem. | Pashler i in. 2008 **[W]** |
| 7 | Ile nowych słów dziennie? Dlaczego 10–20 bije 50 | informacyjna | Zbyt wiele nowych elementów przeciąża pamięć roboczą i kończy się rezygnacją. | Cowan 2001 (3–5 elementów) **[W]**. Tempo 10–20 dziennie to praktyka autora, nie badanie **[W]** |
| 8 | Powtórki rozłożone w czasie: prosty plan bez aplikacji | poradnikowa | Rozłożenie w czasie wygrywa z kumulowaniem. Dokładny harmonogram ma znaczenie drugorzędne. | Cepeda i in. 2006, metaanaliza **[W]**. Plan 1/3/7/14/30 dni to heurystyka |
| 9 | Dorosły uczy się wolniej niż dziecko? Policz godziny | mit | Przewaga dziecka to głównie liczba godzin kontaktu. Dorosły ma wiedzę i punkty zaczepienia. | Porównanie autora jest zachętą, nie dowodem **[W]**. Literatura o wieku a L2 (np. Muñoz) do sprawdzenia, uczciwie z wymową na korzyść dzieci |
| 10 | Angielski już masz w głowie: kognaty i nazwy marek na start | informacyjna, A1 | Znane słowa obniżają koszt nauki i dają pierwszy sukces. | Liczba kognatów PL–EN do sprawdzenia **[W]**. Ostrzeżenie o false friends. Etymologie marek sprawdzamy w słowniku |
| 11 | Ile czasu dziennie na angielski, gdy pracujesz na etat | informacyjna | Lepiej 20–30 min codziennie z wersją minimum niż zrywy. Nawyk bije motywację. | Lally i in. 2010, nawyki (ok. 66 dni, duży rozrzut) **[W]** |
| 12 | Jak poprawiać błędy, żeby uczeń nie przestał mówić | dla lektorów i rodziców | Korekta selektywna i po wypowiedzi, najpierw błędy zaburzające sens. | Lyster i Ranta 1997. Metaanalizy feedbacku korygującego (Li 2010) **[W]** |
| 13 | Mówienie do siebie po angielsku: 10-minutowy protokół | poradnikowa | Samodzielna produkcja szybko pokazuje luki w słownictwie i konstrukcjach. | Protokół autora to metoda, nie badanie. Ewentualnie literatura o „output hypothesis” (Swain 1985) **[W]** |
| 14 | Słuchasz podcastów i nadal nie rozumiesz? 12 przyczyn i plan na A2–B1 | diagnostyczna | Na niskim poziomie potrzebne są transkrypcja i powtarzanie do 70–85% zrozumienia. | Próg 70–85% to heurystyka autora **[W]**. Badania nad słuchaniem z transkrypcją (Vandergrift, Field) **[W]** |
| 15 | Telefon na biurku obniża skupienie nawet wyłączony? Co mówią badania | informacyjna | Odłóż telefon do innego pokoju na czas nauki. | Ward i in. 2017 „Brain drain” **[W]**. Były nieudane replikacje, więc tezę formułujemy ostrożnie |

Wyróżnik na tle typowych blogów językowych: zamiast list hacków piszemy mechanizm i diagnozę, obalamy mity naszej branży („angielski w 30 dni”, „wyjedź za granicę”) i uczciwie podajemy granice dowodów. Pokrywa się to z claimem „uczymy tak, jak działa pamięć”, o ile Mateusz go zaakceptuje (pytanie 1).

---

## 3. Uczciwa komunikacja skuteczności kursu

**Zakazane obietnice:**
- czas do poziomu bez warunków („B1 w 6 miesięcy”, „mówisz po 30 dniach”, „płynnie w 3 miesiące”);
- względne liczby bez punktu odniesienia („30% szybciej”, „3× skuteczniej”: niż co, mierzone jak i na kim?);
- przedstawianie case study (n=1–2, zmotywowana osoba z bazą) jako typowego wyniku;
- „gwarancja”, „każdy”, „bez wysiłku”, „bez wkuwania”, „naturalnie jak dziecko”;
- „metoda naukowo udowodniona” jako całość. Badaniami popieramy pojedyncze zasady (powtórki rozłożone w czasie, efekt testowania), a nie nasz kurs;
- powtarzanie mitów: style uczenia się, „native zawsze lepszy”, „sama immersja”.

**Sprawdzalne liczby, które wolno podawać (gdy mamy dane):**
- wkład: liczba godzin zajęć i zalecanej pracy własnej („48 h z lektorem + ok. 20 min dziennie”), liczba zwrotów lub słów w programie, poziom startowy i docelowy według CEFR z listą can-do;
- warunki: „przy X min dziennie przez Y tygodni”, z informacją, co się dzieje, gdy uczeń tego nie robi;
- wyniki z własnych danych: odsetek kursantów, którzy przeszli test poziomujący na wyższy poziom, z podaniem n, okresu i definicji („z 120 kursantów, którzy ukończyli moduł w 2025 r., …”). Ukończenie lekcji to nie wynik. Mierzymy opanowane jednostki (sekcja 9);
- opinie kursantów: tylko prawdziwe, z możliwością weryfikacji, z dopiskiem, że wynik zależy od czasu pracy.

**Schemat zdania o skuteczności:** wynik + warunek + kto + jak zmierzone. Przykład wzoru (do wypełnienia danymi): „Kursanci, którzy robią powtórki 5 razy w tygodniu, po 12 tygodniach [wynik testu X]. Dane: n=…, rok …”. Bez danych piszemy o procesie („co tydzień wracasz do materiału z poprzednich lekcji”), a nie o wyniku.

---

## 4. Ryzyka i pytania

**Ryzyka:**
- **Prawo reklamy i UOKiK.** Obietnice czasu lub poziomu bez podstaw i opinie bez weryfikacji grożą zarzutem wprowadzającej w błąd praktyki rynkowej lub reklamy (ustawa o przeciwdziałaniu nieuczciwym praktykom rynkowym; ustawa o zwalczaniu nieuczciwej konkurencji; przepisy Omnibus o opiniach konsumentów i obniżkach cen). Konkretne artykuły i aktualne stanowiska UOKiK wobec szkół językowych i edtech trzeba sprawdzić w Perplexity lub u prawnika przed kampanią. Tego nie weryfikowałem.
- **Kopiowanie stylu i treści.** Parafraza całych artykułów autora, jego fraz lub nazw pojęć to ryzyko prawne (utwór, czyn nieuczciwej konkurencji) i wizerunkowe. Do tego dochodzi duplicate content i kanibalizacja w SEO. Bierzemy technikę i źródła pierwotne, autora linkujemy jako źródło inspiracji.
- **Ton.** Wyrazista krytyka może zabrzmieć protekcjonalnie albo jak atak na lektorów (także naszych). Granica: krytykujemy metody, nie ludzi. Humor maksymalnie raz na sekcję.
- **Wiarygodność liczb.** Część liczb autora pochodzi z drugiej ręki albo z n=1, a w jednym tekście jest literówka. Bez weryfikacji źródła pierwotnego liczba nie trafia ani do artykułu, ani do reklamy.
- **Spójność oferty z treścią.** Gdy blog krytykuje ćwiczenia z lukami albo naukę bez mówienia, a kurs ich używa, czytelnik to zauważy. Przed publikacją sprawdzamy, czy produkt robi to, co głosi blog.

**Pytania do Mateusza (5):**
1. Czy metodyka „pamięć i wydobywanie” ma być oficjalnym wyróżnikiem w komunikacji wszystkich czterech marek, czy tylko jednej (która)?
2. Jakie dane o wynikach kursantów mamy (testy poziomujące, n, okresy) i czy możemy je publikować?
3. Czy wolno wprost nazywać i linkować universeofmemory jako źródło, czy cytujemy wyłącznie badania pierwotne?
4. Jak ostry ma być ton wobec mitów branżowych, skoro konkurencja i część naszych materiałów (np. ćwiczenia z lukami) mogą je powielać?
5. Kto po stronie zespołu zatwierdza merytorykę artykułów (np. Sławek jako metodyk) przed publikacją?
