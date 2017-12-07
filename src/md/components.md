#MobileCss V1.0 使用手册


####1.JwAlert

* **说明**：用作显示系统的提示信息，并请求用户进行操作反馈，JwAlert弹出框的icon和文字内容都可设置，icon不传不显示，支持外部关闭

* **使用场景**：<br/>

 a.提示页面的某个输入字段或可选字段为必填（选）；<br/>
    ![](images/acessGuide.png) <br/>
 b.提示某项操作成功（失败）；<br/>
    ![](images/acessGuide.png)<br/>
* **使用方法**：

        import { JwAlert } from 'jw-components-mobile';

        JwAlert({
            tip: '已成功提交',
            icon: 'icon-create-success',
            onOk: ()=>{
               // 点击确认回调
               console.log('onOk')
            },
            onClose: ()=>{
              // 关闭弹框回调
        	},
        	okBtn: {   
              // 此参数可不传，不传默认为 知道了
        	  text: '确认'
        	}
        });

    **注：**JwAlert组件支持从外面关闭弹框，代码如下：

        let tmpalert =JwAlert({...});  

        tmpalert.close();


* **参数**：

    <div class="param-table" style="margin-top:-300px">
        <table border="1"  style="border-collapse:collapse;width:700px; height:180px;">  
          <thead style="text-align:center">
            <th >属性</th>  
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </thead>
          </tbody>
            <tr>  
              <td style="text-align:center">tip</td>  
              <td>弹出框的提示文字</td>
              <td style="text-align:center">String</td>
              <td> " "</td>    
            </tr>
            <tr>  
              <td style="text-align:center">icon</td>  
              <td>弹出框的图标</td>
              <td style="text-align:center">String</td>
              <td>" ",应该传图标的className，不传不显示</td>   
            </tr>
            <tr>  
              <td style="text-align:center">onOk</td>  
              <td>点击确认的回调函数</td>
              <td style="text-align:center">Function</td>
              <td>无</td>  
            </tr>
            <tr>  
              <td style="text-align:center">onClose</td>  
              <td>关闭弹出框的回调函数</td>
              <td style="text-align:center">Function</td>
              <td>无</td>  
            </tr>
            <tr>  
              <td style="text-align:center">okBtn</td>  
              <td>按钮需显示文字</td>
              <td style="text-align:center">Object</td>
              <td>知道了</td>  
            </tr>
          <tbody>
        </table>
    </div> 	



####2.JwConfirm

* **说明**：用作显示系统的重要信息，并请求用户进行操作反馈。JwConfirm弹出框主要由icon(可选)＋tip + button组成，icon不传不显示，支持外部关闭

* **使用场景**：<br/>

  a.删除某个重要内容时，弹出框进行二次确认；<br/>
  ![](images/acessGuide.png) <br/>
  b.进行下一步重要流程时，弹出框进行二次确认；<br/>
  ![](images/acessGuide.png) <br/>

* **使用方法**：

        import { JwConfirm } from 'jw-components-mobile';

        JwConfirm({
          tip: '确认要提交维修订单？',
          icon: 'icon-alert-repair',
          onOk: ()=>{    
            // 点击确认回调
            console.log('onOk')
          },
          onCancel: ()=>{    
            // 取消回调
          },
          onClose: ()=>{     
            // 关闭弹框回调
          },
          okBtn: {           
            // 此参数可不传，不传默认为 确认
            text: '确认'
          },
          cancelBtn: {      
            // 此参数可不传，不传默认为 取消
            text: '取消'
          }
        });

    **注：**JwConfirm组件支持从外面关闭弹框，代码如下：
        let tmpconfirm = JwConfirm({...});

        tmpconfirm.close();


* **参数**：

    <div class="param-table" style="margin-top:-420px">
        <table border="1"  style="border-collapse:collapse;width:700px; height:240px;">  
          <thead style="text-align:center">
            <th>属性</th>  
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </thead>
          </tbody>
            <tr>  
              <td style="text-align:center">tip</td>  
              <td>弹出框的提示文字</td>
              <td style="text-align:center">String</td>
              <td> " "</td>    
            </tr>
            <tr>  
              <td style="text-align:center">icon</td>  
              <td>弹出框的图标</td>
              <td style="text-align:center">String</td>
              <td>" ",应该传图标的className，不传不显示</td>   
            </tr>
            <tr>  
              <td style="text-align:center">onOk</td>  
              <td>点击确认的回调函数</td>
              <td style="text-align:center">Function</td>
              <td>无</td>  
            </tr>
             <tr>  
              <td style="text-align:center">onCancel</td>  
              <td>点击取消的回调函数</td>
              <td style="text-align:center">Function</td>
              <td>无</td>  
            </tr>
            <tr>  
              <td style="text-align:center">onClose</td>  
              <td>关闭弹出框的回调函数</td>
              <td style="text-align:center">Function</td>
              <td>无</td>  
            </tr>
            <tr>  
              <td style="text-align:center">okBtn</td>  
              <td>确认按钮需显示文字</td>
              <td style="text-align:center">Object</td>
              <td>确认</td>  
            </tr>
            <tr>  
              <td style="text-align:center">cancelBtn</td>  
              <td>取消按钮需显示文字</td>
              <td style="text-align:center">Object</td>
              <td>取消</td>  
            </tr>
          <tbody>
        </table>
    </div> 	



 ####3.JwMemoDialog

