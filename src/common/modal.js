/**
 * eps公共弹框
 * 含以下内容：
 *  AlertBase(基础弹框 icon(可选)＋tip)
 *  ConfirmBase(基础确认弹框 icon(可选)＋tip)
 *  MemoDialog(备注弹框 可以用在供应商响应时，也可以用在通过审批和拒绝审批时)
 *  EvaluateDialog(评价订单)
 */

/**
 * alert 基础弹框 icon(可选)＋tip
 *
 * 使用场景：
 * 创建订单时的提示框 如： 正在提交维修订单，已成功提交，提交失败
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
// import EpsDialog from './EpsDialog';
// import Form from "jw-form/dist/editors/mobile";

class EpsAlert extends Component{
	constructor(props) {
		super(props);
	}
  // 组件加载完毕
  componentDidMount(){
    $(ReactDOM.findDOMNode(this.refs.epsModalAlert)).closest('.am-modal').addClass('eps-modal-alert');
    $(ReactDOM.findDOMNode(this.refs.epsModalAlert)).closest('.am-modal-wrap').parent().addClass('eps-alert-custom');
  }

	render(){
		let icon = this.props.icon ? (<i className={ this.props.icon }></i>) : '';
		return (<div className="eps-alert-simple" ref="epsModalAlert">
				{ icon }
				<p>{ this.props.tip }</p>
			</div>)
	}
};


export const AlertBase = (props)=>{
	const alert = Modal.alert;
	const dialog = alert(
    '',
    (<EpsAlert tip={ props.tip } icon={ props.icon }/>),
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
		this.state = this.props.epsDialogConfig;
		this.state.show = true;
		this.state.updating = false
	}
	changeData(values,schema){
		this.dataMemo = values[0]['defaultValue'];
    typeof(this.props.epsDialogConfig.changeData)=='function' && this.props.epsDialogConfig.changeData(values)
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
			$(".eps-dialog").remove();
			typeof(self.state.onClose) == 'function' ? self.state.onClose(self.dataMemo||self.state.defaultValue) : '';
			typeof(self.props.onClose) == 'function' ? self.props.onClose(self.dataMemo||self.state.defaultValue) : '';
		},801)
	}
  // 组件加载完毕
  componentDidMount(){
		let height = $(ReactDOM.findDOMNode(this.refs.epsmemo)).height();

		$('.eps-dialog-w').css({
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
							let height = $('.eps-dialog-w').height();
							$('.eps-dialog-w').css({
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

		let avatar = this.state.avatar ? this.state.avatar : 'images/user-normal.png';

		let moveing;
		if(this.state['show']){
			moveing = 'bounceInUp';
			$('.eps-dialog').removeClass('hide');
		}else{
			moveing = 'bounceOutDown'
			setTimeout(()=>{
				$('.eps-dialog').addClass('hide');
			},600);
		}
		return (<div className={"eps-dialog eps-modal fix"}>
			<div className="eps-dialog-mark"></div>
			<div className={"eps-dialog-w animated "+(moveing)} ref="epsmemo">
				<div className="eps-dialog-close icon-close-b" onClick={(e)=>this.close(e)}></div>
				<div className="eps-dialog-title">
					<div className="eps-dialog-pic"><img src={ avatar }></img></div>
					<div className="eps-dialog-title-c">{this.state["title"]}</div>
				</div>
				<div className="eps-dialog-c">
					<div className="appraisal-form">
						<Form ref='form' formData={formData} onChange={(values,schema)=>this.FormChange(values,schema)}/>
					</div>
				</div>
				<div className="eps-dialog-btn" onClick={(e)=>this.btnClick(e)}>
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
    	$(div).find('.eps-dialog-w').addClass('bounceOutDown');
    	setTimeout(()=>{
        div.parentNode.removeChild(div);
    	},600)
    }
  }
	ReactDOM.render(<MemoDialogComponent epsDialogConfig={ props } onClose={ close }/>, div);
  return { close: close };
}
// 评价订单开始
class EvaluateDialogComponent extends Component{
	constructor(props) {
		super(props);
		this.state = this.props.epsDialogConfig;
		this.state.show = true;
	}
	changeData(values,schema){
		this.dataMemo = values[0]['defaultValue'];
		console.log("EvaluateDialogComponent values:",values,"changeData:",schema);
	}
	btnClick(){
		let self = this;
		// if(this.state['memorequired'] == true && $.trim(this.dataMemo)=='') return;
		// typeof(this.state.onBtnClick) == 'function' ? this.state.onBtnClick(this.dataMemo) : '';
		this.oldBtnVal =  _.clone(this.state.btnVal);
		this.setState({btnVal:'提交中…'});
		if(this.state.updating){
			return
		}
		this.refs.form.validateFields(function(errors,values){
			// localStorage.removeItem('Joywok:cache:evaluate');
			// console.log(errors,'zzzzzzzzzzzzzzzzzz')
			// if(errors){
			// 	return
			// }
			if(typeof(self.state.rules) == 'function'){
				if(self.state.rules(values)){
					self.setState({
						updating:true
					})
					// self.state.updating = true;
					typeof(self.state.onBtnClick) == 'function' ?self.state.onBtnClick(values,self.closeCallBack.bind(self)) :""
				}else{
					self.setState({btnVal:self.oldBtnVal});
				}
			}else{
				self.setState({
					updating:true
				})
				typeof(self.state.onBtnClick) == 'function' ?self.state.onBtnClick(values,self.closeCallBack.bind(self)) :""
			}
  	})
	}
	closeCallBack(error){
		let self = this;
		// this.setState({updating:false,show: false,btnVal:self.oldBtnVal});
		if(error){
			this.setState({updating:false,btnVal:self.oldBtnVal});
		}else{
			this.setState({show: false});
			typeof(self.props.onClose) == 'function' ? self.props.onClose(values) : '';
		}
	}
	close(){
		let self = this;
		this.setState({show: false});
		this.refs.form.validateFields(function(errors,values){
			window.EvaluateCache = values;
		})
		setTimeout(()=>{
			$(".eps-dialog").remove();
			typeof(self.state.onClose) == 'function' ? self.state.onClose(self.dataMemo||self.state.defaultValue) : '';
			typeof(self.props.onClose) == 'function' ? self.props.onClose(self.dataMemo||self.state.defaultValue) : '';
		},801)
	}
  // 组件加载完毕
  componentDidMount(){
		if(this.state['show']){
			$('.main-c').addClass('hide-scroll')
		}else{
			$('.main-c').removeClass('hide-scroll')
		}
		$('body').delegate('.form-item-Rate .ant-form-item-label','click',function(e){
			AlertInfoBase({
				text: $(e.currentTarget).html(),
		 	});
			console.log();
			//
		})
	}
	render(){
		let formData;
		if(this.state.formData){
			formData = this.state.formData;
		}else{
			formData={
				schema:[
					{
						name: 'rate_1', element:'Rate',
						label:'评价项1',
						defaultValue: 1,
						attr:{
							empty:<i className="icon-star"></i>,
							full:<i className="icon-star-active"></i>
						},
						rules:[]
					},{
						name: 'rate_2', element:'Rate',
						label:'评价项2',
						defaultValue: 1,
						attr:{
							empty:<i className="icon-star"></i>,
							full:<i className="icon-star-active"></i>
						},
						rules:[]
					},{
						name:'feedback',element:'Textarea',
						defaultValue:'',
						attr:{
							className:'appraisal-form-feedback',
							placeholder:'请输入备注...'
						},
						rules:[]
					}
				],
				buttons:false,
				changeData:this.changeData.bind(this)
			}
		}
		let avatar = this.state.avatar ? this.state.avatar : 'images/user-normal.png';
		let moveing;
		if(this.state['show']){
			moveing = 'bounceInUp';
			$('.eps-dialog').removeClass('hide');
		}else{
			moveing = 'bounceOutDown'
			setTimeout(()=>{
				$('.eps-dialog').addClass('hide');
			},600);
		}
		return (<div className={"eps-dialog"}>
			<div className="eps-dialog-mark"></div>
			<div className={"eps-dialog-w animated "+(moveing)}>
				<div className="eps-dialog-close icon-close-b" onClick={(e)=>this.close(e)}></div>
				<div className="eps-dialog-title">
					<div className="eps-dialog-pic"><img src={ avatar }></img></div>
					<div className="eps-dialog-title-c">{this.state["title"]}</div>
				</div>
				<div className="eps-dialog-c">
					<div className="appraisal-form">
						<Form ref='form' formData={formData} onChange={(values,schema)=>this.FormChange(values,schema)}/>
					</div>
				</div>
				<div className="eps-dialog-btn" onClick={(e)=>this.btnClick(e)}>
					<i className={this.state["btnIconClass"] ? this.state["btnIconClass"] : 'icon-check-i'}></i>
					<span>{this.state["btnVal"] ? this.state["btnVal"] : '完成'}</span>
				</div>
			</div>
		</div>)
	}
};
/**
 * EvaluateDialog(五星评价弹框 可以用在餐厅评价时)
 *
 * 使用场景：
 * 餐厅确认订单及评价
 *
 * 使用方法:
 * import { EvaluateDialog } from '../../components/Common/EpsModal';
 * EvaluateDialog({
      title: '请输入备注',   // 是否拒绝该订单？ 是否确认通过？
      formData: { // 表单schema
					schema:[
						{
							name: 'rate_1', element:'Rate',
							label:'评价项1',
							defaultValue: 1,
							attr:{
								empty:<i className="icon-star"></i>,
								full:<i className="icon-star-active"></i>
							},
							rules:[]
						},{
							name: 'rate_2', element:'Rate',
							label:'评价项2',
							defaultValue: 1,
							attr:{
								empty:<i className="icon-star"></i>,
								full:<i className="icon-star-active"></i>
							},
							rules:[]
						},{
							name:'feedback',element:'Textarea',
							defaultValue:'',
							attr:{
								className:'appraisal-form-feedback',
								placeholder:'请输入备注...'
							},
							rules:[]
						}
					],
					buttons:false,
					changeData:this.changeData.bind(this)
				}
			},
      btnIconClass: 'icon-check-i', // button的icon图标
      onBtnClick: ()=>{  // 点击按钮回调
        console.log('onBtnClick')
      },
      onClose: ()=>{  // 关闭回调
				console.log('onClose')
      },
      btnVal: '完成' // 可不传
    });
 * 可以从外面关闭弹框 let tmpEvaluateDialog = EvaluateDialog({...});  tmpEvaluateDialog.close();
 */
