export interface Question {
    id: number;
    question: string;
    answers: string[];
    correct: number;
    difficulty: "easy" | "medium" | "hard";
}

export const ALL_QUESTIONS: Question[] = [
    // ŁATWE
  { id: 1, question: "Kto jest autorem „Kamieni na Szaniec\"?", answers: ["Antoine de Saint-Exupéry", "Stefan Żeromski", "Aleksander Kamiński", "Charles Dickens"], correct: 2, difficulty: "easy" },
  { id: 2, question: "Jak nazywa się główny bohater„Opowieści Wigilijnej\"?", answers: ["Scrooge Ebenezer", "Zośka", "Mały Książę", "Marley"], correct: 0, difficulty: "easy" },
  { id: 3, question: "O co się pokłóciła Balladyna z Aliną?", answers: ["O Kirkora", "O maliny", "O majątek", "O kwiaty"], correct: 0, difficulty: "easy" },
  { id: 4, question: "Kim był Skawiński?", answers: ["Żołnierzem", "Latarnikiem", "Nauczycielem", "Lekarzem"], correct: 1, difficulty: "easy" },
  { id: 5, question: "Na jakiej planecie mieszkał Mały Książę?", answers: ["Asteroidzie B-612", "Ziemi", "Księżycu", "Marsie"], correct: 0, difficulty: "easy" },
  { id: 6, question: "Kto był mężem Balladyny?", answers: ["Kostryn", "Grabiec", "Pustelnik", "Kirkor"], correct: 3, difficulty: "easy" },
  { id: 7, question: "Kogo Mały Książę najbardziej kochał?", answers: ["Pilota", "Króla", "Różę", "Lisa"], correct: 2, difficulty: "easy" },
  { id: 8, question: "Jak miał na imię główny bohater „W pustyni i w puszczy\"?", answers: ["Tomek", "Staś", "Janek", "Marek"], correct: 1, difficulty: "easy" },
  { id: 9, question: "W którym roku miał miejsce chrzest Polski?", answers: ["1044", "944", "966", "1000"], correct: 2, difficulty: "easy" },
  { id: 10, question: "Kto był pierwszym królem Polski?", answers: ["Mieszko I", "Bolesław Chrobry", "Kazimierz Wielki", "Władysław Jagiełło"], correct: 1, difficulty: "easy" },
  { id: 11, question: "Dokończ przysłowie „Nie chwal dnia przed...\"", answers: ["wieczorem", "obiadem", "nocą", "zachodem słońca"], correct: 3, difficulty: "easy" },
  { id: 12, question: "Ile sylab ma słowo „szkoła\"?", answers: ["1", "3", "2", "6"], correct: 2, difficulty: "easy" },
  { id: 13, question: "Czym jest przysłowie?", answers: ["Krótkim opowiadaniem", "Zdaniem z morałem", "Wierszem", "Dialogiem"], correct: 1, difficulty: "easy" },
  { id: 14, question: "Jak nazywa się osoba mówiąca w wierszu?", answers: ["Autor", "Nowator", "Podmiot liryczny", "Bohater"], correct: 2, difficulty: "easy" },
  { id: 15, question: "Przeciwieństwo słowa „duży\" to:", answers: ["Mały", "Wielki", "Ogromny", "Szeroki"], correct: 0, difficulty: "easy" },
  { id: 16, question: "Co oznacza „itp.\"?", answers: ["tak podobnie", "i tym podobne", "i to pewna", "i tyle powiem"], correct: 1, difficulty: "easy" },
  { id: 17, question: "„Co robi\" to pytanie do:", answers: ["Rzeczownika", "Czasownika", "Przymiotnika", "Liczebnika"], correct: 1, difficulty: "easy" },
  { id: 18, question: "Kto oswoił Małego Księcia?", answers: ["Pilot", "Róża", "Król", "Lis"], correct: 3, difficulty: "easy" },
  { id: 19, question: "Z kim ostatecznie zaręczył się Tadeusz?", answers: ["Basia", "Asia", "Kasia", "Zosia"], correct: 3, difficulty: "easy" },
  { id: 20, question: "Która cecha najlepiej opisuje Scrooge'a na początku Opowieści Wigilijnej?", answers: ["hojność", "empatia", "skąpstwo", "odwaga"], correct: 2, difficulty: "easy" },
  { id: 21, question: "Jak nazywał się wierny pies Stasia i Nel?", answers: ["Azor", "Saba", "Rex", "Dingo"], correct: 1, difficulty: "easy" },
  { id: 22, question: "Na jakie pytanie odpowiada przyimek?", answers: ["jaki, jaka, jakie", "co robi", "jak", "gdzie"], correct: 2, difficulty: "easy" },

    // ŚREDNIE
  { id: 23, question: "Czym jest epitet?", answers: ["porównaniem", "pytaniem retorycznym", "określeniem przymiotnika", "określeniem rzeczownika"], correct: 3, difficulty: "medium" },
  { id: 24, question: "Dokończ przysłowie „Kto rano wstaje...\"", answers: ["ten dużo pracuje", "temu się śpieszy", "temu Pan Bóg daje", "ten idzie spać"], correct: 2, difficulty: "medium" },
  { id: 25, question: "Bohater literacki to:", answers: ["Autor", "Postać w utworze", "Czytelnik", "Narrator"], correct: 1, difficulty: "medium" },
  { id: 26, question: "Zdrobnienie to:", answers: ["Powiększenie", "Przeciwieństwo", "Pomniejszenie", "Synonim"], correct: 2, difficulty: "medium" },
  { id: 27, question: "Dialog to:", answers: ["Opis", "Rozmowa", "Wiersz", "Monolog"], correct: 1, difficulty: "medium" },
  { id: 28, question: "Interpunkcja to:", answers: ["Nauka o głoskach", "Zasady używania znaków", "Odmiana wyrazów", "Styl pisania"], correct: 1, difficulty: "medium" },
  { id: 29, question: "Porównanie zawiera słowo:", answers: ["jak", "czy", "że", "bo"], correct: 0, difficulty: "medium" },
  { id: 30, question: "Kim był „Zośka\" z Kamieni na Szaniec?", answers: ["Jan Bytnar", "Tadeusz Zawadzki", "Maciej Aleksy Dawidowski", "Skawiński"], correct: 1, difficulty: "medium" },
  { id: 31, question: "Które z podanych słów jest zaimkiem?", answers: ["piękny", "on", "szybko", "dom"], correct: 1, difficulty: "medium" },
  { id: 32, question: "Który z podanych utworów napisał Stefan Żeromski?", answers: ["„Lalka\"", "„Quo vadis\"", "„Syzyfowe prace\"", "„Pan Tadeusz\""], correct: 2, difficulty: "medium" },
  { id: 33, question: "Które wydarzenie było przełomowe dla Scrooge'a z „Opowieści wigilijnej\"?", answers: ["spotkanie z siostrzeńcem", "wizyta ducha przyszłych świąt", "rozmowa z pracownikiem", "utrata majątku"], correct: 1, difficulty: "medium" },
  { id: 34, question: "Co symbolizuje Róża z „Małego Księcia\"?", answers: ["pychę i egoizm", "miłość i odpowiedzialność", "samotność", "władzę"], correct: 1, difficulty: "medium" },
  { id: 35, question: "Co organizował „Zośka\" pod arsenałem?", answers: ["powstanie warszawskie", "powstanie styczniowe", "bitwę pod Grunwaldem", "odbicie „Rudego\" z rąk Gestapo"], correct: 3, difficulty: "medium" },
  { id: 36, question: "W jakim kraju rozgrywa się akcja powieści „W pustyni i w puszczy\"?", answers: ["w Egipcie i Sudanie", "w Kenii", "w RPA", "w Maroku"], correct: 1, difficulty: "medium" },
  { id: 37, question: "O co pokłócili się sąsiedzi w „Zemście\"?", answers: ["o majątek", "o mur graniczny", "o dziedziczenie", "o krowę"], correct: 1, difficulty: "medium" },
  { id: 38, question: "Jaki motyw występuje w „Opowieści wigilijnej\"?", answers: ["motyw przemiany", "motyw podróży", "motyw zemsty", "motyw wojny"], correct: 0, difficulty: "medium" },
  { id: 39, question: "Które zdanie jest zdaniem złożonym?", answers: ["Poszedłem do szkoły.", "Poszedłem do szkoły, ponieważ miałem lekcje.", "Piękny dom stoi przy lesie.", "Czerwony samochód jedzie szybko."], correct: 1, difficulty: "medium" },

    // TRUDNE
  { id: 40, question: "Jakie duchy widział Scrooge w „Opowieści wigilijnej\"?", answers: ["duch minionych świąt, teraźniejszych i przyszłych", "przyszłości i przeszłości", "teraźniejszości", "przyszłości i przeszłości"], correct: 0, difficulty: "hard" },
  { id: 41, question: "W jakim czasie odgrywa się akcja „Kamieni na szaniec\"?", answers: ["1912-1920", "1939-1943", "1943-1945", "1905-1910"], correct: 1, difficulty: "hard" },
  { id: 42, question: "W „Kamieniach na szaniec\" najważniejszą wartością dla bohaterów jest:", answers: ["bogactwo", "sława", "przyjaźń i patriotyzm", "indywidualizm"], correct: 2, difficulty: "hard" },
  { id: 43, question: "Jakie były systemy totalitarne?", answers: ["faszyzm, nazizm, komunizm", "demokracja, monarchia, republika", "kapitalizm, socjalizm, liberalizm", "autorytaryzm, feudalizm, anarchia"], correct: 0, difficulty: "hard" },
  { id: 44, question: "Jaki jest 3. przypadek?", answers: ["Wołacz", "Dopełniacz", "Mianownik", "Celownik"], correct: 3, difficulty: "hard" },
  { id: 45, question: "Do jakiego rodzaju literackiego należy „Pan Tadeusz\"?", answers: ["dramat", "liryka", "epika", "satyra"], correct: 2, difficulty: "hard" },
  { id: 46, question: "Co oznacza przysłowie „co ma wisieć, nie utonie\"?", answers: ["wszystko da się naprawić", "nie da się uniknąć przeznaczenia", "trzeba uważać nad wodą", "los można zmienić"], correct: 1, difficulty: "hard" },
  { id: 47, question: "Który gatunek literacki łączy elementy epiki, liryki i dramatu?", answers: ["tragedia", "powieść", "ballada", "fraszka"], correct: 2, difficulty: "hard" },
  { id: 48, question: "Który wyraz jest partykułą?", answers: ["dom", "szybko", "niech", "piękny"], correct: 2, difficulty: "hard" },
  { id: 49, question: "Które z podanych wyrazów jest archaizmem?", answers: ["komputer", "rower", "waćpan", "telefon"], correct: 2, difficulty: "hard" },
  { id: 50, question: "Ożywienie rzeczy martwych to:", answers: ["metafora", "animizacja", "epitet", "rym"], correct: 1, difficulty: "hard" },
  { id: 51, question: "Archaizm to:", answers: ["stary, przestarzały wyraz", "błąd językowy", "nowe słowo", "skrót"], correct: 0, difficulty: "hard" },
  { id: 52, question: "Wyrazy o przeciwnym znaczeniu to:", answers: ["synonimy", "homonimy", "antonimy", "anagramy"], correct: 2, difficulty: "hard" },
  { id: 53, question: "Alegoria to:", answers: ["dosłowność", "ukryte znaczenie", "rym", "zdanie"], correct: 1, difficulty: "hard" },
  { id: 54, question: "Czym zajmował się Latarnik na swojej planecie (z „Małego Księcia\")?", answers: ["pisał książki", "liczył pieniądze", "czekał na statki i dbał, aby wszyscy go podziwiali", "zapalał i gasił latarnię"], correct: 2, difficulty: "hard" },
  { id: 55, question: "Jaki utwór recytował Bernard Zygier w „Syzyfowych pracach\"?", answers: ["Tren V", "Kwiatki św. Franciszka", "Bogurodzica", "Reduta Ordona"], correct: 3, difficulty: "hard" },
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
