/**
 * jw公共弹框
 * 含以下内容：
 *  AlertBase(基础弹框 icon(可选)＋tip)
 *  ConfirmBase(基础确认弹框 icon(可选)＋tip)
 *  MemoDialog(备注弹框)
 */

/**
 * alert 基础弹框 icon(可选)＋tip
 *
 * 使用方法:
 * import { AlertBase } from '../../components/Common/EpsModal';
 * AlertBase({
			tip: '已成功提交',
			icon: 'icon-create-success',
			onOk: ()=>{ // 点击确认回调
				console.log('onOk')
			},
			onClose: ()=>{ // 关闭弹框回调

			},
			okBtn: {   // 此参数可不传，不传默认为 知道了
				text: '提交中...'
			}
		});
 * 可以从外面关闭弹框 let tmpalert = AlertBase({...});  tmpalert.close();
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'jw-components-mobile';
import Form from "jw-form/dist/mobile";

class JwAlert extends Component{
	constructor(props) {
		super(props);
	}
  // 组件加载完毕
  componentDidMount(){
		$(ReactDOM.findDOMNode(this.refs.jwModalAlert)).closest('.am-modal').addClass('jw-modal-alert');
		$(ReactDOM.findDOMNode(this.refs.jwModalAlert)).closest('.am-modal-wrap').parent().addClass('jw-alert-custom');
  }

	render(){
		let icon = this.props.icon ? (<i className={ this.props.icon }></i>) : '';
		return (<div className="jw-alert-simple" ref="jwModalAlert">
				{ icon }
				<p>{ this.props.tip }</p>
			</div>)
	}
};


export const AlertBase = (props)=>{
	const alert = Modal.alert;
	const dialog = alert(
    '',
    (<JwAlert tip={ props.tip } icon={ props.icon }/>),
    [{
      text: props.okBtn&&props.okBtn.text ? props.okBtn.text : '知道了',
      onPress: () => {
        dialog.close();
        props.onOk && typeof(props.onOk)=='function' ? props.onOk() : '';
      }
    },
    {
      text: (<Button className="icon-alert-cancel"></Button>),
      onPress: () => {
        dialog.close();
        props.onClose && typeof(props.onClose)=='function' ? props.onClose() : '';
      },
      style: { position: 'absolute', right: '5px', top: '0', background: 'transparent', width: '1.0144927536rem' },
    }]
  )
  return dialog;
}

/**
 * confirm 基础弹框 icon(可选)＋tip
 *
 * 使用场景：
 * 确认创建维修订单弹框
 *
 * 使用方法:
 * import { ConfirmBase } from '../../components/Common/EpsModal';
 * ConfirmBase({
      tip: '确认要提交维修订单？',
      icon: 'icon-alert-repair',
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
 * 可以从外面关闭弹框 let tmpconfirm = ConfirmBase({...});  tmpconfirm.close();
 */
 export const ConfirmBase = (props)=>{
 	const alert = Modal.alert;
 	const dialog = alert(
     '',
     (<EpsAlert tip={ props.tip } icon={ props.icon }/>),
     [{
       text: props.cancelbtn&&props.cancelbtn.text ? props.cancelbtn.text : '取消',
       onPress: () => {
         dialog.close();
         props.onCancel && typeof(props.onCancel)=='function' ? props.onCancel() : '';
       },
       style: { float: 'left', width: '50%', 'border-right':'1px solid #e5e4e5' }
     },
     {
       text: props.okbtn&&props.okbtn.text ? props.okbtn.text : '确认',
       onPress: () => {
         dialog.close();
         props.onOk && typeof(props.onOk)=='function' ? props.onOk() : '';
       },
       style: { float: 'left', width: '50%', border: '0' }
     },
     {
       text: (<Button className="icon-alert-cancel"></Button>),
       onPress: () => {
         dialog.close();
         props.onClose && typeof(props.onClose)=='function' ? props.onClose() : '';
       },
       style: { position: 'absolute', right: '5px', top: '0', background: 'transparent', width: '1.0144927536rem' },
     }]
   )
   return dialog;
 }



