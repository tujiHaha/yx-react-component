import React, { useState, FC } from 'react';
import { Story, Meta } from '@storybook/react';
import { LoginPopup, ILogioPopupProps, ISubmitParams } from './loginPopup';
import { Button } from '../Button/button'

export default {
  title: 'LoginPopup',
  component: LoginPopup,
  argTypes: {}
} as Meta;


const Template: Story<ILogioPopupProps> = (args) => {
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
    <Button onClick={() => setIsshow(!isshow)} btnType='orange'>显示登录框</Button>
    {isshow && <LoginPopup
      getCodeFunc={getCodeFunc}
      submitFunc={submitFunc}
      closeFunc={closeFunc}
    />}
  </>
};


export const ConfirmTem = Template.bind({});
ConfirmTem.storyName = '登录框'
ConfirmTem.parameters = {
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



