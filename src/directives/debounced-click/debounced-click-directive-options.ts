/* eslint-disable no-unused-vars */
import { DirectiveOptions } from 'vue'
import _ from 'lodash'

/**
 * Debounced Click Directive Options
 *
 * Default waiting time is 1 second (1000 ms).
 */
const debouncedClickDirectiveOptions: DirectiveOptions = {
  inserted (el, directiveBinding) {
    const wait: number = directiveBinding.arg ? +directiveBinding.arg : 1000
    el.addEventListener('click', _.debounce(event => {
      directiveBinding.value.call(el, event)
    }, wait))
  }
}

export default debouncedClickDirectiveOptions
