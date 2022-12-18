import React, { useEffect, useState } from "react";
import { Button, buttonTypes } from "../../../components/ButtonComponent";
import styles from "./_hint.module.scss";
import clsx from "clsx";
import { hintContentTitle } from "./_hint.module.scss";

export type HintProps = {
  type: "fixed" | "absolute";
  content: {
    title: string;
    description: string;
  };
  hideTimeout: number;
  id?: string;
  stylesCustom?: React.CSSProperties;
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
export const Hint: React.FC<HintProps> = ({ content, hideTimeout, switchOption, stylesCustom, id }) => {
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
      className={clsx(styles.hintWrapper)}
      id={`hint-component${"-" + id}`}
      style={{ display: activeHint ? "block" : "none" }}>
      {/* , ...(styles as React.CSSProperties | undefined)  */}
      <div className={clsx(styles.hintControl)}>
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
      <div>
        <h3 className={clsx(styles.hintContentTitle)}>{content.title}</h3>
        <span className={clsx(styles.hintContentDescription)}>{content.description}</span>
      </div>
    </div>
  );
};
