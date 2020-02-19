export class ColorSchemeUtil {
  /**
   * Detect color scheme
   * @return false - light; true - dark
   */
  static isDarkMode = (): boolean => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }
}
