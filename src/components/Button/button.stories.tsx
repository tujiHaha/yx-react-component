import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './button';

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
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} >默认按钮</Button>;


export const DefaultBtn = Template.bind({});
DefaultBtn.storyName = '默认按钮'
DefaultBtn.parameters = {
  docs: {
    source: { code: '<Button>默认按钮</Button>' },
  },
};



export const third = () => (
  <>
    <Button size="default">默认大小按钮</Button>
    <Button size="sm">小型按钮</Button>
    <Button size="default" disabled>小型按钮disabled</Button>
    <Button size="default" style={{ width: '100%' }}>满行按钮</Button>
  </>
)
third.storyName = '不同大小按钮';

third.parameters = {
  docs: {
    source: {
      code: `<>
    <Button size="default">默认大小按钮</Button>
    <Button size="sm">小型按钮</Button>
    <Button size="default" disabled>小型按钮disabled</Button>
    <Button size="default" style={{ width: '100%' }}>满行按钮</Button>
  </>` },
  },
};


