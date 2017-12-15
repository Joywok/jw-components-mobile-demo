// import { List, Checkbox, Flex } from 'antd-mobile';
import { List, Checkbox } from 'jw-components-mobile';
import { Flex } from 'antd-mobile';
import React from 'react';
import ReactDOM from 'react-dom';


const CheckboxItem = Checkbox.CheckboxItem;
console.log(CheckboxItem,'CheckboxItem111111111111111')
// const AgreeItem = Checkbox.AgreeItem;

class Test extends React.Component {
  onChange = (val) => {

  }
  componentDidMount(){

  }
  render() {

    // setTimeout(()=>{
    //   $('.am-checkbox').closest('.am-checkbox-item').find('.am-list-content').removeClass('dlm-checkbox-color');
    //   $('.am-checkbox-checked').closest('.am-checkbox-item').find('.am-list-content').addClass('dlm-checkbox-color');
    // })
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
