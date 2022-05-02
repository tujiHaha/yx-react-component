import React from 'react'
import classNames from 'classnames'

interface IBaseProps {
  style?: React.CSSProperties;
  size?: 'lg' | 'sm' | 'default';
  price: string | number;
  unit?: string
}

const OriginPrice: React.FC<IBaseProps> = (props) => {
  const { style, size, unit, price } = props
  const classes = classNames('origin-price', {
    [`btn-${size}`]: size,
  })
  return (
    <span className={classes} style={{ ...style }}>
      {unit}{price}</span>
  )
}

OriginPrice.defaultProps = {
  size: 'default',
  unit: '￥'
}

export default OriginPrice