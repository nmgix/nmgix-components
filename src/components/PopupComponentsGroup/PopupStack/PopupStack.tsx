import { forwardRef, ReactNode, useImperativeHandle, useState } from "react";
import { Popup, PopupProps } from "../Popup/Popup";
import { v4 as uuid } from "uuid";
import styles from "../_popupStyles.module.scss";

export type PopupRef = {
  createPopup: (content: ReactNode) => void;
  deletePopup: (id: string) => void;
};

export const PopupStack = forwardRef<PopupRef, {}>(({}, ref) => {
  const [popups, setPopups] = useState<PopupProps[]>([]);

  const createPopup = (content: ReactNode) => {
    const newPopup: PopupProps = {
      id: uuid(),
      chidlren: content,
    };
    return setPopups((prevPopups) => [...prevPopups, newPopup]);
  };

  const deletePopup = (id: string) => {
    return setPopups((prevPopups) => prevPopups.filter((popup) => popup.id !== id));
  };

  const deleteLastPopup = () => {
    deletePopup(popups[popups.length - 1].id);
  };

  useImperativeHandle(ref, () => ({
    createPopup,
    deletePopup,
  }));

  const popupsList = popups.map((popup) => <Popup {...popup} />);
  const stackComponent = (
    <div className={styles.popupWrapper}>
      <div className={styles.popupWrapperBackground} onClick={deleteLastPopup} />
      {popupsList}
    </div>
  );
  const renderComponent = popups.length > 0 ? stackComponent : <></>;
  return renderComponent;
});
