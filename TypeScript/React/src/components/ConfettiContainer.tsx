import Confetti from "react-confetti";
import type { JSX } from "react";

function ConfettiContainer({ isGameWon }: { isGameWon: boolean }): JSX.Element | null {
  if (!isGameWon) {
    return null;
  } else {
    return <Confetti />;
  }
}

export default ConfettiContainer;
