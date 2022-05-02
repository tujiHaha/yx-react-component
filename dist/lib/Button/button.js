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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
 * **引用方法如下**
 *
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
export var Button = function (props) {
    var _a;
    var className = props.className, disabled = props.disabled, size = props.size, children = props.children, restProps = __rest(props
    // btn, btn-lg, btn-primary
    , ["className", "disabled", "size", "children"]);
    // btn, btn-lg, btn-primary
    var classes = classNames('package-btn', className, (_a = {},
        _a["package-btn-".concat(size)] = size,
        _a['disabled'] = disabled,
        _a));
    return (React.createElement("button", __assign({ className: classes, disabled: disabled }, restProps), children));
};
Button.defaultProps = {
    disabled: false,
};
