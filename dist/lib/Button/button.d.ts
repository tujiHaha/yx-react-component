import React, { FC, ButtonHTMLAttributes } from 'react';
export declare type ButtonSize = 'default' | 'sm';
interface BaseButtonProps {
    /**自定义类名 */
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**设置 Button 的尺寸 */
    size?: ButtonSize;
    children: React.ReactNode;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps>;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
 * **引用方法如下**
 *
 * ~~~js
 * import { Button } from 'yx-react-component'
 * ~~~
 */
export declare const Button: FC<ButtonProps>;
export {};
