/* eslint-disable no-unused-vars */
import { DirectiveOptions } from 'vue'
import _ from 'lodash'

/**
 * Throttled Click Directive Options
 *
 * Default waiting time is 1 second (1000 ms).
 */
const throttledClickDirectiveOptions: DirectiveOptions = {
  inserted (el, directiveBinding) {
    const wait: number = directiveBinding.arg ? +directiveBinding.arg : 1000
    el.addEventListener('click', _.throttle(event => {
      directiveBinding.value.call(el, event)
    }, wait))
  }
}

export default throttledClickDirectiveOptions
