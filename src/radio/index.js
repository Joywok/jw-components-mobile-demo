import { List, Radio } from 'jw-components-mobile';
import React from 'react';
import ReactDOM from 'react-dom';

const RadioItem = Radio.RadioItem;

class Test extends React.Component {
  state = {
    value: 0,
    value2: 0,
    value3: 0,
    value4: 0,
  };
  onChange = (value) => {
    console.log('checkbox');
    this.setState({
      value,
    });
  };
  render() {
    const { value, value2, value3, value4 } = this.state;
    const data = [
      { value: 0, label: 'doctor' },
      { value: 1, label: 'bachelor' },
    ];

    return (<div>
      <List renderHeader={() => 'RadioItem demo'}>
        {data.map(i => (
          <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </RadioItem>
        ))}
      </List>
    </div>);
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));
