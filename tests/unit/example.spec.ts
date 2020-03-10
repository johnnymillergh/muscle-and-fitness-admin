import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld/index.vue'

describe('HelloWorld', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    console.info('Component\'s props:', wrapper.vm.$props)
    expect(wrapper.vm.$props.msg).toMatch(msg)
  })
})
