import { Modal } from 'jw-components-mobile';
import { Button } from "jw-components-mobile";
import React from 'react';
import ReactDOM from 'react-dom';
console.log(Modal,"jw")
// console.log(AlertBase,ConfirmBase,'ConfirmBaseConfirmBase')

const alertModal = () =>{
console.log('lllll:',Modal.alert);
// return;
  Modal.alert({
      tip: '已成功提交',
      icon: 'icon-alert-success',
      onOk: ()=>{ // 点击确认回调
        console.log('onOk')
      },
      onClose: ()=>{ // 关闭弹框回调

      },
      okBtn: {   // 此参数可不传，不传默认为 知道了
        text: '确定'
      }
    });

      // AlertBase.close();

}

// const confirmModal = () =>{
//
//   Modal.jwConfirm({
//      tip: '确认要提交维修订单？',
//      icon: 'icon-alert-success',
//      onOk: ()=>{  // 点击确认回调
//        console.log('onOk')
//      },
//      onCancel: ()=>{ // 取消回调
//
//      },
//      onClose: ()=>{ // 关闭弹框回调
//
//      },
//      okbtn: {   // 此参数可不传，不传默认为 确认
//        text: '确定'
//      },
//      cancelbtn: { // 此参数可不传，不传默认为 取消
//        text: '取消'
//      }
//    });
//
// }
//
// const memoDialog = () =>{
//
//   Modal.JwMemoDialog({
//      title: '请输入备注',   // 是否拒绝该订单？ 是否确认通过？
//      defaultValue: '', // 默认值
//      placeholder: '请输入备注...', // 拒绝必须输入备注...  选择输入备注...
//      memorequired: false, //备注是否必填 true必填， false不必填
//      btnIconClass: '', // button的icon图标
//      onBtnClick: ()=>{  // 点击按钮回调
//        console.log('onBtnClick')
//      },
//      onClose: ()=>{  // 关闭回调
// 				console.log('onClose')
//      },
//      btnVal: '确认' // 此参数可不传，不传默认为“确认”   可传 拒绝或通过
//    });
//
// }

class App extends React.Component{

  render(){
    return(
      <div>
        <br/>
        <Button className="modal-alert" onClick={alertModal}>Alert Modal</Button> <br/>
        <Button className="modal-alert">Confirm Modal</Button><br/>
        <Button className="modal-alert">Memo Dialog</Button><br/>
      </div>
    )
  }

  componentDidMount(){

  }

}

ReactDOM.render(<App />, document.getElementById('root'));
