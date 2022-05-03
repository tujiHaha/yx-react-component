import React, { FC, ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

export type ButtonSize = 'default' | 'sm'

interface BaseButtonProps {
  /**自定义类名 */
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  children: React.ReactNode;
}
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps>
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性  
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
    children,
    ...restProps
  } = props
  // btn, btn-lg, btn-primary
  const classes = classNames('package-btn', className, {
    [`package-btn-${size}`]: size,
    'disabled': disabled
  })

  return (
    <button
      className={classes}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  )

}

Button.defaultProps = {
  disabled: false,
  size: 'default'
}
