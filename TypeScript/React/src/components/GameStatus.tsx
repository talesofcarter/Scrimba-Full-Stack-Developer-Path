import clsx from "clsx";
import { getFarewellText } from "../utils";
import languages from "../languages";
import type { JSX } from "react";

type GameStatusProps = {
  currentWord: string;
  guessedLetters: string[];
};

function GameStatus({
  currentWord,
  guessedLetters,
}: GameStatusProps): JSX.Element {
  const wrongGuessCount: number = guessedLetters.filter(
    (letter: string): boolean => !currentWord.includes(letter)
  ).length;

  const isGameWon: boolean = currentWord
    .split("")
    .every((letter: string) => guessedLetters.includes(letter));

  const isGameLost: boolean = wrongGuessCount >= languages.length - 1;
  const isGameOver: boolean = isGameWon || isGameLost;

  const lastGuessedLetter: string = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect: boolean | string =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  const gameStatusClass: string = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  function renderGameStatus(): JSX.Element | null {
    if (!isGameOver && isLastGuessIncorrect) {
      return (
        <p className={gameStatusClass}>
          {getFarewellText(languages[wrongGuessCount - 1].name)}
        </p>
      );
    }

    if (isGameWon) {
      return (
        <>
          <h1>You win!</h1>
          <p>Well done!🎉</p>
        </>
      );
    }

    if (isGameLost) {
      return (
        <>
          <h2>Game over!</h2>
          <p>You lose! Better start learning Assembly</p>
        </>
      );
    }

    return null;
  }

  return (
    <section aria-label="polite" role="status" className={gameStatusClass}>
      {renderGameStatus()}
    </section>
  );
}
export default GameStatus;
