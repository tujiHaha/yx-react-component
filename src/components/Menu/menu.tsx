import React, { createContext, useState } from 'react'
import classNames from 'classnames'
import { IBaseMenuItemProps } from './menuItem'
type OnSelect = (selectedIndex: string) => void;

export type modeType = 'horizontal' | 'vertical'
interface IBaseMenuProps {
  className?: string;
  defaultIndex?: string;
  onSelect?: OnSelect
  children?: React.ReactNode;
  mode: modeType,
  defaultOpen?: string[]
}

export interface IMyContext {
  onSelect?: OnSelect,
  activeIndex: string;
  mode: modeType,
  defaultOpen?: string[]
}


export const myContext = createContext<IMyContext>({
  activeIndex: '0',
  mode: 'vertical',
  defaultOpen: []
});


function renderChildren(children: React.ReactNode) {
  return React.Children.map(children, (item, index) => {
    const myItem = item as React.FunctionComponentElement<IBaseMenuItemProps>
    const { displayName } = myItem.type
    if (displayName === 'menuItem' || displayName === 'subMenu') {
      return React.cloneElement(myItem, { index: `${index}` })
    } else {
      console.error("menu child element must name MenuItem or subMenu")
    }
  })
}


const Menu: React.FC<IBaseMenuProps> = (props) => {
  const {
    children,
    mode,
    className,
    onSelect,
    defaultIndex,
    defaultOpen
  } = props
  const [activeIndex, setActiveIndex] = useState(defaultIndex || '0')

  const classes = classNames('menu-wrap', className, {
    [`menu-wrap-${mode}`]: !!mode,
  })



  // 处理选择
  function handleSelect(index: string) {
    setActiveIndex(index)
    if (onSelect) {
      onSelect(index)
    }
  }


  return <ul className={classes}>
    <myContext.Provider value={{
      activeIndex,
      mode,
      onSelect: handleSelect,
      defaultOpen: defaultOpen
    }}>
      {renderChildren(children)}
    </myContext.Provider>
  </ul>
}

export default Menu