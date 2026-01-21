import { defineCustomElement } from 'vue'
import Button from './components/Button.ce.vue'

// Define custom elements
const ButtonElement = defineCustomElement(Button)

// Registration function
export function registerComponents() {
  if (!customElements.get('cubitec-button')) {
    customElements.define('cubitec-button', ButtonElement)
  }
}

// Auto-register if in browser environment
if (typeof window !== 'undefined') {
  registerComponents()
}

// Export components and registration function
export { Button, ButtonElement, registerComponents }

// Default export for plugin-style usage
export default {
  install() {
    registerComponents()
  }
}
