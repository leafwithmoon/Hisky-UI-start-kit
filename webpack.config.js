var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlwebpackPlugin = require('html-webpack-plugin');

console.log('begin to webpack the project... ')
module.exports = {
    //插件项
    plugins: [
      new webpack.optimize.CommonsChunkPlugin({
        names:'index'
      }),
      new ExtractTextPlugin('index.css'),
      new HtmlwebpackPlugin({                        //根据模板插入css/js等生成最终HTML
       favicon:'./src/img/favicon.ico', //favicon路径
       filename:'./index.html',    //生成的html存放路径，相对于 path
       template:'./src/index.html',    //html模板路径
       inject: 'body',    //允许插件修改哪些内容，包括head与body，或者true
       hash:true,    //为静态资源生成hash值
       minify:{    //压缩HTML文件
           removeComments:true,    //移除HTML中的注释
           collapseWhitespace:false    //删除空白符与换行符
       }
    })
    ],
    //页面入口文件配置
    entry: {
        index : './src/index.js'
    },
    //入口文件输出配置
    output: {
        path: 'build',
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.(css|less|scss)$/, loader: ExtractTextPlugin.extract('style', 'css!less!sass') },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
            { test: /\.(js|jsx?)$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    },
    //其它解决方案配置
    resolve: {
        root: './node_modules', //绝对路径
        extensions: ['', '.js', '.json', '.scss', 'less', '.jsx ', '.css']
    }
};