* **说明**：备注弹框，带有textArea的可输入信息的弹出框，标题前和按钮前的icon不传不显示，支持外部关闭

* **使用场景**：<br/>
  a.某个需要审批（同意或拒绝）的重要流程，输入框填写原因；<br/>
  ![](images/acessGuide.png) <br/>
  b.某个重要流程的审批结果，输入框填写审批结果（同意或驳回）；<br/>
  ![](images/acessGuide.png) <br/>

* **使用方法**：

        import { JwMemoDialog } from 'jw-components-mobile';

        JwMemoDialog({
          title: '请输入备注',    // 是否拒绝该订单？ 是否确认通过？
          defaultValue: '',       // 默认值
          placeholder: '请输入备注...',    // 拒绝必须输入备注...  选择输入备注...
          memorequired: false,   //备注是否必填 true必填， false不必填
          btnIconClass: 'icon-check-i',   // button的icon图标
          onBtnClick: ()=>{     
            // 点击按钮回调
            console.log('onBtnClick')
          },
          onClose: ()=>{  
            // 关闭回调
        	console.log('onClose')
          },
          btnVal: '确认'   // 此参数可不传，不传默认为“确认”   可传 拒绝或通过
        });

    **注：**JwMemoDialog组件支持从外面关闭弹框，代码如下:
        let tmpmemodialog = JwMemoDialog({...});

        tmpmemodialog.close();


* **参数**：

    <div class="param-table" style="margin-top:-520px">
        <table border="1"  style="border-collapse:collapse;width:700px; height:300px;">  
          <thead style="text-align:center">
            <th>属性</th>  
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
          </thead>
          </tbody>
            <tr>  
              <td style="text-align:center">title</td>  
              <td>输入框的内容</td>
              <td style="text-align:center">String</td>
              <td>请输入备注</td>    
            </tr>
            <tr>  
              <td style="text-align:center">defaultValue</td>  
              <td>输入框显示的默认值</td>
              <td style="text-align:center">String</td>
              <td>" "</td>   
            </tr>
            <tr>  
              <td style="text-align:center">placeholder</td>  
              <td>输入框的提示文字</td>
              <td style="text-align:center">String</td>
              <td>请输入备注...</td>  
            </tr>
             <tr>  
              <td style="text-align:center">memorequired</td>  
              <td>备注是否必填</td>
              <td style="text-align:center">Boolean</td>
              <td>true</td>  
            </tr>
            <tr>  
              <td  style="text-align:center">btnIconClass</td>  
              <td>button前的icon图标的className</td>
              <td style="text-align:center">String</td>
              <td>" ",应该传图标的className，不传不显示</td>  
            </tr>
            <tr>  
              <td  style="text-align:center">okBtnClick</td>  
              <td>确认按钮的回调函数</td>
              <td style="text-align:center">Function</td>
              <td>无</td>  
            </tr>
            <tr>  
              <td style="text-align:center">onClose</td>  
              <td>关闭按钮的回调函数</td>
              <td style="text-align:center">Function</td>
              <td>无</td>  
            </tr>
            <tr>  
              <td style="text-align:center">btnVal</td>  
              <td>按钮应该显示的文字</td>
              <td style="text-align:center">String</td>
              <td>确认</td>  
            </tr>
            <tr>  
              <td style="text-align:center">avatar</td>  
              <td>标题前的icon</td>
              <td style="text-align:center">String</td>
              <td>" "，传图片路径,不传不显示</td>  
            </tr>
          <tbody>
        </table>
    </div>   


 ####4.Toast

 ######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.1 正常的信息提示，如 “提交中，请耐心等待…”<br/>

 * **说明**：一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容<br/>

 * **使用场景**<br/>


  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.提示某个操作成功或失败；<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](images/acessGuide.png) <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b.某个流程在特定场景无需进行下一步操作时，可以给一个提示；<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](images/acessGuide.png) <br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c.数据读取或提交时可以给一个状态提示，如 loading...、提交中...；<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;![](images/acessGuide.png) <br/>

 * **使用方法**：<br/>
        import { Toast } from 'jw-components-mobile';

        Toast.info('建卡成功', 2, null, true);  //true代表有遮罩层
