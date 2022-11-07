import { useEffect, useState } from "react";

export enum Themes {
  "dark",
  "light",
  "hacker",
}

export const useTheme = () => {
  const [currentTheme, setTheme] = useState<keyof typeof Themes>(() => {
    if (typeof window !== "undefined") {
      let localTheme = localStorage.getItem("nmgix-components-theme");
      if (localTheme) {
        return localTheme as keyof typeof Themes;
      } else {
        const isDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (isDarkScheme) {
          return "dark";
        } else {
          return "light";
        }
      }
    } else {
      return "dark";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, [currentTheme]);

  const updateTheme = (theme: keyof typeof Themes) => {
    localStorage.setItem("nmgix-components-theme", theme);
    setTheme(theme);
  };

  return { currentTheme, updateTheme };
};
