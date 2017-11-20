import {Tabs} from "jw-components-mobile";
import React from 'react';
import ReactDOM from 'react-dom';
// import { Tabs  } from 'antd-mobile';


const TabPane = Tabs.TabPane;

function callback(key) {
  console.log('onChange', key);
}
function handleTabClick(key) {
  console.log('onTabClick', key);
}
const makeTabPane = key => (
  <TabPane tab={`选项${key}`} key={key} >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '12rem', backgroundColor: '#fff' }}>
      {`选项${key}内容`}
    </div>
  </TabPane>
);

const makeMultiTabPane = (count) => {
  const result = [];
  for (let i = 0; i <= count; i++) {
    result.push(makeTabPane(i));
  }
  return result;
};

const TabExample = () => (
  <div>
    <Tabs defaultActiveKey="8" onChange={callback} pageSize={5} onTabClick={handleTabClick}>
      {makeMultiTabPane(11)}
    </Tabs>
  </div>
);

ReactDOM.render(<TabExample />, document.getElementById('root'));
