// Temat: Holidays and celebrations · poziom A1–A2.
// Kolokacja: [en, pl, ikona]. Zwrot: [en, pl].
// Podział: osobno Boże Narodzenie, Wielkanoc, Nowy Rok, inne święta i uroczystości rodzinne.
// Pokrycie słownictwa w ćwiczeniach (ćw. 1, 4, 6, 8 — rozłączne pule wpisywanych wyrazów):
//  ćw. 1 – choinka, prezenty, pisanki, skarpeta, świeczki na torcie, ślub, zaproszenie, przyjęcie, walentynki, Dzień Dziecka
//  ćw. 2 – daty świąt, ćw. 3 – kolędy, kartki, opłatek, postanowienie, szampan, fajerwerki, kościół, pocałunek o północy
//  ćw. 4 – Christmas / Easter / New Year, ćw. 6 – celebrate, guests, anniversary, reception, wish, Easter, Christmas, Santa, Communion
//  ćw. 7 – życzenia, ćw. 8 – zaproszenie na urodziny, ćw. 5 – utrwalenie rzeczowników
export default {
  slug: 'holidays-a1-a2',
  title: 'Holidays and celebrations',
  subtitle: 'Ćwiczenia leksykalne',
  level: 'A1–A2',
  footer: 'Holidays and celebrations · A1–A2',
  mindMapTitle: 'Holidays',
  stackTranslations: true,
  coverSkip: [4, 6, 14],
  coverIcons: ['christmastree', 'present', 'easteregg', 'bunny', 'fireworks', 'cake', 'heart', 'rings', 'star', 'wreath', 'champagne', 'xmascard', 'basket', 'santa', 'popper'],

  vocabLayout: {
    page1: [['christmas'], ['xmasdeco', 'newyear']],
    page2: [['easter'], ['other']],
    wide3: [['family', 2]],
  },

  groups: {
    christmas: {
      level: 'A1', en: 'Christmas', pl: 'Boże Narodzenie',
      words: [
        ['Christmas Eve', 'Wigilia', 'star'], ['Christmas Day', 'pierwszy dzień świąt Bożego Narodzenia', 'bell'],
        ['Boxing Day', 'drugi dzień świąt Bożego Narodzenia', 'openbox'], ['Christmas Eve dinner', 'kolacja wigilijna', 'dinner'],
        ['Midnight Mass', 'pasterka', 'mass'], ['share Christmas wafers', 'dzielić się opłatkiem', 'wafer'],
        ['sing carols', 'śpiewać kolędy', 'singing'], ['send Christmas cards', 'wysyłać kartki świąteczne', 'xmascard'],
        ['wrap gifts', 'pakować prezenty', 'wrap'], ['give a gift', 'dać prezent', 'present'],
        ['Santa Claus', 'Święty Mikołaj', 'santa'],
      ],
    },
    xmasdeco: {
      level: 'A1', en: 'Christmas decorations and treats', pl: 'ozdoby i smakołyki świąteczne',
      words: [
        ['decorate the Christmas tree', 'ubierać choinkę', 'christmastree'], ['Christmas decorations', 'ozdoby świąteczne', 'decorations'],
        ['Christmas ball', 'bombka na choinkę', 'bauble'], ['fairy lights', 'lampki choinkowe', 'lights'],
        ['wreath', 'wieniec', 'wreath'], ['mistletoe', 'jemioła', 'mistletoe'],
        ['Christmas stocking', 'skarpeta na prezenty', 'stocking'], ['gingerbread cookies', 'pierniczki', 'gingerbread'],
      ],
    },
    easter: {
      level: 'A1', en: 'Easter', pl: 'Wielkanoc',
      words: [
        ['Ash Wednesday', 'Środa Popielcowa, Popielec', 'ashes'], ['Lent', 'Wielki Post', 'fish'],
        ['Holy Week', 'Wielki Tydzień', 'palm'], ['Good Friday', 'Wielki Piątek', 'cross'],
        ['Easter Sunday', 'Niedziela Wielkanocna', 'chick'], ['Easter Monday', 'Poniedziałek Wielkanocny (lany poniedziałek)', 'splash'],
        ['paint Easter eggs', 'malować pisanki', 'easteregg'], ['Easter basket', 'koszyczek wielkanocny', 'basket'],
        ['Easter Bunny', 'zajączek wielkanocny', 'bunny'], ['Easter egg hunt', 'szukanie jajek wielkanocnych', 'egghunt'],
        ['chocolate eggs', 'czekoladowe jajka', 'chocegg'], ['go to church', 'iść do kościoła', 'church'],
      ],
    },
    newyear: {
      level: 'A1', en: 'New Year', pl: 'Nowy Rok',
      words: [
        ["New Year's Eve", 'sylwester', 'clock'], ["New Year's Day", 'Nowy Rok', 'sunrise'],
        ['have a house party', 'urządzić domówkę', 'houseparty'], ['watch the fireworks', 'oglądać fajerwerki', 'fireworks'],
        ['pop the champagne', 'otworzyć szampana', 'champagne'], ['make a toast', 'wznieść toast', 'toast'],
        ['kiss at midnight', 'całować się o północy', 'lips'], ["make a New Year's resolution", 'podjąć postanowienie noworoczne', 'resolution'],
      ],
    },
    other: {
      // w kolejności kalendarzowej
      level: 'A1', en: 'Other holidays', pl: 'inne święta',
      words: [
        ['bank holiday', 'dzień ustawowo wolny od pracy', 'calendar'], ["Valentine's Day", 'walentynki', 'heart'],
        ["Women's Day", 'Dzień Kobiet', 'tulip'], ["April Fool's Day", 'prima aprilis', 'jester'],
        ['Labour Day', 'Święto Pracy', 'tools'], ["Mother's Day / Father's Day", 'Dzień Matki / Ojca', 'mugheart'],
        ["Children's Day", 'Dzień Dziecka', 'teddy'], ['Corpus Christi', 'Boże Ciało', 'banner'],
        ["All Saints' Day", 'Wszystkich Świętych', 'candle'], ['Independence Day', 'Święto Niepodległości', 'flag'],
      ],
    },
    family: {
      level: 'A2', en: 'Family celebrations', pl: 'uroczystości rodzinne',
      words: [
        ['have a birthday party', 'urządzić przyjęcie urodzinowe', 'party'], ['blow out the candles', 'zdmuchnąć świeczki', 'cake'],
        ['name day', 'imieniny', 'bouquet'], ['christening / baptism', 'chrzest', 'dove'],
        ['Holy Communion', 'Komunia Święta', 'chalice'], ['wedding', 'ślub', 'rings'],
        ['wedding reception', 'przyjęcie weselne', 'weddingcake'], ['wedding anniversary', 'rocznica ślubu', 'anniversary'],
        ['family reunion', 'zjazd rodzinny', 'family'], ['housewarming party', 'parapetówka', 'housewarming'],
        ['invite guests', 'zapraszać gości', 'friends'], ['send an invitation', 'wysłać zaproszenie', 'envelope'],
        ['celebrate', 'świętować', 'popper'],
      ],
    },
  },

  phrases: [
    ['Merry Christmas!', 'Wesołych Świąt!'],
    ['Happy Easter!', 'Wesołych Świąt Wielkanocnych!'],
    ['Happy New Year!', 'Szczęśliwego Nowego Roku!'],
    ['Happy birthday!', 'Wszystkiego najlepszego z okazji urodzin!'],
    ['Congratulations!', 'Gratulacje!'],
    ['All the best!', 'Wszystkiego najlepszego!'],
    ['Have a great time!', 'Baw się dobrze!'],
    ['Cheers!', 'Na zdrowie!'],
    ['Same to you!', 'Nawzajem! / Wzajemnie!'],
    ['What are you doing for Christmas?', 'Co robisz w święta?'],
    ['Where are you spending Christmas this year?', 'Gdzie spędzasz w tym roku święta?'],
    ['Do you have any traditions?', 'Czy macie jakieś tradycje?'],
    ['Thank you for inviting me.', 'Dziękuję za zaproszenie.'],
    ['Close your eyes and make a wish.', 'Zamknij oczy i pomyśl życzenie.'],
  ],

  // Ćw. 1 — podpisz obrazki (kolokacje)
  labelRows: [4, 3, 3],
  labelBankWide: true,
  labelPictures: ['christmastree', 'wrap', 'easteregg', 'stocking', 'cake', 'rings', 'envelope', 'party', 'heart', 'teddy'],

  // Ćw. 2 — kiedy obchodzimy te święta? (łączenie z datami)
  matchDates: {
    instruction: 'Kiedy obchodzimy te święta? Połącz je z datami (a–h).',
    pairs: [
      ['Christmas Eve', '24 December'], ['Boxing Day', '26 December'], ["Valentine's Day", '14 February'],
      ["Women's Day", '8 March'], ["April Fool's Day", '1 April'], ["Children's Day", '1 June'],
      ["All Saints' Day", '1 November'], ['Independence Day (in Poland)', '11 November'],
    ],
  },

  // Ćw. 3 — połącz czasowniki z wyrazami
  matchPairs: {
    instruction: 'Połącz czasowniki (1–8) z wyrazami (a–h).',
    pairs: [['sing', 'carols'], ['send', 'Christmas cards'], ['share', 'Christmas wafers'], ['make', "a New Year's resolution"],
      ['pop', 'the champagne'], ['watch', 'the fireworks'], ['go', 'to church'], ['kiss', 'at midnight']],
  },

  // Ćw. 4 — do którego święta to pasuje?
  sortColumns: {
    instruction: 'Do którego święta to pasuje? Dopasuj wyrazy z ramki do właściwej kolumny.',
    rows: [5, 4],
    columns: [
      { head: 'Christmas', words: ['mistletoe', 'wreath', 'gingerbread cookies'] },
      { head: 'Easter', words: ['Good Friday', 'egg hunt', 'Lent'] },
      { head: 'New Year', words: ['house party', 'toast', 'fireworks'] },
    ],
  },

  // Ćw. 5 — wykreślanka ([słowo, ikona])
  wordSearch: {
    size: 11, seed: 21,
    words: [['lights', 'lights'], ['ball', 'bauble'], ['cards', 'xmascard'], ['dinner', 'dinner'], ['eggs', 'easteregg'],
      ['bunny', 'bunny'], ['basket', 'basket'], ['candles', 'cake'], ['gifts', 'present'], ['wedding', 'rings']],
  },

  // Ćw. 6 — krzyżówka: zdania z luką
  crossword: {
    seed: 7,
    clues: {
      celebrate: 'How do you ______ your birthday? – I have a party with my friends.',
      guests: 'We invited a hundred ______ to our wedding.',
      anniversary: "Today is my parents' 25th wedding ______.",
      reception: 'After the ceremony, there was a wedding ______ at a hotel.',
      wish: 'Close your eyes and make a ______!',
      Easter: 'We paint eggs for ______.',
      Christmas: 'We decorate the tree on ______ Eve.',
      Santa: 'Children believe that ______ Claus brings their presents.',
      Communion: 'My niece is making her First Holy ______ in May.',
    },
  },

  // Ćw. 7 — jakie życzenia złożysz?
  situationsInstruction: 'Jakie życzenia złożysz? Połącz sytuacje 1–8 z życzeniami a–h.',
  situations: [
    ['Twoja koleżanka ma dziś urodziny.', 'Happy birthday!', 'cake'],
    ['Jest Wigilia. Składasz życzenia rodzinie.', 'Merry Christmas!', 'christmastree'],
    ['Jest północ 31 grudnia.', 'Happy New Year!', 'fireworks'],
    ['Składasz życzenia na Wielkanoc.', 'Happy Easter!', 'easteregg'],
    ['Twój brat bierze ślub.', 'Congratulations!', 'rings'],
    ['Wznosisz toast na przyjęciu.', 'Cheers!', 'toast'],
    ['Kolega idzie wieczorem na imprezę.', 'Have a great time!', 'party'],
    ['Ktoś składa ci życzenia świąteczne. Odpowiadasz tym samym.', 'Same to you!', 'chat'],
  ],

  // Ćw. 8 — dialog (luki: pojedyncze słowa)
  gapFill: {
    title: 'An invitation',
    sep: 'w sobotę',
    bank: ['birthday', 'come', 'inviting', 'Happy', 'surprise', 'time', 'Cheers'],
    lines: [
      ['Kate', 'Hi, Ben! What are you doing on Saturday?'],
      ['Ben', 'Nothing special. Why?'],
      ['Kate', "It's my {birthday}. Would you like to {come} to my party?"],
      ['Ben', "Yes, I'd love to! Thank you for {inviting} me."],
      ['Kate', 'Great! The party starts at six.'],
      ['', ''],
      ['Ben', '{Happy} birthday, Kate! This is for you.'],
      ['Kate', 'Oh, thank you! What a lovely {surprise}! Come in and have a great {time}.'],
      ['Ben', '{Cheers}! All the best, Kate!'],
    ],
  },

  // Ćw. 9 — pytania
  aboutYou: [
    ['Where are you spending Christmas this year?'],
    ['Do you have any Christmas traditions?'],
    ["What do you usually do on New Year's Eve?"],
    ['When is your birthday?'],
    ['How do you celebrate your birthday?'],
    ['Do you send Christmas cards?'],
  ],

  // Ćw. 10 — mapa myśli: [liczba linii, kategoria, ikona]
  game: {
    cards: [
      [3, 'Boże Narodzenie', 'christmastree'],
      [3, 'Wielkanoc', 'easteregg'],
      [2, 'Nowy Rok', 'fireworks'],
      [2, 'urodziny', 'cake'],
      [2, 'ślub', 'rings'],
      [2, 'życzenia', 'xmascard'],
      [1, 'inne święta', 'flag'],
      [1, 'walentynki', 'heart'],
    ],
    examples: [
      'decorate the Christmas tree, sing carols, wrap gifts', 'paint Easter eggs, Easter egg hunt, Good Friday', 'make a toast, kiss at midnight',
      'have a birthday party, blow out the candles', 'wedding reception, invite guests', 'Merry Christmas!, Same to you!', "Women's Day", 'send a card',
    ],
  },
};
