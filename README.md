# jw-components-mobile-demo


`注:` 1. jw-components-mobile-demo只是一个调试环境，jw-components-mobile是组件库，两个有不同的git地址;
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



## 二 使用方法

1. 将 https://github.com/Joywok/jw-components-mobile-demo clone到本地
```js
git clone https://github.com/Joywok/jw-components-mobile-demo.git
```

2. 安装依赖
```js
cd jw-components-mobile-demo
npm install
or
cnpm install
```

3. 修改服务器ip
打开package.json，将 webpack-dev-server --inline --hot --host 192.168.1.95 中的192.168.1.95修改为本机ip

4. 编译scss
```js
gulp
```
5. 启动服务（新开终端，之前的gulp保留，实时监听scss和html的变化）
```js
npm start
```
此时浏览器中访问 http://192.168.1.95:8080/button/index.html 即可看到button组件的demo，其他组件同此链接


## 三 调试jw-components-mobile方法

1. 将node_modules中通过npm install安装的jw-components-mobile替换为 github中的jw-components-mobile，具体操作如下：
```js
cd jw-components-mobile-demo/node_modules 
mv jw-components-mobile jw-components-mobile.bak
git clone https://github.com/Joywok/jw-components-mobile.git
```	

2. 开发组件，是在mobile中做的事情，操作如下：
```js
cd jw-components-mobile
git checkout feature_my_componentsname (切一个以“feature_姓名缩写_componentsname” 格式命名的新分支)
```	
  安装依赖
```js
npm install
之后按照组件开发规范步骤进行开发，开发完成之后，执行 webpack -p 生成新的jw-components-mobile组件
```

3. 调试组件，操作如下：
```js
cd jw-components-mobile-demo/src 
git checkout feature_my_componentsname (切一个以“feature_姓名缩写_componentsname” 格式命名的新分支)
mkdir componentsname (创建一个组件文件夹,并创建index.html index.js index.scss文件，就可以引用新开发的组件了)
```

4. 打包发布：
	需将新添加的components加到webpack.config.js的 entry 中，如 
```js
entry: {
	'button/index':[path.resolve(__dirname, 'src/button/index.js')],
	'checkbox/index':[path.resolve(__dirname, 'src/checkbox/index.js')],
	'componentsname/index':[path.resolve(__dirname, 'src/componentsname/index.js')]
},
```




