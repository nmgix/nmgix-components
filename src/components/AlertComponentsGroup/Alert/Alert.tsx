import ReactDOMServer from "react-dom/server";
import React, { useEffect, useRef } from "react";
import { AlertProps } from "../types";
import styles from "../_alertStyles.module.scss";
// import cn from "classnames";
import { clsx } from "clsx";

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
  const ref = React.createRef<HTMLDivElement>();

  return (
    <div
      className={clsx(
        styles.alertComponent,
        type === "Fixed" ? styles.alertFixed : type === "Header" ? styles.alertHeader : styles.alertWindowFixed,
        scheme === "Notification"
          ? styles.alertPresetNotification
          : scheme === "Interest"
          ? styles.alertPresetInterest
          : scheme === "Success"
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

// import ReactDOMServer from "react-dom/server";
// import React, { useEffect, useRef } from "react";
// import { AlertProps } from "../types";
// import styles from "../_alertStyles.module.scss";

// import cn from "classnames";

// /**
//  * Alert Component.
//  * Multiple usecases component, can be used as header alert to inform about something (eg. event or other notification),
//  * for onscroll window-fixed alert or inside components.
//  * @param {React.ReactElement} children any content, texr or tags.
//  * @param {string} scheme choose a preset color scheme.
//  * @param {string} type choose a preset alert type.
//  * @returns {React.FC<AlertProps>} Functional Component.
//  */
// export const Alert: React.FC<AlertProps> = ({ children, scheme, type }) => {
//   const ref = React.createRef<HTMLDivElement>();

//   //  // alert-component alert-${type} alert-preset-${scheme}

//   return (
//     <div
//       ref={ref}
//       // @ts-ignore
//       // `${styles.alertComponent} ${styles.alertContent} ${styles[`alertPreset${scheme}`]} ${styles[type]}`
//       className={cn(styles)}>
//       {ReactDOMServer.renderToString(children).length > 80 ? (
//         <>
//           <span className={`${styles.alertContent} ${styles.alertContentScroll}`}>
//             <span>{children}</span>
//             <span>{children}</span>
//             <span>{children}</span>
//             <span>{children}</span>
//           </span>
//         </>
//       ) : (
//         <span className={`${styles.alertContent}`}>{children}</span>
//       )}
//     </div>
//   );
// };
