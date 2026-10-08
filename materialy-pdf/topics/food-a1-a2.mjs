// Temat: Food · poziom A1–A2.
// Słowo: [en, pl, ikona]. Zwrot / przymiotnik: [en, pl].
// Zasada: ćwiczenia korzystają tylko ze słownictwa ze stron 2–3, a każde ćwiczenie,
// w którym kursant sam wpisuje słowa, ma własną pulę wyrazów (bez zbędnych powtórzeń).
export default {
  slug: 'food-a1-a2',
  title: 'Food',
  subtitle: 'Ćwiczenia leksykalne',
  level: 'A1–A2',
  footer: 'Food · A1–A2',
  coverIcons: ['apple', 'carrot', 'bread', 'coffee', 'cheese', 'fish', 'icecream', 'tomato', 'banana', 'cake', 'milk', 'grapes', 'pasta', 'egg', 'juice', 'onion'],

  groups: {
    fruit: {
      level: 'A1', en: 'Fruit & vegetables', pl: 'owoce i warzywa',
      words: [
        ['apple', 'jabłko', 'apple'], ['banana', 'banan', 'banana'], ['orange', 'pomarańcza', 'orange'],
        ['lemon', 'cytryna', 'lemon'], ['strawberry', 'truskawka', 'strawberry'], ['grapes', 'winogrona', 'grapes'],
        ['tomato', 'pomidor', 'tomato'], ['carrot', 'marchewka', 'carrot'], ['potato', 'ziemniak', 'potato'],
        ['onion', 'cebula', 'onion'], ['pepper', 'papryka (warzywo)', 'pepper'], ['mushroom', 'grzyb, pieczarka', 'mushroom'],
      ],
    },
    food: {
      level: 'A1', en: 'Types of food', pl: 'rodzaje jedzenia',
      words: [
        ['bread', 'chleb', 'bread'], ['butter', 'masło', 'butter'], ['cheese', 'ser', 'cheese'],
        ['egg', 'jajko', 'egg'], ['sandwich', 'kanapka', 'sandwich'], ['salad', 'sałatka', 'salad'],
        ['soup', 'zupa', 'soup'], ['rice', 'ryż', 'rice'], ['pasta', 'makaron', 'pasta'],
        ['meat', 'mięso', 'meat'], ['chicken', 'kurczak', 'chicken'], ['fish', 'ryba', 'fish'],
      ],
    },
    drinks: {
      level: 'A1', en: 'Drinks', pl: 'napoje',
      words: [['water', 'woda', 'water'], ['milk', 'mleko', 'milk'], ['coffee', 'kawa', 'coffee'], ['tea', 'herbata', 'tea'], ['juice', 'sok', 'juice']],
    },
    sweet: {
      level: 'A1', en: 'Something sweet', pl: 'coś słodkiego',
      words: [['cake', 'ciasto', 'cake'], ['biscuit', 'herbatnik', 'biscuit'], ['chocolate', 'czekolada', 'chocolate'], ['ice cream', 'lody', 'icecream'], ['sugar', 'cukier', 'sugar']],
    },
    meals: {
      level: 'A2', en: 'Meals', pl: 'posiłki',
      words: [['breakfast', 'śniadanie', 'breakfast'], ['lunch', 'lunch (posiłek w południe)', 'lunch'], ['dinner', 'obiad, kolacja', 'dinner'], ['snack', 'przekąska', 'snack']],
    },
    table: {
      level: 'A2', en: 'At the table', pl: 'przy stole',
      words: [['plate', 'talerz', 'plate'], ['knife', 'nóż', 'knife'], ['fork', 'widelec', 'fork'], ['spoon', 'łyżka', 'spoon'], ['glass', 'szklanka', 'glass'], ['bowl', 'miska', 'bowl'], ['napkin', 'serwetka', 'napkin']],
    },
    adjectives: {
      level: 'A2', en: 'Describing food', pl: 'opisujemy jedzenie',
      words: [['sweet', 'słodki'], ['salty', 'słony'], ['spicy', 'ostry, pikantny'], ['fresh', 'świeży'], ['hot', 'gorący'], ['cold', 'zimny']],
    },
  },

  // Gotowe zwroty do rozmowy
  phrases: [
    ["I'm hungry.", 'Jestem głodny / głodna.'],
    ["I'm thirsty.", 'Chce mi się pić.'],
    ['What would you like?', 'Co podać?'],
    ["I'd like a coffee, please.", 'Poproszę kawę.'],
    ['Can I have some water, please?', 'Czy mogę prosić o wodę?'],
    ['Anything else?', 'Coś jeszcze?'],
    ["That's all, thank you.", 'To wszystko, dziękuję.'],
    ['Enjoy your meal!', 'Smacznego!'],
    ['Do you like seafood?', 'Lubisz owoce morza?'],
    ["It's delicious!", 'To jest pyszne!'],
    ["I'm full.", 'Jestem najedzony / najedzona.'],
    ['Can I have the bill, please?', 'Poproszę rachunek.'],
  ],

  // Ćw. 1 — podpisz obrazki
  labelPictures: ['strawberry', 'mushroom', 'butter', 'knife', 'sandwich', 'biscuit', 'pepper', 'spoon', 'glass', 'icecream'],

  // Ćw. 2 — co nie pasuje? (rozpoznawanie, kursant nic nie wpisuje)
  oddOneOut: [
    { icons: ['lemon', 'grapes', 'carrot', 'orange'], answer: 2, why: 'carrot – to warzywo' },
    { icons: ['milk', 'bread', 'tea', 'coffee'], answer: 1, why: 'bread – to nie napój' },
    { icons: ['cake', 'chocolate', 'icecream', 'potato'], answer: 3, why: 'potato – to nie słodycze' },
    { icons: ['banana', 'chicken', 'meat', 'fish'], answer: 0, why: 'banana – to nie mięso ani ryba' },
  ],

  // Ćw. 3 — brakujące litery (ukryte samogłoski)
  missingLetters: ['plate', 'fork', 'bowl', 'napkin', 'cheese', 'onion', 'juice', 'salad'],

  // Ćw. 4 — przymiotniki w zdaniach
  adjectivesGap: [
    ["There's too much salt in this soup. It's very {salty}."],
    ['I love chocolate cake because it is so {sweet}.'],
    ['Be careful! The tea is very {hot}.'],
    ["It's 30°C today. Can I have a {cold} drink, please?"],
    ["There's a lot of chilli in this chicken. It's really {spicy}!"],
  ],

  // Ćw. 5 — wykreślanka 10×10 (obrazki jako wskazówki)
  wordSearch: { size: 10, seed: 11, words: ['apple', 'tomato', 'egg', 'rice', 'pasta', 'soup', 'water', 'meat', 'fish', 'tea'] },

  // Ćw. 6 — krzyżówka: zdania z luką (A1–A2)
  crossword: {
    seed: 5,
    clues: {
      breakfast: 'I always have ______ at 7 a.m. before work.',
      lunch: 'At 1 p.m. I have ______ with my colleagues.',
      dinner: 'In the evening we have ______ together at home.',
      snack: 'The children have a ______ during the morning.',
      chicken: 'My favourite meat is roast ______.',
      bread: 'Can I have some ______ and butter, please?',
      carrot: 'A ______ is a long, thin, orange vegetable.',
      lemon: 'She drinks her tea with ______, not milk.',
      coffee: "I drink a cup of ______ every morning. I don't like tea.",
      chocolate: "I'd like a bar of milk ______, please.",
    },
  },

  // Ćw. 7 — co powiesz? [sytuacja PL, zwrot EN, ikona]
  situations: [
    ['Jest gorąco i chce ci się pić.', "I'm thirsty.", 'juice'],
    ['Jesteś kelnerem i pytasz gościa, co podać.', 'What would you like?', 'dinner'],
    ['Zamawiasz kawę.', "I'd like a coffee, please.", 'coffee'],
    ['Prosisz kelnera o wodę.', 'Can I have some water, please?', 'water'],
    ['Pytasz kolegę, czy lubi owoce morza.', 'Do you like seafood?', 'fish'],
    ['Zupa bardzo ci smakuje.', "It's delicious!", 'soup'],
    ['Nie zmieścisz już deseru.', "I'm full.", 'cake'],
    ['Chcesz zapłacić.', 'Can I have the bill, please?', 'bill'],
  ],

  // Ćw. 8 — dialog z lukami
  gapFill: {
    title: 'At the restaurant',
    bank: ['hungry', 'fresh', 'Anything else', "that's all", 'Enjoy your meal', 'bill'],
    lines: [
      ['Waiter', 'Good evening! Are you ready to order?'],
      ['Tom', "Yes, please. I'm very {hungry}! I'd like the fish with {fresh} vegetables."],
      ['Waiter', 'Of course. And what would you like to drink?'],
      ['Tom', 'A glass of orange juice, please.'],
      ['Waiter', '{Anything else}?'],
      ['Tom', "No, {that's all}, thank you."],
      ['Waiter', 'Here you are. {Enjoy your meal}!'],
      ['', '…'],
      ['Waiter', 'How was your meal?'],
      ['Tom', 'It was delicious, thank you.'],
      ['Waiter', 'Would you like anything for dessert?'],
      ['Tom', "No, thank you. I'm full. Can I have the {bill}, please?"],
    ],
  },

  // Ćw. 9 — o sobie
  aboutYou: [
    ['What do you usually have for breakfast?', 'I usually have …'],
    ["What's your favourite fruit?", 'My favourite fruit is …'],
    ['What do you drink in the morning?', 'In the morning I drink …'],
    ['Do you like spicy food?', 'Yes, I do. / No, I don’t.'],
    ["What's your favourite snack?", 'My favourite snack is …'],
    ['What do you usually order in a café?', 'I usually order … and …'],
  ],

  // Ćw. 10 — mapa myśli: [ile słów, kategoria, ikona]
  game: {
    cards: [
      [3, 'owoce', 'apple'],
      [3, 'warzywa', 'carrot'],
      [2, 'napoje', 'juice'],
      [2, 'słodycze', 'icecream'],
      [2, 'przymiotniki', 'pepper'],
      [2, 'na stole', 'plate'],
      [1, 'posiłek rano', 'breakfast'],
      [1, 'zamów kawę', 'coffee'],
    ],
    examples: [
      'apple, banana, lemon', 'carrot, onion, potato', 'water, tea', 'cake, chocolate',
      'sweet, spicy', 'plate, fork', 'breakfast', "I'd like a coffee, please.",
    ],
  },
};
