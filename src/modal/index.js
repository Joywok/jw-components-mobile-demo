import { Button, Toast } from 'jw-components-mobile';
import React from 'react';
import ReactDOM from 'react-dom';
import { AlertBase, ConfirmBase, MemoDialog } from '../common/modal';


const alertModal = () =>{

  AlertBase({
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

}

const confirmModal = () =>{

  ConfirmBase({
     tip: '确认要提交维修订单？',
     icon: '',
     onOk: ()=>{  // 点击确认回调
       console.log('onOk')
     },
     onCancel: ()=>{ // 取消回调

     },
     onClose: ()=>{ // 关闭弹框回调

     },
     okBtn: {   // 此参数可不传，不传默认为 确认
       text: '确认'
     },
     cancelBtn: { // 此参数可不传，不传默认为 取消
       text: '取消'
     }
   });

}

const memoDialog = () =>{

  MemoDialog({
     title: '请输入备注',   // 是否拒绝该订单？ 是否确认通过？
     defaultValue: '', // 默认值
     placeholder: '请输入备注...', // 拒绝必须输入备注...  选择输入备注...
     memorequired: false, //备注是否必填 true必填， false不必填
     btnIconClass: '', // button的icon图标
     onBtnClick: ()=>{  // 点击按钮回调
       console.log('onBtnClick')
     },
     onClose: ()=>{  // 关闭回调
				console.log('onClose')
     },
     btnVal: '确认' // 此参数可不传，不传默认为“确认”   可传 拒绝或通过
   });

}

function showToastNoMask() {
  Toast.info('Toast without mask !!!');
}

const App = () => (
  <div>
    <br/>
    <Button className="modal-alert" onClick={alertModal}>Alert Modal</Button> <br/>
    <Button className="modal-alert" onClick={confirmModal}>Confirm Modal</Button><br/>
    <Button className="modal-alert" onClick={memoDialog}>Memo Dialog</Button><br/>
    <Button className="modal-alert" onClick={showToastNoMask}>Toast Mask Test</Button>
  </div>
);


ReactDOM.render(<App />, document.getElementById('root'));
