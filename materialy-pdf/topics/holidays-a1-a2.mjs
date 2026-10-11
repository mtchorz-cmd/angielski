// Temat: Holidays and celebrations · poziom A1–A2.
// Kolokacja: [en, pl, ikona]. Zwrot: [en, pl].
// Podział: osobno Boże Narodzenie, Wielkanoc, Nowy Rok, inne święta i uroczystości rodzinne.
// Pokrycie słownictwa w ćwiczeniach (ćw. 1, 4, 6, 8 — rozłączne pule wpisywanych wyrazów):
//  ćw. 1 – choinka, prezenty, pisanki, znicze, świeczki na torcie, ślub, zaproszenie, przyjęcie, walentynki, Dzień Dziecka
//  ćw. 2 – daty świąt (Wigilia, Boże Narodzenie, sylwester, Nowy Rok, Wszystkich Świętych, walentynki, Dzień Dziecka, Dzień Matki)
//  ćw. 3 – kolędy, kartki, opłatek, postanowienie, północ, fajerwerki, kościół, groby
//  ćw. 4 – Christmas / Easter / New Year: przypisanie wyrazów do święta
//  ćw. 6 – celebrate, guests, anniversary, reception, wishes, presents, Easter, Christmas
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
  coverIcons: ['christmastree', 'present', 'easteregg', 'bunny', 'fireworks', 'cake', 'heart', 'rings', 'star', 'candle', 'champagne', 'xmascard', 'basket', 'santa', 'popper'],

  vocabLayout: {
    page1: [['christmas', 'newyear'], ['easter', 'other']],
    page2: [],
    wide: [['family', 2]],
  },

  groups: {
    christmas: {
      level: 'A1', en: 'Christmas', pl: 'Boże Narodzenie',
      words: [
        ['Christmas Eve', 'Wigilia', 'star'], ['Christmas Day', 'pierwszy dzień świąt Bożego Narodzenia', 'bauble'],
        ['Christmas Eve dinner', 'kolacja wigilijna', 'dinner'], ['decorate the Christmas tree', 'ubierać choinkę', 'christmastree'],
        ['share Christmas wafers', 'dzielić się opłatkiem', 'wafer'], ['wrap presents', 'pakować prezenty', 'wrap'],
        ['give / get presents', 'dawać / dostawać prezenty', 'present'], ['sing carols', 'śpiewać kolędy', 'singing'],
        ['send Christmas cards', 'wysyłać kartki świąteczne', 'xmascard'], ['Father Christmas', 'Święty Mikołaj', 'santa'],
      ],
    },
    easter: {
      level: 'A1', en: 'Easter', pl: 'Wielkanoc',
      words: [
        ['Easter Sunday', 'Niedziela Wielkanocna', 'chick'], ['Easter Monday', 'Poniedziałek Wielkanocny (lany poniedziałek)', 'splash'],
        ['paint Easter eggs', 'malować pisanki', 'easteregg'], ['Easter basket', 'koszyczek wielkanocny', 'basket'],
        ['Easter Bunny', 'zajączek wielkanocny', 'bunny'], ['chocolate eggs', 'czekoladowe jajka', 'chocegg'],
        ['go to church', 'iść do kościoła', 'church'],
      ],
    },
    newyear: {
      level: 'A1', en: 'New Year', pl: 'Nowy Rok',
      words: [
        ["New Year's Eve", 'sylwester', 'champagne'], ["New Year's Day", 'Nowy Rok', 'calendar'],
        ['watch the fireworks', 'oglądać fajerwerki', 'fireworks'], ['count down to midnight', 'odliczać do północy', 'clock'],
        ["make a New Year's resolution", 'podjąć postanowienie noworoczne', 'resolution'],
      ],
    },
    other: {
      level: 'A1', en: 'Other holidays', pl: 'inne święta',
      words: [
        ["All Saints' Day", 'Wszystkich Świętych', 'leaf'], ['visit graves', 'odwiedzać groby', 'grave'],
        ['light candles', 'zapalać znicze', 'candle'], ["Valentine's Day", 'walentynki', 'heart'],
        ["Mother's Day / Father's Day", 'Dzień Matki / Ojca', 'family'], ["Children's Day", 'Dzień Dziecka', 'teddy'],
      ],
    },
    family: {
      level: 'A2', en: 'Family celebrations', pl: 'uroczystości rodzinne',
      words: [
        ['have a birthday party', 'urządzić przyjęcie urodzinowe', 'party'], ['blow out the candles', 'zdmuchnąć świeczki', 'cake'],
        ['name day', 'imieniny', 'bouquet'], ['wedding', 'ślub', 'rings'],
        ['wedding reception', 'przyjęcie weselne', 'weddingcake'], ['wedding anniversary', 'rocznica ślubu', 'anniversary'],
        ['invite guests', 'zapraszać gości', 'friends'], ['send an invitation', 'wysłać zaproszenie', 'envelope'],
        ['celebrate', 'świętować', 'popper'], ['exchange wishes', 'składać sobie życzenia', 'chat'],
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
    ["What's your favourite holiday?", 'Jakie jest twoje ulubione święto?'],
    ['What are you doing for Christmas?', 'Co robisz w święta?'],
    ['How do you celebrate Easter in your country?', 'Jak obchodzicie Wielkanoc w twoim kraju?'],
    ['Would you like to come to my party?', 'Czy chcesz przyjść na moje przyjęcie?'],
    ['Thank you for inviting me.', 'Dziękuję za zaproszenie.'],
    ['Thanks for the present!', 'Dzięki za prezent!'],
  ],

  // Ćw. 1 — podpisz obrazki (kolokacje)
  labelRows: [4, 3, 3],
  labelBankWide: true,
  labelPictures: ['christmastree', 'wrap', 'easteregg', 'candle', 'cake', 'rings', 'envelope', 'party', 'heart', 'teddy'],

  // Ćw. 2 — kiedy obchodzimy te święta? (łączenie z datami)
  matchDates: {
    instruction: 'Kiedy obchodzimy te święta? Połącz je z datami (a–h).',
    pairs: [
      ['Christmas Eve', '24 December'], ['Christmas Day', '25 December'], ["New Year's Eve", '31 December'],
      ["New Year's Day", '1 January'], ["All Saints' Day", '1 November'], ["Valentine's Day", '14 February'],
      ["Children's Day", '1 June'], ["Mother's Day (in Poland)", '26 May'],
    ],
  },

  // Ćw. 3 — połącz czasowniki z wyrazami
  matchPairs: {
    instruction: 'Połącz czasowniki (1–8) z wyrazami (a–h).',
    pairs: [['sing', 'carols'], ['send', 'Christmas cards'], ['share', 'Christmas wafers'], ['make', "a New Year's resolution"],
      ['count down', 'to midnight'], ['watch', 'the fireworks'], ['go', 'to church'], ['visit', 'graves']],
  },

  // Ćw. 4 — do którego święta to pasuje?
  sortColumns: {
    instruction: 'Do którego święta to pasuje? Dopasuj wyrazy z ramki do właściwej kolumny.',
    rows: [5, 4],
    columns: [
      { head: 'Christmas', words: ['carols', 'wafers', 'Father Christmas'] },
      { head: 'Easter', words: ['basket', 'chocolate eggs', 'bunny'] },
      { head: 'New Year', words: ['fireworks', 'midnight', 'resolution'] },
    ],
  },

  // Ćw. 5 — wykreślanka ([słowo, ikona])
  wordSearch: {
    size: 11, seed: 21,
    words: [['tree', 'christmastree'], ['cards', 'xmascard'], ['dinner', 'dinner'], ['eggs', 'easteregg'], ['bunny', 'bunny'],
      ['candles', 'candle'], ['party', 'party'], ['wedding', 'rings'], ['wafers', 'wafer'], ['fireworks', 'fireworks']],
  },

  // Ćw. 6 — krzyżówka: zdania z luką
  crossword: {
    seed: 7,
    clues: {
      celebrate: 'How do you ______ your birthday? – I have a party with my friends.',
      guests: 'We invited a hundred ______ to our wedding.',
      anniversary: "Today is my parents' 25th wedding ______.",
      reception: 'After the ceremony, there was a wedding ______ at a hotel.',
      wishes: 'At Christmas, we share wafers and exchange ______.',
      presents: 'In the UK, children open their ______ on Christmas Day.',
      Easter: 'We paint eggs for ______.',
      Christmas: 'We decorate the tree on ______ Eve.',
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
    ['Wznosisz toast na przyjęciu.', 'Cheers!', 'champagne'],
    ['Kolega idzie wieczorem na imprezę.', 'Have a great time!', 'party'],
    ['Dziękujesz koleżance za prezent.', 'Thanks for the present!', 'present'],
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
    ["What's your favourite holiday?"],
    ['How do you celebrate Christmas?'],
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
      [1, '1 listopada', 'candle'],
      [1, 'walentynki', 'heart'],
    ],
    examples: [
      'decorate the Christmas tree, sing carols, wrap presents', 'paint Easter eggs, Easter basket, go to church', 'watch the fireworks, count down to midnight',
      'have a birthday party, blow out the candles', 'wedding reception, invite guests', 'Merry Christmas!, Happy Easter!', 'visit graves', 'send a card',
    ],
  },
};
