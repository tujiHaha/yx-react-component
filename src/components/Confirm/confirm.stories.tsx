import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Confirm, IConfirmProps } from './confirm';
import { Button } from '../Button/button'

export default {
  title: 'Confirm',
  component: Confirm,
  argTypes: {}
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
    <Button onClick={() => setIsshow(!isshow)} btnType='orange'>显示confirm</Button>
    {isshow && <Confirm
      {...args}
      title='确认框标题'
      subTitle='确认框副标题'
      onOKCallback={handleOkCallback}
      onCancelCallback={handleCancelCallback}
    />}
  </>
};

// https://storybook.js.org/docs/react/writing-docs/doc-block-source
export const ConfirmTem = Template.bind({});
ConfirmTem.storyName = '确认框'
ConfirmTem.parameters = {
  docs: {
    source: {
      code: `import { Confirm } from 'yx-react-component'
      const App:React.FC<{}>=()=>{
      const [isshow, setIsshow] = useState(false);
      
        // ok回调
        function handleOkCallback() {
          console.log('ok click');
          fsetIsshow(false)
        }
      
        // cancel回调
        function handleCancelCallback() {
          console.log('cancel click')
          setIsshow(false)
        }
        return <>
        <Button onClick={() => setIsshow(!isshow)}>显示confirm</Button>
        {isshow && <Confirm
          title='确认框标题'
          subTitle='确认框副标题'
          onOKCallback={handleOkCallback}
          onCancelCallback={handleCancelCallback}/>
        }`
    },
    language: "md",
    format: true
  },
};



