import clsx from "clsx";
import React, { useState } from "react";
import styles from "./_input.module.scss";

type InputProps = {
  label?: React.ReactNode;
} & React.HTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = (props) => {
  const { label } = props;

  const [state, setState] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setState(e.currentTarget.value);
  };

  return (
    <div>
      {label ? <label>{label}</label> : <></>}
      <input {...props} value={state} onChange={onChange} className={clsx(styles.input)} />
    </div>
  );
};
