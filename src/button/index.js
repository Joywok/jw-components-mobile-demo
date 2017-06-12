import { Button } from "jw-components-mobile";
import React from 'react';
import ReactDOM from 'react-dom';

/* eslint global-require: 0 */
const ButtonExample = () => (
    <div className="button-demo">
    	<h6>Button Demo </h6>
      <div>
        <Button className="btn" type="primary">primary button</Button>
        <Button className="btn" disabled onClick={e => console.log(e)}>
          disabled button
        </Button>
      </div>
    </div>
);
ReactDOM.render(<ButtonExample />, document.getElementById('root'));
