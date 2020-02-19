import { ColorSchemeUtil } from '@/utils/color-scheme-util'
// eslint-disable-next-line no-unused-vars
import Vue from 'vue'

/**
 * Listen to color scheme.
 * @param vueInstance Vue instance
 * @author Johnny Miller (鍾俊), e-mail: johnnysviva@outlook.com
 * @date 12/31/19 7:43 AM
 */
export function listenToColorScheme (vueInstance: Vue): void {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  media.addEventListener('change', () => {
    const message = `The color scheme of your system has changes. Dark mode: ${ColorSchemeUtil.isDarkMode()}`
    console.info(message)
    vueInstance.$notify.info(message)
  })
}