**注：遮罩层默认背景颜色是透明的，如果需要改变，请参照如下代码：**<br/>

        .am-toast.am-toast-mask{
          background-color: rgba(0,0,0,0.5)!important;
          background-color: #000;
          filter:Alpha(opacity=50);
        }


######&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.2 成功类提示，如 “提交成功”<br/>

 * **说明**：一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，带有icon<br/>

 * **使用场景**<br/>


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
    <table border="1"  style="border-collapse:collapse;width:700px; height:150px;">  
      <thead>
        <th>属性</th>  
        <th>说明</th>  
        <th>类型</th>
        <th>默认值</th>
      </thead>
      </tbody>
        <tr style="text-align:center">  
          <td>content</td>  
          <td>提示内容</td>
          <td style="text-align:center">React.Element or String</td>
          <td>无</td>    
        </tr>
        <tr style="text-align:center">  
          <td>duration</td>  
          <td>自动关闭的延时，单位秒</td>
          <td style="text-align:center">number</td>
          <td>3</td>   
        </tr>
        <tr style="text-align:center">  
          <td>onClose</td>  
          <td>关闭后回调</td>
          <td style="text-align:center">Function</td>
          <td>无</td>  
        </tr>
         <tr style="text-align:center">  
          <td>mask</td>  
          <td>是否显示透明蒙层，防止触摸穿透</td>
          <td style="text-align:center">Boolean</td>
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

  * **说明**：在导航栏下方，一般用作系统提醒、活动提醒等通知，需要引起用户关注时使用，重要级别低于 Modal ，高于 Toast<br/>

  * **使用场景**：<br/>

  a.购物软件中的活动提醒；<br/>
  ![](images/acessGuide.png) <br/>
  b.warning 警告类提示，如：‘不能重复提交数据，知道了’；<br/>
  ![](images/acessGuide.png) <br/>


  * **使用方法**：<br/>

        import { NoticeBar } from 'jw-components-mobile';

        <NoticeBar mode="closable" icon={null}>Remove the default icon.</NoticeBar>

* **参数**：<br/>


<div class="param-table" style="margin-left:40px;margin-top:-310px;">
    <table border="1"  style="border-collapse:collapse;width:700px; height:180px;">  
      <thead>
        <th>属性</th>  
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      </tbody>
        <tr>  
          <td style="text-align:center">mode</td>  
          <td>提示类型，可选 closable，link</td>
          <td style="text-align:center">String</td>
          <td>" "</td>    
        </tr>
        <tr>  
          <td style="text-align:center">icon</td>  
          <td>在开始位置设置图标</td>
          <td style="text-align:center">ReactNode</td>
          <td>Icon type={require('./trips.svg')} size="xxs" </td>   
        </tr>
        <tr>  
          <td style="text-align:center">onClick</td>  
          <td>点击关闭或者操作区域的回调函数</td>
          <td style="text-align:center">(): void</td>
          <td>无</td>  
        </tr>
         <tr>  
          <td style="text-align:center">marqueeProps</td>  
          <td>marquee 参数</td>
          <td style="text-align:center">Object</td>
          <td>{loop: false, leading: 500, trailing: 800, fps: 40, style: {}}</td>  
        </tr>
        <tr>  
          <td style="text-align:center">action</td>  
          <td>用于替换操作 icon 的文案</td>
          <td style="text-align:center">ReactElement</td>
          <td>无</td>  
        </tr>
      <tbody>
    </table>
</div> <br/>  


 ####6.PullToRefresh

 * **说明**：拉动刷新，通过触发，立刻重新加载内容<br/>

 * **使用场景**：<br/>

  a.登录 APP 后，自动刷新首页 List；<br/>
  ![](images/acessGuide.png) <br/>
  b.可以和 ListView 结合使用，也可以单独使用；<br/>
  ![](images/acessGuide.png) <br/>
  c.适用于下拉刷新的长列表数据类型；<br/>
  ![](images/acessGuide.png) <br/>
  d.适用于上拉加载更多的长列表数据类型；<br/>
  ![](images/acessGuide.png) <br/>

 * **使用方法**：<br/>
        <PullToRefresh
            //下拉时需要显示的文字提示
            indicator={this.state.down ? { } : { deactivate: '上拉刷新' }}
            //拉动方向
            direction={this.state.down ? 'down' : 'up'}
            //刷新距离
            distanceToRefresh={window.devicePixelRatio * 25}
            //是否显示刷新状态
            refreshing={this.state.refreshing}
            //刷新时的回调函数
            onRefresh={this.onRefresh}    
        >
        </PullToRefresh>

