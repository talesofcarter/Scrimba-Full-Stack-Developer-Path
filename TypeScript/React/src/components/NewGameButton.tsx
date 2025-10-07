import type { JSX } from "react";

type NewGameButtonProps = {
  isGameOver: boolean;
  startNewGame: () => void;
};

function NewGameButton({
  isGameOver,
  startNewGame,
}: NewGameButtonProps): JSX.Element | null {
  if (!isGameOver) {
    return null;
  } else {
    return (
      <button onClick={startNewGame} className="new-game">
        New Game
      </button>
    );
  }
}

export default NewGameButton;
