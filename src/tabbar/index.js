import { List, NavBar,TabBar,Icon} from "jw-components-mobile";

import React from 'react';
import ReactDOM from 'react-dom';
const Item = List.Item;
const ListExample = React.createClass({
  getInitialState() {
    return {
     selectedTab: 'redTab',
     hidden: false,
    };
   },
  renderContent(pageText) {
    return (
     <div style={{ backgroundColor: 'white', height: '100%', textAlign: 'center' }}>
      <div style={{ paddingTop: 60 }}>你已点击“{pageText}” tab， 当前展示“{pageText}”信息</div>
       <a style={{ display: 'block', marginTop: 40, marginBottom: 600, color: '#108ee9' }} onClick={(e) => {
        e.preventDefault();
         this.setState({
          hidden: !this.state.hidden,
         });
        }}
        >点击切换 tab-bar 显示/隐藏
       </a>
      </div>);
   },
  render() {
    return ( <div>
     <TabBar
       unselectedTintColor="#949494"
       tintColor="#33A3F4"
       barTintColor="white"
       hidden={this.state.hidden}>
       <TabBar.Item
        title="123"
        key="1"
        icon={<div style={{
         width: '0.44rem',
         height: '0.44rem',
         background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }} />
         }
        selectedIcon={<div style={{
         width: '0.44rem',
         height: '0.44rem',
         background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}/>
        }
        selected={this.state.selectedTab === 'blueTab'}
        badge={1}
        onPress={() => {
         this.setState({
          selectedTab: 'blueTab',
         });
        }}
        data-seed="logId">
        {this.renderContent('123')}
       </TabBar.Item>
       <TabBar.Item
        icon={<div style={{
         width: '0.44rem',
         height: '0.44rem',
         background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat' }} />
         }
        selectedIcon={<div style={{
         width: '0.44rem',
         height: '0.44rem',
         background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat' }}/>
        }
        title="123"
        key="2"
        badge={'new'}
        selected={this.state.selectedTab === 'redTab'}
        onPress={() => {
         this.setState({
          selectedTab: 'redTab',
         });
        }}
        data-seed="logId1">
        {this.renderContent('123')}
       </TabBar.Item>
       <TabBar.Item
        icon={
         <div style={{
          width: '0.44rem',
           height: '0.44rem',
           background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}/>
        }
        selectedIcon={
         <div style={{
          width: '0.44rem',
          height: '0.44rem',
          background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}/>
        }
        title="123"
        key="3"
        dot
        selected={this.state.selectedTab === 'greenTab'}
        onPress={() => {
         this.setState({
          selectedTab: 'greenTab',
         });
        }}>
        {this.renderContent('123')}
       </TabBar.Item>
       <TabBar.Item
        icon={
         <div style={{
          width: '0.44rem',
           height: '0.44rem',
           background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat' }}/>
        }
        selectedIcon={
         <div style={{
          width: '0.44rem',
          height: '0.44rem',
          background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat' }}/>
        }
        title="123"
        key="4"
        selected={this.state.selectedTab === 'yellowTab'}
        onPress={() => {
         this.setState({
          selectedTab: 'yellowTab',
         });
        }}>
        {this.renderContent('123')}
       </TabBar.Item>
      </TabBar>
      </div>);
  },
});


ReactDOM.render(<ListExample />, document.getElementById('root'));
