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
var Button = function (props) {
    var _a;
    var btnType = props.btnType, size = props.size, disabled = props.disabled, href = props.href, children = props.children, rest = __rest(props, ["btnType", "size", "disabled", "href", "children"]);
    var classes = classNames('btn', (_a = {},
        _a["btn-" + btnType] = !!btnType,
        _a["btn-" + size] = !!size,
        _a['btn-disabled'] = btnType === 'link' && href && disabled,
        _a));
    return (btnType === 'link' && href) ?
        React.createElement("a", __assign({ className: classes, href: !disabled ? href : '' }, rest), children) :
        React.createElement("button", __assign({ className: classes, disabled: disabled }, rest), children);
};
Button.defaultProps = {
    btnType: 'default',
    disabled: false
};
export default Button;