const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      filename: '[name].[contenthash:8].js'
    }
  }
})

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/now-and-always' : '',
}