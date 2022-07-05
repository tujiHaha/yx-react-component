import React, { useRef } from 'react';
import classNames from 'classnames';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function closureFlag() {
    var flag = true;
    return {
        getFlag: function () { return flag; },
        setFlag: function (myFlag) {
            flag = myFlag;
        },
    };
}
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button的所有属性
 *  同时默认支持防按钮的重复点击
 * **引用方法如下**
 *
 * ~~~js
 * import { Button } from 'yx-react-component'
 * ~~~
 */
var Button = function (props) {
    var _a;
    var className = props.className, disabled = props.disabled, size = props.size, children = props.children, onClick = props.onClick, timerCount = props.timerCount, restProps = __rest(props, ["className", "disabled", "size", "children", "onClick", "timerCount"]);
    var flagRef = useRef(closureFlag());
    var _b = flagRef.current, getFlag = _b.getFlag, setFlag = _b.setFlag;
    // btn, btn-lg, btn-primary
    var classes = classNames('package-btn', className, (_a = {},
        _a["package-btn-".concat(size)] = size,
        _a['disabled'] = disabled,
        _a));
    function myClick(e) {
        if (disabled) {
            return;
        }
        if (onClick && timerCount) {
            var flag = getFlag();
            if (!flag) {
                return;
            }
            onClick(e);
            setFlag(false);
            var timer_1 = setTimeout(function () {
                clearTimeout(timer_1);
                setFlag(true);
            }, timerCount);
            return;
        }
        if (onClick) {
            onClick(e);
        }
    }
    return (React.createElement("button", __assign({ className: classes, disabled: disabled, onClick: myClick }, restProps), children));
};
Button.defaultProps = {
    disabled: false,
    size: 'default',
    timerCount: 300
};

/**
 * 页面中最常用的商品优惠场景 原价多少加个下划线 支持货币符号定制 默认￥ 不展示货币单位时传空串
 * **引用方法如下**
 *
 * ~~~js
 * 基本用法
 * import { OriginPrice } from 'yx-react-component'
 * ~~~
 */
var OriginPrice = function (props) {
    var _a;
    var style = props.style, size = props.size, unit = props.unit, price = props.price;
    var classes = classNames('origin-price', (_a = {},
        _a["btn-".concat(size)] = size,
        _a));
    return (React.createElement("span", { className: classes, style: __assign({}, style) },
        unit,
        price));
};
OriginPrice.defaultProps = {
    size: 'default',
    unit: '￥'
};

/**
 * 页面中最常用的商品优惠场景 现价(优惠价) 支持货币符号定制 默认￥ 不展示货币单位时传空串
 * **引用方法如下**
 *
 * ~~~js
 * 基本用法
 * import { DiscountPrice } from 'yx-react-component'
 * ~~~
 */
var DiscountPrice = function (props) {
    var _a;
    var style = props.style, unit = props.unit, size = props.size, price = props.price;
    var classes = classNames('discount-price', (_a = {},
        _a["discount-price-".concat(size)] = size,
        _a));
    return (React.createElement("span", { className: classes, style: __assign({}, style) },
        React.createElement("i", { className: 'unit' }, unit),
        price));
};
DiscountPrice.defaultProps = {
    unit: '￥',
    size: 'default'
};

/**
 * 页面中最常用的的确认框，适合于征询用户意见后执行相应的动作
 * **引用方法如下**
 *
 * ~~~js
 * import { Confirm } from 'yx-react-component'
 * ~~~
 */
var Confirm = function (props) {
    var onOKCallback = props.onOKCallback, onCancelCallback = props.onCancelCallback, title = props.title, okBtnText = props.okBtnText, cancelBtnText = props.cancelBtnText, subTitle = props.subTitle;
    // 确定
    function handleOk() {
        onOKCallback && onOKCallback();
    }
    // 取消
    function handleCancel() {
        onCancelCallback && onCancelCallback();
    }
    return (React.createElement("div", { className: 'package-confirm-wrap' },
        React.createElement("section", { className: 'package-confirm-content' },
            React.createElement("h4", { className: 'package-confirm-title' }, title),
            !!subTitle && React.createElement("p", { className: 'package-confirm-sub-title' }, subTitle),
            React.createElement("div", { className: 'package-confirm-btn-bar' },
                React.createElement("span", { className: 'package-confirm-ok-btn', onClick: handleOk }, cancelBtnText),
                React.createElement("span", { className: 'package-confirm-quit-btn', onClick: handleCancel }, okBtnText)))));
};
Confirm.defaultProps = {
    title: '标题',
    okBtnText: '确定',
    cancelBtnText: '取消'
};

export { Button, Confirm, DiscountPrice, OriginPrice };
