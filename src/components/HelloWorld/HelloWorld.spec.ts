import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import HelloWorld from './HelloWorld.ce.vue'

describe('HelloWorld', () => {
  it('renders with default props', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.text()).toContain('Hello World')
    expect(wrapper.text()).toContain('Welcome to the Cubitec component library!')
  })

  it('renders custom greeting', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        greeting: 'Custom Greeting',
      },
    })
    expect(wrapper.text()).toContain('Custom Greeting')
  })

  it('renders custom message', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        message: 'Custom message here',
      },
    })
    expect(wrapper.text()).toContain('Custom message here')
  })

  it('applies size classes correctly', () => {
    const sizes = ['small', 'medium', 'large'] as const
    
    sizes.forEach((size) => {
      const wrapper = mount(HelloWorld, {
        props: { size },
      })
      expect(wrapper.classes()).toContain(`cubitec-hello-world--${size}`)
    })
  })

  it('renders slot content', () => {
    const wrapper = mount(HelloWorld, {
      slots: {
        default: 'Slot content',
      },
    })
    expect(wrapper.text()).toContain('Slot content')
  })

  it('defaults to medium size', () => {
    const wrapper = mount(HelloWorld)
    expect(wrapper.classes()).toContain('cubitec-hello-world--medium')
  })
})
