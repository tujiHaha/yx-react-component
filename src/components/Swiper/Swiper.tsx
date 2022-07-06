import React, { FC, useRef, useState, useMemo, createContext } from 'react';
import { ISwiperItemProps } from './SwiperItem';
import useGetClientWidth from './hooks/useGetClientWidth';
import type { TDirectionX } from './utils';
import { moveBoundary, getMovePageCount } from './utils';

export interface ISwiperProps {
  /** 子item */
  children: React.ReactNode;
  /** 滑动end回调  */
  onSliderChange?: (currentIndex: number) => void;
  /** 非active 状态缩小倍数 0-1之间 */
  scale?: number;
  /** 屏幕中存在Item个数 不小于1 */
  clientItemCount?: number; // 一屏里面放多少item
  /** 默认选中的index */
  defaultIndex?: number;
}

interface IContextType {
  currentIndex: number;
  onClick: (index: number) => void;
  getRef: (dom: HTMLDivElement) => void;
  itemWidth: number;
  scale: number;
}

interface IStart {
  x: number;
  y: number;
}

export const SwiperContext = createContext<IContextType>({
  currentIndex: 0,
  onClick: () => { },
  getRef: () => { },
  itemWidth: 0,
  scale: 1,
});


/**
 * 页面中滑动组件
 * **引用方法如下**  
 * 
 * ~~~js
 * 基本用法
 * import { Swiper } from 'yx-react-component'
 * //然后可以使用 Swiper.Item
 * ~~~
 */
export const Swiper: FC<ISwiperProps> = (props) => {
  const { children, onSliderChange, clientItemCount, defaultIndex } = props;
  const scale = props.scale as number;
  const dragBox = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(defaultIndex || 0);
  const startRef = useRef<IStart>({ x: 0, y: 0 });
  const pageArrRef = useRef<HTMLDivElement[]>([]);
  const clientWidth = useGetClientWidth();
  const itemWidth = useMemo(() => {
    const myCount = clientItemCount as number;
    if (myCount && clientItemCount) {
      const isPad = clientWidth >= 501 && clientWidth <= 1024;
      const rate = isPad ? 0.68 : 1;
      return Math.ceil(clientWidth / clientItemCount) * rate;
    }
    return 0;
  }, [clientWidth, clientItemCount]);

  // box translateX
  const transformXdis = useMemo(() => {
    if (itemWidth && clientWidth) {
      return (clientWidth - itemWidth) / 2 - (currentIndex + 1) * itemWidth;
    }
    return 0;
  }, [itemWidth, clientWidth, currentIndex]);
  const len = React.Children.count(children);
  const getRef = (dom: HTMLDivElement) => {
    if (dom && pageArrRef.current.length < len) {
      pageArrRef.current.push(dom);
    }
  };

  const getdragBox = () => dragBox.current as HTMLDivElement;
  // 拖动的样式设置
  const setDrag = (x: number) => {
    getdragBox().style.transform = `translate3d(${x}px, 0px, 0px)`;
  };

  // 滑动的时候设置缩放
  const setScale = (x: number, isReset: boolean) => {
    const disRate = Math.abs(x) / itemWidth > 1 ? 1 : Math.abs(x) / itemWidth;
    const rate = isReset ? 0 : disRate * (1 - scale);
    const nextPageIndex = x < 0 ? currentIndex + 1 : currentIndex - 1;
    const currentDom = pageArrRef.current[currentIndex];
    const nextDom = pageArrRef.current[nextPageIndex];
    if (currentDom) {
      currentDom.style.transform = `scale(${1 - rate})`;
    }
    if (nextDom) {
      nextDom.style.transform = `scale(${scale + rate})`;
    }
  };

  const passContext: IContextType = {
    currentIndex,
    getRef,
    onClick: itemClick,
    itemWidth,
    scale,
  };

  function itemClick(index: number) {
    if (index === currentIndex) {
    } else {
      setCurrentIndex(index);
      // onSliderChange
      onSliderChange && onSliderChange(index);
    }
  }
  // 开始滑动
  function touchStartFn(e: React.TouchEvent) {
    const { pageX, pageY } = e.changedTouches[0];
    startRef.current.x = pageX;
    startRef.current.y = pageY;
    getdragBox().style.transition = 'all 0.3s linear';
  }

  // move
  function touchMoveFn(e: React.TouchEvent) {
    const { pageX, pageY } = e.changedTouches[0];
    const moveDisX = pageX - startRef.current.x;
    const moveDisY = pageY - startRef.current.y;
    if (Math.abs(moveDisY) > Math.abs(moveDisX)) {
      return;
    }
    const directionX: TDirectionX = moveDisX >= 0 ? 'right' : 'left';
    const isAbleMove = moveBoundary(directionX, currentIndex, len);
    if (!isAbleMove) {
      return;
    }
    setDrag(transformXdis + moveDisX);
    setScale(moveDisX, false);
  }
  function touchEndFn(e: React.TouchEvent) {
    const { pageX, pageY } = e.changedTouches[0];
    const moveDisX = pageX - startRef.current.x;
    const moveDisY = pageY - startRef.current.y;
    if (Math.abs(moveDisY) > Math.abs(moveDisX)) {
      return;
    }
    const directionX: TDirectionX = moveDisX >= 0 ? 'right' : 'left';
    const isAbleMove = moveBoundary(directionX, currentIndex, len);
    if (!isAbleMove) {
      return;
    }

    // 移动页数 最多一页
    const disPage = getMovePageCount(moveDisX, itemWidth);
    if (disPage === 0) {
      //重置样式
      setScale(moveDisX, true);
      setDrag(transformXdis);
    }
    setCurrentIndex(disPage + currentIndex);
    onSliderChange && onSliderChange(disPage + currentIndex);
    getdragBox().style.transition = 'all 0 linear';
  }

  // render
  function renderChildren() {
    return React.Children.map(children, (child, index) => {
      const mychild = child as React.ReactElement<ISwiperItemProps>;
      return React.cloneElement(mychild, {
        index: index,
      });
    });
  }

  return (
    <div className='namid-slider-wrap'>
      <div
        id="slider-box"
        className={'namid-swipers'}
        ref={dragBox}
        onTouchStart={touchStartFn}
        onTouchMove={touchMoveFn}
        onTouchEnd={touchEndFn}
        style={{
          width: `${clientWidth * (len + 2)}px`,
          transform: `translate3d(${transformXdis}px,0px,0px)`,
        }}
      >
        <SwiperContext.Provider value={passContext}>
          <div style={{ width: `${itemWidth}px` }}></div>
          {renderChildren()}
          <div style={{ width: `${itemWidth}px` }}></div>
        </SwiperContext.Provider>
      </div>
    </div>
  );
};

Swiper.defaultProps = {
  clientItemCount: 1.45,
  scale: 0.85,
};


