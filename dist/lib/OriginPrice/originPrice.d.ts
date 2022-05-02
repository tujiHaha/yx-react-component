import React from 'react';
export interface IBaseProps {
    style?: React.CSSProperties;
    size?: 'lg' | 'sm' | 'default';
    price: string | number;
    unit?: string;
}
export declare const OriginPrice: React.FC<IBaseProps>;
