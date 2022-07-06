import React, { FC, ButtonHTMLAttributes, useRef } from 'react'
import classNames from 'classnames'
export type ButtonSize = 'default' | 'sm' | 'lg'
export type ButtonType = 'default' | 'orange' | 'blue' | 'linear-red-orange' | 'linear-yellow-orange'

interface BaseButtonProps {
  /**自定义类名 */
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的主题色样式 */
  btnType?: ButtonType;
  /**设置 点击事件 */
  onClick?: () => void
  /**设置 点击事件防重复的时间间隔 默认300毫秒 如不需要防重复设为0 */
  timerCount?: number;
  /**设置 按钮文字 */
  children: string;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps>

interface IClosureFlag {
  getFlag: () => boolean;
  setFlag: (flag: boolean) => void;
}
function closureFlag(): IClosureFlag {
  let flag = true;
  return {
    getFlag: () => flag,
    setFlag: (myFlag: boolean) => {
      flag = myFlag;
    },
  };
}

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button的所有属性
 *  同时默认支持防按钮的重复点击
 * **引用方法如下**  
 * 
 * ~~~js
 * import { Button } from 'yx-react-component'
 * ~~~
 */
export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    disabled,
    size,
    btnType,
    children,
    onClick,
    timerCount,
    ...restProps
  } = props

  const flagRef = useRef(closureFlag())
  const { getFlag, setFlag } = flagRef.current
  // btn, btn-lg, btn-primary
  const classes = classNames('namid-btn', className, {
    [`namid-btn-size-${size}`]: size,
    [`namid-btn-type-${btnType}`]: btnType,
    'disabled': disabled
  })

  function myClick(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (disabled) {
      return
    }

    if (onClick && timerCount) {
      const flag = getFlag()
      if (!flag) {
        return
      }
      onClick()
      setFlag(false)
      const timer = setTimeout(() => {
        clearTimeout(timer)
        setFlag(true)
      }, timerCount);
      return
    }
    if (onClick) {
      onClick()
    }
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={myClick}
      {...restProps}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  disabled: false,
  size: 'default',
  timerCount: 300
}

