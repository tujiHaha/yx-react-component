import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OriginPrice, IBaseProps } from './originPrice';

export default {
  title: '原价组件',
  component: OriginPrice,
  argTypes: {
    onClick: {
      action: 'clicked',
      description: '点击button时触发的事件',
    },
  }
} as Meta;

const Template: Story<IBaseProps> = (args) => <OriginPrice {...args} price={123} />;
export const Primary = Template.bind({});
Primary.storyName = '原价'
Primary.parameters = {
  docs: {
    source: { code: '<OriginPrice price={123} />' },
  },
};


