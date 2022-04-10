import classNames from 'classnames';
import React, { useContext, useState } from 'react'
import { IMyContext, myContext } from './menu'
import { IBaseMenuItemProps } from './menuItem'

export interface IBaseSubMenuProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  index?: string
}


const SubMenu: React.FC<IBaseSubMenuProps> = (props) => {
  const { title, children, index, className } = props;
  const myConsumerContext = useContext<IMyContext>(myContext)
  const { mode, defaultOpen } = myConsumerContext
  const [isOpen, setIsOpen] = useState(()=>{
    if(defaultOpen && index){
      return defaultOpen.includes(index)
    }
    return mode === 'vertical'
  })
  function renderChildren(children: React.ReactNode) {
    return React.Children.map(children, (item, i) => {
      const myItem = item as React.FunctionComponentElement<IBaseMenuItemProps>
      const { displayName } = myItem.type
      if (displayName === 'menuItem') {
        return React.cloneElement(myItem, { index: `${index}-${i}` })
      } else {
        console.error("menu child element must name MenuItem")
      }
    })
  }
  const mouseEvent = mode === 'horizontal' ? {
    onMouseEnter: () => {
      setIsOpen(true)
    },
    onMouseLeave: () => {
      setIsOpen(false)
    }
  } : {}


  const clickEvent = mode === 'vertical' ? {
    onClick: () => {
      setIsOpen(!isOpen)
    }
  } : {}
  const classes = classNames('sub-menu', className, {
    [`sub-memu-${mode}`]: !!mode
  })
  return (
    <li className={classes} {...mouseEvent}>
      <strong className='sub-menu-title' {...clickEvent}>
        {title}
        <span className={isOpen ? 'sanjiao' : 'sanjiao close'}></span>
      </strong>
      <ul className='sub-menu-container' style={{ display: isOpen ? 'block' : 'none' }}>{renderChildren(children)}</ul>
    </li>
  )
}


SubMenu.displayName = 'subMenu'


export default SubMenu