/* eslint-disable no-unused-vars */
import { MultiWindowOptions } from '@/mixins/multi-window/multi-window-options'

declare module 'vue/types/vue' {
  /**
   * Can i use mixins global in vue? i am use typescript with vue
   * https://github.com/kaorun343/vue-property-decorator/issues/226#issuecomment-515568960
   */
  interface Vue {
    /**
     * Open a new window
     * @param context opener's Vue instance
     * @param url the page URL to be opened
     * @param multiWindowOptions the parameters to be passed to the opened window
     * @throws Error when failing to gain permission to open a new page.
     */
    openWindow (context: Vue, url: string, multiWindowOptions?: MultiWindowOptions): void

    /**
     * Back to last window (close opened window).
     *
     * You may pass an object back to last window by setting an object argument to MultiWindow.windowBack().
     * @throws Error when failing to going back to last page.
     */
    windowBack (argument?: any): void
  }
}
