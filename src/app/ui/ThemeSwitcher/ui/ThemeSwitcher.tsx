import { useTheme } from "../../../providers/ThemeProvider/lib/useTheme"

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>Переключить тему</button>
  )
}