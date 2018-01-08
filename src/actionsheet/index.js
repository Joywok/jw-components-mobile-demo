import { Button ,ActionSheet,Toast} from "jw-components-mobile";
import React from 'react';
import ReactDOM from 'react-dom';
/* eslint global-require: 0 */

class Example extends React.Component {

 showActionSheet1(){
  const BUTTONS = [
   <div className="item"><span className="item-icon"><i className="fa fa-camera color-energized"></i></span><span>拍照</span></div>,
   <div className="item"><span className="item-icon"><i className="fa fa-picture-o color-assertive"></i></span><span>从相册中选择</span></div>,];
   ActionSheet.showActionSheetWithOptions({
    options: BUTTONS,
    message: '选择照片',
    className:"hasIcons",
   },
   (buttonIndex) => {
    return new Promise((resolve) => {
     console.log(buttonIndex);
     setTimeout(resolve, 100);
     });
    });  
  }
  showActionSheet2(){
    const BUTTONS = ['置顶', '收集到任务分解项', '创建任务', '删除', '取消'];
    ActionSheet.showActionSheetWithOptions({
      options: BUTTONS,
      cancelButtonIndex: BUTTONS.length - 1,
      destructiveButtonIndex: BUTTONS.length - 2,
      message: '我是描述',
      maskClosable: true,
     'data-seed': 'logId',
     },
     (buttonIndex) => {
       return new Promise((resolve) => {
         console.log(buttonIndex);
         setTimeout(resolve, 100);
       });
     });
  }
  render() {
   return(
    <div>
      <div style={{ margin: '15px 0' }}>
       <Button type="primary" onClick={this.showActionSheet1}>带图标功能</Button>
      </div>
      <div style={{ margin: '15px 0' }}>
        <Button type="primary" onClick={this.showActionSheet2}>默认状态</Button>
      </div>
    </div>
    );
  }
}

ReactDOM.render(<Example />, document.getElementById('root'));
