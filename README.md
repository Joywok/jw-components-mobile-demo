# jw-components-mobile-demo


## 前置条件：node版本 6.5以上

## 功能：给开发jw-components-mobile的小伙伴提供一个调试环境

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

1. git clone https://github.com/Joywok/jw-components-mobile-demo.git
2. cd jw-components-mobile-demo
3. npm install   or   cnpm install
4. 修改 package.json 中 webpack-dev-server --inline --hot --host 192.168.1.95 改为本机ip
5. 执行gulp
6. 新开终端执行npm start ,此时浏览器中访问 http://192.168.1.95:8080/button/index.html 即可看到效果，其他组件同此链接



## 三 调试jw-components-mobile方法

1. cd jw-components-mobile/node_modules
2. mv jw-components-mobile jw-components-mobile.bak
3. git clone https://github.com/Joywok/jw-components-mobile.git
4. cd jw-components-mobile
5. 切出一个名为“feature_姓名缩写_componentsname”的分支，按照组件开发步骤，开发jw-components-mobile 组件,组件开发完成之后
6. cd jw-components-mobile-demo/src 
7. 切出一个名为“feature_姓名缩写_componentsname”的分支，之后 mkdir componentsname  ,并在其中创建index.html index.js index.scss文件，就可以引用新开发的组件了
8. 打包发布之前，需将新添加的components加到webpack.config.js的 entry 中，如 
			'componentsname/index':[path.resolve(__dirname, 'src/componentsname/index.js')],




