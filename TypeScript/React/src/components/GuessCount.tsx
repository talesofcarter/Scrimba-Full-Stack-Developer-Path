import type { JSX } from "react";

function GuessCount({
  wrongGuessCount,
}: {
  wrongGuessCount: number;
}): JSX.Element {
  return (
    <section className="hint">
      <p>Remaining Guesses: {8 - wrongGuessCount}</p>
    </section>
  );
}

export default GuessCount;
