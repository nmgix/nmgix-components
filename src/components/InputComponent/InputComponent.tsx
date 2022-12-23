import clsx from "clsx";
import React, { memo } from "react";
import styles from "./_input.module.scss";

type InputProps = {
  label?: React.ReactNode;
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input: React.FC<InputProps> = memo(
  (props) => {
    const { label } = props;

    const RenderLabel: React.FC = () => (label ? <label>{label}</label> : <></>);

    return (
      <div>
        <RenderLabel />
        <input {...props} className={clsx(styles.input)} />
      </div>
    );
  },
  (prev, next) => prev.value === next.value
);
