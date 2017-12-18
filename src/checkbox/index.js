// import { List, Checkbox, Flex } from 'antd-mobile';
import { List, Checkbox } from 'jw-components-mobile';
import { Flex } from 'antd-mobile';
import React from 'react';
import ReactDOM from 'react-dom';


const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;
console.log(CheckboxItem,'CheckboxItem111111111111111')

class Test extends React.Component {
  onChange = (val) => {

  }
  componentDidMount(){

  }
  render() {
    const data = [
      { value: 0, label: 'Ph.D.' },
      { value: 1, label: 'Bachelor' },
      { value: 2, label: 'College diploma' },
    ];
    return (<div>
      <List className="jw-list" renderHeader={() => 'CheckboxItem demo'}>
        {data.map(i => (
          <CheckboxItem showtype={'jw-checkbox-button'}  key={i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </CheckboxItem>
        ))}
      </List>
    </div>);
  }
  did
}

ReactDOM.render(<Test />, document.getElementById('root'));
