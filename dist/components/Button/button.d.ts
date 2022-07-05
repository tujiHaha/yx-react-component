import React, { FC, ButtonHTMLAttributes } from 'react';
export declare type ButtonSize = 'default' | 'sm';
interface BaseButtonProps {
    /**自定义类名 */
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**设置 Button 的尺寸 */
    size?: ButtonSize;
    /**设置 点击事件 */
    onClick?: React.MouseEventHandler<HTMLElement>;
    /**设置 点击事件防重复的时间间隔 默认300毫秒 如不需要防重复设为0 */
    timerCount?: number;
    /**设置 按钮文字 */
    children: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps>;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button的所有属性
 *  同时默认支持防按钮的重复点击
 * **引用方法如下**
 *
 * ~~~js
 * import { Button } from 'yx-react-component'
 * ~~~
 */
export declare const Button: FC<ButtonProps>;
export {};
