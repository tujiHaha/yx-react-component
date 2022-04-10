import React from 'react'


import Button from './components/Button/button'

import Menu from './components/Menu/menu'
import SubMenu from './components/Menu/subMenu'
import MenuItem from './components/Menu/menuItem'

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
      <MenuItem>菜单1</MenuItem>
      <MenuItem disabled>菜单2</MenuItem>
      <MenuItem>菜单3</MenuItem>
      <SubMenu title='子菜单1'>
        <MenuItem>副标题子菜单1</MenuItem>
        <MenuItem>副标题子菜单1</MenuItem>
        <MenuItem>副标题子菜单1</MenuItem>
        <MenuItem>副标题子菜单1</MenuItem>
      </SubMenu>
      <MenuItem>菜单4</MenuItem>
      <SubMenu title='子菜单5'>
        <MenuItem>副标题子菜单1</MenuItem>
        <MenuItem>副标题子菜单1</MenuItem>
        <MenuItem>副标题子菜单1</MenuItem>
        <MenuItem>副标题子菜单1</MenuItem>
        <MenuItem>副标题子菜单1</MenuItem>
        <MenuItem>副标题子菜单1</MenuItem>
      </SubMenu>
    </Menu>
  </div>
}


export default App