// 备注弹框开始
class MemoDialogComponent extends Component{
	constructor(props) {
		super(props);
		this.state = this.props.jwDialogConfig;
		this.state.show = true;
		this.state.updating = false;
	}
	changeData(values,schema){
		this.dataMemo = values[0]['defaultValue'];
    typeof(this.props.jwDialogConfig.changeData)=='function' && this.props.jwDialogConfig.changeData(values)
		console.log("MemoDialogComponent values:",values,"changeData:",schema);
	}
	btnClick(){
		let self = this;
		this.oldBtnVal =  _.clone(this.state.btnVal);
		this.setState({btnVal:'提交中…'});
		if(this.state.updating){
			return
		}
		if(this.state['memorequired'] == true && $.trim(this.dataMemo)==''){
			AlertBase({
				tip: '请输入备注!',
				icon: 'icon-save-error',
				onOk: ()=>{}
			});
			this.setState({btnVal:this.oldBtnVal})
			return;
		}
		this.setState({updating:true});
		// this.state.updating = true;
		typeof(this.state.onBtnClick) == 'function' ? this.state.onBtnClick(this.dataMemo,this.closeCallBack.bind(self)) : '';
		// setTimeout(()=>{
		// 	self.state.updating = false;
		// 	typeof(self.props.onClose) == 'function' ? self.props.onClose(self.dataMemo||self.state.defaultValue) : '';
		// },801)
	}
	closeCallBack(error){
		let self = this;
		if(error){
			this.setState({updating:false,btnVal:self.oldBtnVal});
		}else{
			this.setState({show: false});
			typeof(self.props.onClose) == 'function' ? self.props.onClose(self.dataMemo||self.state.defaultValue) : '';
		}
	}
	close(){
		let self = this;
		this.setState({show: false});
		setTimeout(()=>{
			$(".jw-dialog").remove();
			typeof(self.state.onClose) == 'function' ? self.state.onClose(self.dataMemo||self.state.defaultValue) : '';
			typeof(self.props.onClose) == 'function' ? self.props.onClose(self.dataMemo||self.state.defaultValue) : '';
		},801)
	}
  // 组件加载完毕
  componentDidMount(){
		let height = $(ReactDOM.findDOMNode(this.refs.jwmemo)).height();

		$('.jw-dialog-w').css({
			marginTop:-(height/2)+'px'
		})
		if(this.state['show']){
			$('.main-c').addClass('hide-scroll')
		}else{
			$('.main-c').removeClass('hide-scroll')
		}
	}
	render(){
		this.dataMemo = this.dataMemo ? this.dataMemo : (this.state.defaultValue ? this.state.defaultValue : '');
		let formData={
			className:'clear-padding',
			schema:[
				{
					name:'feedback',element:'Textarea',
					defaultValue: this.dataMemo,
					value: this.dataMemo,
					attr:{
						placeholder:(this.state['placeholder']),
						autoHeight:true,
						count:200,
					},
          rows:8,
					events:{
						onChange(){
							let height = $('.jw-dialog-w').height();
							$('.jw-dialog-w').css({
								marginTop:-(height/2)+'px'
							})
						}
					},
					rules:[]
				}
			],
			buttons:false,
			changeData:this.changeData.bind(this)
		}

		let avatar = this.state.avatar ? this.state.avatar : 'images/avatar.png';

		console.log(this.state,'state的状态')

		let moveing;
		if(this.state['show']){
			moveing = 'bounceInUp';
			$('.jw-dialog').removeClass('hide');
		}else{
			moveing = 'bounceOutDown'
			setTimeout(()=>{
				$('.jw-dialog').addClass('hide');
			},600);
		}
		return (<div className={"jw-dialog jw-modal fix"}>
			<div className="jw-dialog-mark"></div>
			<div className={"jw-dialog-w animated "+(moveing)} ref="jwmemo">
				<div className="jw-dialog-close icon-close-b" onClick={(e)=>this.close(e)}></div>
				<div className="jw-dialog-title">
					<div className="jw-dialog-pic"><img src={ avatar }></img></div>
					<div className="jw-dialog-title-c">{this.state["title"]}</div>
				</div>
				<div className="jw-dialog-c">
					<div className="appraisal-form">
						<Form ref='form' formData={formData} onChange={(values,schema)=>this.FormChange(values,schema)}/>
					</div>
				</div>
				<div className="jw-dialog-btn" onClick={(e)=>this.btnClick(e)}>
					<i className={this.state["btnIconClass"] ? this.state["btnIconClass"] : 'icon-check-36'}></i>
					<span>{this.state["btnVal"] ? this.state["btnVal"] : '确认'}</span>
				</div>
			</div>
		</div>)
	}
};

/**
 * MemoDialog(备注弹框 可以用在供应商响应时，也可以用在通过审批和拒绝审批时)
 *
 * 使用场景：
 * 供应商响应，通过审批，拒绝审批
 *
 * 使用方法:
 * import { MemoDialog } from '../../components/Common/EpsModal';
 * MemoDialog({
      title: '请输入备注',   // 是否拒绝该订单？ 是否确认通过？
      defaultValue: '', // 默认值
      placeholder: '请输入备注...', // 拒绝必须输入备注...  选择输入备注...
      memorequired: false, //备注是否必填 true必填， false不必填
      btnIconClass: 'icon-check-i', // button的icon图标
      onBtnClick: ()=>{  // 点击按钮回调
        console.log('onBtnClick')
      },
      onClose: ()=>{  // 关闭回调
				console.log('onClose')
      },
      btnVal: '确认' // 此参数可不传，不传默认为“确认”   可传 拒绝或通过
    });
 * 可以从外面关闭弹框 let tmpmemodialog = MemoDialog({...});  tmpmemodialog.close();
 */
export const MemoDialog = (props)=>{
	console.log('MemoDialog',props)
  var div = document.createElement('div');
  document.body.appendChild(div);
  const close = ()=>{
  	setTimeout(()=>{
	  	ReactDOM.unmountComponentAtNode(div);
  	},600)
    if (div && div.parentNode) {
    	$(div).find('.jw-dialog-w').addClass('bounceOutDown');
    	setTimeout(()=>{
        div.parentNode.removeChild(div);
    	},600)
    }
  }
	ReactDOM.render(<MemoDialogComponent jwDialogConfig={ props } onClose={ close }/>, div);
  return { close: close };
}
