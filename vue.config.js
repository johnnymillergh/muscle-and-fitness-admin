'use strict'
const path = require('path')
const { generatePublicPath, getAppName } = require('./vue.config.util.js')
const proxyConfiguration = require('./proxy.config.js')

// Dev port
const port = 8081

// Redefine VUE_APP_PACKAGE_JSON
process.env.VUE_APP_PACKAGE_JSON = escape(JSON.stringify(require('./package.json')))

function resolve (dir) {
  return path.join(__dirname, dir)
}

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * ATTENTION: You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * <a href="https://cli.vuejs.org/config/#publicpath">Click me to view detail</a>
   *
   * ATTENTION: If static server is Nginx, the public path should be relative (with dot slash ./).
   *            If static server is http-server (Node), the public path should be absolute (with slash /).
   * The value of publicPath can also be set to an empty string ('') or a relative path (./) so that all assets are
   * linked using relative paths. This allows the built bundle to be deployed under any public path,
   * or used in a file system based environment like a Cordova hybrid app.
   */
  publicPath: generatePublicPath(),
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: proxyConfiguration
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: getAppName(),
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  transpileDependencies: [
    'vuetify'
  ]
}
