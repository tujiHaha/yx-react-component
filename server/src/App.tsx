import React from 'react'
import { createRoot } from 'react-dom/client';

import { Button } from '../../componentsLib'

import '../../componentsLib/styles/index.scss'
interface IBaseProps { }
const App: React.FC<IBaseProps> = () => {
  return <div>
    app
    <br />
    <Button>aaa</Button>
  </div>
}
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

