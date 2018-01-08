import ReactDOM from 'react-dom';

import React,{PropType,Component} from 'react';
import { connect } from 'dva';
import {Button,Checkbox,Radio,Picker,List,SearchBar,ActionSheet,TabBar,Icon,Switch,Modal,SegmentedControl,InputItem,DatePicker,Card,TextareaItem,Tabs,Toast} from "jw-components-mobile";
import { createForm } from 'rc-form';
const CheckboxItem = Checkbox.CheckboxItem;
const RadioItem = Radio.RadioItem;
const Item = List.Item;
const Brief = Item.Brief;
const TabPane = Tabs.TabPane;
const alert = Modal.alert;
import moment from 'moment';
import 'moment/locale/zh-cn';
import enUs from 'jw-components-mobile/lib/date-picker/locale/en_US';
const maxDate = moment('2016-12-03 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const minDate = moment('2015-08-06 +0800', 'YYYY-MM-DD Z').utcOffset(8);
const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);

// import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

let wrapProps;
if (isIPhone) {
  wrapProps = {
    onTouchStart: e => e.preventDefault(),
  };
}
class FormShowTitle extends React.Component {
  
  constructor(props) {
    super(props);
      this.state = {
        value: 0,
        value2: 0,
        value3: 0,
        value4: 0,
        sValue: ['2013', '春'],
        selectedTab: 'redTab',
        hidden: false,
        visible: false,
      };
  }
  componentDidMount(){
  }
  onChange(date,dateString){
    console.log(date, dateString);
  }
  switchChange(checked){
      console.log(`switch to ${checked}`);
  }
  liChange(index){
    console.log(index);
  }
  onChange = (value) => {
    console.log('checkbox');
    this.setState({
      value,
    });
  }
  showActionSheet = () => {
    const BUTTONS = ['操作一', '操作二', '操作三', '删除', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      title: '标题',
      message: '我是描述我是描述',
      maskClosable: true,
      'data-seed': 'logId',
      wrapProps,
    },
    (buttonIndex) => {
      console.log("iiiiiiii",buttonIndex);
    });
  }
  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }}
          onClick={(e) => {
            e.preventDefault();
            this.setState({
              hidden: !this.state.hidden,
            });
          }}
        >
          点击切换 tab-bar 显示/隐藏
        </a>
      </div>
    );
  }
  showModal(e) {
    // 现象：如果弹出的弹框上的 x 按钮的位置、和手指点击 button 
    //时所在的位置「重叠」起来，
    // 会触发 x 按钮的点击事件而导致关闭弹框 (注：弹框上的取消/
    //确定等按钮遇到同样情况也会如此)
    e.preventDefault(); // 修复 Android 上点击穿透
        console.log(111)

    this.setState({
      visible: true,
    });
  }
  onClose() {
    this.setState({
      visible: false,
    });
  }
  callback(key) {
    console.log('onChange', key);
  }
  handleTabClick(key) {
    console.log('onTabClick', key);
  }
failToast() {
  Toast.fail('Load failed !!!', 1);
}

  makeTabPane = key => (
    <TabPane tab={`选项${key}`} key={key}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
        {`选项${key}内容`}
      </div>
    </TabPane>
  )
  makeMultiTabPane = (count) => {
    const result = [];
    for (let i = 0; i <= count; i++) {
      result.push(this.makeTabPane(i));
    }
    return result;
  }
  render(){
    const { getFieldProps } = this.props.form;

    const { value, value2, value3, value4 ,sValue} = this.state;
    const data = [
      { value: 0, label: 'Doctor' },
      { value: 1, label: 'Bachelor' },
    ];
    const seasons = [
      [
        {
          label: '2013',
          value: '2013',
        },
        {
          label: '2014',
          value: '2014',
        },
      ],
      [
        {
          label: '春',
          value: '春',
        },
        {
          label: '夏',
          value: '夏',
        },
      ],
    ];
    const data2 = [
     { value: 0, label: 'user1' },
     { value: 1, label: 'user2' },
     { value: 2, label: 'user3' },
    ];

    return(
      <div>
      <div className="form-show-title">
      <List  className="my-list jw-list">
        <Item extra="0102" arrow="empty" onClick={() => {}}>机构代码</Item>
        <Item extra="南京长江路" arrow="empty" onClick={() => {}}>机构名称</Item>
        <Item extra="刘金玉" arrow="empty" onClick={() => {}}>机构名称</Item>
        <Item extra="131126********0056" arrow="empty" onClick={() => {}}>证件编号</Item>
        <Item extra="18057114245" arrow="empty" onClick={() => {}}>手机号码</Item>
        <Item extra="新开账户" arrow="empty" onClick={() => {}}>开户类型</Item>
        <Item extra="未判定" arrow="empty" onClick={() => {}}>审核类型</Item>
        <Item extra="待审核" arrow="empty" onClick={() => {}}>记录情况</Item>
        <Item extra="1,000" arrow="empty" onClick={() => {}}>账户情况</Item>
      </List>
      
      <SearchBar placeholder="自动获取光标，支付宝客户端有效" autoFocus className="jw-search"  style={{ margin: '0.15rem 0' }} />
      <SearchBar placeholder="搜索"  className="jw-search" style={{ margin: '15px' }} />
      <List renderHeader={() => '基本样式'} className="jw-list">
        <Item extra={'内容内容'}>标题文字</Item>
      <Picker data={data2} cols={1} {...getFieldProps('district3')} className="forss">
        <List.Item arrow="horizontal">选择地区（单列）</List.Item>
      </Picker>
      <div>
        {data.map(i => (
         <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange(i.value)}>
          {i.label}
        </RadioItem>
      ))}
      </div>
      <div>
          {data2.map(i => (
           <CheckboxItem key={i.value} >
            <img src="https://dogesoft.joywok.com/file/vieworiginal?id=pZN02hY8HbGnSIG2" />
            <span>{i.label}</span>
           </CheckboxItem>
         ))}
      </div>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch1', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          onClick={(checked) => { console.log(checked); }}
        />}
      >默认开</List.Item>
      <List.Item
        extra={<Switch
          {...getFieldProps('Switch2', {
            initialValue: true,
            valuePropName: 'checked',
          })}
          onClick={(checked) => { console.log(checked); }}
        />}
      >默认开</List.Item>
      <InputItem
          {...getFieldProps('control')}
          placeholder="Hello World"
        >受控组件</InputItem>
         <InputItem
          className="jw-inline"
          clear
          placeholder=""
          autoFocus>
          主办人工号
        </InputItem>
        <InputItem
          prefixListCls="jw"
          placeholder=""
        >主办人工号</InputItem>
        <InputItem prefixListCls="jw-statcked" placeholder="带有图标的input">
         <i className="fa fa-search"></i>
        </InputItem>
         <InputItem
         placeholder="请输入"
         data-seed="logId"
        >标题</InputItem>
        <InputItem  prefixListCls="jw-statcked"
         placeholder="请输入"
         data-seed="logId"
        >标题</InputItem>
         <DatePicker
            mode="date"
            title="选择日期"
            extra="可选,小于结束日期"
            {...getFieldProps('date1', {

            })}
            minDate={minDate}
            maxDate={maxDate}
          >
            <List.Item arrow="horizontal">日期(CST)</List.Item>
          </DatePicker>
      </List>
     
    
     </div>
      </div>
      )
  } 
}
const Example = createForm()(FormShowTitle);




ReactDOM.render(<Example />, document.getElementById('root'));
