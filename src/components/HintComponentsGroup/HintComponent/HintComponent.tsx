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

/**
 * Hint Component.
 * Component used to stick information at specific place in text or in absolute (with scroll).
 * @warning Used only in couple with HTIV component.
 * @param type fixed - stick at some place in text, absolute- floats in specific point in window.
 * @param content title and description of hint.
 * @param hideTimeout hide hint after predefined time.
 * @param id hint id.
 * @param styles optional custom styles.
 * @param switchOption if defined, will be triggered on additional-button click.
 * @returns {React.FC<HintProps>} Functional Component
 */
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
            children='переключить этот режим'
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
