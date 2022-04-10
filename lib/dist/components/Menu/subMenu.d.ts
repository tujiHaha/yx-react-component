import React from 'react';
export interface IBaseSubMenuProps {
    className?: string;
    children?: React.ReactNode;
    title: string;
    index?: string;
}
declare const SubMenu: React.FC<IBaseSubMenuProps>;
export default SubMenu;
