import { FC } from 'react';
import { Swiper, ISwiperProps } from './Swiper';
import { SwiperItem, ISwiperItemProps } from './SwiperItem';

type TSwiperComponent = FC<ISwiperProps> & {
  Item: FC<ISwiperItemProps>;
};

const transSwiper = Swiper as TSwiperComponent;

transSwiper.Item = SwiperItem;

export default transSwiper;
