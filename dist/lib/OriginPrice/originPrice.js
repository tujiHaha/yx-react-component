var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from 'react';
import classNames from 'classnames';
/**
 * 页面中最常用的商品优惠场景 原价多少加个下划线 支持货币符号定制 默认￥ 不展示货币单位时传空串
 * **引用方法如下**
 *
 * ~~~js
 * import { OriginPrice } from 'yx-react-component'
 * ~~~
 */
export var OriginPrice = function (props) {
    var _a;
    var style = props.style, size = props.size, unit = props.unit, price = props.price;
    var classes = classNames('origin-price', (_a = {},
        _a["btn-" + size] = size,
        _a));
    return (React.createElement("span", { className: classes, style: __assign({}, style) },
        unit,
        price));
};
OriginPrice.defaultProps = {
    size: 'default',
    unit: '￥'
};
