import React, { FC } from 'react'
type ICallback = () => void

export interface IConfirmProps {
  /**点击确认的事件  */
  onOKCallback?: ICallback;
  /**点击取消的事件 */
  onCancelCallback?: ICallback;
  /**标题 */
  title?: string;
  /**副标题 */
  subTitle?: string;
  /**ok 按钮文字 */
  okBtnText?: string
  /**取消按钮文字 */
  cancelBtnText?: string
}

/**
 * 页面中最常用的的确认框，适合于征询用户意见后执行相应的动作   
 * **引用方法如下**  
 * 
 * ~~~js
 * import { Confirm } from 'yx-react-component'
 * ~~~
 */

export const Confirm: FC<IConfirmProps> = (props) => {
  const { onOKCallback, onCancelCallback, title, okBtnText, cancelBtnText, subTitle } = props

  // 确定
  function handleOk() {
    onOKCallback && onOKCallback()
  }

  // 取消
  function handleCancel() {
    onCancelCallback && onCancelCallback()
  }

  return (
    <div className='package-confirm-wrap' >
      <section className='package-confirm-content'>
        <h4 className={'package-confirm-title'}>{title}</h4>
        {
          !!subTitle && <p className={'package-confirm-sub-title'}>{subTitle}</p>
        }
        <div className={'package-confirm-btn-bar'}>
          <span className={'package-confirm-ok-btn'} onClick={handleOk}>{cancelBtnText}</span>
          <span className={'package-confirm-quit-btn'} onClick={handleCancel}>{okBtnText}</span>
        </div>
      </section>
    </div>
  )
}


Confirm.defaultProps = {
  title: '标题',
  okBtnText: '确定',
  cancelBtnText: '取消'
}
