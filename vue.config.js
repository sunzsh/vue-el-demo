// test
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
  devServer: {
    historyApiFallback: true
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end();
    
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'myicon-[name]'
      });
  }
}
