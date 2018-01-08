import React from 'react';
import ReactDOM from 'react-dom';
import { List, Radio } from 'jw-components-mobile';

const RadioItem = Radio.RadioItem;

const RadioExample = React.createClass({
  getInitialState() {
    return {
      value: 0,
    };
  },
  onChange(value) {
    console.log('checkbox');
    this.setState({
      value,
    });
  },
  render() {
    const { value } = this.state;
    const data = [
      { value: 0, label: '选项一' },
      { value: 1, label: '选项二' },
    ];

    return (<div>
      <List  renderHeader={() => 'Radio demo'}>
       {data.map(i => (
         <RadioItem key={i.value} checked={value===i.value} 
            onChange={() => this.onChange(i.value)}>
            {i.label}
          </RadioItem>
        ))}
      </List>
    </div>);
  },
});
ReactDOM.render(<RadioExample  />, document.getElementById('root'));
