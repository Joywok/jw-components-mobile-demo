# jw-components-mobile-demo


`注:` 
1. jw-components-mobile-demo是一个调试环境，jw-components-mobile是组件库，两个有不同的git地址;  
为了方便组件开发调试，所以直接将jw-components-mobile clone到jw-components-mobile-demo/node_modules目录中，但是组件的开发代码依然是写在jw-components-mobile中，组件的使用部分写在jw-components-mobile-demo中；  
2. jw-components-mobile组件库在实际使用时是通过npm install 安装到项目中的，但jw-components-mobile组件源码由github托管；  
所以开发时需要在github的jw-components-mobile中开发，组件完成后，再发布到npm中,依赖此组件的相关项目执行npm update即可使用新添加的组件，此文档不含发布到npm的步骤；  
	

## 前置条件：node版本 6.5以上


## 一 目录结构介绍

```bash
jw-components-mobile-demo 
			|----- dist(发布的目录，webpack -p 命令后生成的文件目录，里面的html可双击浏览器中运行)
			|----- src(demo源文件)
				|----button
					|- index.html
					|-index.js
					|-index.scss
				|-checkbox
					|- index.html
					|-index.js
					|-index.scss
				|-xxxxxxx同上
			|-package.json（脚手架配置文件）
			|-webpack.config.js (打包配置文件)
```															



## 二 准备demo的代码环境

1. 先将 jw-components-mobile-demo的代码 clone到本地
```js
git clone https://github.com/Joywok/jw-components-mobile-demo.git
```

2. 安装jw-components-mobile-demo的依赖
```js
cd jw-components-mobile-demo
npm install
or
cnpm install
```
3. 配置npm start运行的服务器地址,也是浏览器访问该demo的地址
打开 package.json，将其中所有的 webpack-dev-server --inline --hot --host 192.168.1.95 中的192.168.1.95修改为本机ip

  至此demo的代码环境就已准备完毕

  接下来的4和5，可验证demo环境是否已经准备ok, 也是在调试新组件时，需要执行的步骤


4. 编译scss
```js
gulp
```

5. 启动服务（新开终端执行，之前的gulp保留，实时监听scss和html的变化）
```js
npm start
```

此时浏览器中访问 http://192.168.1.95:8080/button/index.html 即可看到button组件的demo，其他组件同此链接




## 三 准备jw-components-mobile的代码环境


1. 因为npm install安装的jw-components-mobile来源是npm ，但我们组件代码的维护是在git上面，所以需要做下替换操作。把jw-components-mobile-demo里的jw-components-mobile 替换为 github中的jw-components-mobile，具体操作如下：
```js
cd jw-components-mobile-demo/node_modules 
mv jw-components-mobile jw-components-mobile.bak  (先将mobile重命名为mobile.bak)
git clone https://github.com/Joywok/jw-components-mobile.git  （再把git上的mobile拿下来）
```	

2. 关键点来了～～ clone下来的jw-components-mobile只有源码，还没有依赖包，这个依赖包需要搞一下，       
重要的事情说三遍：千万不要直接npm install,千万不要直接npm install,千万不要直接npm install~~    
为什么不能这样做呢？因为如果直接这样操作的话，封装组件过程中可能会遇到如下错误（大坑啊）
```js
Uncaught Error: Minified React error #119; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=119 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
    at reactProdInvariant (reactProdInvariant.js?0c18*:31)
    at Object.addComponentAsRefTo (ReactOwner.js?89df*:68)
    at attachRef (ReactRef.js?07fa*:23)
    at Object.ReactRef.attachRefs (ReactRef.js?07fa*:42)
    at ReactDOMComponent.attachRefs (ReactReconciler.js?ba89*:23)
    at CallbackQueue.notifyAll (CallbackQueue.js?eb8c*:76)
    at ReactReconcileTransaction.close (ReactReconcileTransaction.js?7781*:80)
    at ReactReconcileTransaction.closeAll (Transaction.js?026b*:206)
    at ReactReconcileTransaction.perform (Transaction.js?026b*:153)
    at batchedMountComponentIntoNode (ReactMount.js?90d7*:126)
```
那这个要怎么弄呢？只需将jw-components-mobile.bak中的node_modules复制到jw-components-mobile里面即可，命令如下：
```js
cd jw-components-mobile-demo (切换到jw-components-mobile-demo目录中)
scp -r node_modules/jw-components-mobile.bak/node_modules/ node_modules/jw-components-mobile/node_modules
```	

好了 ，到这里jw-componets-mobile的代码环境就准备好了。


3. 接下来就是开发组件了，开发过程中需要将gulp任务打开，以便监听代码变化，实时更新，命令如下
```js
gulp
之后按照组件开发规范步骤进行开发即可，不用执行打包命令
```

## 四 调试组件，操作如下  
1. 在 jw-components-mobile-demo 文件夹中创建需要调试的组件相关的html js scss文件，这里的前提是需调试的组件已在 jw-components-mobile中添加
```js
cd jw-components-mobile-demo/src 
git checkout feature_my_componentsname (切一个以“feature_姓名缩写_componentsname” 格式命名的新分支)
mkdir componentsname (创建一个以组件的名字来命名的文件夹,并创建index.html index.js index.scss文件，就可以引用组件并调试了)
```
2. 想要在浏览器看效果，移步“二 准备demo的代码环境”的第4步和第5步

3. 如需将新添加的demo文件打包至dist文件夹中，则按如下步骤操作即可(开发时可不用管这个)：
	将新添加的组件demo加到webpack.config.js的 entry 中，如 
```js
entry: {
	'button/index':[path.resolve(__dirname, 'src/button/index.js')],
	'checkbox/index':[path.resolve(__dirname, 'src/checkbox/index.js')],
	'componentsname/index':[path.resolve(__dirname, 'src/componentsname/index.js')]
},
```




