import React, { useContext } from 'react'
import classNames from 'classnames'
import { modeType, IMyContext, myContext } from './menu'


export interface IBaseMenuItemProps {
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  index?: string
}


const MenuItem: React.FC<IBaseMenuItemProps> = (props) => {
  const { children, className, disabled, index } = props
  const myConsumerContext = useContext<IMyContext>(myContext)
  const { activeIndex, onSelect, mode } = myConsumerContext
  const handleClick = (index: string) => {
    if (onSelect && !disabled) {
      onSelect(index)
    }
  }

  const classes = classNames('menu-item', className, {
    [`memu-item-disabled`]: !!disabled,
    [`memu-item-active`]: activeIndex === index,
    [`memu-item-${mode}`]: !!mode
  })
  return <li className={classes} onClick={() => handleClick(index || '')}>{children}</li>
}

MenuItem.displayName = 'menuItem'

MenuItem.defaultProps = {
  disabled: false
}




export default MenuItem