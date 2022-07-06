import React from 'react';
import { Story, ComponentMeta } from '@storybook/react';
import { Swiper, ISwiperProps } from './Swiper'
import { SwiperItem } from './SwiperItem'

export default {
  title: 'Swiper',
  id: 'Swiper',
  component: Swiper,
  subcomponents: { 'SwiperItem': SwiperItem },
  argTypes: {}
} as ComponentMeta<typeof Swiper>


const Template: Story<ISwiperProps> = (args) => {
  function handleSliderChange(index: number) {
    console.log(index)
  }
  return <>
    <Swiper {...args} onSliderChange={handleSliderChange} defaultIndex={1}>
      <SwiperItem>
        <img src='https://wf.namibox.com/oms/qywxposter/87103471/ss_1656497214636.png' width={'100%'} />
      </SwiperItem>
      <SwiperItem>
        <img src='https://wf.namibox.com/oms/qywxposter/87103471/ss_1656497226546.png' width={'100%'} />
      </SwiperItem>
      <SwiperItem>
        <img src='https://wf.namibox.com/oms/qywxposter/87103471/ss_1656497238418.png' width={'100%'} />
      </SwiperItem>
    </Swiper>
  </>
};


export const SwiperTem = Template.bind({});
SwiperTem.storyName = '滑动组件'
SwiperTem.parameters = {
  docs: {
    source: {
      code: `
      <Swiper onSliderChange={handleSliderChange} defaultIndex={1}>
        <Swiper.Item>
          <img src='https://wf.namibox.com/oms/qywxposter/87103471/ss_1656497214636.png' width={'100%'} />
        </SwiperItem>
        <Swiper.Item>
          <img src='https://wf.namibox.com/oms/qywxposter/87103471/ss_1656497226546.png' width={'100%'} />
        </Swiper.Item>
        <Swiper.Item>
          <img src='https://wf.namibox.com/oms/qywxposter/87103471/ss_1656497238418.png' width={'100%'} />
        </Swiper.Item>
      </Swiper>`,
      language: "md",
      format: true
    },
  },
};



