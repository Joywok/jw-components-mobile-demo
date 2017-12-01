#MobileCss V1.0 使用手册


####1.AlertBase

* **说明**：icon和文字内容都可设置，icon不传不显示，支持外部关闭

* **截图**：<br/>
    ![](images/acessGuide.png)
    ![](images/acessGuide.png)

* **使用方法**：

        import { JwAlert } from 'jw-components-mobile';

        JwAlert({
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

    注：可以从外面关闭弹框 let tmpalert =JwAlert({...});  tmpalert.close();


* **参数**：

    <div class="param-table" style="margin-top:-320px">
        <table border="1"  style="border-collapse:collapse;width:500px; height:180px;">  
          <thead>
            <th>属性</th>  
            <th>说明</th>   
            <th>默认值</th>
          </thead>
          </tbody>
            <tr>  
              <td>tip</td>  
              <td>弹出框的提示文字</td>
              <td> " "</td>    
            </tr>
            <tr>  
              <td>icon</td>  
              <td>弹出框的图标</td>
              <td>" ",应该传图标的className，不传不显示</td>   
            </tr>
            <tr>  
              <td>onOk</td>  
              <td>点击确认的回调函数</td>
              <td>无</td>  
            </tr>
            <tr>  
              <td>onClose</td>  
              <td>关闭弹出框的回调函数</td>
              <td>无</td>  
            </tr>
            <tr>  
              <td>okBtn</td>  
              <td>按钮需显示文字</td>
              <td>知道了</td>  
            </tr>
          <tbody>
        </table>
    </div> 	



####2.JwConfirm

* **说明**：基础确认弹框 icon(可选)＋tip，icon不传不显示，支持外部关闭

* **截图**：<br/>
    ![](images/acessGuide.png)
    ![](images/acessGuide.png)

* **使用方法**：

        import { JwConfirm } from 'jw-components-mobile';

        JwConfirm({
          tip: '确认要提交维修订单？',
          icon: 'icon-alert-repair',
          onOk: ()=>{     // 点击确认回调
            console.log('onOk')
          },
          onCancel: ()=>{    // 取消回调

          },
          onClose: ()=>{     // 关闭弹框回调

          },
          okBtn: {           // 此参数可不传，不传默认为 确认
            text: '确认'
          },
          cancelBtn: {      // 此参数可不传，不传默认为 取消
            text: '取消'
          }
        });

    注：可以从外面关闭弹框 let tmpconfirm = JwConfirm({...});  tmpconfirm.close();


* **参数**：

    <div class="param-table" style="margin-top:-420px">
        <table border="1"  style="border-collapse:collapse;width:500px; height:240px;">  
          <thead>
            <th>属性</th>  
            <th>说明</th>   
            <th>默认值</th>
          </thead>
          </tbody>
            <tr>  
              <td>tip</td>  
              <td>弹出框的提示文字</td>
              <td> " "</td>    
            </tr>
            <tr>  
              <td>icon</td>  
              <td>弹出框的图标</td>
              <td>" ",应该传图标的className，不传不显示</td>   
            </tr>
            <tr>  
              <td>onOk</td>  
              <td>点击确认的回调函数</td>
              <td>无</td>  
            </tr>
             <tr>  
              <td>onCancel</td>  
              <td>点击取消的回调函数</td>
              <td>无</td>  
            </tr>
            <tr>  
              <td>onClose</td>  
              <td>关闭弹出框的回调函数</td>
              <td>无</td>  
            </tr>
            <tr>  
              <td>okBtn</td>  
              <td>确认按钮需显示文字</td>
              <td>确认</td>  
            </tr>
            <tr>  
              <td>cancelBtn</td>  
              <td>取消按钮需显示文字</td>
              <td>取消</td>  
            </tr>
          <tbody>
        </table>
    </div> 	



 ####3.JwMemoDialog

* **说明**：备注弹框,标题前和按钮前的icon不传不显示，支持外部关闭

* **截图**：<br/>
    ![](images/acessGuide.png)
    ![](images/acessGuide.png)

* **使用方法**：

        import { JwMemoDialog } from 'jw-components-mobile';

        JwMemoDialog({
          title: '请输入备注',    // 是否拒绝该订单？ 是否确认通过？
          defaultValue: '',       // 默认值
          placeholder: '请输入备注...',    // 拒绝必须输入备注...  选择输入备注...
          memorequired: false,   //备注是否必填 true必填， false不必填
          btnIconClass: 'icon-check-i',   // button的icon图标
          onBtnClick: ()=>{     // 点击按钮回调
            console.log('onBtnClick')
          },
          onClose: ()=>{  // 关闭回调
        	console.log('onClose')
          },
          btnVal: '确认'   // 此参数可不传，不传默认为“确认”   可传 拒绝或通过
        });

    注：可以从外面关闭弹框 let tmpmemodialog = JwMemoDialog({...});  tmpmemodialog.close();


* **参数**：

    <div class="param-table" style="margin-top:-540px">
        <table border="1"  style="border-collapse:collapse;width:500px; height:300px;">  
          <thead>
            <th>属性</th>  
            <th>说明</th>   
            <th>默认值</th>
          </thead>
          </tbody>
            <tr>  
              <td>title</td>  
              <td>输入框的内容</td>
              <td>请输入备注</td>    
            </tr>
            <tr>  
              <td>defaultValue</td>  
              <td>默认值</td>
              <td>" "</td>   
            </tr>
            <tr>  
              <td>placeholder</td>  
              <td>输入框的提示文字</td>
              <td>请输入备注...</td>  
            </tr>
             <tr>  
              <td>memorequired</td>  
              <td>备注是否必填</td>
              <td>true</td>  
            </tr>
            <tr>  
              <td>btnIconClass</td>  
              <td>button的icon图标</td>
              <td>" ",应该传图标的className，不传不显示</td>  
            </tr>
            <tr>  
              <td>okBtnClick</td>  
              <td>点击按钮的回调函数</td>
              <td>无</td>  
            </tr>
            <tr>  
              <td>onClose</td>  
              <td>关闭按钮的回调函数</td>
              <td>无</td>  
            </tr>
            <tr>  
              <td>btnVal</td>  
              <td>按钮应该显示的文字</td>
              <td>确认</td>  
            </tr>
            <tr>  
              <td>avatar</td>  
              <td>标题前的icon</td>
              <td>默认的icon，传图片路径</td>  
            </tr>
          <tbody>
        </table>
    </div>   


 ####4.Toast

 ######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1 正常的信息提示，如 “提交中，请耐心等待…”<br/>

 * **说明**：轻提示，在规定时间内消失<br/>

 * **截图**<br/>


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](images/acessGuide.png)
![](images/acessGuide.png)

 * **使用方法**：<br/>
        import { Toast } from 'jw-components-mobile';

        Toast.info('建卡成功', 2, null, true);  //true代表有遮罩层

######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.2 成功类提示，如 “提交成功”<br/>

 * **说明**：轻提示，在规定时间内消失，带有icon<br/>

 * **截图**<br/>


&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](images/acessGuide.png)
![](images/acessGuide.png)

 * **使用方法**：<br/>
        import { Toast } from 'jw-components-mobile';

        Toast.success('你已阅读申请', 1, null, false); //false代表无遮罩层


