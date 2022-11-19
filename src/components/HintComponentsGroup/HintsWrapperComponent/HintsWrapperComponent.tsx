import React from "react";
import { Hint, HintProps } from "../HintComponent";
import styles from "./_hintsWrapper.module.scss";
import clsx from "clsx";

/**
 * Hint Component.
 * Component used to stick information at specific place in text or in absolute (with scroll).
 * @warning Used only in couple with HTIV component.
 * @param hints array of hints to render, renders only absolute-positioned hints, fixed hints are rendered caclulated on text height.
 * @returns {React.FC<{ hints: HintProps[] }>} Functional Component
 */
export const HintsWrapper: React.FC<{ hints: HintProps[] }> = ({ hints }) => {
  return (
    <ul className={clsx(styles.hintsWrapper)}>
      {hints
        .filter((hint) => hint.type === "absolute")
        .map((hint, i) => (
          <Hint {...hint} key={hint.id ? hint.id : hint.content.title} />
        ))}
    </ul>
  );
};
