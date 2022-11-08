enum LetterState {
  Unset,
  GuessedCorrect,
  GuessedWrong
}

interface WordLetter {
  letter: string;
  state: LetterState;
}

export {LetterState, type WordLetter}