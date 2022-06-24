import React, { useEffect, useState } from "react";

type hintProps = {
  content: {
    title: string;
    description: string;
  };
  hideTimeout: number;
  switchOption?: (e: any) => void;
};

export const HintComponent: React.FC<hintProps> = ({ content, hideTimeout, switchOption }) => {
  const [activeHint, setActiveHint] = useState<boolean>(true);
  useEffect(() => {
    var hideHintTimeout = setTimeout(() => setActiveHint(false), hideTimeout);
    return () => {
      clearTimeout(hideHintTimeout);
    };
  }, []);
  return (
    <div className='hint-wrapper' style={{ display: activeHint ? "block" : "none" }}>
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
