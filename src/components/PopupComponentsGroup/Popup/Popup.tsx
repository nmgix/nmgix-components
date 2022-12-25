import { memo, ReactNode } from "react";
import styles from "../_popupStyles.module.scss";

export type PopupProps = {
  id: string;
  chidlren: ReactNode;
};

export const Popup: React.FC<PopupProps> = memo(
  ({ chidlren }) => {
    return <div className={styles.popup}>{chidlren}</div>;
  },
  () => true
);
