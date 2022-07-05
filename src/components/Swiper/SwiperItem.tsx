import React, { FC, useContext } from 'react';
import { SwiperContext } from './Swiper';
// import styles from './swiper-item.scss';

export type TOnClick = (index: number) => void;

export interface ISwiperItemProps {
  index?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const SwiperItem: FC<ISwiperItemProps> = (props) => {
  const index = props.index as number;
  const { currentIndex, onClick, getRef, itemWidth, scale } =
    useContext(SwiperContext);

  return (
    <div
      className='namid-swipers-item'
      style={{ width: itemWidth, ...props.style }}
    >
      <div
        ref={getRef}
        className='namid-img-box'
        style={{
          transform: currentIndex === index ? `scale(1)` : `scale(${scale})`,
        }}
        onClick={() => {
          onClick && onClick(index);
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

