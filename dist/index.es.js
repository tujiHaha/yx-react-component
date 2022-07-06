import React, { useRef, useEffect, useState, useMemo, createContext, useContext } from 'react';
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
            onClick();
            setFlag(false);
            var timer_1 = setTimeout(function () {
                clearTimeout(timer_1);
                setFlag(true);
            }, timerCount);
            return;
        }
        if (onClick) {
            onClick();
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

function resize() {
    console.log('----resize-----');
    window.location.reload();
}
function useGetClientWidth() {
    var _a = useState(1000), clientWidth = _a[0], setClientWidth = _a[1];
    useEffect(function () {
        var width = document.body.clientWidth;
        setClientWidth(width);
    }, []);
    useEffect(function () {
        window.addEventListener('resize', resize, false);
        return function () {
            window.removeEventListener('resize', resize);
        };
    }, []);
    return clientWidth;
}

// 移动边界
function moveBoundary(directionX, activePageIndex, allPageLen) {
    // 最左不能向右移动
    if (directionX === 'right' && activePageIndex === 0) {
        return false;
    }
    // 最右不能向左移动
    if (directionX === 'left' && activePageIndex + 1 === allPageLen) {
        return false;
    }
    return true;
}
// 移动了多少页 每次移动最多只能一页
function getMovePageCount(moveDis, pageWidth) {
    var IDS_BOUNDARY = 10;
    var moveDisAbs = Math.abs(moveDis);
    var minDis = Math.min(moveDisAbs, pageWidth);
    if (minDis > IDS_BOUNDARY) {
        var pageCount = Math.ceil(minDis / pageWidth);
        return moveDis > 0 ? -pageCount : pageCount;
    }
    return 0;
}

var SwiperContext = createContext({
    currentIndex: 0,
    onClick: function () { },
    getRef: function () { },
    itemWidth: 0,
    scale: 1,
});
/**
 * 页面中滑动组件
 * **引用方法如下**
 *
 * ~~~js
 * 基本用法
 * import { Swiper } from 'yx-react-component'
 * //然后可以使用 Swiper.Item
 * ~~~
 */
var Swiper = function (props) {
    var children = props.children, onSliderChange = props.onSliderChange, clientItemCount = props.clientItemCount, defaultIndex = props.defaultIndex;
    var scale = props.scale;
    var dragBox = useRef(null);
    var _a = useState(defaultIndex || 0), currentIndex = _a[0], setCurrentIndex = _a[1];
    var startRef = useRef({ x: 0, y: 0 });
    var pageArrRef = useRef([]);
    var clientWidth = useGetClientWidth();
    var itemWidth = useMemo(function () {
        var myCount = clientItemCount;
        if (myCount && clientItemCount) {
            var isPad = clientWidth >= 501 && clientWidth <= 1024;
            var rate = isPad ? 0.68 : 1;
            return Math.ceil(clientWidth / clientItemCount) * rate;
        }
        return 0;
    }, [clientWidth, clientItemCount]);
    // box translateX
    var transformXdis = useMemo(function () {
        if (itemWidth && clientWidth) {
            return (clientWidth - itemWidth) / 2 - (currentIndex + 1) * itemWidth;
        }
        return 0;
    }, [itemWidth, clientWidth, currentIndex]);
    var len = React.Children.count(children);
    var getRef = function (dom) {
        if (dom && pageArrRef.current.length < len) {
            pageArrRef.current.push(dom);
        }
    };
    var getdragBox = function () { return dragBox.current; };
    // 拖动的样式设置
    var setDrag = function (x) {
        getdragBox().style.transform = "translate3d(".concat(x, "px, 0px, 0px)");
    };
    // 滑动的时候设置缩放
    var setScale = function (x, isReset) {
        var disRate = Math.abs(x) / itemWidth > 1 ? 1 : Math.abs(x) / itemWidth;
        var rate = isReset ? 0 : disRate * (1 - scale);
        var nextPageIndex = x < 0 ? currentIndex + 1 : currentIndex - 1;
        var currentDom = pageArrRef.current[currentIndex];
        var nextDom = pageArrRef.current[nextPageIndex];
        if (currentDom) {
            currentDom.style.transform = "scale(".concat(1 - rate, ")");
        }
        if (nextDom) {
            nextDom.style.transform = "scale(".concat(scale + rate, ")");
        }
    };
    var passContext = {
        currentIndex: currentIndex,
        getRef: getRef,
        onClick: itemClick,
        itemWidth: itemWidth,
        scale: scale,
    };
    function itemClick(index) {
        if (index === currentIndex) ;
        else {
            setCurrentIndex(index);
            // onSliderChange
            onSliderChange && onSliderChange(index);
        }
    }
    // 开始滑动
    function touchStartFn(e) {
        var _a = e.changedTouches[0], pageX = _a.pageX, pageY = _a.pageY;
        startRef.current.x = pageX;
        startRef.current.y = pageY;
        getdragBox().style.transition = 'all 0.3s linear';
    }
    // move
    function touchMoveFn(e) {
        var _a = e.changedTouches[0], pageX = _a.pageX, pageY = _a.pageY;
        var moveDisX = pageX - startRef.current.x;
        var moveDisY = pageY - startRef.current.y;
        if (Math.abs(moveDisY) > Math.abs(moveDisX)) {
            return;
        }
        var directionX = moveDisX >= 0 ? 'right' : 'left';
        var isAbleMove = moveBoundary(directionX, currentIndex, len);
        if (!isAbleMove) {
            return;
        }
        setDrag(transformXdis + moveDisX);
        setScale(moveDisX, false);
    }
    function touchEndFn(e) {
        var _a = e.changedTouches[0], pageX = _a.pageX, pageY = _a.pageY;
        var moveDisX = pageX - startRef.current.x;
        var moveDisY = pageY - startRef.current.y;
        if (Math.abs(moveDisY) > Math.abs(moveDisX)) {
            return;
        }
        var directionX = moveDisX >= 0 ? 'right' : 'left';
        var isAbleMove = moveBoundary(directionX, currentIndex, len);
        if (!isAbleMove) {
            return;
        }
        // 移动页数 最多一页
        var disPage = getMovePageCount(moveDisX, itemWidth);
        if (disPage === 0) {
            //重置样式
            setScale(moveDisX, true);
            setDrag(transformXdis);
        }
        setCurrentIndex(disPage + currentIndex);
        onSliderChange && onSliderChange(disPage + currentIndex);
        getdragBox().style.transition = 'all 0 linear';
    }
    // render
    function renderChildren() {
        return React.Children.map(children, function (child, index) {
            var mychild = child;
            return React.cloneElement(mychild, {
                index: index,
            });
        });
    }
    return (React.createElement("div", { className: 'namid-slider-wrap' },
        React.createElement("div", { id: "slider-box", className: 'namid-swipers', ref: dragBox, onTouchStart: touchStartFn, onTouchMove: touchMoveFn, onTouchEnd: touchEndFn, style: {
                width: "".concat(clientWidth * (len + 2), "px"),
                transform: "translate3d(".concat(transformXdis, "px,0px,0px)"),
            } },
            React.createElement(SwiperContext.Provider, { value: passContext },
                React.createElement("div", { style: { width: "".concat(itemWidth, "px") } }),
                renderChildren(),
                React.createElement("div", { style: { width: "".concat(itemWidth, "px") } })))));
};
Swiper.defaultProps = {
    clientItemCount: 1.45,
    scale: 0.85,
};

var SwiperItem = function (props) {
    var index = props.index;
    var _a = useContext(SwiperContext), currentIndex = _a.currentIndex, onClick = _a.onClick, getRef = _a.getRef, itemWidth = _a.itemWidth, scale = _a.scale;
    return (React.createElement("div", { className: 'namid-swipers-item', style: __assign({ width: itemWidth }, props.style) },
        React.createElement("div", { ref: getRef, className: 'namid-img-box', style: {
                transform: currentIndex === index ? "scale(1)" : "scale(".concat(scale, ")"),
            }, onClick: function () {
                onClick && onClick(index);
            } }, props.children)));
};

var transSwiper = Swiper;
transSwiper.Item = SwiperItem;

export { Button, Confirm, LoginPopup, transSwiper as Swiper };
