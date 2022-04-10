import React, { useContext } from 'react';
import classNames from 'classnames';
import { myContext } from './menu';
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
        _a["memu-item-" + mode] = !!mode,
        _a));
    return React.createElement("li", { className: classes, onClick: function () { return handleClick(index || ''); } }, children);
};
MenuItem.displayName = 'menuItem';
MenuItem.defaultProps = {
    disabled: false
};
export default MenuItem;
