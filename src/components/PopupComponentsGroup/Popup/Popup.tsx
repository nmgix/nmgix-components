import React, { Children, memo, ReactNode, useEffect } from "react";
import { PopupRef } from "../PopupStack/PopupStack";
import styles from "../_popupStyles.module.scss";

export type PopupContent = {
  children: ReactNode;
  onDestroy?: (status: keyof typeof PopupCloseStatues) => void;
};

export enum PopupCloseStatues {
  "success",
  "failure",
  "error",
  "close",
}

export type PopupControls = {
  closePopup: (status: keyof typeof PopupCloseStatues) => void;
};

export type PopupProps = {
  id: string;
} & PopupContent;

export const Popup: React.FC<PopupProps & PopupRef> = memo(
  ({ id, children, deletePopup }) => {
    const closePopup = (status: keyof typeof PopupCloseStatues) => {
      deletePopup(id, status);
    };

    useEffect(() => {
      const eventName = "keydown";
      const eventHandler = ({ key }: KeyboardEvent) => {
        if (key === "Escape") {
          closePopup!("close");
        }
      };

      window.addEventListener(eventName, eventHandler);
      return () => {
        window.removeEventListener(eventName, eventHandler);
      };
    }, []);

    const childrenWithProps = Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement<PopupProps & PopupControls>(child as React.ReactElement, { id, closePopup });
      }
      return child;
    });

    return <div className={styles.popup}>{childrenWithProps}</div>;
  },
  () => true
);
