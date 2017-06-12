import { Button } from "jw-components-mobile";
import React from 'react';
import ReactDOM from 'react-dom';
const a = 3;

/* eslint global-require: 0 */
const ButtonExample = () => (
    <div className="btn-container">
      <div>
      <h1>sdsdfs</h1>
        <Button className="btn" type="primary">primary button</Button>
        <Button className="btn" disabled onClick={e => console.log(e)}>
          disabled button
        </Button>
      </div>
    </div>
);
ReactDOM.render(<ButtonExample />, document.getElementById('root'));
