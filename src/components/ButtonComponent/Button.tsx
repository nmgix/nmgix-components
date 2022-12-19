import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { AvailableSchemes } from "../AlertComponentsGroup/types";
import styles from "./_button.module.scss";
import clsx from "clsx";

export type ButtonType = {
  border: boolean;
  icon?: {
    icon?: string;
  };
};

export type ButtonTypes = { [buttonName: string]: ButtonType };

export const buttonTypes: ButtonTypes = {
  border: {
    border: true,
  },
  borderCross: {
    border: true,
    icon: {
      icon: "xmark",
    },
  },
  borderArrow: {
    border: true,
    icon: {
      icon: "arrow-right-long",
    },
  },
  noBorder: {
    border: false,
  },
  noBorderCross: {
    border: false,
    icon: {
      icon: "xmark",
    },
  },
  noBorderArrow: {
    border: false,
    icon: {
      icon: "arrow-right-long",
    },
  },
};

export type ButtonProps = {
  children: React.ReactNode;
  size: "xs" | "s" | "m" | "x" | "xl";
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  color?: keyof typeof AvailableSchemes;
  backgroundColor?: keyof typeof AvailableSchemes;
  opacity?: number;
  classNames?: string[];
};

/**
 * Button component.
 * Check icon param docs to setup icon for button component.
 * @param {string | ReactNode} children text or ReactNodes to render.
 * @param {string} color preset color of text and icons.
 * @param {string} backgroundColor preset background color of button.
 * @param {number} opacity opacity of whole component.
 * @param {string} size preset size of text font and icons.
 * @param {Function} onClick function called after button click.
 * @param {boolean} border boolean parameter, `true`- 2px solid $color, `false`-none.
 * @param {string[]} classNames string array, added after basic classnames.
 * @returns {React.FC} Functional Component.
 */
export const Button: React.FC<ButtonProps & ButtonType> = ({
  children,
  color,
  backgroundColor,
  opacity,
  size,
  onClick,
  border,
  classNames,
}) => {
  const buttonSize =
    size === "m"
      ? styles.buttonSizeM
      : size === "s"
      ? styles.buttonSizeS
      : size === "xs"
      ? styles.buttonSizeXs
      : size === "x"
      ? styles.buttonSizeX
      : size === "xl"
      ? styles.buttonSizeXl
      : styles.buttonSizeM;

  return (
    <button
      className={clsx(styles.button, buttonSize, classNames)}
      onClick={onClick}
      style={{
        border:
          border && color
            ? `2px solid rgba(var(--color-${color}),1)`
            : border
            ? `2px solid rgba(var(--color-background-alter),1)`
            : undefined,
        opacity: opacity ? opacity : 1,
        backgroundColor: backgroundColor ? `rgb(var(--color-${backgroundColor}))` : undefined,
        color: color ? `rgb(var(--color-${color})` : `rgb(var(--color-background-alter))`,
      }}>
      {children}
    </button>
  );
};