######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.3 Toast提示还包含以下三种：<br/>

* Toast.fail(content, duration, onClose, mask)

* Toast.loading(content, duration, onClose, mask)

* Toast.offline(content, duration, onClose, mask)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**组件共提供以上五个静态方法，参数如下：**<br/>

<div class="param-table" style="margin-top:-270px;margin-left:25px">
    <table border="1"  style="border-collapse:collapse;width:500px; height:150px;">  
      <thead>
        <th>属性</th>  
        <th>说明</th>   
        <th>默认值</th>
      </thead>
      </tbody>
        <tr style="text-align:center">  
          <td>content</td>  
          <td>提示内容</td>
          <td>无</td>    
        </tr>
        <tr style="text-align:center">  
          <td>duration</td>  
          <td>自动关闭的延时，单位秒</td>
          <td>3</td>   
        </tr>
        <tr style="text-align:center">  
          <td>onClose</td>  
          <td>关闭后回调</td>
          <td>无</td>  
        </tr>
         <tr style="text-align:center">  
          <td>mask</td>  
          <td>是否显示透明蒙层，防止触摸穿透</td>
          <td>true</td>  
        </tr>
      <tbody>
    </table>
</div>   

<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注： duration = 0 时，onClose 无效，toast 不会消失；隐藏 toast 需要手动调用 hide<br/>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**还提供了全局配置和全局销毁方法：**<br/>

* Toast.hide()


 ####5.NoticeBar

  * **说明**：warning 警告类提示，可手动关闭：如：‘不能重复提交数据，知道了’<br/>

  * **截图**：<br/>

    ![](images/acessGuide.png)
    ![](images/acessGuide.png)

  * **使用方法**：<br/>

        import { NoticeBar } from 'jw-components-mobile';

        <NoticeBar mode="closable" icon={null}>Remove the default icon.</NoticeBar>

* **参数**：<br/>


<div class="param-table" style="margin-left:40px;margin-top:-320px;">
    <table border="1"  style="border-collapse:collapse;width:500px; height:180px;">  
      <thead>
        <th>属性</th>  
        <th>说明</th>   
        <th>默认值</th>
      </thead>
      </tbody>
        <tr>  
          <td>mode</td>  
          <td>提示类型，可选 closable，link</td>
          <td>" "</td>    
        </tr>
        <tr>  
          <td>icon</td>  
          <td>在开始位置设置图标</td>
          <td>Icon type={require('./trips.svg')} size="xxs" </td>   
        </tr>
        <tr>  
          <td>onClick</td>  
          <td>点击关闭或者操作区域的回调函数</td>
          <td>无</td>  
        </tr>
         <tr>  
          <td>marqueeProps</td>  
          <td>marquee 参数</td>
          <td>{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}</td>  
        </tr>
        <tr>  
          <td>action</td>  
          <td>用于替换操作 icon 的文案</td>
          <td>无</td>  
        </tr>
      <tbody>
    </table>
</div>   
