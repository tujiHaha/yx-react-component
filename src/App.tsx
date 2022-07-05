import React from 'react'
import ReactDOM from 'react-dom';
import { Button, OriginPrice } from './index'
import '../styles/index.scss'

interface IBaseProps { }
const App: React.FC<IBaseProps> = () => {
  return <div>
    app
    <br />
    <Button>aaa</Button>
    <Button style={{ width: '100%' }}>aaa</Button>
    <Button style={{ width: '100%' }} disabled>disabled</Button>
    {/* <Button size='lg' disabled>123</Button> */}
    <OriginPrice price={123} />
  </div>
}

ReactDOM.render(<App />, document.getElementById('root'));

