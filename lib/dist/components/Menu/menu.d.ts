import React from 'react';
declare type OnSelect = (selectedIndex: string) => void;
export declare type modeType = 'horizontal' | 'vertical';
export interface IBaseMenuProps {
    className?: string;
    defaultIndex?: string;
    onSelect?: OnSelect;
    children?: React.ReactNode;
    mode: modeType;
    defaultOpen?: string[];
}
export interface IMyContext {
    onSelect?: OnSelect;
    activeIndex: string;
    mode: modeType;
    defaultOpen?: string[];
}
export declare const myContext: React.Context<IMyContext>;
declare const Menu: React.FC<IBaseMenuProps>;
export default Menu;
