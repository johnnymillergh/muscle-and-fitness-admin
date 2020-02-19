export class AppUtil {
  private static PROJECT_PROPERTY = JSON.parse(unescape(process.env.VUE_APP_PACKAGE_JSON ? process.env.VUE_APP_PACKAGE_JSON : ''))

  /**
   * Get project property object.
   * @author Johnny Miller (鍾俊), e-mail: johnnysviva@outlook.com
   * @return {any} An object contains project properties.
   */
  static getProjectProperty = (): Object => {
    return AppUtil.PROJECT_PROPERTY
  }

  /**
   * Get the name of app.
   * @return {String} Name of app.
   */
  static getName = (): string => {
    return AppUtil.PROJECT_PROPERTY.name
  }

  /**
   * Get camel case name of app.
   * @return {String} Name of app.
   */
  static getCamelCaseName = (): string => {
    return AppUtil.PROJECT_PROPERTY.name
      .replace(/-/g, ' ')
      .split(' ')
      .map((word: string) => word[0].toUpperCase() + word.substr(1).toLowerCase())
      .join(' ')
  }

  /**
   * Get the version of app.
   * @return {String} Version of app.
   */
  static getVersionInfo = (): string => {
    return AppUtil.PROJECT_PROPERTY.version
  }

  /**
   * Get the description of app.
   * @return {String} Description of app.
   */
  static getDescription = (): string => {
    return AppUtil.PROJECT_PROPERTY.description
  }

  /**
   * Get the author of app.
   * @return {String} Author of app.
   */
  static getAuthor = (): string => {
    return AppUtil.PROJECT_PROPERTY.author
  }
}
