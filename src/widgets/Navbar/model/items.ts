import { RoutePaths } from "app/providers/router/config/routeConfig/routeConfig";
import { SVGProps, VFC } from "react";
import MainIcon from 'shared/assets/icons/main.svg'
import FrontendIcon from 'shared/assets/icons/frontend.svg'

export interface NavbarItemType {
  path: string;
  text: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const navbarItemsList: NavbarItemType[] = [
  {
    path: RoutePaths.main,
    text: 'Главная',
    Icon: MainIcon,
  },
  {
    path: RoutePaths.frontend,
    text: 'Frontend',
    Icon: FrontendIcon,
  }
]