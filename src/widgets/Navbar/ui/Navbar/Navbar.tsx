
import { memo } from 'react';
import { classNames } from 'shared/helpers/classNames/classNames';
import { navbarItemsList } from 'widgets/Navbar/model/items';
import { NavbarItem } from '../NavbarItem/NavbarItem';
import cls from './Navbar.module.scss';

interface NavbarProps { className?: string; }

export const Navbar = memo(({ className }: NavbarProps) => {

  const Routes = navbarItemsList.map(({ Icon, path, text }) => {
    return <NavbarItem Icon={Icon} path={path} text={text} />
  })

  return (
    <div className={classNames(cls.Navbar, [className])}>
      <div className={cls.links}>
        {Routes}
      </div>
    </div>
  );
});
