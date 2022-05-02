import React from 'react';
interface IBaseProps {
    style?: React.CSSProperties;
    size?: 'lg' | 'sm' | 'default';
    price: string | number;
    unit?: string;
}
declare const OriginPrice: React.FC<IBaseProps>;
export default OriginPrice;
