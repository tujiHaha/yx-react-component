import React, { createContext, useState, useContext } from 'react';
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

/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
 * **引用方法如下**
 *
 * ~~~js
 * import { Button } from 'vikingship'
 * ~~~
 */
var Button = function (props) {
    var _a;
    var btnType = props.btnType, className = props.className, disabled = props.disabled, size = props.size, children = props.children, href = props.href, restProps = __rest(props
    // btn, btn-lg, btn-primary
    , ["btnType", "className", "disabled", "size", "children", "href"]);
    // btn, btn-lg, btn-primary
    var classes = classNames('btn', className, (_a = {},
        _a["btn-".concat(btnType)] = btnType,
        _a["btn-".concat(size)] = size,
        _a['disabled'] = (btnType === 'link') && disabled,
        _a));
    if (btnType === 'link' && href) {
        return (React.createElement("a", __assign({ className: classes, href: href }, restProps), children));
    }
    else {
        return (React.createElement("button", __assign({ className: classes, disabled: disabled }, restProps), children));
    }
};
Button.defaultProps = {
    disabled: false,
    btnType: 'default'
};

var myContext = createContext({
    activeIndex: '0',
    mode: 'vertical',
    defaultOpen: []
});
function renderChildren(children) {
    return React.Children.map(children, function (item, index) {
        var myItem = item;
        var displayName = myItem.type.displayName;
        if (displayName === 'menuItem' || displayName === 'subMenu') {
            return React.cloneElement(myItem, { index: "".concat(index) });
        }
        else {
            console.error("menu child element must name MenuItem or subMenu");
        }
    });
}
var Menu = function (props) {
    var _a;
    var children = props.children, mode = props.mode, className = props.className, onSelect = props.onSelect, defaultIndex = props.defaultIndex, defaultOpen = props.defaultOpen;
    var _b = useState(defaultIndex || '0'), activeIndex = _b[0], setActiveIndex = _b[1];
    var classes = classNames('menu-wrap', className, (_a = {},
        _a["menu-wrap-".concat(mode)] = !!mode,
        _a));
    // 处理选择
    function handleSelect(index) {
        setActiveIndex(index);
        if (onSelect) {
            onSelect(index);
        }
    }
    return React.createElement("ul", { className: classes },
        React.createElement(myContext.Provider, { value: {
                activeIndex: activeIndex,
                mode: mode,
                onSelect: handleSelect,
                defaultOpen: defaultOpen
            } }, renderChildren(children)));
};

var SubMenu = function (props) {
    var _a;
    var title = props.title, children = props.children, index = props.index, className = props.className;
    var myConsumerContext = useContext(myContext);
    var mode = myConsumerContext.mode, defaultOpen = myConsumerContext.defaultOpen;
    var _b = useState(function () {
        if (defaultOpen && index) {
            return defaultOpen.includes(index);
        }
        return mode === 'vertical';
    }), isOpen = _b[0], setIsOpen = _b[1];
    function renderChildren(children) {
        return React.Children.map(children, function (item, i) {
            var myItem = item;
            var displayName = myItem.type.displayName;
            if (displayName === 'menuItem') {
                return React.cloneElement(myItem, { index: "".concat(index, "-").concat(i) });
            }
            else {
                console.error("menu child element must name MenuItem");
            }
        });
    }
    var mouseEvent = mode === 'horizontal' ? {
        onMouseEnter: function () {
            setIsOpen(true);
        },
        onMouseLeave: function () {
            setIsOpen(false);
        }
    } : {};
    var clickEvent = mode === 'vertical' ? {
        onClick: function () {
            setIsOpen(!isOpen);
        }
    } : {};
    var classes = classNames('sub-menu', className, (_a = {},
        _a["sub-memu-".concat(mode)] = !!mode,
        _a));
    return (React.createElement("li", __assign({ className: classes }, mouseEvent),
        React.createElement("strong", __assign({ className: 'sub-menu-title' }, clickEvent),
            title,
            React.createElement("span", { className: isOpen ? 'sanjiao' : 'sanjiao close' })),
        React.createElement("ul", { className: 'sub-menu-container', style: { display: isOpen ? 'block' : 'none' } }, renderChildren(children))));
};
SubMenu.displayName = 'subMenu';

var MenuItem = function (props) {
    var _a;
    var children = props.children, className = props.className, disabled = props.disabled, index = props.index;
    var myConsumerContext = useContext(myContext);
    var activeIndex = myConsumerContext.activeIndex, onSelect = myConsumerContext.onSelect, mode = myConsumerContext.mode;
    var handleClick = function (index) {
        if (onSelect && !disabled) {
            onSelect(index);
        }
    };
    var classes = classNames('menu-item', className, (_a = {},
        _a["memu-item-disabled"] = !!disabled,
        _a["memu-item-active"] = activeIndex === index,
        _a["memu-item-".concat(mode)] = !!mode,
        _a));
    return React.createElement("li", { className: classes, onClick: function () { return handleClick(index || ''); } }, children);
};
MenuItem.displayName = 'menuItem';
MenuItem.defaultProps = {
    disabled: false
};

var transMenu = Menu;
transMenu.Item = MenuItem;
transMenu.SubMemu = SubMenu;

export { Button, transMenu as Menu };
