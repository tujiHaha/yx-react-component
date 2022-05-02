import React from 'react'
import { createRoot } from 'react-dom/client';
import { Button } from 'yx-react-component'
import 'yx-react-component/styles/index.scss'
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
    <Button size='lg' disabled>123</Button>
  </div>
}
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

