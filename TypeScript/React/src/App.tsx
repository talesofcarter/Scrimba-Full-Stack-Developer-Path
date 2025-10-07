import { useState } from "react";
import languages from "./languages";
import clsx from "clsx";
import { getRandomWord } from "./utils";
import Header from "./components/Header";
import ConfettiContainer from "./components/ConfettiContainer";
import GameStatus from "./components/GameStatus";
import LanguageChips from "./components/LanguageChips";
import WordLetters from "./components/WordLetters";
import NewGameButton from "./components/NewGameButton";

function App() {
  // state values
  const [currentWord, setCurrentWord] = useState<string>((): string =>
    getRandomWord()
  );
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  // derived values
  const wrongGuessCount: number = guessedLetters.filter(
    (letter: string): boolean => !currentWord.includes(letter)
  ).length;
  const isGameWon: boolean = currentWord
    .split("")
    .every((letter: string) => guessedLetters.includes(letter));
  const isGameLost: boolean = wrongGuessCount >= languages.length - 1;
  const isGameOver: boolean = isGameWon || isGameLost;

  const alphabet = "qwertyuiopasdfghjklzxcvbnm";

  function addGuessedLetters(letter: string): void {
    setGuessedLetters((prevLetters: string[]): string[] =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const keyboard = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        className={className}
        onClick={() => addGuessedLetters(letter)}
        key={letter}
        disabled={isGameOver}
      >
        {letter.toUpperCase()}
      </button>
    );
  });

  function startNewGame(): void {
    setCurrentWord(getRandomWord());
    setGuessedLetters([]);
  }

  function renderRemainingGuesses() {
    return <p className="hint">Remaining Guesses: {8 - wrongGuessCount}</p>;
  }
  return (
    <main>
      {<ConfettiContainer isGameWon={isGameWon} />}
      <Header />
      <GameStatus currentWord={currentWord} guessedLetters={guessedLetters} />
      <LanguageChips languages={languages} wrongGuessCount={wrongGuessCount} />

      <section className="hint">{renderRemainingGuesses()}</section>
      <WordLetters
        currentWord={currentWord}
        guessedLetters={guessedLetters}
        isGameLost={isGameLost}
      />

      <section className="keyboard">{keyboard}</section>
      <NewGameButton isGameOver={isGameOver} startNewGame={startNewGame} />
    </main>
  );
}

export default App;
