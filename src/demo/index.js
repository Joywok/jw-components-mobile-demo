import { List, Checkbox, Flex } from "jw-components-mobile";
import React from 'react';
import ReactDOM from 'react-dom';

const CheckboxItem = Checkbox.CheckboxItem;

class Test extends React.Component {
  onChange = (val) => {
    console.log(val);
  }
  render() {
    const data = [
      { value: 0, label: 'Ph.D.' },
      { value: 1, label: 'Bachelor' },
      { value: 2, label: 'college diploma' },
    ];
    return (<div>
      <List  renderHeader={() => 'CheckboxItem demo'}>
        {data.map(i => (
          <CheckboxItem key={i.value} onChange={() => this.onChange(i.value)}>
            {i.label}
          </CheckboxItem>
        ))}
        <CheckboxItem key="disabled" data-seed="logId" disabled defaultChecked multipleLine>
          undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
        </CheckboxItem>
      </List>
    </div>);
  }
}

ReactDOM.render(<Test />, document.getElementById('root'));
