import React from 'react'
import classNames from 'classnames'


interface IBaseButtonProps {
  btnType?: 'primary' | 'danger' | 'default' | 'link';
  size?: 'sm' | 'lg',
  disabled?: boolean;
  href?: string
}

type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
type NativeAnchorProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>

const Button: React.FC<ButtonProps> = (props) => {

  const {
    btnType,
    size,
    disabled,
    href,
    children,
    ...rest
  } = props

  const classes = classNames('btn', {
    [`btn-${btnType}`]: !!btnType,
    [`btn-${size}`]: !!size,
    'btn-disabled': btnType === 'link' && href && disabled
  })
  return (btnType === 'link' && href) ?
    <a className={classes} href={!disabled ? href : ''} {...rest}>{children}</a> :
    <button className={classes} disabled={disabled} {...rest}>{children}</button>
}

Button.defaultProps = {
  btnType: 'default',
  disabled: false
}


export default Button