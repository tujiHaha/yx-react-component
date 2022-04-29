import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

declare type ButtonSize = 'lg' | 'sm';
declare type ButtonType = 'primary' | 'default' | 'danger' | 'link';
interface BaseButtonProps {
    /**自定义类名 */
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**设置 Button 的尺寸 */
    size?: ButtonSize;
    /**设置 Button 的类型 */
    btnType?: ButtonType;
    children: React.ReactNode;
    /** 设置链接按钮跳转网址，当btnType='link' 时需填入*/
    href?: string;
}
declare type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
declare type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>;
declare type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
 * **引用方法如下**
 *
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
declare const Button: FC<ButtonProps>;

declare type OnSelect = (selectedIndex: string) => void;
declare type modeType = 'horizontal' | 'vertical';
interface IBaseMenuProps {
    className?: string;
    defaultIndex?: string;
    onSelect?: OnSelect;
    children?: React.ReactNode;
    mode: modeType;
    defaultOpen?: string[];
}

interface IBaseSubMenuProps {
    className?: string;
    children?: React.ReactNode;
    title: string;
    index?: string;
}

interface IBaseMenuItemProps {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    index?: string;
}

declare type MenuType = React.FC<IBaseMenuProps> & {
    Item: React.FC<IBaseMenuItemProps>;
    SubMemu: React.FC<IBaseSubMenuProps>;
};
declare const transMenu: MenuType;

export { Button, transMenu as Menu };
