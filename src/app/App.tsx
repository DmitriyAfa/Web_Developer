import { useContext } from "react";
import { classNames } from "shared/helpers/classNames/classNames";
import { Sidebar } from "widgets/Sidebar/Sidebar";
import { Navbar } from "widgets/Navbar";
import { AppRouter } from "./providers/router";
import { ThemeContext } from "./providers/ThemeProvider/lib/ThemeContext";
import './styles/index.scss'


export const App = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={classNames('app', [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar addThemeSwitcher />
        <AppRouter />
        <Sidebar isRight />
      </div>
    </div>
  );
};
