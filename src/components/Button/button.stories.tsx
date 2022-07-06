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

// size btn
export const SizeBtn = () => (
  <>
    <Button size="sm" btnType='blue'> small button </Button><br />
    <Button size="default" btnType='blue'> default button </Button><br />
    <Button size="lg" btnType='blue'> large button </Button>
  </>
)
SizeBtn.storyName = '不同尺寸的按钮'

// size btn
export const TypeBtn = () => (
  <>
    <Button btnType='default'> default button </Button>
    <Button btnType='blue'> blue button </Button>
    <Button btnType='orange'> orange button </Button>
    <Button btnType='linear-red-orange'> linear-red-orange button </Button>
    <Button btnType='linear-yellow-orange'> linear-yellow-orange </Button>
  </>
)
TypeBtn.storyName = '不同颜色的按钮'



// disable
export const DisableBtn = Template.bind({})
DisableBtn.args = {
  children: 'disable',
  disabled: true,
  btnType: 'blue'
}
DisableBtn.storyName = '禁用按钮样式'

// full
export const FullBtn = Template.bind({})
FullBtn.args = {
  children: '整行按钮',
  btnType: 'blue',
  style: { width: '100%' },

}
FullBtn.storyName = '整行按钮'




