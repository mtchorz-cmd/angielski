// Temat: Free time · poziom A1–A2.
// Nacisk na popularne kolokacje (w bezokoliczniku), częstotliwość i praktyczne zwroty.
// Kolokacja: [en, pl, ikona]. Słowo / zwrot bez ilustracji: [en, pl].
// Zasada jak w „Food”: ćwiczenia korzystają tylko ze słownictwa ze stron 2–3, a każde ćwiczenie,
// w którym kursant sam wpisuje słowa, ma własną pulę wyrazów.
export default {
  slug: 'free-time-a1-a2',
  title: 'Free time',
  subtitle: 'Ćwiczenia leksykalne',
  level: 'A1–A2',
  footer: 'Free time · A1–A2',
  coverSkip: [4, 6, 14],
  coverIcons: ['football', 'guitar', 'camera', 'reading', 'cycling', 'music', 'painting', 'tennis', 'videogames', 'cinema', 'baking', 'theatre', 'skiing', 'party', 'boardgames'],

  vocabLayout: {
    page1: [['sport', 'home'], ['hobbies', 'out']],
    page2: [],
    wide: [['words', 4], ['frequency', 4], ['adjectives', 3]],
  },

  groups: {
    sport: {
      level: 'A1', en: 'Physical activity and sport', pl: 'aktywność fizyczna i sport',
      words: [
        ['play football', 'grać w piłkę nożną', 'football'], ['play tennis', 'grać w tenisa', 'tennis'],
        ['play basketball', 'grać w koszykówkę', 'basketball'], ['go swimming', 'pływać', 'swimming'],
        ['go running', 'biegać', 'running'], ['go cycling', 'jeździć na rowerze', 'cycling'],
        ['do yoga', 'ćwiczyć jogę', 'yoga'], ['go skiing', 'jeździć na nartach', 'skiing'],
        ['go hiking', 'chodzić na piesze wędrówki', 'hiking'], ['go to the gym', 'chodzić na siłownię', 'gym'],
        ['go for a walk', 'iść na spacer', 'park'],
      ],
    },
    hobbies: {
      level: 'A1', en: 'My hobbies', pl: 'moje zamiłowania',
      words: [
        ['draw pictures', 'rysować obrazki', 'drawing'], ['paint pictures', 'malować obrazy', 'painting'],
        ['take photos', 'robić zdjęcia', 'camera'], ['go dancing', 'chodzić na tańce', 'dancing'],
        ['sing songs', 'śpiewać piosenki', 'singing'], ['cook meals', 'gotować posiłki', 'cooking'],
        ['bake cakes', 'piec ciasta', 'baking'], ['do the gardening', 'pracować w ogrodzie', 'gardening'],
        ['play the guitar', 'grać na gitarze', 'guitar'], ['play the piano', 'grać na pianinie', 'piano'],
      ],
    },
    home: {
      level: 'A1', en: 'At home', pl: 'w domu',
      words: [
        ['read books', 'czytać książki', 'reading'], ['watch TV', 'oglądać telewizję', 'tv'],
        ['watch films', 'oglądać filmy', 'films'], ['listen to music', 'słuchać muzyki', 'music'],
        ['play video games', 'grać w gry wideo', 'videogames'], ['play board games', 'grać w gry planszowe', 'boardgames'],
        ['go online', 'wchodzić do internetu', 'laptop'], ['chat with friends', 'rozmawiać ze znajomymi', 'chat'],
        ['chill out', 'odpoczywać, relaksować się', 'sofa'],
      ],
    },
    out: {
      level: 'A1', en: 'Going out', pl: 'wyjścia',
      words: [
        ['go to the cinema', 'chodzić do kina', 'cinema'], ['go to a concert', 'iść na koncert', 'concert'],
        ['go to the theatre', 'chodzić do teatru', 'theatre'], ['visit a museum', 'zwiedzać muzeum', 'museum'],
        ['meet friends', 'spotykać się ze znajomymi', 'friends'], ['go shopping', 'chodzić na zakupy', 'shopping'],
        ['eat out', 'jeść na mieście', 'dinner'], ['go to a party', 'iść na imprezę', 'party'],
        ['go on a trip', 'jechać na wycieczkę', 'suitcase'],
      ],
    },
    words: {
      level: 'A1', en: 'Free-time words', pl: 'słowa o czasie wolnym',
      words: [
        ['free time', 'czas wolny'], ['weekend', 'weekend'], ['hobby', 'hobby'], ['holiday', 'wakacje, urlop'],
        ['club', 'klub'], ['team', 'drużyna'], ['match', 'mecz'], ['ticket', 'bilet'],
      ],
    },
    frequency: {
      level: 'A1', en: 'How often?', pl: 'jak często?',
      words: [
        ['always', 'zawsze'], ['usually', 'zwykle'], ['often', 'często'], ['sometimes', 'czasami'],
        ['never', 'nigdy'], ['every day', 'codziennie'], ['once a week', 'raz w tygodniu'], ['twice a week', 'dwa razy w tygodniu'],
      ],
    },
    adjectives: {
      level: 'A2', en: 'Describing free time', pl: 'jakie to jest?',
      words: [['fun', 'fajny, przyjemny'], ['boring', 'nudny'], ['exciting', 'ekscytujący'], ['relaxing', 'relaksujący'], ['interesting', 'ciekawy'], ['tiring', 'męczący']],
    },
  },

  phrases: [
    ['What do you do in your free time?', 'Co robisz w wolnym czasie?'],
    ['What do you like doing at the weekend?', 'Co lubisz robić w weekendy?'],
    ['I really enjoy reading.', 'Bardzo lubię czytać.'],
    ["I'm into photography.", 'Interesuję się fotografią.'],
    ["I'm not very good at drawing.", 'Nie jestem dobry / dobra w rysowaniu.'],
    ['How often do you go to the gym?', 'Jak często chodzisz na siłownię?'],
    ['I go swimming twice a week.', 'Pływam dwa razy w tygodniu.'],
    ['Are you free on Saturday?', 'Masz czas w sobotę?'],
    ['Do you want to come with me?', 'Chcesz pójść ze mną?'],
    ["Why don't we go to the cinema?", 'Może pójdziemy do kina?'],
    ['That sounds fun!', 'Brzmi fajnie!'],
    ["I'm sorry, I can't. I'm busy.", 'Przykro mi, nie mogę. Jestem zajęty / zajęta.'],
    ['Maybe next time.', 'Może następnym razem.'],
    ['What time shall we meet?', 'O której się spotkamy?'],
    ["Let's meet at seven.", 'Spotkajmy się o siódmej.'],
    ['See you on Saturday!', 'Do zobaczenia w sobotę!'],
  ],

  // Ćw. 1 — podpisz obrazki (kolokacje)
  labelRows: [4, 3, 3],
  labelPictures: ['camera', 'shopping', 'sofa', 'party', 'suitcase', 'laptop', 'chat', 'tv', 'dinner', 'friends'],

  // Ćw. 2 — co nie pasuje? (rozpoznawanie)
  oddOneOut: [
    { icons: ['football', 'piano', 'basketball', 'tennis'], answer: 1, why: 'piano – to nie sport' },
    { icons: ['drawing', 'painting', 'camera', 'running'], answer: 3, why: 'running – to nie hobby artystyczne' },
    { icons: ['yoga', 'cinema', 'theatre', 'museum'], answer: 0, why: 'yoga – to nie miejsce' },
    { icons: ['boardgames', 'reading', 'skiing', 'videogames'], answer: 2, why: 'skiing – tego nie robimy w domu' },
  ],

  // Ćw. 3 — połącz czasowniki z wyrazami
  matchPairs: {
    instruction: 'Połącz czasowniki (1–8) z wyrazami (a–h).',
    pairs: [['read', 'books'], ['bake', 'cakes'], ['sing', 'songs'], ['listen', 'to music'], ['draw', 'pictures'], ['cook', 'meals'], ['watch', 'films'], ['go for', 'a walk']],
  },

  // Ćw. 4 — play / go / do
  sortColumns: {
    instruction: 'Wpisz wyrazy z ramki do właściwej kolumny: play, go albo do.',
    rows: [5, 5],
    columns: [
      { head: 'play', words: ['football', 'tennis', 'basketball', 'board games'] },
      { head: 'go', words: ['swimming', 'cycling', 'skiing', 'hiking'] },
      { head: 'do', words: ['yoga', 'the gardening'] },
    ],
  },

  // Ćw. 5 — wykreślanka ([słowo, ikona])
  wordSearch: {
    size: 10, seed: 21,
    words: [['cinema', 'cinema'], ['theatre', 'theatre'], ['museum', 'museum'], ['concert', 'concert'], ['piano', 'piano'], ['guitar', 'guitar'], ['dancing', 'dancing'], ['running', 'running'], ['games', 'videogames']],
  },

  // Ćw. 6 — krzyżówka: zdania z luką
  crossword: {
    seed: 7,
    clues: {
      gym: 'I decided to join a ______ because I was in bad shape.',
      weekend: "I don't work at the ______, so I have lots of free time.",
      hobby: 'My favourite ______ is taking photos.',
      club: "I'm a member of a book ______. We meet once a month.",
      team: 'My brother plays in a football ______.',
      match: 'Are you going to watch the football ______ on TV tonight?',
      ticket: "I'd like one ______ for the concert, please.",
      boring: "This film is so ______. I'm falling asleep!",
      exciting: 'The match was really ______ – we won in the last minute!',
      tiring: "Hiking in the mountains is fun, but it's very ______.",
    },
  },

  // Ćw. 7 — co powiesz?
  situations: [
    ['Pytasz koleżankę, co robi w wolnym czasie.', 'What do you do in your free time?', 'park'],
    ['Mówisz, że bardzo lubisz czytać.', 'I really enjoy reading.', 'reading'],
    ['Mówisz, że interesujesz się fotografią.', "I'm into photography.", 'camera'],
    ['Przyznajesz, że słabo rysujesz.', "I'm not very good at drawing.", 'drawing'],
    ['Pytasz kolegę, jak często chodzi na siłownię.', 'How often do you go to the gym?', 'gym'],
    ['Pytasz kolegę, czy ma czas w sobotę.', 'Are you free on Saturday?', 'calendar'],
    ['Pomysł koleżanki bardzo ci się podoba.', 'That sounds fun!', 'concert'],
    ['Odmawiasz, bo nie masz czasu.', "I'm sorry, I can't. I'm busy.", 'chat'],
  ],

  // Ćw. 8 — dialog
  gapFill: {
    title: 'Plans for the weekend',
    bank: ['usually', 'twice', 'Do you want to come', 'Maybe next time', "Why don't we", "Let's meet"],
    lines: [
      ['Anna', 'Hi, Tom! What do you like doing at the weekend?'],
      ['Tom', 'I {usually} go swimming. I go {twice} a week.'],
      ['Anna', "Cool! I'm going to a concert on Saturday. {Do you want to come} with me?"],
      ['Tom', "Sorry, I can't. I'm busy on Saturday. {Maybe next time}."],
      ['Anna', 'OK. {Why don\'t we} go to the cinema on Sunday, then?'],
      ['Tom', 'That sounds fun! What time shall we meet?'],
      ['Anna', "{Let's meet} at seven, in front of the cinema."],
      ['Tom', 'Great. See you on Sunday!'],
    ],
  },

  // Ćw. 9 — pytania
  aboutYou: [
    ['What do you do in your free time?', 'In my free time I …'],
    ['What do you usually do at the weekend?', 'At the weekend I usually …'],
    ['How often do you do sport?', 'I … once / twice a week.'],
    ['What are you good at?', "I'm good at …"],
    ['Which free-time activity do you think is boring?', 'I think … is boring.'],
    ['What would you like to try?', "I'd like to try …"],
  ],

  // Ćw. 10 — mapa myśli: [liczba linii, kategoria, ikona]
  game: {
    cards: [
      [3, 'sport', 'football'],
      [3, 'w domu', 'sofa'],
      [2, 'wyjścia', 'cinema'],
      [2, 'moje zamiłowania', 'painting'],
      [2, 'jak często?', 'calendar'],
      [2, 'play …', 'guitar'],
      [1, 'go …', 'cycling'],
      [1, 'do …', 'yoga'],
    ],
    examples: [
      'go swimming, play tennis, go running', 'read books, watch TV, chill out', 'go to the cinema, eat out',
      'take photos, bake cakes', 'sometimes, twice a week', 'play the piano, play video games', 'go hiking', 'do yoga',
    ],
  },
};