export const EvaluateDialog = (props)=>{
	console.log('EvaluateDialog',props)
  var div = document.createElement('div');
  document.body.appendChild(div);
  const close = ()=>{
  	setTimeout(()=>{
	  	ReactDOM.unmountComponentAtNode(div);
  	},600)
    if (div && div.parentNode) {
    	$(div).find('.eps-dialog-w').addClass('bounceOutDown');
    	setTimeout(()=>{
        div.parentNode.removeChild(div);
    	},600)
    }
  }
	ReactDOM.render(<EvaluateDialogComponent epsDialogConfig={ props } onClose={ close }/>, div);
  return { close: close };
}

//查看维修商名称信息
class EpsAlertInfoBase extends Component{
  constructor(props) {
    super(props);
  }
  // 组件加载完毕
  componentDidMount(){
    $(ReactDOM.findDOMNode(this.refs.epsModalInfo)).closest('.am-modal-wrap').addClass('eps-modal-alert-info');
    $(ReactDOM.findDOMNode(this.refs.epsModalInfo)).closest('.am-modal-wrap').parent().addClass('eps-alert-custom');
  }
  render(){
    let deviceNameHtml='';
    if(this.props.deviceNames){
      deviceNameHtml=<p className="eps-modal-info-devicenames">
      {
        _.map(this.props.deviceNames,function(item,index){
          if(index<1){
                  return <span>{item}</span>
          }else{
            return <span>{','+item}</span>
          }
        })
      }
      </p>

    }else{
       deviceNameHtml='';
    }
    return (<div className="eps-alert-simple" ref="epsModalInfo">
        <p className="eps-modal-info-devicenames-title">{ this.props.text }</p>
        {deviceNameHtml}
      </div>)
  }
};

