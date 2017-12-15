// import { default as List } from "jw-components-mobile/lib/list";
import { List, Radio } from 'jw-components-mobile';
import { Flex } from 'antd-mobile';
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
      { value: 2, label: 'teacher' },
      { value: 3, label: 'computer' },
    ];

    return (<div>
      <List renderHeader={() => 'RadioItem demo'}>
        {data.map(i => (
          <RadioItem showtype={'jw-radio-button'} key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </RadioItem>
        ))}
      </List>

    </div>);
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));

// <Flex style={{ padding: '15px' }}>
//   <Flex.Item style={{ padding: '15px 0', color: '#888', flex: 'none' }}>Radio demo(dustomized style)</Flex.Item>
//   <Flex.Item>
//     <Radio className="my-radio" onChange={e => console.log('checkbox', e)}>Agree</Radio>
//   </Flex.Item>
// </Flex>
