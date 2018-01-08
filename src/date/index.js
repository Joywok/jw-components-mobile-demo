import { List, Checkbox, DatePicker } from "jw-components-mobile";
import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import 'moment/locale/zh-cn';
import enUs from 'jw-components-mobile/lib/date-picker/locale/en_US';
const maxDate = moment('2016-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const Item = List.Item;
import { createForm } from 'rc-form';

class DateExample extends React.Component {
  onChange(date,dateString){
    console.log(date, dateString);
  }
  render() {
    const { getFieldProps } = this.props.form;

    return (<div>
      <List  renderHeader={() => 'DatePicker demo'}>
        <DatePicker
            mode="date"
            title="选择日期"
            extra="可选,小于结束日期"
            minDate={minDate}
            maxDate={maxDate}
            {...getFieldProps('date1', {

            })}
          >
            <List.Item arrow="horizontal">日期(CST)</List.Item>
          </DatePicker>
      </List>
    </div>);
  }
}
const Example = createForm()(DateExample);


ReactDOM.render(<Example />, document.getElementById('root'));