* **参数**：<br/>

<div class="param-table" style="margin-left:40px;margin-top:-310px;">
    <table border="1"  style="border-collapse:collapse;width:700px; height:180px;">  
      <thead>
        <th>属性</th>  
        <th>说明</th>
        <th>类型</th>
        <th>默认值</th>
      </thead>
      </tbody>
        <tr>  
          <td style="text-align:center">direction</td>  
          <td>拉动方向，可以是 up 或 down</td>
          <td style="text-align:center">String</td>
          <td>down</td>    
        </tr>
        <tr>  
          <td style="text-align:center">distanceToRefresh</td>  
          <td>刷新距离</td>
          <td style="text-align:center">number</td>
          <td>25 </td>   
        </tr>
        <tr>  
          <td style="text-align:center">refreshing</td>  
          <td>是否显示刷新状态</td>
          <td style="text-align:center">bool</td>
          <td>false</td>  
        </tr>
         <tr>  
          <td style="text-align:center">onRefresh</td>  
          <td>必选, 刷新回调函数</td>
          <td style="text-align:center">() => void</td>
          <td>-</td>  
        </tr>
        <tr>  
          <td style="text-align:center">indicator</td>  
          <td>指示器配置 { activate: ReactNode, deactivate: ReactNode, release: ReactNode, finish: ReactNode }</td>
          <td style="text-align:center">Object</td>
          <td>-</td>  
        </tr>
      <tbody>
    </table>
</div> <br/>


 ####7.ListView

  * **说明**：适用于显示同类的长列表数据类型，对渲染性能有一定的优化效果。<br/>

  * **使用场景**：

  a.适用于显示同类的长列表数据类型（无标题的）<br/>
  ![](images/acessGuide.png) <br/>

  b.适用于标题吸顶的长列表数据类型<br/>
  ![](images/acessGuide.png) <br/>

  c.适用于索引列表且标题吸顶的数据类型<br/>
  ![](images/acessGuide.png) <br/>

  * **使用方法**：<br/>

        <ListView
            dataSource={this.state.dataSource}
            renderHeader={() => <span>header</span>}
            renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
              {this.state.isLoading ? 'Loading...' : 'Loaded'}
            </div>)}
            renderRow={row}
            renderSeparator={separator}
            className="am-list"
            pageSize={4}
            useBodyScroll
            onScroll={() => { console.log('scroll'); }}
            scrollRenderAheadDistance={500}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={10}
        />

  * **参数**：<br/>

