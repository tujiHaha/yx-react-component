import React, { useState } from 'react';
import { Confirm } from './confirm';
export default {
    title: 'Confirm',
    component: Confirm,
    argTypes: {
    // onOKCallback: {
    //   action: 'clicked',
    //   description: '点击确认的事件',
    //   require: false
    // },
    // onCancelCallback: {
    //   action: 'clicked',
    //   description: '点击取消的事件',
    //   require: false
    // },
    }
};
var Template = function (args) {
    var _a = useState(false), isshow = _a[0], setIsshow = _a[1];
    function handleOkCallback() {
        console.log('ok click');
        setIsshow(false);
    }
    function handleCancelCallback() {
        console.log('cancel click');
        setIsshow(false);
    }
    return React.createElement(React.Fragment, null,
        React.createElement("button", { onClick: function () { return setIsshow(!isshow); } }, isshow ? '隐藏弹窗' : '显示confirm'),
        isshow && React.createElement(Confirm, { title: '\u786E\u8BA4\u6846\u6807\u9898', subTitle: '\u786E\u8BA4\u6846\u526F\u6807\u9898', onOKCallback: handleOkCallback, onCancelCallback: handleCancelCallback }));
};
export var ConfirmTem = Template.bind({});
ConfirmTem.storyName = '确认框';
ConfirmTem.parameters = {
    docs: {
        source: {
            code: "<Confirm \n      title='\u786E\u8BA4\u6846\u6807\u9898' \n      subTitle='\u786E\u8BA4\u6846\u526F\u6807\u9898' \n      onOKCallback={handleOkCallback} \n      onCancelCallback={handleCancelCallback}\n      />}"
        },
    },
};
