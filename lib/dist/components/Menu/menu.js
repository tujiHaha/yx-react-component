import React, { createContext, useState } from 'react';
import classNames from 'classnames';
export var myContext = createContext({
    activeIndex: '0',
    mode: 'vertical',
    defaultOpen: []
});
function renderChildren(children) {
    return React.Children.map(children, function (item, index) {
        var myItem = item;
        var displayName = myItem.type.displayName;
        if (displayName === 'menuItem' || displayName === 'subMenu') {
            return React.cloneElement(myItem, { index: "" + index });
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
        _a["menu-wrap-" + mode] = !!mode,
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
export default Menu;
