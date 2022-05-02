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
import { OriginPrice } from './originPrice';
export default {
    title: '原价组件',
    component: OriginPrice,
    argTypes: {
        onClick: {
            action: 'clicked',
            description: '点击button时触发的事件',
        },
    }
};
var Template = function (args) { return React.createElement(OriginPrice, __assign({}, args, { price: 123 })); };
export var Primary = Template.bind({});
Primary.storyName = '原价';
Primary.parameters = {
    docs: {
        source: { code: '<OriginPrice price={123} />' },
    },
};
