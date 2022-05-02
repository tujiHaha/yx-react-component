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
import { Button } from './button';
export default {
    title: 'Button',
    component: Button,
    parameters: {
        backgrounds: {
            values: [
                { name: 'light', value: '#fff' },
                { name: 'dark', value: '#000' },
                { name: 'red', value: '#f00' },
                { name: 'green', value: '#0f0' },
                { name: 'blue', value: '#00f' },
            ],
        },
    },
    argTypes: {
        onClick: {
            action: 'clicked',
            description: '点击button时触发的事件',
        },
    }
};
var Template = function (args) { return React.createElement(Button, __assign({}, args), "\u6309\u94AE"); };
export var Primary = Template.bind({});
Primary.storyName = '默认按钮';
Primary.parameters = {
    docs: {
        source: { code: '<Button title="默认按钮"></Button>' },
    },
};
export var Secondary = function () { return (React.createElement(Button, { href: "http://www.baidu.com" }, "link \u6309\u94AE")); };
Secondary.storyName = '链接按钮';
Secondary.parameters = {
    docs: {
        source: { code: '<Button title="默认按钮"></Button>' },
    },
};
export var third = function () { return (React.createElement(React.Fragment, null,
    React.createElement(Button, { size: "lg" }, "\u5927\u578B\u6309\u94AE"),
    React.createElement(Button, null, "\u9ED8\u8BA4\u5927\u5C0F"),
    React.createElement(Button, { size: "sm" }, "\u5C0F\u578B\u6309\u94AE"))); };
third.storyName = '不同大小按钮';
