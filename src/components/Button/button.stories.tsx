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

const Template: Story<ButtonProps> = (args) => <Button {...args} >按钮</Button>;


export const Primary = Template.bind({});
Primary.storyName = '默认按钮'
Primary.parameters = {
  docs: {
    source: { code: '<Button title="默认按钮"></Button>' },
  },
};

export const Secondary = () => (
  <Button href="http://www.baidu.com">link 按钮</Button>
)
Secondary.storyName = '链接按钮';
Secondary.parameters = {
  docs: {
    source: { code: '<Button title="默认按钮"></Button>' },
  },
};

export const third = () => (
  <>
    <Button size="lg">大型按钮</Button>
    <Button>默认大小</Button>
    <Button size="sm">小型按钮</Button>
  </>
)
third.storyName = '不同大小按钮';

