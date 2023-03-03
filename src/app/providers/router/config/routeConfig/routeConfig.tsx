import { RouteProps } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { FrontendPage } from "pages/FrontendPage";

export enum AppRoutes {
  MAIN = 'main',
  FRONTEND = 'frontend'
};

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.FRONTEND]: '/frontend',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },
  [AppRoutes.FRONTEND]: {
    path: RoutePaths.frontend,
    element: <FrontendPage />,
  },
}
