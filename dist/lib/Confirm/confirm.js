import React from 'react';
/**
 * 页面中最常用的的确认框，适合于征询用户意见后执行相应的动作
 * **引用方法如下**
 *
 * ~~~js
 * import { Confirm } from 'yx-react-component'
 * ~~~
 */
export var Confirm = function (props) {
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
