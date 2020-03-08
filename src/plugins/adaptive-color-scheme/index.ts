import { ColorSchemeUtil } from '@/utils/color-scheme-util'

/**
 * Listen to color scheme.
 * @author Johnny Miller (鍾俊), e-mail: johnnysviva@outlook.com
 * @date 12/31/19 7:43 AM
 */
export function listenToColorScheme (): void {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  media.addEventListener('change', (mediaQueryListEvent: MediaQueryListEvent) => {
    const message = `The color scheme of your system has changes. Dark mode: ${ColorSchemeUtil.isDarkMode()}`
    console.info('mediaQueryListEvent', mediaQueryListEvent)
    console.info(message)
  })
}

listenToColorScheme()
