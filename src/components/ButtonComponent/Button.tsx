import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { AvailableSchemes } from "../AlertComponentsGroup/types";
import "./_button.scss";

export type ButtonType = {
  border: boolean;
  icon: {
    exists: boolean;
    icon?: string;
  };
};

export type ButtonTypes = { [buttonName: string]: ButtonType };

export const buttonTypes: ButtonTypes = {
  border: {
    border: true,
    icon: {
      exists: false,
    },
  },
  borderCross: {
    border: true,
    icon: {
      exists: true,
      icon: "xmark",
    },
  },
  borderArrow: {
    border: true,
    icon: {
      exists: true,
      icon: "arrow-right-long",
    },
  },
  noBorder: {
    border: false,
    icon: {
      exists: false,
    },
  },
  noBorderCross: {
    border: false,
    icon: {
      exists: true,
      icon: "xmark",
    },
  },
  noBorderArrow: {
    border: false,
    icon: {
      exists: true,
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
 * @param {string} icon fontAwesome icon name, has to be initially set in AppWrapper `library` to use.
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
  icon,
}) => {
  return (
    <button
      className={`button ${icon.exists === true ? "button-icon" : ""} button-size-${size}`}
      onClick={onClick}
      style={{
        border:
          border && color ? `2px solid var(--color-${color})` : border ? `2px solid var(--color-background-alter)` : "",
        opacity: opacity ? opacity : 1,
        color: color ? `var(--color-${color})` : `var(--color-background-alter)`,
        backgroundColor: backgroundColor ? `rgba(var(--color-${backgroundColor}), 0.3)` : "",
      }}>
      {children}
      {icon.exists === true ? <FontAwesomeIcon icon={icon.icon as IconProp} /> : <></>}
    </button>
  );
};
