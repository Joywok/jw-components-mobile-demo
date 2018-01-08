import { List, InputItem} from "jw-components-mobile";
import React from 'react';
import ReactDOM from 'react-dom';

import { createForm } from 'rc-form';

const InputExample = React.createClass({
  
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div>
        <List className="jw-list">
          <InputItem
            className="jw-inline"
            clear
            placeholder="请输入"            
            autoFocus>
            主办人工号
          </InputItem>
          <InputItem
            prefixListCls="jw"
            placeholder="请输入"
          >主办人工号</InputItem>
        </List>
        <List className="input-container jw-list">
          <InputItem prefixListCls="jw-statcked" placeholder="带有图标的input">
           <i className="fa fa-search"></i>
          </InputItem>
        </List>
        <List className="jw-list">
          <InputItem
           placeholder="请输入"
           data-seed="logId"
          >标题</InputItem>
          <InputItem
           placeholder="请输入"
           data-seed="logId"
          >标题</InputItem>
        </List>
      </div>
    );
  },
});

const BasicInputExample = createForm()(InputExample);

ReactDOM.render(<BasicInputExample />, document.getElementById('root'));
