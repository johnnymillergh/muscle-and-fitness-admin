import Vue from 'vue'
import SvgIcon from 'vue-svgicon'
import '@/assets/svg-icons/components'

export const svgIconOptions: {
  tagName?: string
  classPrefix?: string
  isStroke?: boolean
  isOriginalDefault?: boolean
  defaultWidth?: string
  defaultHeight?: string
} = {
  tagName: 'svg-icon',
  defaultWidth: '1em',
  defaultHeight: '1em'
}

Vue.use(SvgIcon, svgIconOptions)
