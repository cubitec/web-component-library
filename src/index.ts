import { defineCustomElement } from 'vue'
import Button from './components/Button'
import HelloWorld from './components/HelloWorld'

// Define custom elements
const ButtonElement = defineCustomElement(Button)
const HelloWorldElement = defineCustomElement(HelloWorld)

// Registration function
function registerComponents() {
  if (!customElements.get('cubitec-button')) {
    customElements.define('cubitec-button', ButtonElement)
  }
  if (!customElements.get('cubitec-hello-world')) {
    customElements.define('cubitec-hello-world', HelloWorldElement)
  }
}

// Auto-register if in browser environment
if (typeof window !== 'undefined') {
  registerComponents()
}

// Export components and registration function
export { Button, ButtonElement, HelloWorld, HelloWorldElement, registerComponents }

// Default export for plugin-style usage
export default {
  install() {
    registerComponents()
  }
}
