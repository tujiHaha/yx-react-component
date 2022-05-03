import React, { useState, FC } from 'react';
import { Story, Meta } from '@storybook/react';
import { Confirm, IConfirmProps } from './confirm';

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
} as Meta;


const Template: Story<IConfirmProps> = (args) => {
  const [isshow, setIsshow] = useState(false);
  function handleOkCallback() {
    console.log('ok click')
    setIsshow(false)
  }

  function handleCancelCallback() {
    console.log('cancel click')
    setIsshow(false)
  }

  return <>
    <button onClick={() => setIsshow(!isshow)}>{isshow ? '隐藏弹窗' : '显示confirm'}</button>
    {isshow && <Confirm
      title='确认框标题'
      subTitle='确认框副标题'
      onOKCallback={handleOkCallback}
      onCancelCallback={handleCancelCallback}
    />}

  </>
};


export const ConfirmTem = Template.bind({});
ConfirmTem.storyName = '确认框'
ConfirmTem.parameters = {
  docs: {
    source: {
      code: `<Confirm 
      title='确认框标题' 
      subTitle='确认框副标题' 
      onOKCallback={handleOkCallback} 
      onCancelCallback={handleCancelCallback}
      />}`
    },
  },
};



