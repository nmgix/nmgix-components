import React, { useEffect, useState } from "react";
import { Hint, HintProps } from "../HintComponent";
import "./_hintsWrapper.scss";

export const HintsWrapper: React.FC<{ hints: HintProps[] }> = ({ hints }) => {
  return (
    <ul className='hints-wrapper'>
      {hints
        .filter((hint) => hint.type === "absolute")
        .map((hint, i) => (
          <Hint {...hint} key={hint.id ? hint.id : hint.content.title} />
        ))}
    </ul>
  );
};
