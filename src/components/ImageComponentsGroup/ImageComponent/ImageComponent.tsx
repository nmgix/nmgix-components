import clsx from "clsx";
import React, { CSSProperties, useState } from "react";
import "./_image.module.scss";
import styles from "./_image.module.scss";

export type ImageProps = {
  src: string;
  label: string;
  labelOnHover?: boolean;
  showLabel?: boolean;
  index?: number;
  customStyles?: CSSProperties;
};

export const Image: React.FC<ImageProps> = ({ src, label, labelOnHover, showLabel, index, customStyles }) => {
  const [shownLabel, setShowLabel] = useState<boolean>(
    labelOnHover !== undefined ? labelOnHover : showLabel !== undefined ? showLabel : true
  );
  const handleLabelShow = (show: boolean) => {
    if (labelOnHover) {
      setShowLabel(show);
    }
  };
  return (
    <div className={clsx(styles.imageComponent)}>
      {/*  style={styles} */}
      <img
        src={src}
        onMouseEnter={() => handleLabelShow(true)}
        onMouseLeave={() => handleLabelShow(false)}
        alt={label}
        draggable={false}
      />
      {label.length > 0 && shownLabel ? (
        <p>
          {index ? <b>Кар.{index + 1}. </b> : <></>}
          {label}
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};
