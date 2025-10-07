import clsx from "clsx";
import type { Language } from "../languages";
import type { JSX } from "react";

type LanguageChipsProps = {
  languages: Language[];
  wrongGuessCount: number;
};

function LanguageChips({
  languages,
  wrongGuessCount,
}: LanguageChipsProps): JSX.Element {
  const languagesElement: JSX.Element[] = languages.map(
    (language: Language, index: number): JSX.Element => {
      const isLangLost: boolean = index < wrongGuessCount;

      const styles: Omit<Language, "name"> = {
        backgroundColor: language.backgroundColor,
        color: language.color,
      };

      const className: string = clsx("chip", isLangLost && "lost");

      return (
        <span className={className} style={styles} key={language.name}>
          {language.name}
        </span>
      );
    }
  );

  return <section className="language-chips">{languagesElement}</section>;
}
export default LanguageChips;
