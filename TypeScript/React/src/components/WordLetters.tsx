import clsx from "clsx";
import type { JSX } from "react";

type WordLettersProps = {
  currentWord: string;
  guessedLetters: string[];
  isGameLost: boolean;
};

function WordLetters({
  currentWord,
  guessedLetters,
  isGameLost,
}: WordLettersProps): JSX.Element {
  const letterElements: JSX.Element[] = currentWord
    .split("")
    .map((letter: string, index: number): JSX.Element => {
      const shouldRevealLetter: boolean =
        isGameLost || guessedLetters.includes(letter);

      const letterClassName: string = clsx(
        isGameLost && !guessedLetters.includes(letter) && "missed-letter"
      );

      return (
        <span className={letterClassName} key={index}>
          {shouldRevealLetter ? letter.toUpperCase() : ""}
        </span>
      );
    });

  return <section className="word">{letterElements}</section>;
}
export default WordLetters;
