export interface Question {
  id: number;
  question: string;
  answers: string[];
  correct: number;
  difficulty: "easy" | "medium" | "hard";
}

export const ALL_QUESTIONS: Question[] = [
  // ŁATWE
  {
    id: 1,
    question: "Jaka jest stolica Francji?",
    answers: ["Berlin", "Madryt", "Paryż", "Rzym"],
    correct: 2,
    difficulty: "easy",
  },
  {
    id: 2,
    question: "Ile dni ma rok przestępny?",
    answers: ["364", "365", "366", "367"],
    correct: 2,
    difficulty: "easy",
  },
  {
    id: 3,
    question: "Jakiego koloru jest niebo w słoneczny dzień?",
    answers: ["Zielonego", "Niebieskiego", "Czerwonego", "Żółtego"],
    correct: 1,
    difficulty: "easy",
  },
  {
    id: 4,
    question: "Ile boków ma trójkąt?",
    answers: ["2", "3", "4", "5"],
    correct: 1,
    difficulty: "easy",
  },
  {
    id: 5,
    question: "Która planeta jest najbliżej Słońca?",
    answers: ["Wenus", "Ziemia", "Mars", "Merkury"],
    correct: 3,
    difficulty: "easy",
  },
  {
    id: 6,
    question: "Ile wynosi 12 × 12?",
    answers: ["124", "144", "132", "148"],
    correct: 1,
    difficulty: "easy",
  },
  {
    id: 7,
    question: "W którym oceanie leży Trójkąt Bermudzki?",
    answers: ["Spokojnym", "Indyjskim", "Arktycznym", "Atlantyckim"],
    correct: 3,
    difficulty: "easy",
  },
  {
    id: 8,
    question: "Który kontynent jest największy powierzchniowo?",
    answers: ["Afryka", "Ameryka Północna", "Azja", "Europa"],
    correct: 2,
    difficulty: "easy",
  },
  // ŚREDNIE
  {
    id: 9,
    question: "Jaki symbol chemiczny ma złoto?",
    answers: ["Ag", "Au", "Al", "Ar"],
    correct: 1,
    difficulty: "medium",
  },
  {
    id: 10,
    question: "Kto napisał «Romeo i Julia»?",
    answers: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
    correct: 2,
    difficulty: "medium",
  },
  {
    id: 11,
    question: "Jaka jest przybliżona prędkość światła (km/s)?",
    answers: ["150 000", "300 000", "500 000", "1 000 000"],
    correct: 1,
    difficulty: "medium",
  },
  {
    id: 12,
    question: "Jaka jest stolica Polski?",
    answers: ["Kraków", "Gdańsk", "Łódź", "Warszawa"],
    correct: 3,
    difficulty: "medium",
  },
  {
    id: 13,
    question: "Ile kości ma szkielet dorosłego człowieka?",
    answers: ["206", "215", "198", "230"],
    correct: 0,
    difficulty: "medium",
  },
  {
    id: 14,
    question: "Który ocean jest największy na świecie?",
    answers: ["Atlantycki", "Indyjski", "Arktyczny", "Spokojny"],
    correct: 3,
    difficulty: "medium",
  },
  {
    id: 15,
    question: "W którym roku upadł Mur Berliński?",
    answers: ["1987", "1991", "1989", "1985"],
    correct: 2,
    difficulty: "medium",
  },
  {
    id: 16,
    question: "Jak potocznie nazywa się «elektrownia komórki»?",
    answers: ["Jądro", "Rybosom", "Mitochondrium", "Aparat Golgiego"],
    correct: 2,
    difficulty: "medium",
  },
  {
    id: 17,
    question: "Która planeta Układu Słonecznego ma najwięcej księżyców?",
    answers: ["Jowisz", "Saturn", "Uran", "Neptun"],
    correct: 1,
    difficulty: "medium",
  },
  {
    id: 18,
    question: "Jakim językiem mówi się w Brazylii?",
    answers: ["Hiszpańskim", "Portugalskim", "Angielskim", "Francuskim"],
    correct: 1,
    difficulty: "medium",
  },
  // TRUDNE
  {
    id: 19,
    question: "Która rzeka jest najdłuższa na świecie?",
    answers: ["Amazonka", "Jangcy", "Missisipi", "Nil"],
    correct: 3,
    difficulty: "hard",
  },
  {
    id: 20,
    question: "Kto skomponował «Uwerturę 1812»?",
    answers: ["Beethoven", "Czajkowski", "Mozart", "Bach"],
    correct: 1,
    difficulty: "hard",
  },
  {
    id: 21,
    question: "Jaki jest wzór chemiczny wody?",
    answers: ["HO", "H₂O₂", "H₂O", "HO₂"],
    correct: 2,
    difficulty: "hard",
  },
  {
    id: 22,
    question: "W którym roku podpisano Wielką Kartę Swobód (Magna Carta)?",
    answers: ["1215", "1066", "1492", "1313"],
    correct: 0,
    difficulty: "hard",
  },
  {
    id: 23,
    question: "Jakie jest najmniejsze państwo na świecie pod względem powierzchni?",
    answers: ["Monako", "San Marino", "Watykan", "Liechtenstein"],
    correct: 2,
    difficulty: "hard",
  },
  {
    id: 24,
    question: "Który naukowiec sformułował ogólną teorię względności?",
    answers: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"],
    correct: 2,
    difficulty: "hard",
  },
  {
    id: 25,
    question: "Jaka jest najrzadsza grupa krwi?",
    answers: ["AB−", "0−", "B−", "A−"],
    correct: 0,
    difficulty: "hard",
  },
  {
    id: 26,
    question: "Ile zer ma liczba bilion (w systemie krótkim)?",
    answers: ["9", "10", "11", "12"],
    correct: 3,
    difficulty: "hard",
  },
  {
    id: 27,
    question: "W którym roku zatonął Titanic?",
    answers: ["1910", "1914", "1912", "1908"],
    correct: 2,
    difficulty: "hard",
  },
  {
    id: 28,
    question: "Które państwo ma najwięcej naturalnych jezior na świecie?",
    answers: ["Rosja", "USA", "Brazylia", "Kanada"],
    correct: 3,
    difficulty: "hard",
  },
  {
    id: 29,
    question: "Jaka jest najtwardsza naturalna substancja na Ziemi?",
    answers: ["Kwarc", "Wolfram", "Diament", "Korund"],
    correct: 2,
    difficulty: "hard",
  },
  {
    id: 30,
    question: "Co oznacza litera «M» w liczbach rzymskich?",
    answers: ["500", "100", "50", "1000"],
    correct: 3,
    difficulty: "hard",
  },
];

export const MONEY_LADDER = [
  "500 zł",
  "1 000 zł",
  "2 000 zł",
  "5 000 zł",
  "10 000 zł",
  "20 000 zł",
  "40 000 zł",
  "75 000 zł",
  "125 000 zł",
  "250 000 zł",
  "500 000 zł",
  "750 000 zł",
  "1 000 000 zł",
  "2 000 000 zł",
  "5 000 000 zł",
];

// Gwarantowane: indeksy 4 (10 000 zł) i 9 (250 000 zł)
export const SAFE_HAVENS = [4, 9];

export function buildQuestionSet(): Question[] {
  const easy = ALL_QUESTIONS.filter((q) => q.difficulty === "easy");
  const medium = ALL_QUESTIONS.filter((q) => q.difficulty === "medium");
  const hard = ALL_QUESTIONS.filter((q) => q.difficulty === "hard");
  const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);
  return [...shuffle(easy).slice(0, 5), ...shuffle(medium).slice(0, 5), ...shuffle(hard).slice(0, 5)];
}
