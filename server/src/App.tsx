import React from 'react'
import { createRoot } from 'react-dom/client';

import { Button } from '../../componentsLib/dist/bundle'

import '../../componentsLib/styles/index.scss'
interface IBaseProps { }
const App: React.FC<IBaseProps> = () => {
  return <div>
    app
    <br />
    <Button btnType='primary' size='lg'>aaa</Button>
    <Button>aaa</Button>
    <Button>aaa</Button>
    <Button btnType='primary'>aaadd</Button>
    <Button btnType='link'>aaa</Button>
  </div>
}
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

