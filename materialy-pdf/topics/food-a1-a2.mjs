// Temat: Food · poziom A1–A2.
// Słowo: [en, pl, ikona]. Zwrot: [en, pl]. Wszystkie ćwiczenia używają tylko
// słów i zwrotów z listy na stronie 2.
export default {
  slug: 'food-a1-a2',
  title: 'Food',
  subtitle: 'Ćwiczenia leksykalne',
  level: 'A1–A2',
  footer: 'Food · A1–A2',
  coverIcons: ['apple', 'carrot', 'bread', 'coffee', 'cheese', 'fish', 'icecream', 'tomato', 'banana', 'cake', 'milk', 'grapes', 'pasta', 'egg', 'juice', 'onion'],

  groups: [
    {
      level: 'A1', en: 'Fruit & vegetables', pl: 'owoce i warzywa',
      words: [
        ['apple', 'jabłko', 'apple'], ['banana', 'banan', 'banana'], ['orange', 'pomarańcza', 'orange'],
        ['grapes', 'winogrona', 'grapes'], ['tomato', 'pomidor', 'tomato'], ['carrot', 'marchewka', 'carrot'],
        ['potato', 'ziemniak', 'potato'], ['onion', 'cebula', 'onion'],
      ],
    },
    {
      level: 'A1', en: 'Everyday food', pl: 'codzienne jedzenie',
      words: [
        ['bread', 'chleb', 'bread'], ['cheese', 'ser', 'cheese'], ['egg', 'jajko', 'egg'],
        ['rice', 'ryż', 'rice'], ['pasta', 'makaron', 'pasta'], ['chicken', 'kurczak', 'chicken'],
        ['fish', 'ryba', 'fish'], ['soup', 'zupa', 'soup'],
      ],
    },
    {
      level: 'A1', en: 'Drinks', pl: 'napoje',
      words: [
        ['water', 'woda', 'water'], ['milk', 'mleko', 'milk'], ['coffee', 'kawa', 'coffee'],
        ['tea', 'herbata', 'tea'], ['juice', 'sok', 'juice'],
      ],
    },
    {
      level: 'A1', en: 'Something sweet', pl: 'coś słodkiego',
      words: [['cake', 'ciasto', 'cake'], ['chocolate', 'czekolada', 'chocolate'], ['ice cream', 'lody', 'icecream']],
    },
    {
      level: 'A2', en: 'Meals', pl: 'posiłki',
      words: [['breakfast', 'śniadanie', 'breakfast'], ['lunch', 'lunch, drugie śniadanie', 'lunch'], ['dinner', 'obiad, kolacja', 'dinner']],
    },
    {
      level: 'A2', en: 'At the table', pl: 'przy stole',
      words: [['plate', 'talerz', 'plate'], ['knife', 'nóż', 'knife'], ['fork', 'widelec', 'fork'], ['spoon', 'łyżka', 'spoon'], ['the bill', 'rachunek', 'bill']],
    },
  ],

  // Gotowe zwroty do rozmowy (strona 2, ostatnia sekcja)
  phrases: [
    ["I'm hungry.", 'Jestem głodny / głodna.'],
    ["I'm thirsty.", 'Chce mi się pić.'],
    ['What would you like?', 'Co podać? / Na co masz ochotę?'],
    ["I'd like a coffee, please.", 'Poproszę kawę.'],
    ['Can I have some water, please?', 'Czy mogę prosić o wodę?'],
    ["Do you like fish? – Yes, I do.", 'Lubisz ryby? – Tak.'],
    ["It's delicious!", 'To jest pyszne!'],
    ['Can I have the bill, please?', 'Poproszę rachunek.'],
  ],

  // Ćw. 1 — podpisz obrazki
  labelPictures: ['cheese', 'grapes', 'milk', 'knife', 'chicken', 'potato', 'tea', 'cake', 'spoon', 'rice'],

  // Ćw. 2 — co nie pasuje?
  oddOneOut: [
    { icons: ['apple', 'banana', 'cheese', 'grapes'], answer: 2, why: 'cheese (to nie owoc)' },
    { icons: ['water', 'juice', 'bread', 'milk'], answer: 2, why: 'bread (to nie napój)' },
    { icons: ['fork', 'carrot', 'knife', 'spoon'], answer: 1, why: 'carrot (to nie sztućce)' },
    { icons: ['cake', 'icecream', 'chocolate', 'onion'], answer: 3, why: 'onion (to nie słodycze)' },
  ],

  // Ćw. 3 — wykreślanka 10×10
  wordSearch: { size: 10, seed: 11, words: ['apple', 'bread', 'cheese', 'carrot', 'milk', 'fish', 'tomato', 'coffee', 'onion', 'cake'] },

  // Ćw. 4 — krzyżówka: zdania z luką (A1–A2)
  crossword: {
    seed: 5,
    clues: {
      banana: 'Monkeys love this long, yellow fruit: a ______.',
      potato: "I'd like a baked ______ with cheese, please.",
      egg: 'I have a boiled ______ for breakfast every day.',
      rice: 'People in China and Japan eat a lot of ______.',
      water: "I'm thirsty. Can I have some ______, please?",
      chicken: "We're having roast ______ for Sunday lunch.",
      juice: 'Can I have an apple ______, please?',
      orange: 'An ______ is a round fruit. It is also a colour.',
      cheese: "I'd like a ham and ______ sandwich, please.",
      pasta: 'Spaghetti is a kind of Italian ______.',
    },
  },

  // Ćw. 5 — co powiesz? sytuacja → zwrot
  situations: [
    ['Kelner pyta gościa, co podać.', 'What would you like?', 'dinner'],
    ['Zamawiasz kawę.', "I'd like a coffee, please.", 'coffee'],
    ['Od rana nic nie jesz.', "I'm hungry.", 'breakfast'],
    ['Jest gorąco i chcesz się napić.', "I'm thirsty.", 'juice'],
    ['Prosisz kelnera o wodę.', 'Can I have some water, please?', 'water'],
    ['Pytasz kolegę, czy lubi ryby.', 'Do you like fish?', 'fish'],
    ['Zupa bardzo ci smakuje.', "It's delicious!", 'soup'],
    ['Chcesz zapłacić.', 'Can I have the bill, please?', 'bill'],
  ],

  // Ćw. 6 — dialog
  gapFill: {
    title: 'At the café',
    bank: ['hungry', 'breakfast', 'soup', "I'd like", 'cheese', 'thirsty', 'Can I have', 'juice', 'delicious', 'bill'],
    lines: [
      ['Waiter', 'Good morning! What would you like?'],
      ['Anna', "Hello! I'm very {hungry}. I didn't have {breakfast} today."],
      ['Waiter', 'Our tomato {soup} is very good.'],
      ['Anna', 'Great! {I\'d like} the soup and a {cheese} sandwich, please.'],
      ['Waiter', 'And to drink?'],
      ['Anna', "I'm really {thirsty}. {Can I have} some water and an apple {juice}, please?"],
      ['Waiter', 'Of course. … How was everything?'],
      ['Anna', 'It was {delicious}, thank you! Can I have the {bill}, please?'],
    ],
  },

  // Ćw. 7 — o sobie
  aboutYou: [
    ['What do you usually have for breakfast?', 'I usually have …'],
    ["What's your favourite drink?", 'My favourite drink is …'],
    ['Do you like fish?', 'Yes, I do. / No, I don’t.'],
    ["You're in a café. Order something to eat and drink.", "I'd like … and …, please."],
  ],
};
