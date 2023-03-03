import { useContext } from "react";
import { classNames } from "shared/helpers/classNames/classNames";
import { AppRouter } from "./providers/router";
import { ThemeContext } from "./providers/ThemeProvider/lib/ThemeContext";
import './styles/index.scss'
import { ThemeSwitcher } from "./ui/ThemeSwitcher";

export const App = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme)
  return (
    <div className={classNames('app', [theme])}>
      <AppRouter />
      <ThemeSwitcher />
    </div>
  );
};
