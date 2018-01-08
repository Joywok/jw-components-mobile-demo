import { Button ,ActionSheet,Toast} from "jw-components-mobile";
import React from 'react';
import ReactDOM from 'react-dom';

function successToast() {
  Toast.success(<div>11111</div>, 10000);
}
const customIcon = () => (
  <div>1111</div>
);
const ToastExample = React.createClass({
  render() {
    return (
      <div>
        <Button onClick={() => Toast.info(customIcon(), 1)}>成功toast</Button>
      </div>
    );
  },
});
ReactDOM.render(<ToastExample />, document.getElementById('root'));
