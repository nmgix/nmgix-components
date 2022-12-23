import React, { useRef } from "react";
import { Themes } from "../../hooks/useTheme";
import { ThemeRef, ThemeWrapper } from "./ThemeWrapperComponent";
import styles from "./_appThemeContainer.module.scss";
import { Button } from "../ButtonComponent";
import clsx from "clsx";

/**
 * AppThemeContainer component.
 * Acts as interlayer between app global logic and local components.
 * @param {React.ReactNode} children nodes to render inside component.
 * @param {Boolean} loaded if true, component renders children, otherwise loader.
 * @returns {React.FC} Functional Component.
 */
export const AppThemeContainer: React.FC<{
  children: React.ReactNode;
  loaded: boolean;
  noButton?: boolean;
  classNames?: string[];
}> = ({ children, loaded, noButton, classNames }) => {
  const themeRef = React.createRef<ThemeRef>();

  // const changeTheme = (theme: keyof typeof Themes) => {
  //   themeRef.current?.updateTheme(theme);
  // };

  return (
    <ThemeWrapper ref={themeRef} classNames={classNames}>
      {!noButton && (
        <Button
          children='Сменить на другую тему'
          opacity={0.3}
          size={"s"}
          onClick={() => themeRef?.current?.changeToNextTheme()}
          buttonBorder
        />
      )}
      {loaded ? (
        <div className={clsx(styles.appContainer)}>{children}</div>
      ) : (
        <div className={clsx(styles.appContainer, styles.loading)}>loader</div>
      )}
    </ThemeWrapper>
  );
};
