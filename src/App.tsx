import React from 'react'
import { createRoot } from 'react-dom/client';
import { Button, Menu } from 'yx-react-component'
import 'yx-react-component/dist/index.css'

interface IBaseProps { }

const App: React.FC<IBaseProps> = () => {

  return <div>
    <Button onClick={() => { console.log(123) }}>ch</Button>
    <Button disabled size='lg' btnType='primary'>disable</Button>
    <Button btnType='primary'>ch</Button>
    <Button btnType='primary' size='lg'>ch</Button>
    <Button btnType='primary' size='sm'>ch</Button>
    <Button btnType='default'>ch</Button>
    <Button btnType='danger'>ch</Button>
    <Button btnType='link'>ch</Button>
    <Button btnType='link' href='https://www.baidu.com' >ch</Button>
    <Button btnType='link' href='https://www.baidu.com' disabled>disabled-link</Button>

    <br />

    <Menu defaultIndex='0' mode='horizontal' onSelect={(str: string) => console.log(str)} >
      <Menu.Item>菜单1</Menu.Item>
      <Menu.Item>菜单2</Menu.Item>
      <Menu.Item>菜单3</Menu.Item>
      <Menu.Item>菜单4</Menu.Item>
      <Menu.Item>菜单5</Menu.Item>
      <Menu.Item>菜单6</Menu.Item>
    </Menu>
  </div>
}
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);

