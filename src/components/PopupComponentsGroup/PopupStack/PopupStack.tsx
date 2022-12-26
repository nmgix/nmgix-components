import { forwardRef, ReactNode, useImperativeHandle, useState } from "react";
import { Popup, PopupCloseStatues, PopupProps } from "../Popup/Popup";
import { v4 as uuid } from "uuid";
import styles from "../_popupStyles.module.scss";

export type PopupRef = {
  createPopup: (content: ReactNode, onDestroy?: (status: keyof typeof PopupCloseStatues) => void) => void;
  deletePopup: (id: string, status: keyof typeof PopupCloseStatues) => void;
} | null;

export const PopupStack = forwardRef<PopupRef, {}>(({}, ref) => {
  const [popups, setPopups] = useState<PopupProps[]>([]);

  const createPopup = (content: ReactNode, onDestroy?: (status: keyof typeof PopupCloseStatues) => void) => {
    const newPopup: PopupProps = {
      id: uuid(),
      children: content,
      onDestroy,
    };
    return setPopups((prevPopups) => [...prevPopups, newPopup]);
  };

  const deletePopup = (id: string, status: keyof typeof PopupCloseStatues) => {
    return setPopups((prevPopups) =>
      prevPopups.filter((popup) => {
        if (popup.id === id) {
          popup.onDestroy && popup.onDestroy(status);
          return;
        } else {
          return popup;
        }
      })
    );
  };

  const deleteLastPopup = () => {
    deletePopup(popups[popups.length - 1].id, "close");
  };

  useImperativeHandle(ref, () => ({
    createPopup,
    deletePopup,
  }));

  const stackComponent = (
    <div className={styles.popupWrapper}>
      <div className={styles.popupWrapperBackground} onClick={deleteLastPopup} />
      {popups.map((popup) => (
        <Popup {...popup} createPopup={createPopup} deletePopup={deletePopup} key={popup.id} />
      ))}
    </div>
  );
  const renderComponent = popups.length > 0 ? stackComponent : <></>;
  return renderComponent;
});
