import ReactDOMServer from "react-dom/server";

import { AlertProps } from "../types";
import styles from "../_alertStyles.module.scss";
import clsx from "clsx";
import { createRef, useEffect, useState } from "react";

import { Transition } from "react-transition-group";
import { TransitionStyles } from "types/Animation";

/**
 * Alert Component.
 * Multiple usecases component, can be used as header alert to inform about something (eg. event or other notification),
 * for onscroll window-fixed alert or inside components.
 * @param {React.ReactElement} children any content, texr or tags.
 * @param {string} scheme choose a preset color scheme.
 * @param {string} type choose a preset alert type.
 * @returns {React.FC<AlertProps>} Functional Component.
 */
export const Alert: React.FC<AlertProps> = ({ children, scheme, type }) => {
  const ref = createRef<HTMLDivElement>();

  return (
    <div
      className={clsx(
        styles.alertComponent,
        type === "Fixed" ? styles.alertFixed : type === "Header" ? styles.alertHeader : styles.alertWindowFixed,

        scheme === "notification"
          ? styles.alertPresetNotification
          : scheme === "interest"
          ? styles.alertPresetInterest
          : scheme === "success"
          ? styles.alertPresetSuccess
          : styles.alertPresetWarning
      )}
      ref={ref}>
      {ReactDOMServer.renderToString(children).length > 80 ? (
        <>
          <span className={clsx(styles.alertContent, styles.alertContentScroll)}>
            <span>{children}</span>
            <span>{children}</span>
            <span>{children}</span>
            <span>{children}</span>
          </span>
        </>
      ) : (
        <span className={clsx(styles.alertContent)}>{children}</span>
      )}
    </div>
  );
};
