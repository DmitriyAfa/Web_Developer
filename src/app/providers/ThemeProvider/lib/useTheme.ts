import { useContext } from "react";
import { ThemeContext, Themes } from "./ThemeContext";

const LOCAL_STORAGE_THEME_KEY = 'theme';

export interface UseThemeResult {
  toggleTheme: () => void;
  theme: Themes,
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return {
    theme: theme ? theme : Themes.LIGHT,
    toggleTheme
  }
}