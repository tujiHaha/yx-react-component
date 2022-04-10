import React from 'react'
import Menu, { IBaseMenuProps } from './menu'
import SubMemu, { IBaseSubMenuProps } from './subMenu'
import MenuItem, { IBaseMenuItemProps } from './menuItem'
type MenuType = React.FC<IBaseMenuProps> & {
    Item: React.FC<IBaseMenuItemProps>;
    SubMemu: React.FC<IBaseSubMenuProps>;
}
const transMenu = Menu as MenuType;
transMenu.Item = MenuItem;
transMenu.SubMemu = SubMemu;
export default transMenu


