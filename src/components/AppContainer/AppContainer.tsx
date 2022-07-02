import React, { useRef } from "react";
// import { Themes } from "../../hooks/useTheme";
import { ThemeRef, ThemeWrapper } from "../ThemeWrapperComponent";
import "./_appContainer.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowRightLong, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, buttonTypes } from "../ButtonComponent";

/**
 * AppContainer component.
 * Acts as interlayer between app global logic and local components.
 * @param {React.ReactNode} children nodes to render inside component.
 * @param {Boolean} loaded if true, component renders children, otherwise loader.
 * @returns {React.FC} Functional Component.
 */
export const AppContainer: React.FC<{ children: React.ReactNode; loaded: boolean }> = ({ children, loaded }) => {
  library.add(faArrowRightLong, faXmark);
  const themeRef = useRef<ThemeRef>(null);

  // const changeTheme = (theme: keyof typeof Themes) => {
  //   themeRef.current?.updateTheme(theme)
  // }

  return (
    <ThemeWrapper ref={themeRef}>
      <Button
        children='Сменить на другую тему'
        opacity={0.3}
        size={"s"}
        onClick={() => themeRef.current?.changeToNextTheme()}
        {...buttonTypes.border}
      />
      {loaded ? <div className='app-container'>{children}</div> : <div className='app-container loading'>loader</div>}
    </ThemeWrapper>
  );
};
