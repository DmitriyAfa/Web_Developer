import cls from './MainPage.module.scss'
import PostSVG from '../assets/post.svg'
import { Accordion } from 'shared/ui/Accordion';
import { Text, TextAlign, TextTypes } from 'shared/ui/Text';

const MainPage = () => {
  return (
    <>
      <div className={cls.MainPage}>
        <Text type={TextTypes.TITLE} align={TextAlign.CENTER}>Title</Text>
        <Text type={TextTypes.SUBTITLE} align={TextAlign.CENTER}>Subtitle</Text>
        <Accordion text='Изображение' >
          <PostSVG />
        </Accordion>
      </div>
    </>
  );
};

export default MainPage;