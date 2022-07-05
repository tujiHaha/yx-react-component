import React, { useState, FC } from 'react';
import { Story, Meta } from '@storybook/react';
import { Swiper, ISwiperProps } from './Swiper'
import { SwiperItem, ISwiperItemProps } from './SwiperItem'


interface IImageItemProps {
  url: string;
  isActive: boolean;
}

const ImageItem: React.FC<IImageItemProps> = (props) => {
  const { url, isActive } = props;
  return (
    <div>
      <img
        style={{
          boxShadow: '0px 2px 10px 0px rgba(0, 0, 0, 0.2)',
          borderRadius: '30px',
          filter: isActive ? 'brightness(100%)' : 'brightness(90%)'
        }}
        width="100%"
        height="100%"
        alt=""
        src={url}
      />
    </div>
  );
};

export default {
  title: 'Swiper',
  component: Swiper,
  argTypes: {}
} as Meta;

const imgArr = [
  'https://wf.namibox.com/oms/qywxposter/87103471/ss_1656497214636.png',
  'https://wf.namibox.com/oms/qywxposter/87103471/ss_1656497226546.png',
  'https://wf.namibox.com/oms/qywxposter/87103471/ss_1656497238418.png'
]


const Template: Story<ISwiperProps> = (args) => {
  const [defaultPageIndex, setDefaultPageIndex] = useState(1)
  const [currentIndex, setCurrentIndex] = useState(1)

  function handleSliderChange(index: number) {

  }
  return <>
    <Swiper
      onSliderChange={handleSliderChange}
      clientItemCount={1.45}
      scale={0.85}
      defaultIndex={defaultPageIndex}
    >
      {
        imgArr.map((item, index) => <SwiperItem>
          <ImageItem
            url={item}
            isActive={currentIndex === index} />
        </SwiperItem>)
      }
    </Swiper>
  </>
};


export const SwiperTem = Template.bind({});
SwiperTem.storyName = '滑动组件'
SwiperTem.parameters = {
  docs: {
    source: {
      code: `
      import { LoginPopup } from 'yx-react-component'
      const App:React.FC<{}>=()=>{  
        const [isshow, setIsshow] = useState(false);
        // 获取验证码
        function getCodeFunc(mobile: string) {
          console.log(mobile)
          return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
              resolve(true)
            }, 1000)
          })
        }

        // 提交
        function submitFunc(params: ISubmitParams) {
          console.log(params.mobile)
          console.log(params.captcha)
        }
  
        // 关闭
        function closeFunc() {
          setIsshow(false)
        }
        return <>
        <Button onClick={() => setIsshow(!isshow)}>显示登录框</Button>
        {isshow && <LoginPopup
          getCodeFunc={getCodeFunc}
          submitFunc={submitFunc}
          closeFunc={closeFunc}
          />}
          </>`,
      language: "md",
      format: true
    },
  },
};



