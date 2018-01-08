import { List, NavBar} from "jw-components-mobile";
import React from 'react';
import ReactDOM from 'react-dom';
const Item = List.Item;
const ListExample = React.createClass({
  
  render() {
    return ( <div>
      <List  className="my-list jw-list">
        <Item extra={'extra content'}>Title</Item>
        <Item extra="0102"  onClick={() => {}}>机构代码</Item>
        <Item extra="南京长江路"  onClick={() => {}}>机构名称</Item>
        <Item extra="刘金玉"  onClick={() => {}}>机构名称</Item>
        <Item extra="131126********0056"  onClick={() => {}}>证件编号</Item>
        <Item extra="18057114245"  onClick={() => {}}>手机号码</Item>
        <Item extra="新开账户"  onClick={() => {}}>开户类型</Item>
        <Item extra="未判定"  onClick={() => {}}>审核类型</Item>
        <Item extra="待审核"  onClick={() => {}}>记录情况</Item>
        <Item extra="1,000"  onClick={() => {}}>账户情况</Item>
      </List>
      <List className="my-list jw-list">
        <Item
         thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
         arrow="horizontal"
         onClick={() => {}}
        >0102</Item>
        <Item
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          arrow="horizontal"
          onClick={() => {}}
          >0102</Item>
          <Item
            thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
            arrow="horizontal"
            onClick={() => {}}
          >0102</Item>
      </List>
       <List  className="my-list jw-list">
         <Item className="inline-Icon" extra=""
          thumb="https://open.joywok.com/jma-site/Jma-Framework/mobilecsscomponents/build/images/doc-excel.png"
          onClick={() => {}}
         >0102</Item>
         <Item className="inline-Icon right" 
           thumb="https://open.joywok.com/jma-site/Jma-Framework/mobilecsscomponents/build/images/doc-excel.png"
           onClick={() => {}}
         >0102</Item>
        </List>
      </div>);
  },
});


ReactDOM.render(<ListExample />, document.getElementById('root'));
