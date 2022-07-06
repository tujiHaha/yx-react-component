import React from 'react'
import ReactDOM from 'react-dom';
import { Button, Swiper } from './'
// import { Button, Swiper } from 'yx-react-component'
import '../styles/index.scss'
// import 'yx-react-component/dist/index.css'

interface IBaseProps { }
const App: React.FC<IBaseProps> = () => {
  return <div>
    app
    <br />
    <Button>default</Button>
    <Button btnType='blue'>blue</Button>
    <Button btnType='orange'>orange</Button>
    <Button btnType='linear-red-orange'>linear-red-orange</Button>
    <Button btnType='linear-yellow-orange'>linear-yellow-orange</Button>
    <Button style={{ width: '100%' }}>aaa</Button>
    <Button style={{ width: '100%' }} disabled>disabled</Button>
    {/* <Button size='lg' disabled>123</Button> */}

    <div>
      <Swiper defaultIndex={1}>
        <Swiper.Item>
          <img src='https://wf.namibox.com/oms/qywxposter/87103471/ss_1656497214636.png' width={'100%'} />
        </Swiper.Item>
        <Swiper.Item>
          <img src='https://wf.namibox.com/oms/qywxposter/87103471/ss_1656497226546.png' width={'100%'} />
        </Swiper.Item>
        <Swiper.Item>
          <img src='https://wf.namibox.com/oms/qywxposter/87103471/ss_1656497238418.png' width={'100%'} />
        </Swiper.Item>
      </Swiper>
    </div>

  </div>
}

ReactDOM.render(<App />, document.getElementById('root'));