<div class="param-table" style="margin-left:40px;margin-top:-1280px;">
    <table border="1"  style="border-collapse:collapse;width:700px; height:720px;">  
        <thead>
            <th>属性</th>  
            <th>说明</th>
            <th>类型</th>
            <th>默认值</th>
        </thead>
        <tbody>
            <tr>  
              <td style="text-align:center">dataSource</td>  
              <td>ListView.DataSource (cn) / ListView.DataSource (us) 实例</td>
              <td>ListViewDataSource</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
            <tr>  
              <td style="text-align:center">initialListSize</td>  
              <td>指定在组件刚挂载的时候渲染多少行数据，用这个属性来确保首屏显示合适数量的数据</td>
              <td>number</td>
              <td>&nbsp;&nbsp;-</td>   
            </tr>
            <tr>  
              <td style="text-align:center">onEndReached</td>  
              <td>当所有的数据都已经渲染过，并且列表被滚动到距离最底部不足onEndReachedThreshold个像素的距离时调用</td>
              <td>(event?) => {}</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
             <tr>  
              <td style="text-align:center">onEndReachedThreshold</td>  
              <td>调用onEndReached之前的临界值，单位是像素</td>
              <td>number</td>
              <td>1000</td>    
            </tr>
             <tr>  
              <td style="text-align:center">pageSize</td>  
              <td>每次事件循环（每帧）渲染的行数</td>
              <td>number</td>
              <td>1</td>    
            </tr>
             <tr>  
              <td style="text-align:center">renderHeader / renderFooter</td>  
              <td>页头与页脚（如果提供）会在每次渲染过程中都重新渲染。如果它们重绘的性能开销很大，把他们包装到一个StaticContainer或者其它恰当的结构中。页脚在列表的最底部，而页头会在最顶部</td>
              <td>() => renderable</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
             <tr>  
              <td style="text-align:center">renderRow</td>  
              <td>从数据源(data source)中接受一条数据，以及它和它所在section的ID。返回一个可渲染的组件来为这行数据进行渲染。默认情况下参数中的数据就是放进数据源中的数据本身，不过也可以提供一些转换器。如果某一行正在被高亮（通过调用highlightRow函数），ListView会得到相应的通知。</td>
              <td>(rowData, sectionID, rowID, highlightRow) => renderable</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
             <tr>  
              <td style="text-align:center">renderScrollComponent</td>  
              <td>指定一个函数，在其中返回一个可以滚动的组件，ListView将会在该组件内部进行渲染。默认情况下会返回一个包含指定属性的ScrollView。</td>
              <td>(props) => renderable</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
              <tr>  
              <td style="text-align:center">renderSectionHeader</td>  
              <td>如果提供了此函数，会为每个小节(section)渲染一个标题</td>
              <td>(sectionData, sectionID) => renderable</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
             <tr>  
              <td style="text-align:center">renderSeparator</td>  
              <td>如果提供了此属性，一个可渲染的组件会被渲染在每一行下面，除了小节标题的前面的最后一行。在其上方的小节ID和行ID，以及邻近的行是否被高亮会作为参数传递进来。</td>
              <td>(sectionID, rowID, adjacentRowHighlighted) => renderable</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
             <tr>  
              <td style="text-align:center">scrollRenderAheadDistance</td>  
              <td>当一个行接近屏幕范围多少像素之内的时候，就开始渲染这一行</td>
              <td>number</td>
              <td>1000</td>    
            </tr>
            <tr>  
              <td style="text-align:center">contentContainerStyle</td>  
              <td>这些样式会应用到一个内层的内容容器上，所有的子视图都会包裹在内容容器内</td>
              <td>Object</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
             <tr>  
              <td style="text-align:center">horizontal</td>  
              <td>当此属性为true的时候，所有的的子视图会在水平方向上排成一行，而不是默认的在垂直方向上排成一列</td>
              <td>bool</td>
              <td>false</td>    
            </tr>
             <tr>  
              <td style="text-align:center">onContentSizeChange</td>  
              <td>此函数会在 ScrollView 内部可滚动内容的视图发生变化时调用。</td>
              <td>(contentWidth, contentHeight) => {}</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
            <tr>  
              <td style="text-align:center">onScroll</td>  
              <td>在滚动的过程中，每帧最多调用一次此回调函数。调用的频率可以用scrollEventThrottle属性来控制。</td>
              <td>e => {}</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
             <tr>  
              <td style="text-align:center">scrollEventThrottle</td>  
              <td>控制在滚动过程中，scroll事件被调用的频率</td>
              <td>number</td>
              <td>50</td>    
            </tr>
             <tr>  
              <td style="text-align:center">onLayout</td>  
              <td>当组件挂载或者布局变化的时候调用</td>
              <td>({nativeEvent:{ layout:{ width, height }}}) => {}</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
            <tr>  
              <td style="text-align:center">------</td>  
              <td></td>
              <td></td>
              <td></td>    
            </tr>
             <tr>  
              <td style="text-align:center">renderBodyComponent (web only)</td>  
              <td>自定义 body 的包裹组件</td>
              <td>() => renderable</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
             <tr>  
              <td style="text-align:center">renderSectionWrapper (web only)</td>  
              <td>渲染自定义的区块包裹组件。</td>
              <td>(sectionID) => renderable</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
            <tr>  
              <td style="text-align:center">renderSectionBodyWrapper (web only)</td>  
              <td>渲染自定义的区块 body 包裹组件。</td>
              <td>(sectionID) => renderable</td>
              <td>&nbsp;&nbsp;-</td>    
            </tr>
               <tr>  
              <td style="text-align:center">useBodyScroll (web only)</td>  
              <td>使用 html 的 body 作为滚动容器。</td>
              <td>bool</td>
              <td>false</td>    
            </tr>
            <tr>  
              <td style="text-align:center">pullToRefresh (web only)</td>  
              <td>使用 pullToRefresh， 你需要和 PullToRefresh 组件一起使用。</td>
              <td>bool</td>
              <td>false</td>    
            </tr>
         </tbody>
   </table>
</div> <br/>
