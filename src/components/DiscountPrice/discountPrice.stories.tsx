import React from 'react';
import { Story, Meta } from '@storybook/react';
import { DiscountPrice, IBaseProps } from './discountPrice';

export default {
  title: '现价组件',
  component: DiscountPrice,
  argTypes: {}
} as Meta;

const Template: Story<IBaseProps> = (args) => <div style={{ display: 'flex', alignItems: 'flex-end' }}>
  <DiscountPrice {...args} price={1.5} size='sm' />&nbsp;&nbsp;
  <DiscountPrice {...args} price={2.6} />&nbsp;&nbsp;
  <DiscountPrice {...args} price={39.9} size='lg' />
</div>;
export const Primary = Template.bind({});
Primary.storyName = '现价(折扣价)'
Primary.parameters = {
  docs: {
    source: {
      code: `
      尺寸：小号sm
<DiscountPrice price={1.5} size='sm' />

尺寸：默认 default
<DiscountPrice price={2.6} />

尺寸：大号 lg
<DiscountPrice {...args} price={39.9} size='lg' />
    ` },
  },
};


