export interface Question {
  id: number;
  question: string;
  answers: string[];
  correct: number; // index 0-3
  difficulty: "easy" | "medium" | "hard";
}

export const ALL_QUESTIONS: Question[] = [
  // EASY (1-5 level)
  {
    id: 1,
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2,
    difficulty: "easy",
  },
  {
    id: 2,
    question: "How many days are in a leap year?",
    answers: ["364", "365", "366", "367"],
    correct: 2,
    difficulty: "easy",
  },
  {
    id: 3,
    question: "What color is the sky on a clear day?",
    answers: ["Green", "Blue", "Red", "Yellow"],
    correct: 1,
    difficulty: "easy",
  },
  {
    id: 4,
    question: "How many sides does a triangle have?",
    answers: ["2", "3", "4", "5"],
    correct: 1,
    difficulty: "easy",
  },
  {
    id: 5,
    question: "Which planet is closest to the Sun?",
    answers: ["Venus", "Earth", "Mars", "Mercury"],
    correct: 3,
    difficulty: "easy",
  },
  {
    id: 6,
    question: "What is 12 × 12?",
    answers: ["124", "144", "132", "148"],
    correct: 1,
    difficulty: "easy",
  },
  {
    id: 7,
    question: "In which ocean is the Bermuda Triangle located?",
    answers: ["Pacific", "Indian", "Arctic", "Atlantic"],
    correct: 3,
    difficulty: "easy",
  },
  {
    id: 8,
    question: "What is the largest continent by area?",
    answers: ["Africa", "North America", "Asia", "Europe"],
    correct: 2,
    difficulty: "easy",
  },
  // MEDIUM (6-10 level)
  {
    id: 9,
    question: "Which element has the chemical symbol 'Au'?",
    answers: ["Silver", "Gold", "Aluminum", "Argon"],
    correct: 1,
    difficulty: "medium",
  },
  {
    id: 10,
    question: "Who wrote 'Romeo and Juliet'?",
    answers: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
    correct: 2,
    difficulty: "medium",
  },
  {
    id: 11,
    question: "What is the speed of light (approx) in km/s?",
    answers: ["150,000", "300,000", "500,000", "1,000,000"],
    correct: 1,
    difficulty: "medium",
  },
  {
    id: 12,
    question: "Which country invented pizza?",
    answers: ["Greece", "Spain", "France", "Italy"],
    correct: 3,
    difficulty: "medium",
  },
  {
    id: 13,
    question: "How many bones are in the adult human body?",
    answers: ["206", "215", "198", "230"],
    correct: 0,
    difficulty: "medium",
  },
  {
    id: 14,
    question: "What is the largest ocean on Earth?",
    answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: 3,
    difficulty: "medium",
  },
  {
    id: 15,
    question: "Which year did the Berlin Wall fall?",
    answers: ["1987", "1991", "1989", "1985"],
    correct: 2,
    difficulty: "medium",
  },
  {
    id: 16,
    question: "What is the powerhouse of the cell?",
    answers: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
    correct: 2,
    difficulty: "medium",
  },
  {
    id: 17,
    question: "Which planet has the most moons?",
    answers: ["Jupiter", "Saturn", "Uranus", "Neptune"],
    correct: 1,
    difficulty: "medium",
  },
  {
    id: 18,
    question: "What language is predominantly spoken in Brazil?",
    answers: ["Spanish", "Portuguese", "English", "French"],
    correct: 1,
    difficulty: "medium",
  },
  // HARD (11-15 level)
  {
    id: 19,
    question: "What is the longest river in the world?",
    answers: ["Amazon", "Yangtze", "Mississippi", "Nile"],
    correct: 3,
    difficulty: "hard",
  },
  {
    id: 20,
    question: "Which composer wrote the '1812 Overture'?",
    answers: ["Beethoven", "Tchaikovsky", "Mozart", "Bach"],
    correct: 1,
    difficulty: "hard",
  },
  {
    id: 21,
    question: "What is the chemical formula for water?",
    answers: ["HO", "H2O2", "H2O", "HO2"],
    correct: 2,
    difficulty: "hard",
  },
  {
    id: 22,
    question: "In what year was the Magna Carta signed?",
    answers: ["1215", "1066", "1492", "1313"],
    correct: 0,
    difficulty: "hard",
  },
  {
    id: 23,
    question: "What is the smallest country in the world by area?",
    answers: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
    correct: 2,
    difficulty: "hard",
  },
  {
    id: 24,
    question: "Which scientist developed the theory of general relativity?",
    answers: ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"],
    correct: 2,
    difficulty: "hard",
  },
  {
    id: 25,
    question: "What is the rarest blood type?",
    answers: ["AB-", "O-", "B-", "A-"],
    correct: 0,
    difficulty: "hard",
  },
  {
    id: 26,
    question: "How many zeros does one trillion have?",
    answers: ["9", "10", "11", "12"],
    correct: 3,
    difficulty: "hard",
  },
  {
    id: 27,
    question: "What year did the Titanic sink?",
    answers: ["1910", "1914", "1912", "1908"],
    correct: 2,
    difficulty: "hard",
  },
  {
    id: 28,
    question: "Which country has the most natural lakes?",
    answers: ["Russia", "USA", "Brazil", "Canada"],
    correct: 3,
    difficulty: "hard",
  },
  {
    id: 29,
    question: "What is the hardest natural substance on Earth?",
    answers: ["Quartz", "Tungsten", "Diamond", "Corundum"],
    correct: 2,
    difficulty: "hard",
  },
  {
    id: 30,
    question: "In Roman numerals, what does 'M' represent?",
    answers: ["500", "100", "50", "1000"],
    correct: 3,
    difficulty: "hard",
  },
];

export const MONEY_LADDER = [
  "$100",
  "$200",
  "$300",
  "$500",
  "$1,000",
  "$2,000",
  "$4,000",
  "$8,000",
  "$16,000",
  "$32,000",
  "$64,000",
  "$125,000",
  "$250,000",
  "$500,000",
  "$1,000,000",
];

// Safe havens: indices 4 ($1,000) and 9 ($32,000)
export const SAFE_HAVENS = [4, 9];

export function buildQuestionSet(): Question[] {
  const easy = ALL_QUESTIONS.filter((q) => q.difficulty === "easy");
  const medium = ALL_QUESTIONS.filter((q) => q.difficulty === "medium");
  const hard = ALL_QUESTIONS.filter((q) => q.difficulty === "hard");

  const shuffle = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

  const pickedEasy = shuffle(easy).slice(0, 5);
  const pickedMedium = shuffle(medium).slice(0, 5);
  const pickedHard = shuffle(hard).slice(0, 5);

  return [...pickedEasy, ...pickedMedium, ...pickedHard];
}
