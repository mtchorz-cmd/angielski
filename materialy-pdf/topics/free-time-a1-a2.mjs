// Temat: Free time · poziom A1–A2.
// Nacisk na popularne kolokacje (w bezokoliczniku) i praktyczne zwroty.
// Kolokacja: [en, pl, ikona]. Zwrot: [en, pl].
// Przymiotniki opisujące czas wolny nie mają osobnej sekcji – pojawiają się w zdaniach krzyżówki.
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
        ['play basketball', 'grać w koszykówkę', 'basketball'], ['go swimming', 'pójść popływać', 'swimming'],
        ['go jogging', 'biegać, uprawiać jogging', 'running'], ['ride a bike', 'jeździć na rowerze', 'cycling'],
        ['do yoga', 'uprawiać jogę', 'yoga'], ['do sports', 'uprawiać sport', 'medal'],
        ['go skiing', 'pojechać na narty', 'skiing'], ['go hiking', 'pójść na pieszą wycieczkę', 'hiking'],
        ['go fishing', 'pójść na ryby', 'fishing'], ['go to the gym', 'chodzić na siłownię', 'gym'],
        ['go for a walk', 'iść na spacer', 'park'],
      ],
    },
    interests: {
      level: 'A1', en: 'My interests', pl: 'moje zainteresowania',
      words: [
        ['paint pictures', 'malować obrazy', 'painting'], ['take photos', 'robić zdjęcia', 'camera'],
        ['go dancing', 'chodzić na tańce', 'dancing'], ['sing songs', 'śpiewać piosenki', 'singing'],
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
    ['What are you good at?', 'W czym jesteś dobry / dobra?'],
    ["I'm interested in politics.", 'Interesuję się polityką.'],
    ['What kind of music do you like?', 'Jaką muzykę lubisz?'],
    ['Do you enjoy reading books?', 'Lubisz czytać książki?'],
    ["I'm not very good at singing.", 'Nie jestem dobry / dobra w śpiewaniu.'],
    ['How often do you go to the gym?', 'Jak często chodzisz na siłownię?'],
    ['I go swimming twice a week.', 'Pływam dwa razy w tygodniu.'],
    ['Are you free on Saturday?', 'Masz czas w sobotę?'],
    ['Do you want to come with me?', 'Chcesz pójść ze mną?'],
    ["Why don't we go to the cinema?", 'Może pójdziemy do kina?'],
    ["I'm sorry, I can't. I'm busy.", 'Przykro mi, nie mogę. Jestem zajęty / zajęta.'],
    ['Maybe next time.', 'Może następnym razem.'],
    ['What time shall we meet?', 'O której się spotkamy?'],
    ["Let's meet at seven.", 'Spotkajmy się o siódmej.'],
    ['See you on Saturday!', 'Do zobaczenia w sobotę!'],
  ],

  // Ćw. 1 — podpisz obrazki (kolokacje)
  labelRows: [4, 3, 3],
  labelPictures: ['camera', 'shopping', 'sofa', 'party', 'crossword', 'tv', 'dinner', 'friends', 'fishing', 'gallery'],

  // Ćw. 2 — co nie pasuje? (rozpoznawanie)
  oddOneOut: [
    { icons: ['football', 'piano', 'basketball', 'tennis'], answer: 1, why: 'piano – to nie sport' },
    { icons: ['painting', 'camera', 'singing', 'running'], answer: 3, why: 'running – to sport, nie zainteresowanie artystyczne' },
    { icons: ['yoga', 'cinema', 'theatre', 'museum'], answer: 0, why: 'yoga – to nie miejsce' },
    { icons: ['boardgames', 'reading', 'skiing', 'videogames'], answer: 2, why: 'skiing – tego nie robimy w domu' },
  ],

  // Ćw. 3 — połącz czasowniki z wyrazami
  matchPairs: {
    instruction: 'Połącz czasowniki (1–8) z wyrazami (a–h).',
    pairs: [['read', 'books'], ['bake', 'cakes'], ['sing', 'songs'], ['listen', 'to music'], ['cook', 'meals'], ['watch', 'films'], ['ride', 'a bike'], ['go for', 'a walk']],
  },

  // Ćw. 4 — play / go / do
  sortColumns: {
    instruction: 'Wpisz wyrazy z ramki do właściwej kolumny: play, go albo do.',
    rows: [6, 5],
    columns: [
      { head: 'play', words: ['football', 'tennis', 'basketball', 'board games'] },
      { head: 'go', words: ['swimming', 'jogging', 'skiing', 'hiking'] },
      { head: 'do', words: ['yoga', 'sports', 'the gardening'] },
    ],
  },

  // Ćw. 5 — wykreślanka ([słowo, ikona])
  wordSearch: {
    size: 10, seed: 21,
    words: [['cinema', 'cinema'], ['theatre', 'theatre'], ['museum', 'museum'], ['concert', 'concert'], ['piano', 'piano'], ['guitar', 'guitar'], ['dancing', 'dancing'], ['games', 'videogames']],
  },

  // Ćw. 6 — krzyżówka: zdania z luką (m.in. przymiotniki opisujące czas wolny)
  crossword: {
    seed: 7,
    clues: {
      gym: 'I decided to join a ______ because I was in bad shape.',
      boring: "This film is so ______. I'm falling asleep!",
      exciting: 'The match was really ______ – we won in the last minute!',
      tiring: "Hiking in the mountains is fun, but it's very ______.",
      relaxing: "I love lying on the sofa with a good book. It's so ______.",
      interesting: 'This museum is really ______. I learned a lot.',
      fun: 'Come to the party with us! It will be ______.',
      politics: "My dad watches the news every day. He's interested in ______.",
      music: 'What kind of ______ do you like? – Rock and pop.',
    },
  },

  // Ćw. 7 — co powiesz?
  situations: [
    ['Pytasz koleżankę, co robi w wolnym czasie.', 'What do you do in your free time?', 'park'],
    ['Pytasz kolegę, jakie ma hobby.', 'What are your hobbies?', 'camera'],
    ['Mówisz, że interesujesz się polityką.', "I'm interested in politics.", 'tv'],
    ['Pytasz, jakiej muzyki ktoś słucha.', 'What kind of music do you like?', 'music'],
    ['Pytasz kolegę, jak często chodzi na siłownię.', 'How often do you go to the gym?', 'gym'],
    ['Pytasz koleżankę, czy ma czas w sobotę.', 'Are you free on Saturday?', 'calendar'],
    ['Pytasz kolegę, w czym jest dobry.', 'What are you good at?', 'medal'],
    ['Odmawiasz, bo nie masz czasu.', "I'm sorry, I can't. I'm busy.", 'chat'],
  ],

  // Ćw. 8 — dialog
  gapFill: {
    title: 'Plans for the weekend',
    bank: ['for fun', 'Do you want to come', 'Maybe next time', "Why don't we", 'What time shall we', "Let's meet"],
    lines: [
      ['Anna', 'Hi, Tom! What do you do {for fun}?'],
      ['Tom', 'I love sport. I go to the gym every morning and I play tennis at the weekend.'],
      ['Anna', "Cool! I'm going to a concert on Saturday. {Do you want to come} with me?"],
      ['Tom', "Sorry, I can't. I'm busy on Saturday. {Maybe next time}."],
      ['Anna', 'OK. {Why don\'t we} go to the cinema on Sunday, then?'],
      ['Tom', 'Great idea! {What time shall we} meet?'],
      ['Anna', "{Let's meet} at seven, in front of the cinema."],
      ['Tom', 'Perfect. See you on Sunday!'],
    ],
  },

  // Ćw. 9 — pytania
  aboutYou: [
    ['What do you do in your free time?', 'In my free time I …'],
    ['What are your hobbies?', 'My hobbies are …'],
    ['What are you good at?', "I'm good at …"],
    ['What kind of music do you like?', 'I like …'],
    ['Do you enjoy reading books?', 'Yes, I do. / No, I don’t.'],
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
      'go swimming, play tennis, go jogging', 'read books, watch TV, chill out', 'go to the cinema, eat out',
      'take photos, bake cakes', 'rock, pop', 'play the piano, play video games', 'go hiking', 'do yoga',
    ],
  },
};
