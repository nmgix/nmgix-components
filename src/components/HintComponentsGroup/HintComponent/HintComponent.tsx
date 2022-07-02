import React, { useEffect, useState } from "react";
import { Button, buttonTypes } from "../../../components/ButtonComponent";
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
        {/* <button onClick={() => setActiveHint(false)}>убрать эту информацию Х</button> */}
        <Button
          children='убрать эту информацию'
          opacity={0.3}
          size={"s"}
          onClick={() => setActiveHint(false)}
          {...buttonTypes.noBorderCross}
        />
        {switchOption ? (
          <Button
            children='выключить этот режим'
            opacity={0.25}
            size={"s"}
            color='warning'
            onClick={(e) => {
              switchOption(e);
              setActiveHint(false);
            }}
            {...buttonTypes.noBorderCross}
          />
        ) : (
          <></>
        )}
      </div>
      <div className='hint-content'>
        <h3 className='hint-content-title'>{content.title}</h3>
        <span className='hint-content-description'>{content.description}</span>
      </div>
    </div>
  );
};
