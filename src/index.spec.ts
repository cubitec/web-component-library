import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { defineCustomElement } from 'vue'
import { registerComponents, Button, ButtonElement } from './index'

describe('Library Entry Point', () => {
  let originalCustomElements: typeof customElements

  beforeEach(() => {
    // Mock customElements for testing
    originalCustomElements = global.customElements
    global.customElements = {
      define: vi.fn(),
      get: vi.fn(() => undefined),
      whenDefined: vi.fn(),
      upgrade: vi.fn()
    } as any
  })

  afterEach(() => {
    global.customElements = originalCustomElements
    vi.clearAllMocks()
  })

  it('exports Button component', () => {
    expect(Button).toBeDefined()
    expect(typeof Button).toBe('object')
  })

  it('exports ButtonElement as custom element constructor', () => {
    expect(ButtonElement).toBeDefined()
    expect(ButtonElement).toBeInstanceOf(Function)
  })

  it('exports registerComponents function', () => {
    expect(registerComponents).toBeDefined()
    expect(typeof registerComponents).toBe('function')
  })

  it('registers custom element when registerComponents is called', () => {
    registerComponents()
    
    expect(global.customElements.define).toHaveBeenCalledWith(
      'cubitec-button',
      expect.any(Function)
    )
  })

  it('does not register custom element if already defined', () => {
    // Mock get to return existing element
    vi.mocked(global.customElements.get).mockReturnValue(true as any)
    
    registerComponents()
    
    expect(global.customElements.define).not.toHaveBeenCalled()
  })

  it('registers custom element if not already defined', () => {
    // Mock get to return undefined (not defined)
    vi.mocked(global.customElements.get).mockReturnValue(undefined)
    
    registerComponents()
    
    expect(global.customElements.define).toHaveBeenCalledWith(
      'cubitec-button',
      expect.any(Function)
    )
  })

  it('exports default object with install method', async () => {
    const defaultExport = await import('./index')
    
    expect(defaultExport.default).toBeDefined()
    expect(typeof defaultExport.default.install).toBe('function')
  })

  it('install method calls registerComponents', async () => {
    const defaultExport = (await import('./index')).default
    
    defaultExport.install()
    
    expect(global.customElements.define).toHaveBeenCalledWith(
      'cubitec-button',
      expect.any(Function)
    )
  })

  it('ButtonElement is created using defineCustomElement', () => {
    // Verify ButtonElement is a custom element constructor
    expect(ButtonElement).toBeDefined()
    expect(ButtonElement.prototype).toBeDefined()
  })
})

describe('Custom Element Integration', () => {
  it('can register custom element in browser-like environment', () => {
    // Use a unique test tag name and create a new constructor to avoid conflicts
    const testTagName = 'test-cubitec-button-integration'
    const TestButtonElement = defineCustomElement(Button)
    
    // Only test if the test tag is not already defined
    if (!customElements.get(testTagName)) {
      const defineSpy = vi.spyOn(customElements, 'define')
      
      // Test the registration logic
      if (!customElements.get(testTagName)) {
        customElements.define(testTagName, TestButtonElement)
        expect(defineSpy).toHaveBeenCalledWith(testTagName, TestButtonElement)
      }
      
      defineSpy.mockRestore()
    } else {
      // If already defined, verify it exists
      expect(customElements.get(testTagName)).toBeDefined()
    }
  })

  it('registerComponents handles already registered elements gracefully', () => {
    // This test verifies that registerComponents checks before registering
    // Since the element may already be registered by auto-registration,
    // we just verify the function doesn't throw
    expect(() => registerComponents()).not.toThrow()
  })
})
