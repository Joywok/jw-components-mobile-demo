const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const express = require('express');
const router = express.Router();
module.exports = {
  // return{
    entry: {
      'button/index':[path.resolve(__dirname, 'src/button/index.js')],
      'checkbox/index':[path.resolve(__dirname, 'src/checkbox/index.js')],
      'carousel/index':[path.resolve(__dirname, 'src/carousel/index.js')],
      'white-space/index':[path.resolve(__dirname, 'src/white-space/index.js')],
      'wing-blank/index':[path.resolve(__dirname, 'src/wing-blank/index.js')],
    },
    // 查错设置，添加此配置后，开发过程中能定位到错误的具体位置，生产时可关闭
    devtool: 'source-map', 
    //入口文件输出配置
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      // chunkFilename: "nav/[name].js"
    },
    resolve: {
      modules: ['node_modules', path.join(__dirname, './node_modules')],
      extensions: ['.web.js', '.jsx', '.js', '.json']
    },
  //   resolve: { fallback: path.join(__dirname, "./node_modules") },
		// resolveLoader: { root: path.join(__dirname, "./node_modules") },
    module: {
      //加载器配置
      loaders: [
        {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
        // css和scss的处理交由gulp来处理
        {test: /\.css$/,loaders: ['style-loader','css-loader?importLoaders=1','postcss-loader']},
        {test: /.scss$/, loaders: ['style-loader','css-loader?importLoaders=1','sass-loader']},
        {test: /.less$/, loaders: ['style-loader','css-loader?importLoaders=1','less-loader']},
        {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
        {test: /\.json$/,loader: 'json-loader'},
        {test: /\.html$/,loader: 'file?name=/public/[name].[ext]'}, 
        {
          test: /\.svg$/,
          loader: 'file-loader',
          query: {
            name: 'static/[name].[hash:8].[ext]'
          }
        }
        //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
        // {test: /\.css$/,loaders: ['style-loader','css-loader?importLoaders=1&modules&localIdentName=[local]___[hash:base64:5]','postcss-loader']},
      ]
    },
    plugins: [
      new webpack.DefinePlugin({ "global.GENTLY": false }),
      new webpack.DefinePlugin({'process.env': {'NODE_ENV': '"production"'}})
    ],
    externals:{
      jquery: "window.$"
    },
    devServer: {
      contentBase: "./src",//本地服务器所加载的页面所在的目录
      historyApiFallback: true,//不跳转
      // publicPath:'src',
      hot:true,
      open:true,
      inline: true,//实时刷新,
      setup: function(app) {
        // require('./routers/router')(app,'/api');
      },
      // proxy: {
      //   '/api/*': {
      //     // target: '10.211.55.3',
      //     target: "127.0.0.1:5000",
      //     changeOrigin: true,
      //     pathRewrite: { "^/api" : "" },
      //     secure: false
      //   }
      // }
    }
};

