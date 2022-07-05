import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

// https://github.com/storybookjs/storybook/issues/15574
// 大的菜单
export default {
  title: 'Button按钮',
  component: Button,
} as ComponentMeta<typeof Button>

// 创建一个模板
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

// 创建一个story 子菜单
export const ADefault = Template.bind({})
ADefault.args = {
  children: 'Default Button',
}
ADefault.storyName = '默认按钮样式'

// size sm
export const SmallBtn = Template.bind({})
SmallBtn.args = {
  children: '小按钮样式',
  size: 'sm'
}
SmallBtn.storyName = 'sm按钮样式'

// size lg
export const LargeBtn = Template.bind({})
LargeBtn.args = {
  children: '大按钮样式',
  size: 'lg'
}
LargeBtn.storyName = 'lg按钮样式'

// disable
export const DisableBtn = Template.bind({})
DisableBtn.args = {
  children: 'disable',
  disabled: true
}
DisableBtn.storyName = '禁用按钮样式'

// full
export const FullBtn = Template.bind({})
FullBtn.args = {
  children: '整行按钮',
  style: { width: '100%' }
}
FullBtn.storyName = '整行按钮'




