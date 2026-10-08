// Temat: Food · poziom A1–A2.
// Każde słowo: en, pl, ikona (klucz z icons.mjs). Grupy mają poziom CEFR.
export default {
  slug: 'food-a1-a2',
  title: 'Food',
  subtitle: 'Vocabulary practice',
  level: 'A1–A2',
  coverIcons: ['apple', 'carrot', 'bread', 'coffee', 'cheese', 'fish', 'icecream', 'tomato', 'banana', 'cake', 'milk', 'grapes', 'pasta', 'egg', 'juice', 'onion'],

  groups: [
    {
      level: 'A1', en: 'Fruit & vegetables', pl: 'Owoce i warzywa',
      words: [
        ['apple', 'jabłko', 'apple'], ['banana', 'banan', 'banana'], ['orange', 'pomarańcza', 'orange'],
        ['grapes', 'winogrona', 'grapes'], ['tomato', 'pomidor', 'tomato'], ['carrot', 'marchewka', 'carrot'],
        ['potato', 'ziemniak', 'potato'], ['onion', 'cebula', 'onion'],
      ],
    },
    {
      level: 'A1', en: 'Everyday food', pl: 'Codzienne jedzenie',
      words: [
        ['bread', 'chleb', 'bread'], ['cheese', 'ser', 'cheese'], ['egg', 'jajko', 'egg'],
        ['rice', 'ryż', 'rice'], ['pasta', 'makaron', 'pasta'], ['chicken', 'kurczak', 'chicken'],
        ['fish', 'ryba', 'fish'], ['soup', 'zupa', 'soup'],
      ],
    },
    {
      level: 'A1', en: 'Drinks', pl: 'Napoje',
      words: [
        ['water', 'woda', 'water'], ['milk', 'mleko', 'milk'], ['coffee', 'kawa', 'coffee'],
        ['tea', 'herbata', 'tea'], ['juice', 'sok', 'juice'],
      ],
    },
    {
      level: 'A1', en: 'Something sweet', pl: 'Coś słodkiego',
      words: [
        ['cake', 'ciasto', 'cake'], ['chocolate', 'czekolada', 'chocolate'], ['ice cream', 'lody', 'icecream'],
      ],
    },
    {
      level: 'A2', en: 'Meals', pl: 'Posiłki',
      words: [
        ['breakfast', 'śniadanie', 'breakfast'], ['lunch', 'lunch, drugie śniadanie', 'lunch'], ['dinner', 'obiad, kolacja', 'dinner'],
      ],
    },
    {
      level: 'A2', en: 'At the table', pl: 'Przy stole',
      words: [
        ['plate', 'talerz', 'plate'], ['knife', 'nóż', 'knife'], ['fork', 'widelec', 'fork'], ['spoon', 'łyżka', 'spoon'],
      ],
    },
    {
      level: 'A2', en: 'Useful words', pl: 'Przydatne słowa',
      words: [
        ['hungry', 'głodny'], ['thirsty', 'spragniony'], ['delicious', 'pyszny'],
        ['salty', 'słony'], ["I'd like…", 'Poproszę…'], ['the bill', 'rachunek'],
      ],
    },
  ],

  // Ćw. 1 — podpisz obrazki (bank słów)
  labelPictures: ['cheese', 'grapes', 'milk', 'knife', 'chicken', 'potato', 'tea', 'cake', 'spoon', 'rice'],

  // Ćw. 2 — co nie pasuje? [ikony], indeks odpowiedzi, uzasadnienie do klucza
  oddOneOut: [
    { icons: ['apple', 'banana', 'cheese', 'grapes'], answer: 2, why: 'cheese — not a fruit' },
    { icons: ['water', 'juice', 'bread', 'milk'], answer: 2, why: 'bread — not a drink' },
    { icons: ['fork', 'carrot', 'knife', 'spoon'], answer: 1, why: 'carrot — not cutlery' },
    { icons: ['cake', 'icecream', 'chocolate', 'onion'], answer: 3, why: 'onion — not sweet' },
  ],

  // Ćw. 3 — wykreślanka (ikony są wskazówkami)
  wordSearch: { size: 12, seed: 11, words: ['apple', 'bread', 'cheese', 'carrot', 'milk', 'fish', 'tomato', 'coffee', 'onion', 'cake'] },

  // Ćw. 4 — krzyżówka obrazkowa
  crossword: { seed: 5, words: ['banana', 'potato', 'egg', 'rice', 'water', 'chicken', 'juice', 'orange', 'cheese', 'pasta'] },

  // Ćw. 5 — uzupełnij dialog
  gapFill: {
    title: 'At the café',
    bank: ['hungry', 'breakfast', 'soup', "I'd like", 'juice', 'thirsty', 'delicious', 'the bill'],
    lines: [
      ['Waiter', 'Hello! Are you ready to order?'],
      ['Anna', "Yes, please. I'm very {hungry}. I didn't have {breakfast} this morning."],
      ['Waiter', 'Our tomato {soup} is very good today.'],
      ['Anna', 'Great! {I\'d like} the soup and some bread, please.'],
      ['Waiter', 'And something to drink?'],
      ['Anna', "An orange {juice}, please. I'm really {thirsty}."],
      ['Waiter', 'Here you are. … How was everything?'],
      ['Anna', 'It was {delicious}, thank you! Can I have {the bill}, please?'],
    ],
  },

  // Na koniec — krótko o sobie
  aboutYou: [
    'For breakfast I usually have …',
    'My favourite drink is …',
    'At a café I usually order …',
    "I don't like …",
  ],
};
