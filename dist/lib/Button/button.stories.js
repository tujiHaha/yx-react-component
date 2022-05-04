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
var Template = function (args) { return React.createElement(Button, __assign({}, args), "\u9ED8\u8BA4\u6309\u94AE"); };
export var DefaultBtn = Template.bind({});
DefaultBtn.storyName = '默认按钮';
DefaultBtn.parameters = {
    docs: {
        source: { code: '<Button>默认按钮</Button>' },
    },
};
export var third = function () { return (React.createElement(React.Fragment, null,
    React.createElement(Button, { size: "default" }, "\u9ED8\u8BA4\u5927\u5C0F\u6309\u94AE"),
    React.createElement(Button, { size: "sm" }, "\u5C0F\u578B\u6309\u94AE"),
    React.createElement(Button, { size: "default", disabled: true }, "\u5C0F\u578B\u6309\u94AEdisabled"),
    React.createElement(Button, { size: "default", style: { width: '100%' } }, "\u6EE1\u884C\u6309\u94AE"))); };
third.storyName = '不同大小按钮';
third.parameters = {
    docs: {
        source: {
            code: "<>\n    <Button size=\"default\">\u9ED8\u8BA4\u5927\u5C0F\u6309\u94AE</Button>\n    <Button size=\"sm\">\u5C0F\u578B\u6309\u94AE</Button>\n    <Button size=\"default\" disabled>\u5C0F\u578B\u6309\u94AEdisabled</Button>\n    <Button size=\"default\" style={{ width: '100%' }}>\u6EE1\u884C\u6309\u94AE</Button>\n  </>"
        },
    },
};
