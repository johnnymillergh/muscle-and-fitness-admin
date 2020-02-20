/* eslint-disable no-unused-vars */
import { DirectiveOptions } from 'vue'
import { DirectiveBinding } from 'vue/types/options'

export const clickControl: DirectiveOptions = {
  inserted (el: HTMLElement, binding: DirectiveBinding) {
    el.addEventListener('click', e => {
      // @ts-ignore
      if (!el.disabled) {
        const { value } = binding
        let timeInterval = 1000
        if (value) {
          timeInterval = value
        }
        el.className += ' is-loading'
        const $loading = document.createElement('i')
        $loading.className = 'el-icon-loading'
        el.appendChild($loading)
        // @ts-ignore
        el.disabled = true
        setTimeout(() => {
          el.removeChild($loading)
          el.className = el.className.replace('is-loading', '')
          // @ts-ignore
          el.disabled = false
        }, timeInterval)
      }
    })
  }
}
