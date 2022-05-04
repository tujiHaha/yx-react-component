import React, { FC } from 'react';
export interface IBaseProps {
    /**自定义样式 */
    style?: React.CSSProperties;
    /**大小 */
    size?: 'lg' | 'sm' | 'default';
    /**价格数 */
    price: string | number;
    /**单位￥ */
    unit?: string;
}
/**
 * 页面中最常用的商品优惠场景 原价多少加个下划线 支持货币符号定制 默认￥ 不展示货币单位时传空串
 * **引用方法如下**
 *
 * ~~~js
 * import { OriginPrice } from 'yx-react-component'
 * ~~~
 */
export declare const OriginPrice: FC<IBaseProps>;
