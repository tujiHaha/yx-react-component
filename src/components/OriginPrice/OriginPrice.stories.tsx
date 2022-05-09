import React from 'react';
import { Story, Meta } from '@storybook/react';
import { OriginPrice, IBaseProps } from './originPrice';

export default {
  title: '原价组件',
  component: OriginPrice,
  argTypes: {}
} as Meta;

const Template: Story<IBaseProps> = (args) => <>
  <OriginPrice {...args} price={123} />
  <br />
  <OriginPrice {...args} price={0.01} unit='' />
</>;
export const Primary = Template.bind({});
Primary.storyName = '原价'
Primary.parameters = {
  docs: {
    source: {
      code: `
          <OriginPrice price={123} />

过检的时候不要单位
<OriginPrice price={0.01} unit='' />
    ` },
  },
};


