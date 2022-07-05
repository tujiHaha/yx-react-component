import { FC } from 'react';
export interface ISubmitParams {
    mobile: string;
    captcha: string;
}
declare type GetCodeFn = (mobile: string) => Promise<boolean>;
declare type SubmitFn = (params: ISubmitParams) => void;
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
export declare const LoginPopup: FC<ILogioPopupProps>;
export {};
