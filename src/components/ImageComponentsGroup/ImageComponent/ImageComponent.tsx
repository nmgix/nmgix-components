import React, { useState } from "react";

export type imageProps = {
  src: string;
  label: string;
  labelOnHover?: boolean;
  index?: number;
};

export const ImageComponent: React.FC<imageProps> = ({ src, label, labelOnHover, index }) => {
  const [shownLabel, setShowLabel] = useState<boolean>(labelOnHover ? labelOnHover : true);
  const handleLabelShow = (show: boolean) => {
    if (labelOnHover) {
      setShowLabel(show);
    }
  };
  return (
    <div className='image-component'>
      <img
        src={src}
        onMouseEnter={() => handleLabelShow(true)}
        onMouseLeave={() => handleLabelShow(false)}
        alt={label}
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
