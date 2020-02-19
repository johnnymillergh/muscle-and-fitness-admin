// noinspection NpmUsedModulesInstalled
const { info } = require('@vue/cli-shared-utils')

module.exports = {
  /**
   * Generate public path by environment.
   *
   * ATTENTION: Relative path prefix should start with a dot './'.
   * DON'T add the dot when the environment is development, or browser will throw en error like this:
   * Uncaught SyntaxError: Unexpected token <
   * @return {string} public path.
   */
  generatePublicPath: () => {
    const runOnDocker = process.env.VUE_APP_RUN_ON_DOCKER
    info(`This application is running on Docker: ${runOnDocker}, type of runOnDocker: ${typeof runOnDocker}`)
    const pathPrefix = runOnDocker === 'true' ? './' : '/'
    info(`pathPrefix: ${pathPrefix}`)
    const vueAppEnv = process.env.VUE_APP_ENV
    let publishPath
    if (vueAppEnv === 'prod') {
      publishPath = pathPrefix
      info(`publicPath for [${vueAppEnv}]: ${publishPath}`)
      return pathPrefix
    }
    const applicationName = JSON.parse(unescape(process.env.VUE_APP_PACKAGE_JSON)).name
    if (applicationName) {
      publishPath = applicationName ? pathPrefix.concat(applicationName, '-', vueAppEnv, '/') : pathPrefix
      info(`publicPath for [${vueAppEnv}] with application name: ${publishPath}`)
      return publishPath
    }
    publishPath = pathPrefix
    info(`publicPath for [${vueAppEnv}] without application name: ${publishPath}`)
    return publishPath
  },
  /**
   * Get app name.
   * @return {string} app name.
   */
  getAppName: () => {
    const applicationName = JSON.parse(unescape(process.env.VUE_APP_PACKAGE_JSON)).name
      .replace(/-/g, ' ')
      .split(' ')
      .map(word => word[0].toUpperCase() + word.substr(1).toLowerCase())
      .join(' ')
    const vueAppEnv = process.env.VUE_APP_ENV
    if (vueAppEnv !== 'prod') {
      const nonProductionApplicationName = applicationName.concat(' (', process.env.VUE_APP_ENV, ')')
      info(`applicationName: ${nonProductionApplicationName}`)
      return applicationName.concat(' (', process.env.VUE_APP_ENV, ')')
    }
    info(`applicationName: ${applicationName}`)
    return applicationName
  }
}
