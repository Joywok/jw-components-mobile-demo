import { Modal, Button, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import React from 'react';
import ReactDOM from 'react-dom';

const alert = Modal.alert;
const prompt = Modal.prompt;


const showAlert = () => {
  const alertInstance = alert('Delete', 'Are you sure???', [
    { text: 'Cancel', onPress: () => console.log('cancel'), style: 'default' },
    { text: 'OK', onPress: () => console.log('ok') },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};

const showPrompt = () => {
  const alertPrompt = prompt(<img src="../button/images/123.png" />,"请输入您的名字",
    [
      {
        text: '确认',
        onPress: value => new Promise((resolve) => {
          Toast.info('onPress promise', 1);
          setTimeout(() => {
            resolve();
            console.log(`value:${value}`);
          }, 1000);
        }),
      },
    ], 'default', null, ['请输入您的名字'])
}



const App = () => (
  <WingBlank size="lg">

    <WhiteSpace size="lg" />
    <Button className="modal-alert" onClick={showAlert}>confirm</Button>

    <WhiteSpace size="lg" />
    <Button className="modal-prompt" onClick={showPrompt}>promise</Button>

  </WingBlank>
);


ReactDOM.render(<App />, document.getElementById('root'));
