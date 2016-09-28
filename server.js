var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {            //console输出信息配置
    colors:true,
    hash: true,
    version: false,
    timings: true,
    assets: true,
    chunks: false,
    chunkModuless: false,
    modules: false,
    children: true,
    cached: false,
    reasons: true,
    source: false,
    errorDetailsrrors: true,
    chunkOriginsof: false,
    modulesSort: false,
    chunksSort: false,
    assetsSort: false,
  },
  //proxy未完成
  proxy: {//http://10.128.9.199:8700/console/user
    '/admin': {
      target: 'http://10.128.9.199:8700',
      pathRewrite:{'^/admin/apiv2' :  '/console/user' },
      ignorePath: true,
      changeOrigin: true,
      secure: false
    }
  }
}).listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/')
});
