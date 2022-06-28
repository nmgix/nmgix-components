import ReactDOMServer from "react-dom/server";
import React from "react";
import "./_alert.scss";

export type AlertProps = {
  children: React.ReactElement;
  scheme: "notification" | "warning" | "interest" | "success";
  type: "header" | "window-fixed" | "fixed";
};

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
  return (
    <div className={`alert alert-${type} alert-preset-${scheme}`}>
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
