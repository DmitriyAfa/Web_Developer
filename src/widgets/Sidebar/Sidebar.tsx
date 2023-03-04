import { ThemeSwitcher } from "app/ui/ThemeSwitcher";
import { useState } from "react"
import { classNames } from "shared/helpers/classNames/classNames"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button";
import cls from './Sidebar.module.scss'

interface SidebarProps {
  className?: string;
  addThemeSwitcher?: boolean;
  isRight?: boolean;
}

export const Sidebar = (props: SidebarProps) => {
  const {
    className,
    addThemeSwitcher,
    isRight,
  } = props;
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed(prev => !prev);
  }
  return (
    <div className={classNames(cls.Sidebar, [className], { [cls.collapsed]: collapsed })}>

      <Button
        className={isRight ? cls.collapseBtnRight : cls.collapseBtn}
        onClick={onToggle}
        square
        theme={ButtonTheme.OUTLINE}
        size={ButtonSize.M}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <div className={cls.switchers}>
        {addThemeSwitcher && <ThemeSwitcher />}
      </div>

    </div>
  )
}