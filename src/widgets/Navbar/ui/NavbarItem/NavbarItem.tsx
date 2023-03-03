
import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { NavbarItemType } from 'widgets/Navbar/model/items';
import cls from './NavbarItem.module.scss';


export const NavbarItem = memo(({ Icon, path, text }: NavbarItemType) => {
  return (
    <AppLink to={path} className={cls.item}>
      <span>
        <Icon></Icon>
      </span>
      {text}
    </AppLink>
  )
})
