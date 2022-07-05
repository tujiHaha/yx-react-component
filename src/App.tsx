import React from 'react'
import ReactDOM from 'react-dom';
import { Button, Swiper } from '../dist/index.es.js'
// import '../styles/index.scss'
import '../dist/index.css'

interface IBaseProps { }
const App: React.FC<IBaseProps> = () => {
  return <div>
    app
    <br />
    <Button>aaa</Button>
    <Button style={{ width: '100%' }}>aaa</Button>
    <Button style={{ width: '100%' }} disabled>disabled</Button>
    {/* <Button size='lg' disabled>123</Button> */}

  </div>
}

ReactDOM.render(<App />, document.getElementById('root'));

