import React, { FC } from 'react'
import classNames from 'classnames'
export interface IBaseProps {
  /**自定义样式 */
  style?: React.CSSProperties;
  /**价格数 */
  price: number
  /**单位￥ */
  unit?: string
  /**大小 */
  size?: 'lg' | 'sm' | 'default';
}

/**
 * 页面中最常用的商品优惠场景 现价(优惠价) 支持货币符号定制 默认￥ 不展示货币单位时传空串  
 * **引用方法如下**  
 * 
 * ~~~js
 * 基本用法
 * import { DiscountPrice } from 'yx-react-component'
 * ~~~
 */

export const DiscountPrice: FC<IBaseProps> = (props) => {
  const { style, unit, size, price } = props
  const classes = classNames('discount-price', {
    [`discount-price-${size}`]: size,
  })
  return (
    <span className={classes} style={{ ...style }}>
      <i className={'unit'}>{unit}</i>
      {price}</span>
  )
}


DiscountPrice.defaultProps = {
  unit: '￥',
  size: 'default'
}

