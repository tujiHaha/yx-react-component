import React from 'react';
import { IBaseMenuProps } from './menu';
import { IBaseSubMenuProps } from './subMenu';
import { IBaseMenuItemProps } from './menuItem';
declare type MenuType = React.FC<IBaseMenuProps> & {
    Item: React.FC<IBaseMenuItemProps>;
    SubMemu: React.FC<IBaseSubMenuProps>;
};
declare const transMenu: MenuType;
export default transMenu;
