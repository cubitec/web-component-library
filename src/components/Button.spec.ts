import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.ce.vue'

describe('Button Component', () => {
  it('renders with default props', () => {
    const wrapper = mount(Button)
    const button = wrapper.find('button')
    
    expect(button.exists()).toBe(true)
    expect(button.classes()).toContain('cubitec-button')
    expect(button.classes()).toContain('cubitec-button--primary')
    expect(button.attributes('disabled')).toBeUndefined()
  })

  it('renders with label prop', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Click me'
      }
    })
    
    expect(wrapper.text()).toBe('Click me')
  })

  it('renders with slot content', () => {
    const wrapper = mount(Button, {
      slots: {
        default: 'Slot Content'
      }
    })
    
    expect(wrapper.text()).toBe('Slot Content')
  })

  it('prefers slot content over label prop', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Label Text'
      },
      slots: {
        default: 'Slot Text'
      }
    })
    
    expect(wrapper.text()).toBe('Slot Text')
  })

  it('applies primary variant by default', () => {
    const wrapper = mount(Button)
    const button = wrapper.find('button')
    
    expect(button.classes()).toContain('cubitec-button--primary')
    expect(button.classes()).not.toContain('cubitec-button--secondary')
  })

  it('applies secondary variant when specified', () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'secondary'
      }
    })
    const button = wrapper.find('button')
    
    expect(button.classes()).toContain('cubitec-button--secondary')
    expect(button.classes()).not.toContain('cubitec-button--primary')
  })

  it('applies disabled class when disabled', () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    })
    const button = wrapper.find('button')
    
    expect(button.classes()).toContain('cubitec-button--disabled')
    expect(button.attributes('disabled')).toBeDefined()
  })

  it('emits click event when clicked and not disabled', async () => {
    const wrapper = mount(Button)
    const button = wrapper.find('button')
    
    await button.trigger('click')
    
    expect(wrapper.emitted('click')).toBeTruthy()
    expect(wrapper.emitted('click')?.length).toBe(1)
  })

  it('does not emit click event when disabled', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: true
      }
    })
    const button = wrapper.find('button')
    
    await button.trigger('click')
    
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('passes MouseEvent to click handler', async () => {
    const wrapper = mount(Button)
    const button = wrapper.find('button')
    
    await button.trigger('click')
    
    const clickEvent = wrapper.emitted('click')?.[0]?.[0]
    expect(clickEvent).toBeInstanceOf(MouseEvent)
  })

  it('has correct button element structure', () => {
    const wrapper = mount(Button, {
      props: {
        label: 'Test Button',
        variant: 'secondary',
        disabled: false
      }
    })
    const button = wrapper.find('button')
    
    expect(button.element.tagName).toBe('BUTTON')
    expect(button.element.textContent).toBe('Test Button')
  })

  it('handles multiple rapid clicks when enabled', async () => {
    const wrapper = mount(Button)
    const button = wrapper.find('button')
    
    await button.trigger('click')
    await button.trigger('click')
    await button.trigger('click')
    
    expect(wrapper.emitted('click')?.length).toBe(3)
  })

  it('updates variant reactively', async () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'primary'
      }
    })
    
    expect(wrapper.find('button').classes()).toContain('cubitec-button--primary')
    
    await wrapper.setProps({ variant: 'secondary' })
    
    expect(wrapper.find('button').classes()).toContain('cubitec-button--secondary')
    expect(wrapper.find('button').classes()).not.toContain('cubitec-button--primary')
  })

  it('updates disabled state reactively', async () => {
    const wrapper = mount(Button, {
      props: {
        disabled: false
      }
    })
    
    expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
    
    await wrapper.setProps({ disabled: true })
    
    expect(wrapper.find('button').attributes('disabled')).toBeDefined()
    expect(wrapper.find('button').classes()).toContain('cubitec-button--disabled')
  })
})
