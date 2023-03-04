import { FC } from 'react';
import { classNames } from 'shared/helpers/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTypes {
  TITLE = 'title',
  SUBTITLE = 'subtitle',
  TEXT = 'text'
}

export enum TextAlign {
  CENTER = 'align_center'
}

interface TextProps {
  className?: string;
  type: TextTypes;
  align?: TextAlign;
}

export const Text: FC<TextProps> = ({ className, children, type = TextTypes.TEXT, align }) => {

  if (type === TextTypes.TITLE) {
    return (
      <h2 className={classNames(cls.Text, [className], { [cls.align]: align })}>
        {children}
      </h2>
    )
  }

  if (type === TextTypes.SUBTITLE) {
    return (
      <h3 className={classNames(cls.Text, [className], { [cls.align]: align })}>
        {children}
      </h3>
    )
  }

  return (
    <p className={classNames(cls.Text, [className], { [cls.align]: align })}>
      {children}
    </p>
  );
};
