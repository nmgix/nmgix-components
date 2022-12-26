import React, { Children, memo, ReactNode } from "react";
import { PopupRef } from "../PopupStack/PopupStack";
import styles from "../_popupStyles.module.scss";

export type PopupContent = {
  children: ReactNode;
  onDestroy?: (finished: boolean) => void;
};

export type PopupControls = {
  closePopup: () => void;
};

export type PopupProps = {
  id: string;
} & PopupContent;

export const Popup: React.FC<PopupProps & PopupRef> = memo(
  ({ id, children, onDestroy, createPopup, deletePopup }) => {
    const closePopup = () => {
      onDestroy!(true);
      deletePopup(id, true);
    };

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
