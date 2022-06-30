import ReactDOMServer from "react-dom/server";
import React, { useEffect, useRef } from "react";
import { AlertProps } from "../types";
import "./_alert.scss";

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
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={`alert-component alert-${type} alert-preset-${scheme}`} ref={ref}>
      {ReactDOMServer.renderToString(children).length > 80 ? (
        <>
          <span className='alert-content alert-content-scroll'>
            <span>{children}</span>
            <span>{children}</span>
            <span>{children}</span>
            <span>{children}</span>
          </span>
        </>
      ) : (
        <span className='alert-content'>{children}</span>
      )}
    </div>
  );
};
