import { Toast, Button } from 'jw-components-mobile';
import React from 'react';
import ReactDOM from 'react-dom';

function showToast() {
  Toast.info('This is a toast tips !!!', 1);
}

class ToastExample extends React.Component {
  componentDidMount() {
    // Toast.loading('Loading...', 30, () => {
    //   console.log('Load complete !!!');
    // });

    setTimeout(() => {
      Toast.hide();
    }, 3000);
  }
  render() {
    return (
      <Button onClick={showToast}>text only</Button>
    );
  }
}

ReactDOM.render(<ToastExample />, document.getElementById('root'));
