import React, { useEffect, useState } from "react";
import "./_hint.scss";

export type HintProps = {
  type: "fixed" | "absolute";
  content: {
    title: string;
    description: string;
  };
  hideTimeout: number;
  id?: string;
  styles?: React.CSSProperties;
  switchOption?: (e: any) => void;
};

export const Hint: React.FC<HintProps> = ({ content, hideTimeout, switchOption, styles, id }) => {
  const [activeHint, setActiveHint] = useState<boolean>(true);
  useEffect(() => {
    if (hideTimeout > 0) {
      var hideHintTimeout = setTimeout(() => setActiveHint(false), hideTimeout);
    }
    return () => {
      clearTimeout(hideHintTimeout);
    };
  }, []);
  return (
    <div
      className='hint-wrapper'
      id={`hint-component${"-" + id}`}
      style={{ display: activeHint ? "block" : "none", ...styles }}>
      <div className='hint-control'>
        <button onClick={() => setActiveHint(false)}>убрать эту информацию Х</button>
        {switchOption ? (
          <button
            onClick={(e) => {
              switchOption(e);
              setActiveHint(false);
            }}>
            выключить этот режим Х
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className='hint-content'>
        <h3>{content.title}</h3>
        <span>{content.description}</span>
      </div>
    </div>
  );
};
