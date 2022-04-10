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
import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { myContext } from './menu';
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
                return React.cloneElement(myItem, { index: index + "-" + i });
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
        _a["sub-memu-" + mode] = !!mode,
        _a));
    return (React.createElement("li", __assign({ className: classes }, mouseEvent),
        React.createElement("strong", __assign({ className: 'sub-menu-title' }, clickEvent),
            title,
            React.createElement("span", { className: isOpen ? 'sanjiao' : 'sanjiao close' })),
        React.createElement("ul", { className: 'sub-menu-container', style: { display: isOpen ? 'block' : 'none' } }, renderChildren(children))));
};
SubMenu.displayName = 'subMenu';
export default SubMenu;
