import { Toast, Button, NoticeBar } from 'jw-components-mobile';
import React from 'react';
import ReactDOM from 'react-dom';

console.log(NoticeBar,'NoticeBar')

function showToast() {
  Toast.info('This is a toast tips', 1, null, false);
}

function showToastNoMask() {
  Toast.info('Toast without mask', 2, null, true);
}

function successToast() {
  Toast.success('Load success', 1);
}

class ToastExample extends React.Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <br />
        <NoticeBar mode="closable" icon={null}>Remove the default icon.</NoticeBar><br/>

        <Button className="modal-alert" onClick={showToast}>text only</Button><br />

        <Button className="modal-alert" onClick={showToastNoMask}>without mask</Button><br />

        <Button className="modal-alert" onClick={successToast}>success</Button><br />

      </div>

    );
  }
}

ReactDOM.render(<ToastExample />, document.getElementById('root'));
