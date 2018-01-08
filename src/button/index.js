import { Button } from "jw-components-mobile";
import React from 'react';
import ReactDOM from 'react-dom';
console.log(Button,"button")
/* eslint global-require: 0 */
const ButtonExample = () => (
    <div className="button-demo">
    	<h6>Button Demo </h6>
      <div>
         <Button   data-seed="logId">有点击反馈</Button>
        <Button   data-seed="logId" type="warning" >warning 按钮</Button>
        <Button   data-seed="logId" type="ghost" >ghost 按钮
        </Button>
        <Button   type="primary">primary 按钮</Button>
        <Button    disabled>disabled 按钮</Button>
      </div>
    </div>
);
ReactDOM.render(<ButtonExample />, document.getElementById('root'));
