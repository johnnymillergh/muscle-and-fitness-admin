import { Component, Vue } from 'vue-property-decorator'
// eslint-disable-next-line no-unused-vars
import { MultiWindowOptions } from '@/mixins/multi-window/multi-window-options'

/**
 * Multi window mixin
 *
 * Can i use mixins global in vue? i am use typescript with vue
 * @see <a href='https://github.com/kaorun343/vue-property-decorator/issues/226#issuecomment-515568960'>GitHub</a>
 */
@Component
export class MultiWindow extends Vue {
  private $multiWindowOptions: MultiWindowOptions = {
    delayClosingWindow: true,
    callback: ''
  }

  mounted () {
    this.$data.$multiWindowOptions.delayClosingWindow = this.$route?.query?.delayClosingWindow === 'true'
    this.$data.$multiWindowOptions.callback = this.$route?.query?.callback
  }

  openWindow (context: Vue, url: string, multiWindowOptions?: MultiWindowOptions): void {
    // Set default delayClosingWindow as true
    if (multiWindowOptions?.delayClosingWindow === undefined) {
      // @ts-ignore
      multiWindowOptions.delayClosingWindow = true
    }
    const path = /\/$/.test(url) ? url : `${url}/`
    // the value of process.env.BASE_URL is equal to the `publicPath` configured in vue.config.js
    const baseUrl = process.env.BASE_URL
    const target = /^(http|https):\/\//.test(path) ? url : `${baseUrl}#${url}`
    // Passing information to opened window by query string
    let queryString = ''
    for (const key in multiWindowOptions) {
      // Determines whether an object has a property with the specified name.
      // eslint-disable-next-line no-prototype-builtins
      if (!multiWindowOptions.hasOwnProperty(key)) {
        continue
      }
      const val = ((multiWindowOptions[key] === null) || (multiWindowOptions[key] === undefined) ? '' : multiWindowOptions[key])
      queryString += queryString === '' ? `?${key}=${val}` : `&${key}=${val}`
    }
    setTimeout(async () => {
      const newWindow = window.open(`${target}${queryString}`, multiWindowOptions?.windowTarget)
      if (!newWindow) {
        await context.$alert('Please give us permission to open new page', 'Error', {
          type: 'error',
          showClose: false,
          confirmButtonText: 'Sure'
        })
        throw new Error('Failed to gain permission to open a new page!')
      } else {
        newWindow.opener.$vue = context
      }
    }, 600)
  }

  windowBack (argument?: any): void {
    const context = window?.opener?.$vue
    const callback = this.$data.$multiWindowOptions.callback
    const delayClosingWindow = this.$data.$multiWindowOptions.delayClosingWindow
    if (!context) {
      this.$notify.error('ERROR: Cannot find context!')
      // window.alert('ERROR: Cannot find context!')
      throw new Error('Cannot find context!')
    }
    // Check whether opener's callback is valid
    if (callback && typeof context[callback] === 'function') {
      context[callback](argument)
    } else {
      this.$notify.error('ERROR: Cannot find callback!')
      // window.alert('ERROR: Cannot find callback!')
      throw new Error('Cannot find callback!')
    }
    if (delayClosingWindow) {
      setTimeout(() => {
        window.close()
      }, 300)
    } else {
      window.close()
    }
  }
}
