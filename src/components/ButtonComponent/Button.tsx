import React, { DetailedHTMLProps, memo } from "react";
import { AvailableSchemes } from "../AlertComponentsGroup/types";
import styles from "./_button.module.scss";
import clsx from "clsx";

export type ButtonProps = {
  children: React.ReactNode;
  size: "xs" | "s" | "m" | "x" | "xl";
  buttonBorder: boolean;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: keyof typeof AvailableSchemes;
  backgroundColor?: keyof typeof AvailableSchemes;
  opacity?: number;
  classNames?: string[];
  type?: "submit";
};

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, color, backgroundColor, opacity, size, onClick, buttonBorder, classNames, type } = props;

  return (
    <button
      // @ts-ignore
      className={clsx(styles.button, styles[`buttonSize${size.charAt(0).toUpperCase() + size.slice(1)}`], classNames)}
      onClick={onClick}
      type={type ?? "button"}
      style={{
        border: buttonBorder ? `2px solid rgba(var(--color-${color ?? "background-alter"}),1)` : undefined,
        opacity: opacity ?? 1,
        backgroundColor: backgroundColor ? `rgb(var(--color-${backgroundColor}))` : undefined,
        color: `rgb(var(--color-${color ?? "background-alter"}))`,
      }}>
      {children}
    </button>
  );
};
