const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src'),
      },
    },
  },
  chainWebpack: config => {
    config.plugin('define')
      .tap(args => {
        args[0]['process.env'].VUE_APP_HOST_API = JSON.stringify(process.env.VUE_APP_HOST_API);
        return args;
      });
  }
})
