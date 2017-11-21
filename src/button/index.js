import { Button } from 'jw-components-mobile';
import ReactDOM from 'react-dom';
import React from 'react';

const ButtonExample = () => (
  <div>
    <Button>default disabled</Button><br/>

    <Button type="primary">primary</Button><br/>
    <Button type="primary" disabled>primary disabled</Button><br/>

    <Button type="warning">warning</Button><br/>
    <Button type="warning" disabled>warning disabled</Button><br/>

    <Button type="primary" inline style={{ marginRight: '4px' }}>inline primary</Button><br/>

    <Button type="ghost" inline style={{ marginRight: '4px' }} className="am-button-borderfix">inline ghost</Button><br/>

    <Button type="primary" inline size="small" style={{ marginRight: '4px' }}>primary</Button><br/>
    <Button type="primary" inline size="small" disabled>primary disabled</Button><br/>

    <Button type="ghost" inline size="small" style={{ marginRight: '4px' }}>ghost</Button><br/>

    <Button type="ghost" inline size="small" className="am-button-borderfix" disabled>ghost disabled</Button><br/>
  </div>

);
ReactDOM.render(<ButtonExample />, document.getElementById('root'));
