import React, { useRef, useEffect, useState, useMemo } from 'react';
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

function usePreventTouch(rootId, boxId) {
    useEffect(function () {
        var rootElement = rootId && document.getElementById(rootId);
        var scrollBox = boxId && document.getElementById(boxId);
        function handle(e) {
            e.preventDefault();
        }
        function handle1(e) {
            e.stopPropagation();
        }
        rootElement && rootElement.addEventListener("touchmove", handle, false);
        scrollBox && scrollBox.addEventListener("touchmove", handle1, false);
        return function () {
            rootElement && rootElement.removeEventListener("touchmove", handle);
            scrollBox && scrollBox.removeEventListener("touchmove", handle1);
        };
    }, []);
}

/**
 * 页面中登录框
 * **引用方法如下**
 *
 * ~~~js
 * 基本用法
 * import { LoginPopup } from 'yx-react-component'
 * ~~~
 */
var LoginPopup = function (props) {
    var getCodeFunc = props.getCodeFunc, submitFunc = props.submitFunc, closeFunc = props.closeFunc, title = props.title, btnText = props.btnText;
    var _a = useState(''), phoneNum = _a[0], setPhoneNum = _a[1];
    var _b = useState(''), captcha = _b[0], setCaptcha = _b[1];
    var _c = useState(0), scount = _c[0], setScount = _c[1];
    var isAble = useMemo(function () {
        return !!phoneNum && !!captcha;
    }, [phoneNum, captcha]);
    var countRef = useRef(0);
    var phoneInputRef = useRef(null);
    var captchaInputRef = useRef(null);
    usePreventTouch('root');
    // 获取验证码
    function getCodeFn() {
        if (countRef.current) {
            return;
        }
        if (!phoneNum) {
            if (phoneInputRef.current) {
                phoneInputRef.current.focus();
            }
            return;
        }
        getCodeFunc(phoneNum).then(function () {
            countRef.current = 60;
            setScount(countRef.current);
            var interVal = setInterval(function () {
                if (countRef.current <= 0) {
                    countRef.current = 0;
                    clearInterval(interVal);
                }
                else {
                    countRef.current = countRef.current - 1;
                    setScount(countRef.current);
                }
            }, 1000);
        });
    }
    // 提交
    function submit() {
        if (!phoneNum && phoneInputRef.current) {
            phoneInputRef.current.focus();
            return;
        }
        if (!captcha && captchaInputRef.current) {
            captchaInputRef.current.focus();
            return;
        }
        submitFunc({
            mobile: phoneNum,
            captcha: captcha
        });
    }
    // 点击关闭按钮
    function myCloseFn() {
        closeFunc && closeFunc();
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("span", { className: 'package-login-mask-animation' }),
        React.createElement("section", { className: 'package-login-panel' },
            React.createElement("span", { className: 'package-login-close-icon', onClick: myCloseFn }),
            React.createElement("h3", { className: 'package-login-title' },
                title,
                " "),
            React.createElement("ul", { className: 'package-login-input-panel' },
                React.createElement("li", { className: 'package-login-input-item' },
                    React.createElement("input", { placeholder: '\u8BF7\u8F93\u5165\u624B\u673A\u53F7', className: 'package-login-input', type: 'number', value: phoneNum, ref: phoneInputRef, onChange: function (e) {
                            var value = e.target.value.trim();
                            if (value.length <= 11) {
                                setPhoneNum(value);
                            }
                        } })),
                React.createElement("li", { className: 'package-login-input-item' },
                    React.createElement("input", { placeholder: '\u624B\u673A\u9A8C\u8BC1\u7801', className: 'package-login-input', type: 'number', value: captcha, ref: captchaInputRef, onChange: function (e) {
                            var value = e.target.value.trim();
                            if (value.length <= 6) {
                                setCaptcha(value);
                            }
                        } }),
                    React.createElement("span", { className: scount ? 'package-login-get-code-btn disable' : 'package-login-get-code-btn', onClick: getCodeFn }, scount ? "".concat(scount, "s") : '获取验证码'))),
            React.createElement(Button, { disabled: !isAble, style: { width: '100%' }, onClick: submit }, btnText))));
};
LoginPopup.defaultProps = {
    title: '登录',
    btnText: '登录'
};

export { Button, Confirm, LoginPopup };
