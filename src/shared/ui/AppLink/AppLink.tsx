import { memo, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './AppLink.module.scss';

interface AppLinkProps extends NavLinkProps {
  children: ReactNode;
  className?: string;
}

export const AppLink = memo(({ to, children, className }: AppLinkProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(
        cls.AppLink,
        [className],
        { [cls.active]: isActive }
      )}
    >
      {children}
    </NavLink>
  )
})