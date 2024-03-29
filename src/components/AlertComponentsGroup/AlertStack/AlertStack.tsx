import React, { forwardRef, Ref, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Alert } from "../Alert/";
import styles from "../_alertStyles.module.scss";
import { AlertProps, AlertRef, AlertStackChildProps } from "../types";

import clsx from "clsx";
import { Transition, TransitionGroup } from "react-transition-group";
import { TransitionStyles } from "../../../types/Animation";

/**
 * Alert Stack Child component.
 * Child of main stack, has ability to delete itself on timeout set by parent.
 * @param {AlertStackChildProps} alert alert data to render, same as AlertProps but also has id parameter.
 * @param {number | null} timeout is set in parent, can be null so alerts dont delete automatically.
 * @param {(id: number) => void} removeElement is got from parent, used as callback function after timeout (if is set).
 * @returns {React.FC} Functional Component.
 */
export const AlertStackChild: React.FC<{
  animationState: string;
  alert: AlertStackChildProps;
  timeout: number | null;
  removeElement: (id: number) => void;
}> = ({ alert, timeout, removeElement, animationState }) => {
  const transitionStyles: TransitionStyles = {
    entering: { opacity: 0, transform: "translateY(50px)" },
    entered: { opacity: 1, transform: "translateY(0px)" },
    exiting: { opacity: 0, transform: "translateY(-50px)" },
    exited: { opacity: 0 },
  };

  useEffect(() => {
    if (timeout !== null) {
      var deleteTimeout = setTimeout(() => {
        removeElement(alert.id);
      }, timeout);
    }
    return () => clearTimeout(deleteTimeout);
  }, []);

  return (
    <li style={{ ...transitionStyles[animationState as keyof TransitionStyles] }}>
      <Alert {...alert} />
    </li>
  );
};

export type AlertStackSettings = {
  alerts: AlertProps[];
  timeout: number | null;
  windowFixed?: boolean;
  customStyles?: React.CSSProperties;
};

/**
 * Alert Stack component.
 * Responsible for stacking fixed-type alerts in vertical stack with option to delete each node after timeout.
 * @param {AlertProps[]&{id: number}} alerts alerts props to be rendered.
 * @param {number | null} timeout after a period of time (in ms) last node will be removed from stack, can be set null
 * @returns {forwardRef} Functional Component.
 */
export const AlertStack = forwardRef<AlertRef, AlertStackSettings>(
  ({ alerts, timeout, windowFixed, customStyles }, ref) => {
    const [currentAlerts, setCurrentAlerts] = useState<AlertStackChildProps[]>(
      alerts.map((alert, i) => {
        return { ...alert, id: i };
      })
    );

    const addAlert = (alert: AlertProps): void => {
      let index = currentAlerts.length > 0 ? currentAlerts[currentAlerts.length - 1].id + 1 : 0;

      if (currentAlerts.length > 10) {
        setCurrentAlerts(() => [...currentAlerts.slice(1), { ...alert, id: index }]);
      } else {
        setCurrentAlerts(() => [...currentAlerts, { ...alert, id: index }]);
      }
    };
    const removeAlert = (id: number): void => {
      setCurrentAlerts((state) => state.filter((alert) => alert.id !== id));
    };

    useImperativeHandle(ref, () => ({
      addAlert,
      removeAlert,
    }));

    const alertStackComponent = (
      <ul
        style={customStyles}
        className={clsx(styles.alertStack, windowFixed ? styles.alertStackWindowFixed : undefined)}>
        <TransitionGroup component={null}>
          {currentAlerts.map((alert) => (
            <Transition timeout={100} unmountOnExit key={alert.id}>
              {(state) => (
                <AlertStackChild alert={alert} timeout={timeout} removeElement={removeAlert} animationState={state} />
              )}
            </Transition>
          ))}
        </TransitionGroup>
      </ul>
    );

    return alertStackComponent;
  }
);
