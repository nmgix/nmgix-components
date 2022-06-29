import React from "react";
import { Themes, useTheme } from "../../hooks/useTheme";

/**
 * ThemeWrapper component.
 * Corresponds to global theme of platform app is launched on, alternatively gets it from localStorage.
 * @returns {React.FC} Functional Component.
 */
export const ThemeWrapper: React.FC = () => {
  const { currentTheme, updateTheme } = useTheme();

  const changeToNextTheme = () => {
    var themeIndex = Themes[currentTheme];
    var themesKeys = Object.keys(Themes).filter((key) => !isNaN(Number(Themes[key as keyof typeof Themes])));
    if (themeIndex === themesKeys.length - 1) {
      updateTheme(themesKeys[0] as keyof typeof Themes);
    } else {
      updateTheme(themesKeys[themeIndex + 1] as keyof typeof Themes);
    }
  };

  return (
    <div>
      <div>Текущая тема {currentTheme}</div>
      <button onClick={changeToNextTheme}>Сменить тему</button>
    </div>
  );
};
