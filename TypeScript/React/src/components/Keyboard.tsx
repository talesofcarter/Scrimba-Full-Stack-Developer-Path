import clsx from "clsx";
import type { JSX } from "react";

type KeyboardProps = {
  alphabet: string;
  guessedLetters: string[];
  currentWord: string;
  isGameOver: boolean;
  addGuessedLetters: (letter: string) => void;
};

export default function Keyboard({
  alphabet,
  guessedLetters,
  currentWord,
  isGameOver,
  addGuessedLetters,
}: KeyboardProps): JSX.Element {
  const keyboard: JSX.Element[] = alphabet
    .split("")
    .map((letter: string): JSX.Element => {
      const isGuessed: boolean = guessedLetters.includes(letter);
      const isCorrect: boolean = isGuessed && currentWord.includes(letter);
      const isWrong: boolean = isGuessed && !currentWord.includes(letter);

      const className: string = clsx({
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

  return <section className="keyboard">{keyboard}</section>;
}
