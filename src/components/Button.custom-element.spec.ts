import { describe, it, expect, beforeEach } from 'vitest'
import { defineCustomElement } from 'vue'
import Button from './Button.ce.vue'

describe('Button as Custom Element', () => {
  let ButtonElement: CustomElementConstructor

  beforeEach(() => {
    ButtonElement = defineCustomElement(Button)
  })

  it('can be defined as a custom element', () => {
    expect(ButtonElement).toBeDefined()
    expect(ButtonElement).toBeInstanceOf(Function)
  })

  it('creates custom element instance', () => {
    // Only test if custom element is not already defined
    if (!customElements.get('test-cubitec-button')) {
      customElements.define('test-cubitec-button', ButtonElement)
      const element = document.createElement('test-cubitec-button')
      expect(element).toBeInstanceOf(HTMLElement)
    }
  })

  it('custom element has correct tag name', () => {
    if (!customElements.get('test-cubitec-button-2')) {
      customElements.define('test-cubitec-button-2', ButtonElement)
      const element = document.createElement('test-cubitec-button-2')
      expect(element.tagName.toLowerCase()).toBe('test-cubitec-button-2')
    }
  })

  it('custom element can be mounted to DOM', () => {
    if (!customElements.get('test-cubitec-button-3')) {
      customElements.define('test-cubitec-button-3', ButtonElement)
      const element = document.createElement('test-cubitec-button-3')
      document.body.appendChild(element)
      
      expect(document.body.contains(element)).toBe(true)
      
      // Cleanup
      document.body.removeChild(element)
    }
  })
})