export const AlertInfoBase = (props)=>{
  const alert = Modal.alert;
  const alertInfo = alert(
    '',
    (<EpsAlertInfoBase text={ props.text } deviceNames={props.deviceNames} />),
    [{
      text: props.okBtn&&props.okBtn.text ? props.okBtn.text : '知道了',
      onPress: () => {
        alertInfo.close();
        props.onOk && typeof(props.onOk)=='function' ? props.onOk() : '';
      }
    }]
  )
  return alertInfo;
}

export const showAlert = (props)=>{
  const alert = Modal.alert;
  const dialog = alert(
    '',
    (<EpsAlert tip={ props.tip } icon={ props.icon }/>),
    [{
      text: props.cancelBtn&&props.cancelBtn.text ? props.cancelBtn.text : '知道了',
      onPress: () => {
        dialog.close();
        props.onCancel && typeof(props.onCancel)=='function' ? props.onCancel() : '';
      },
      style: props.cancelBtn&&props.cancelBtn.style ? props.cancelBtn.style : {}
    },{
      text: props.okBtn&&props.okBtn.text ? props.okBtn.text : '知道了',
      onPress: () => {
        dialog.close();
        props.onOk && typeof(props.onOk)=='function' ? props.onOk() : '';
      },
      style: props.okBtn&&props.okBtn.style ? props.okBtn.style : {}
    }]
  )
  return dialog;
}
