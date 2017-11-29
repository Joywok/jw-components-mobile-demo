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
              <td >点击确认的回调函数</td>
              <td >无</td>  
            </tr>
            <tr>  
              <td>onClose</td>  
              <td >关闭弹出框的回调函数</td>
              <td >无</td>  
            </tr>
            <tr>  
              <td>okBtn</td>  
              <td >按钮需显示文字</td>
              <td >知道了</td>  
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
              <td >点击确认的回调函数</td>
              <td >无</td>  
            </tr>
             <tr>  
              <td>onCancel</td>  
              <td >点击取消的回调函数</td>
              <td >无</td>  
            </tr>
            <tr>  
              <td>onClose</td>  
              <td >关闭弹出框的回调函数</td>
              <td >无</td>  
            </tr>
            <tr>  
              <td>okBtn</td>  
              <td >确认按钮需显示文字</td>
              <td >确认</td>  
            </tr>
            <tr>  
              <td>cancelBtn</td>  
              <td >取消按钮需显示文字</td>
              <td >取消</td>  
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

    <div class="param-table" style="margin-top:-480px">
        <table border="1"  style="border-collapse:collapse;width:500px; height:270px;">  
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
              <td >输入框的提示文字</td>
              <td >请输入备注...</td>  
            </tr>
             <tr>  
              <td>memorequired</td>  
              <td >备注是否必填</td>
              <td >true</td>  
            </tr>
            <tr>  
              <td>btnIconClass</td>  
              <td >button的icon图标</td>
              <td >" ",应该传图标的className，不传不显示</td>  
            </tr>
            <tr>  
              <td>okBtnClick</td>  
              <td >点击按钮的回调函数</td>
              <td >无</td>  
            </tr>
            <tr>  
              <td>onClose</td>  
              <td >关闭按钮的回调函数</td>
              <td >无</td>  
            </tr>
            <tr>  
              <td>btnVal</td>  
              <td >按钮应该显示的文字</td>
              <td >确认</td>  
            </tr>
          <tbody>
        </table>
    </div>     
