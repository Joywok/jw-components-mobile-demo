import { Button, WingBlank, WhiteSpace } from 'antd-mobile';
import React from 'react';
import ReactDOM from 'react-dom';
import { AlertBase } from '../common/modal';

const alertModal = () =>{
  AlertBase({
      tip: '已成功提交',
      icon: 'icon-alert-success',
      onOk: ()=>{ // 点击确认回调
        console.log('onOk')
      },
      onClose: ()=>{ // 关闭弹框回调

      },
      okBtn: {   // 此参数可不传，不传默认为 知道了
        text: '确定'
      }
    });
}

const App = () => (
  <WingBlank size="lg">

    <WhiteSpace size="lg" />
    <Button className="modal-alert" onClick={alertModal}>Alert Modal</Button>

  </WingBlank>
);


ReactDOM.render(<App />, document.getElementById('root'));
