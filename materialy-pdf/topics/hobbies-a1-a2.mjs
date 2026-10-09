// Temat: Hobbies · poziom A1–A2.
// Słowo: [en, pl, ikona]. Czasownik / przymiotnik / zwrot: [en, pl].
// Zasada jak w „Food”: ćwiczenia korzystają tylko ze słownictwa ze stron 2–3, a każde ćwiczenie,
// w którym kursant sam wpisuje słowa, ma własną pulę wyrazów.
// Tłumaczenia sprawdzone w diki.pl / PONS; zdania wzorowane na przykładach Cambridge / Oxford.
export default {
  slug: 'hobbies-a1-a2',
  title: 'Hobbies',
  subtitle: 'Ćwiczenia leksykalne',
  level: 'A1–A2',
  footer: 'Hobbies · A1–A2',
  coverSkip: [6],
  coverIcons: ['football', 'guitar', 'camera', 'reading', 'cycling', 'headphones', 'painting', 'tennis', 'tent', 'videogames', 'music', 'baking', 'theatre', 'skiing', 'boardgames'],

  vocabLayout: {
    page1: [['sports', 'home'], ['creative', 'out']],
    page2: [['things'], ['verbs']],
    wide: [['adjectives', 3]],
  },

  groups: {
    sports: {
      level: 'A1', en: 'Sports', pl: 'sport',
      words: [
        ['football', 'piłka nożna', 'football'], ['tennis', 'tenis', 'tennis'], ['basketball', 'koszykówka', 'basketball'],
        ['swimming', 'pływanie', 'swimming'], ['running', 'bieganie', 'running'], ['cycling', 'jazda na rowerze', 'cycling'],
        ['yoga', 'joga', 'yoga'], ['skiing', 'jazda na nartach', 'skiing'], ['hiking', 'piesze wędrówki', 'hiking'],
        ['fishing', 'wędkarstwo', 'fishing'],
      ],
    },
    creative: {
      level: 'A1', en: 'Creative hobbies', pl: 'hobby twórcze',
      words: [
        ['drawing', 'rysowanie', 'drawing'], ['painting', 'malowanie', 'painting'], ['photography', 'fotografia', 'photography'],
        ['dancing', 'taniec', 'dancing'], ['singing', 'śpiewanie', 'singing'], ['cooking', 'gotowanie', 'cooking'],
        ['baking', 'pieczenie', 'baking'], ['gardening', 'ogrodnictwo', 'gardening'], ['writing', 'pisanie', 'writing'],
        ['sewing', 'szycie', 'sewing'],
      ],
    },
    home: {
      level: 'A1', en: 'At home', pl: 'w domu',
      words: [
        ['reading', 'czytanie', 'reading'], ['board games', 'gry planszowe', 'boardgames'], ['video games', 'gry wideo', 'videogames'],
        ['watching films', 'oglądanie filmów', 'films'], ['listening to music', 'słuchanie muzyki', 'music'],
        ['playing the guitar', 'gra na gitarze', 'guitar'], ['playing the piano', 'gra na pianinie', 'piano'],
        ['knitting', 'robienie na drutach', 'knitting'],
      ],
    },
    out: {
      level: 'A1', en: 'Going out', pl: 'wyjścia',
      words: [
        ['cinema', 'kino', 'cinema'], ['concert', 'koncert', 'concert'], ['museum', 'muzeum', 'museum'], ['park', 'park', 'park'],
        ['gym', 'siłownia', 'gym'], ['swimming pool', 'basen', 'pool'], ['theatre', 'teatr', 'theatre'], ['library', 'biblioteka', 'library'],
      ],
    },
    things: {
      level: 'A2', en: 'Useful things', pl: 'przydatne rzeczy',
      words: [
        ['camera', 'aparat fotograficzny', 'camera'], ['headphones', 'słuchawki', 'headphones'], ['racket', 'rakieta', 'racket'],
        ['backpack', 'plecak', 'backpack'], ['ticket', 'bilet', 'ticket'], ['map', 'mapa', 'map'], ['tent', 'namiot', 'tent'],
        ['paintbrush', 'pędzel', 'paintbrush'],
      ],
    },
    verbs: {
      level: 'A2', en: 'Useful verbs', pl: 'przydatne czasowniki',
      words: [
        ['play', 'grać'], ['go', 'iść, chodzić'], ['do', 'robić, uprawiać'], ['collect', 'zbierać, kolekcjonować'],
        ['relax', 'odpoczywać'], ['join', 'dołączyć, zapisać się'], ['practise', 'ćwiczyć'], ['try', 'spróbować'],
      ],
    },
    adjectives: {
      level: 'A2', en: 'Describing hobbies', pl: 'jakie to jest?',
      words: [['fun', 'fajny, przyjemny'], ['boring', 'nudny'], ['exciting', 'ekscytujący'], ['relaxing', 'relaksujący'], ['interesting', 'ciekawy'], ['difficult', 'trudny']],
    },
  },

  phrases: [
    ['What do you do in your free time?', 'Co robisz w wolnym czasie?'],
    ['What are your hobbies?', 'Jakie masz hobby?'],
    ['I love reading.', 'Uwielbiam czytać.'],
    ["I'm into photography.", 'Interesuję się fotografią.'],
    ["I'm not very good at drawing.", 'Nie jestem dobry / dobra w rysowaniu.'],
    ['How often do you play tennis?', 'Jak często grasz w tenisa?'],
    ['I go swimming twice a week.', 'Pływam dwa razy w tygodniu.'],
    ["I'm a member of a book club.", 'Należę do klubu książki.'],
    ['Do you want to come with me?', 'Chcesz pójść ze mną?'],
    ['That sounds fun!', 'Brzmi fajnie!'],
    ["I'm sorry, I can't. I'm busy.", 'Przykro mi, nie mogę. Jestem zajęty / zajęta.'],
    ["I don't have much free time.", 'Nie mam dużo wolnego czasu.'],
    ["Why don't we go to the cinema?", 'Może pójdziemy do kina?'],
    ['What time shall we meet?', 'O której się spotkamy?'],
    ["Let's meet at the weekend.", 'Spotkajmy się w weekend.'],
    ['See you on Saturday!', 'Do zobaczenia w sobotę!'],
  ],

  // Ćw. 1 — podpisz obrazki
  labelPictures: ['racket', 'headphones', 'camera', 'backpack', 'ticket', 'map', 'tent', 'paintbrush', 'gym', 'pool'],

  // Ćw. 2 — co nie pasuje? (rozpoznawanie)
  oddOneOut: [
    { icons: ['football', 'piano', 'basketball', 'tennis'], answer: 1, why: 'piano – to nie sport' },
    { icons: ['painting', 'drawing', 'sewing', 'cycling'], answer: 3, why: 'cycling – to nie hobby twórcze' },
    { icons: ['yoga', 'cinema', 'theatre', 'museum'], answer: 0, why: 'yoga – to nie miejsce' },
    { icons: ['boardgames', 'videogames', 'skiing', 'reading'], answer: 2, why: 'skiing – tego nie robimy w domu' },
  ],

  // Ćw. 3 — brakujące litery
  missingLetters: ['cooking', 'baking', 'dancing', 'writing', 'sewing', 'cinema', 'drawing', 'museum'],

  // Ćw. 4 — play / go / do
  sortColumns: {
    instruction: 'Wpisz wyrazy z ramki do właściwej kolumny: play, go albo do.',
    rows: [6, 5],
    columns: [
      { head: 'play', words: ['football', 'tennis', 'basketball', 'video games'] },
      { head: 'go', words: ['swimming', 'cycling', 'hiking', 'fishing'] },
      { head: 'do', words: ['yoga', 'gardening', 'sport'] },
    ],
  },

  // Ćw. 5 — wykreślanka (słowo albo [słowo, ikona])
  wordSearch: {
    size: 10, seed: 21,
    words: ['painting', ['piano', 'piano'], ['guitar', 'guitar'], ['music', 'music'], ['films', 'films'], 'singing', 'theatre', 'park', 'reading'],
  },

  // Ćw. 6 — krzyżówka: zdania z luką
  crossword: {
    seed: 7,
    clues: {
      relax: 'After work, I like to ______ in the garden.',
      join: 'I felt unfit, so I decided to ______ a gym.',
      collect: 'My grandad likes to ______ old stamps.',
      practise: 'If you want to play the guitar well, you need to ______ every day.',
      try: "I'd like to ______ yoga one day.",
      concert: "We're going to a rock ______ on Friday night.",
      library: 'I often borrow books from the ______.',
      photography: 'Her hobby is ______. She takes beautiful pictures.',
      interesting: "This book is really ______. I can't stop reading it.",
      difficult: 'Skiing is ______ at first, but then it gets easier.',
    },
  },

  // Ćw. 7 — co powiesz?
  situations: [
    ['Pytasz nową koleżankę, co robi w wolnym czasie.', 'What do you do in your free time?', 'park'],
    ['Mówisz, że uwielbiasz czytać.', 'I love reading.', 'reading'],
    ['Mówisz, że interesujesz się fotografią.', "I'm into photography.", 'photography'],
    ['Przyznajesz, że słabo rysujesz.', "I'm not very good at drawing.", 'drawing'],
    ['Pytasz kolegę, jak często gra w tenisa.', 'How often do you play tennis?', 'tennis'],
    ['Zapraszasz kogoś do kina.', 'Do you want to come with me?', 'cinema'],
    ['Pomysł koleżanki bardzo ci się podoba.', 'That sounds fun!', 'concert'],
    ['Odmawiasz, bo nie masz czasu.', "I'm sorry, I can't. I'm busy.", 'ticket'],
  ],

  // Ćw. 8 — dialog
  gapFill: {
    title: 'Plans for the weekend',
    bank: ['free time', "Why don't we", 'relaxing', 'fun', 'What time shall we', 'See you'],
    lines: [
      ['Anna', 'Hi, Tom! What are you doing on Saturday?'],
      ['Tom', "Nothing special. I don't have much {free time} during the week, so I just want to rest."],
      ['Anna', '{Why don\'t we} go to the swimming pool? Swimming is really {relaxing}.'],
      ['Tom', "Good idea! But I'm not very good at swimming."],
      ['Anna', "Don't worry, it's {fun}!"],
      ['Tom', 'OK. {What time shall we} meet?'],
      ['Anna', "At ten o'clock, in front of the pool."],
      ['Tom', 'Great. {See you} on Saturday!'],
    ],
  },

  // Ćw. 9 — pytania
  aboutYou: [
    ['What do you do in your free time?', 'In my free time I …'],
    ['How often do you do sport?', 'I … twice a week.'],
    ['What are you good at?', "I'm good at …"],
    ['Do you prefer reading or watching films?', 'I prefer …'],
    ['Which hobby do you think is boring?', 'I think … is boring.'],
    ['What would you like to try?', "I'd like to try …"],
  ],

  // Ćw. 10 — mapa myśli: [liczba linii, kategoria, ikona]
  game: {
    cards: [
      [3, 'sport', 'football'],
      [3, 'w domu', 'videogames'],
      [2, 'wyjścia', 'cinema'],
      [2, 'hobby twórcze', 'painting'],
      [2, 'przydatne rzeczy', 'backpack'],
      [2, 'play …', 'guitar'],
      [1, 'go …', 'cycling'],
      [1, 'do …', 'yoga'],
    ],
    examples: [
      'football, tennis, yoga', 'reading, board games, knitting', 'cinema, museum', 'drawing, singing',
      'camera, map', 'play the piano, play tennis', 'go running', 'do yoga',
    ],
  },
};
