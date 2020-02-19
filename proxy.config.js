module.exports = {
  '/common': {
    target: `${process.env.VUE_APP_BASE_URL}`,
    changeOrigin: true,
    pathRewrite: {
      '^/common': `/${process.env.VUE_APP_BASE_API}/common`
    }
  }
}
