import { FC } from 'react';
export interface IConfirmProps {
    /**点击确认的事件  */
    onOKCallback?: () => void;
    /**点击取消的事件 */
    onCancelCallback?: () => void;
    /**标题 */
    title?: string;
    /**副标题 */
    subTitle?: string;
    /**ok 按钮文字 */
    okBtnText?: string;
    /**取消按钮文字 */
    cancelBtnText?: string;
}
/**
 * 页面中最常用的的确认框，适合于征询用户意见后执行相应的动作
 * **引用方法如下**
 *
 * ~~~js
 * import { Confirm } from 'yx-react-component'
 * ~~~
 */
export declare const Confirm: FC<IConfirmProps>;
