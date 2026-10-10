// Temat: Free time · poziom A1–A2.
// Nacisk na popularne kolokacje (w bezokoliczniku) i praktyczne zwroty.
// Kolokacja: [en, pl, ikona]. Zwrot: [en, pl].
// Wykreślanka i krzyżówka korzystają wyłącznie z wyrazów ze słowniczka.
export default {
  slug: 'free-time-a1-a2',
  title: 'Free time',
  subtitle: 'Ćwiczenia leksykalne',
  level: 'A1–A2',
  footer: 'Free time · A1–A2',
  stackTranslations: true,
  coverSkip: [4, 6, 14],
  coverIcons: ['football', 'guitar', 'camera', 'reading', 'cycling', 'music', 'painting', 'tennis', 'videogames', 'cinema', 'baking', 'theatre', 'skiing', 'party', 'boardgames'],

  vocabLayout: {
    page1: [['sport'], ['interests', 'home']],
    page2: [],
    wide: [['out', 2]],
  },

  groups: {
    sport: {
      level: 'A1', en: 'Physical activity and sport', pl: 'aktywność fizyczna i sport',
      words: [
        ['play football', 'grać w piłkę nożną', 'football'], ['play tennis', 'grać w tenisa', 'tennis'],
        ['play basketball', 'grać w koszykówkę', 'basketball'], ['play volleyball', 'grać w siatkówkę', 'volleyball'],
        ['go swimming', 'pójść popływać', 'swimming'], ['go to the swimming pool', 'iść na basen', 'pool'],
        ['go jogging', 'biegać, uprawiać jogging', 'running'], ['ride a bike', 'jeździć na rowerze', 'cycling'],
        ['ride a horse', 'jeździć konno', 'horse'], ['do yoga', 'uprawiać jogę', 'yoga'],
        ['do aerobics', 'uprawiać aerobik', 'aerobics'], ['do sports', 'uprawiać sport', 'medal'],
        ['go skiing', 'pojechać na narty', 'skiing'], ['go hiking', 'pójść na pieszą wycieczkę', 'hiking'],
        ['go camping', 'pojechać pod namiot', 'tent'], ['go fishing', 'pójść na ryby', 'fishing'],
        ['go to the gym', 'chodzić na siłownię', 'gym'], ['go for a walk', 'iść na spacer', 'park'],
      ],
    },
    interests: {
      level: 'A1', en: 'My interests', pl: 'moje zainteresowania',
      words: [
        ['paint pictures', 'malować obrazy', 'painting'], ['take photos', 'robić zdjęcia', 'camera'],
        ['go dancing', 'pójść potańczyć', 'dancing'], ['sing songs', 'śpiewać piosenki', 'singing'],
        ['cook meals', 'gotować posiłki', 'cooking'], ['bake cakes', 'piec ciasta', 'baking'],
        ['do the gardening', 'zajmować się ogrodem', 'gardening'], ['play the guitar', 'grać na gitarze', 'guitar'],
        ['play the piano', 'grać na pianinie', 'piano'],
      ],
    },
    home: {
      level: 'A1', en: 'Relax at home', pl: 'relaks w domu',
      words: [
        ['read books', 'czytać książki', 'reading'], ['watch TV', 'oglądać telewizję', 'tv'],
        ['watch films', 'oglądać filmy', 'films'], ['listen to music', 'słuchać muzyki', 'music'],
        ['play video games', 'grać w gry wideo', 'videogames'], ['play board games', 'grać w gry planszowe', 'boardgames'],
        ['do crosswords', 'rozwiązywać krzyżówki', 'crossword'], ['chill out', 'odpoczywać, relaksować się', 'sofa'],
        ['surf the internet', 'surfować po internecie', 'laptop'], ['spend time with family', 'spędzać czas z rodziną', 'family'],
      ],
    },
    out: {
      level: 'A1', en: 'Going out', pl: 'wyjście na miasto',
      words: [
        ['go to the cinema', 'iść do kina', 'cinema'], ['go to a concert', 'iść na koncert', 'concert'],
        ['go to the theatre', 'iść do teatru', 'theatre'], ['visit a museum', 'zwiedzać muzeum', 'museum'],
        ['go to an art gallery', 'iść do galerii sztuki', 'gallery'], ['meet friends', 'spotykać się ze znajomymi', 'coffee'],
        ['go out with friends', 'wyjść z przyjaciółmi', 'friends'], ['go shopping', 'iść na zakupy', 'shopping'],
        ['eat out', 'jeść na mieście', 'dinner'], ['go to a party', 'iść na imprezę', 'party'],
      ],
    },
  },

  phrases: [
    ['What do you do in your free time?', 'Co robisz w wolnym czasie?'],
    ['What are your hobbies?', 'Jakie masz hobby?'],
    ['What do you do for fun?', 'Co robisz dla przyjemności?'],
    ["I'm interested in art.", 'Interesuję się sztuką.'],
    ['Do you enjoy learning English?', 'Lubisz uczyć się angielskiego?'],
    ['What kind of music do you like?', 'Jaką muzykę lubisz?'],
    ['What are you good at?', 'W czym jesteś dobry / dobra?'],
    ["I'm not very good at singing.", 'Nie jestem dobry / dobra w śpiewaniu.'],
    ['How often do you go shopping?', 'Jak często chodzisz na zakupy?'],
    ['I work out at the gym three times a week.', 'Ćwiczę na siłowni trzy razy w tygodniu.'],
    ['What are you doing after work?', 'Co robisz po pracy?'],
    ['Are you doing anything later?', 'Masz jakieś plany na później?'],
    ['Are you free on Saturday?', 'Masz czas w sobotę?'],
    ['Do you want to go to the cinema?', 'Chcesz pójść do kina?'],
    ['That sounds great! What time should we meet?', 'Super! O której się spotkamy?'],
    ["I'd love to, but I'm busy.", 'Bardzo chętnie, ale jestem zajęty / zajęta.'],
    ['I already have plans. Maybe next time.', 'Mam już plany. Może następnym razem.'],
  ],

  // Zasada pokrycia: każda kolokacja ze słowniczka jest ćwiczona co najmniej raz,
  // a ćwiczenia z wpisywaniem (1, 4, 6, 8) mają rozłączne pule.
  //  ćw. 1  – zdjęcia, zakupy, relaks, impreza, krzyżówki, jedzenie na mieście, ryby, piesze wycieczki, rower, basen
  //  ćw. 2  – tenis, filmy, telewizja, gry wideo, spacer, galeria, spotkania i wyjścia ze znajomymi
  //  ćw. 3  – książki, ciasta, piosenki, muzyka, posiłki, koń, internet, rodzina
  //  ćw. 4  – play / go / do: piłka, koszykówka, siatkówka, planszówki, pływanie, jogging, narty, namiot, joga, aerobik, sport, ogród
  //  ćw. 6  – siłownia, kino, teatr, koncert, muzeum, pianino, gitara, obrazy, taniec
  //  ćw. 5  – utrwalenie rzeczowników z ćw. 2 i 3 (wyszukiwanie + podpis)

  // Ćw. 1 — podpisz obrazki (kolokacje)
  labelRows: [5, 5],
  labelBankWide: true,
  labelPictures: ['camera', 'shopping', 'sofa', 'party', 'crossword', 'dinner', 'fishing', 'hiking', 'cycling', 'pool'],

  // Ćw. 2 — czy podpis pasuje do obrazka? [ikona, podpis, poprawny podpis albo null]
  // Podpisy nie zdradzają odpowiedzi z ćw. 1, 3, 4 i 6.
  pictureTrueFalse: [
    ['tennis', 'play tennis', null],
    ['films', 'watch TV', 'watch films'],
    ['videogames', 'play video games', null],
    ['park', 'go out with friends', 'go for a walk'],
    ['gallery', 'go to an art gallery', null],
    ['coffee', 'meet friends', null],
    ['friends', 'go for a walk', 'go out with friends'],
    ['tv', 'watch TV', null],
  ],

  // Ćw. 3 — połącz czasowniki z wyrazami
  matchPairs: {
    instruction: 'Połącz czasowniki (1–8) z wyrazami (a–h).',
    pairs: [['read', 'books'], ['bake', 'cakes'], ['sing', 'songs'], ['listen', 'to music'], ['cook', 'meals'], ['ride', 'a horse'], ['surf', 'the internet'], ['spend time', 'with family']],
  },

  // Ćw. 4 — play / go / do
  sortColumns: {
    instruction: 'Wpisz wyrazy z ramki do właściwej kolumny: play, go albo do.',
    rows: [6, 6],
    columns: [
      { head: 'play', words: ['football', 'basketball', 'volleyball', 'board games'] },
      { head: 'go', words: ['swimming', 'jogging', 'skiing', 'camping'] },
      { head: 'do', words: ['yoga', 'aerobics', 'sports', 'the gardening'] },
    ],
  },

  // Ćw. 5 — wykreślanka ([słowo, ikona]) — rzeczowniki z kolokacji ze słowniczka
  wordSearch: {
    size: 12, seed: 21,
    words: [['tennis', 'tennis'], ['films', 'films'], ['games', 'videogames'], ['walk', 'park'], ['gallery', 'gallery'], ['friends', 'friends'],
      ['family', 'family'], ['horse', 'horse'], ['internet', 'laptop'], ['books', 'reading'], ['cakes', 'baking'], ['songs', 'singing']],
  },

  // Ćw. 6 — krzyżówka: zdania z luką (tylko wyrazy ze słowniczka, inne niż w wykreślance)
  crossword: {
    seed: 7,
    clues: {
      gym: 'I decided to join a ______ because I was in bad shape.',
      cinema: "What's on at the ______ this week? – A new comedy.",
      theatre: "We're going to the ______ tonight to see a play.",
      concert: 'We went to a rock ______ last night. The band was great!',
      museum: 'We visited the science ______ in London. We learned a lot.',
      piano: "I'm learning to play the ______. I practise every day.",
      guitar: 'My brother plays the ______ in a rock band.',
      pictures: 'My grandma likes to paint ______ of flowers.',
      dancing: "I love music. Let's go ______ on Friday night!",
    },
  },

  // Ćw. 7 — co powiesz?
  situations: [
    ['Pytasz koleżankę, co robi w wolnym czasie.', 'What do you do in your free time?', 'park'],
    ['Pytasz kolegę, jakie ma hobby.', 'What are your hobbies?', 'camera'],
    ['Chcesz powiedzieć, że interesujesz się sztuką.', "I'm interested in art.", 'gallery'],
    ['Chcesz wiedzieć, jakiej muzyki słucha twój znajomy.', 'What kind of music do you like?', 'music'],
    ['Mówisz, że ćwiczysz na siłowni trzy razy w tygodniu.', 'I work out at the gym three times a week.', 'gym'],
    ['Pytasz koleżankę, jak często chodzi na zakupy.', 'How often do you go shopping?', 'shopping'],
    ['Przyznajesz, że nie śpiewasz zbyt dobrze.', "I'm not very good at singing.", 'singing'],
    ['Musisz odrzucić zaproszenie, bo nie masz czasu.', "I'd love to, but I'm busy.", 'chat'],
  ],

  // Ćw. 8 — dialog (luki: pojedyncze słowa)
  gapFill: {
    title: 'Plans for the weekend',
    bank: ['later', 'want', 'sounds', 'should', 'free', 'love', 'plans', 'next'],
    lines: [
      ['Anna', 'Hi, Tom! Are you doing anything {later}?'],
      ['Tom', 'No, not really. Why?'],
      ['Anna', 'Do you {want} to go to the cinema? There’s a new comedy on.'],
      ['Tom', 'That {sounds} great! What time {should} we meet?'],
      ['Anna', 'At seven, in front of the cinema. And are you {free} on Saturday? I’m going to a concert.'],
      ['Tom', "I'd {love} to, but I'm busy. I already have {plans}. Maybe {next} time."],
      ['Anna', 'No problem. See you at seven!'],
    ],
  },

  // Ćw. 9 — pytania
  aboutYou: [
    ['What do you do for fun?', 'For fun I …'],
    ['What are you good at?', "I'm good at …"],
    ['Do you enjoy learning English?', 'Yes, I do. / No, I don’t.'],
    ['How often do you go shopping?', 'I go shopping …'],
    ['What are you doing after work?', 'After work I’m …'],
    ['What are you interested in?', "I'm interested in …"],
  ],

  // Ćw. 10 — mapa myśli: [liczba linii, kategoria, ikona]
  game: {
    cards: [
      [3, 'sport', 'football'],
      [3, 'relaks w domu', 'sofa'],
      [2, 'wyjście na miasto', 'cinema'],
      [2, 'zainteresowania', 'painting'],
      [2, 'moja muzyka', 'music'],
      [2, 'play …', 'guitar'],
      [1, 'go …', 'cycling'],
      [1, 'do …', 'yoga'],
    ],
    examples: [
      'play volleyball, ride a horse, go camping', 'surf the internet, watch TV, chill out', 'go to the cinema, eat out',
      'take photos, bake cakes', 'rock, pop', 'play the piano, play video games', 'go hiking', 'do aerobics',
    ],
  },
};
