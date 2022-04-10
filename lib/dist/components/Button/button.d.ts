import React from 'react';
interface IBaseButtonProps {
    btnType?: 'primary' | 'danger' | 'default' | 'link';
    size?: 'sm' | 'lg';
    disabled?: boolean;
    href?: string;
}
declare type NativeButtonProps = IBaseButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>;
declare type NativeAnchorProps = IBaseButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;
declare type ButtonProps = Partial<NativeButtonProps & NativeAnchorProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
