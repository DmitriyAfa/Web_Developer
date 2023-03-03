import { ReactNode, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT;

interface ThemeProviderProps {
  children: ReactNode;
  inititalTheme?: Themes;
}

export const ThemeProvider = ({ children, inititalTheme }: ThemeProviderProps) => {

  const [theme, setTheme] = useState<Themes>(inititalTheme || defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}