import { useTheme } from "../../../providers/ThemeProvider/lib/useTheme"
import cls from './ThemeSwitcher.module.scss'
import ThemeIcon from 'shared/assets/icons/theme.svg'

export const ThemeSwitcher = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className={cls.ThemeSwitcher}>
      <ThemeIcon onClick={toggleTheme} />
    </div>
  )
}