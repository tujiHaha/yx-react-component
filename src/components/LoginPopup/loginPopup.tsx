import React, { FC, useState, useRef, useMemo } from 'react'
import { usePreventTouch } from '../../hooks'
import { Button } from '../Button/button'
export interface ISubmitParams {
  mobile: string;
  captcha: string
}
type GetCodeFn = (mobile: string) => Promise<boolean>
type SubmitFn = (params: ISubmitParams) => void

export interface ILogioPopupProps {
  /** 获取验证码的方法  返回Promise<boolean>*/
  getCodeFunc: GetCodeFn;
  /**提交方法 */
  submitFunc: SubmitFn;
  /** 点击关闭按钮方法*/
  closeFunc?: () => void;
  /**标题 默认登录 */
  title?: string;
  /** 按钮文字 默认登录*/
  btnText?: string;
}

/**
 * 页面中登录框  
 * **引用方法如下**  
 * 
 * ~~~js
 * 基本用法
 * import { LoginPopup } from 'yx-react-component'
 * ~~~
 */

export const LoginPopup: FC<ILogioPopupProps> = (props) => {
  const {
    getCodeFunc,
    submitFunc,
    closeFunc,
    title,
    btnText
  } = props

  const [phoneNum, setPhoneNum] = useState('')
  const [captcha, setCaptcha] = useState('')
  const [scount, setScount] = useState(0)
  const isAble = useMemo(() => {
    return !!phoneNum && !!captcha
  }, [phoneNum, captcha])
  const countRef = useRef(0)
  const phoneInputRef = useRef<HTMLInputElement>(null)
  const captchaInputRef = useRef<HTMLInputElement>(null)
  usePreventTouch('root')
  // 获取验证码
  function getCodeFn() {
    if (countRef.current) {
      return
    }
    if (!phoneNum) {
      if (phoneInputRef.current) {
        phoneInputRef.current.focus()
      }
      return
    }
    getCodeFunc(phoneNum).then(() => {
      countRef.current = 60
      setScount(countRef.current)
      const interVal = setInterval(() => {
        if (countRef.current <= 0) {
          countRef.current = 0
          clearInterval(interVal)
        } else {
          countRef.current = countRef.current - 1
          setScount(countRef.current)
        }
      }, 1000)
    })
  }

  // 提交
  function submit() {
    if (!phoneNum && phoneInputRef.current) {
      phoneInputRef.current.focus()
      return
    }
    if (!captcha && captchaInputRef.current) {
      captchaInputRef.current.focus()
      return
    }
    submitFunc({
      mobile: phoneNum,
      captcha
    })
  }

  // 点击关闭按钮
  function myCloseFn() {
    closeFunc && closeFunc()
  }
  return (
    <>
      <span className={'package-login-mask-animation'}></span>
      <section className={'package-login-panel'}>
        <span className={'package-login-close-icon'} onClick={myCloseFn}></span>
        <h3 className={'package-login-title'}>{title} </h3>
        <ul className={'package-login-input-panel'}>
          <li className={'package-login-input-item'}>
            <input placeholder='请输入手机号'
              className={'package-login-input'}
              type='number'
              value={phoneNum}
              ref={phoneInputRef}
              onChange={(e) => {
                const value = e.target.value.trim()
                if (value.length <= 11) {
                  setPhoneNum(value)
                }
              }}
            />
          </li>

          <li className={'package-login-input-item'}>
            <input placeholder='手机验证码'
              className={'package-login-input'}
              type='number'
              value={captcha}
              ref={captchaInputRef}
              onChange={(e) => {
                const value = e.target.value.trim()
                if (value.length <= 6) {
                  setCaptcha(value)
                }
              }} />
            <span
              className={scount ? 'package-login-get-code-btn disable' : 'package-login-get-code-btn'}
              onClick={getCodeFn}>{scount ? `${scount}s` : '获取验证码'}</span>
          </li>
        </ul>
        <Button
          disabled={!isAble}
          style={{ width: '100%' }}
          onClick={submit}>{btnText}</Button>
      </section>
    </>
  )
}
LoginPopup.defaultProps = {
  title: '登录',
  btnText: '登录'
}



