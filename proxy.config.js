module.exports = {
  '/gateway': {
    target: `${process.env.VUE_APP_BASE_URL}`,
    changeOrigin: true,
    pathRewrite: {
      '^/gateway': `/${process.env.VUE_APP_BASE_API}/gateway`
    }
  }
}
