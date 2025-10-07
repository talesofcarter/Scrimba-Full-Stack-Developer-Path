import { useState } from "react";
import languages from "./languages";
import clsx from "clsx";
import { getFarewellText, getRandomWord } from "./utils";
import Header from "./components/Header";
import ConfettiContainer from "./components/ConfettiContainer";

function App() {
  // state values
  const [currentWord, setCurrentWord] = useState<string>((): string => getRandomWord());
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
  const lastGuessedLetter: string = guessedLetters[guessedLetters.length - 1];
  const isLastGuessIncorrect: boolean | string =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);
  const alphabet = "qwertyuiopasdfghjklzxcvbnm";

  function addGuessedLetters(letter: string): void {
    setGuessedLetters((prevLetters: string[]): string[] =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter]
    );
  }

  const languagesElement = languages.map((language, index) => {
    const isLangLost = index < wrongGuessCount;
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    const className = clsx("chip", isLangLost && "lost");
    return (
      <span className={className} style={styles} key={language.name}>
        {language.name}
      </span>
    );
  });

  const letterElements = currentWord.split("").map((letter, index) => {
    const shouldRevealLetter = isGameLost || guessedLetters.includes(letter);
    const letterClassName = clsx(
      isGameLost && !guessedLetters.includes(letter) && "missed-letter"
    );
    return (
      <span className={letterClassName} key={index}>
        {shouldRevealLetter ? letter.toUpperCase() : ""}
      </span>
    );
  });

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

  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
    farewell: !isGameOver && isLastGuessIncorrect,
  });

  function renderGameStatus() {
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
      <section className={gameStatusClass}>{renderGameStatus()}</section>

      <section className="language-chips">{languagesElement}</section>

      <section className="hint">{renderRemainingGuesses()}</section>

      <section className="word">{letterElements}</section>

      <section className="keyboard">{keyboard}</section>

      {isGameOver && (
        <button onClick={startNewGame} className="new-game">
          New Game
        </button>
      )}
    </main>
  );
}

export default App;
