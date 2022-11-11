import React, { forwardRef, useImperativeHandle } from "react";
import { Themes, useTheme } from "../../hooks/useTheme";

export type ThemeRef = {
  currentTheme: keyof typeof Themes;
  updateTheme: (theme: keyof typeof Themes) => void;
  changeToNextTheme: () => void;
} | null;

/**
 * ThemeWrapper component.
 * Corresponds to global theme of platform app is launched on, alternatively gets it from localStorage.
 * @returns {React.FC} Functional Component.
 */
export const ThemeWrapper = forwardRef<ThemeRef, { children: React.ReactNode }>(({ children }, ref) => {
  const { currentTheme, updateTheme } = useTheme();
  // better to make on React.Context but i just want to fun with refs bacause of lack of use it usually

  const changeToNextTheme = () => {
    let themeIndex = Themes[currentTheme];
    let themesKeys = Object.keys(Themes).filter((key) => !isNaN(Number(Themes[key as keyof typeof Themes])));
    if (themeIndex === themesKeys.length - 1) {
      updateTheme(themesKeys[0] as keyof typeof Themes);
    } else {
      updateTheme(themesKeys[themeIndex + 1] as keyof typeof Themes);
    }
  };

  useImperativeHandle(ref, () => ({
    currentTheme,
    updateTheme,
    changeToNextTheme,
    // currentTheme: "dark" as keyof typeof Themes,
    // updateTheme: () => {},
    // changeToNextTheme: () => {},
  }));

  return <>{children}</>;
});
