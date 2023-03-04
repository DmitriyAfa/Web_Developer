import { FC, useState } from 'react';
import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './Accordion.module.scss';

interface AccordionProps {
  className?: string;
  text?: string;
}

export const Accordion: FC<AccordionProps> = ({ className, children, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <div className={classNames(cls.Accordion, [className], { [cls.AccordionOpened]: isOpen })}>
      <div onClick={toggle} className={cls.control}>
        <p>{text}</p>
        <span className={cls.arrow}>{isOpen ? '>' : '<'}</span>
      </div>
      <div className={classNames(cls.content)}>{children}</div>
    </div>
  );
};
