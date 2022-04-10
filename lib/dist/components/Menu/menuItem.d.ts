import React from 'react';
export interface IBaseMenuItemProps {
    children?: React.ReactNode;
    className?: string;
    disabled?: boolean;
    index?: string;
}
declare const MenuItem: React.FC<IBaseMenuItemProps>;
export default MenuItem;
