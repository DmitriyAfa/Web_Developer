import { Link } from "react-router-dom";
import { Counter } from "../components/Counter";
import { AppRouter } from "./providers/router";
import './styles/index.scss'

export const App = () => {
  return (
    <div className='app'>
      <Link to='/'>Главная</Link>
      <Link to='/frontend'>Frontend</Link>
      <AppRouter />
    </div>
  );
};
