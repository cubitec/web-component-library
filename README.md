# @cubitec/component-library

A Vue 3 component library built as Web Components (Custom Elements), making it framework-agnostic and compatible with Vue 2 applications.

## Installation

```bash
npm install @cubitec/component-library
```

## Usage in Vue 2

### 1. Import and Register Components

In your Vue 2 application's main entry file (e.g., `main.js`):

```javascript
import Vue from 'vue'
import { registerComponents } from '@cubitec/component-library'

// Register all custom elements
registerComponents()

// Your Vue app setup
new Vue({
  // ...
}).$mount('#app')
```

### 2. Configure Vue 2 to Recognize Custom Elements

To avoid Vue 2 warnings about unknown custom elements, configure your Vue 2 app to recognize them.

**Option A: Using vue.config.js (for Vue CLI projects)**

```javascript
// vue.config.js
module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => ({
        ...options,
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith('cubitec-')
        }
      }))
  }
}
```

**Option B: Global Configuration (for all Vue 2 projects)**

```javascript
// main.js
import Vue from 'vue'

Vue.config.ignoredElements = [
  /^cubitec-/
]
```

### 3. Use Components in Templates

Once registered, you can use the components directly in your Vue 2 templates:

```vue
<template>
  <div>
    <cubitec-button 
      label="Click me" 
      variant="primary"
      @click="handleClick"
    />
    
    <cubitec-button 
      variant="secondary"
      :disabled="true"
    >
      Disabled Button
    </cubitec-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(event) {
      console.log('Button clicked!', event)
    }
  }
}
</script>
```

## Components

### Button

A simple button component with multiple variants.

#### Props

- `label` (string, optional): Button text. If not provided, use slot content.
- `variant` (string, optional): Button style variant. Options: `'primary'` (default) or `'secondary'`.
- `disabled` (boolean, optional): Disable the button. Default: `false`.

#### Events

- `click`: Emitted when the button is clicked (not emitted if disabled).

#### Usage Examples

```vue
<!-- With label prop -->
<cubitec-button label="Submit" variant="primary" />

<!-- With slot content -->
<cubitec-button variant="secondary">
  Cancel
</cubitec-button>

<!-- Disabled button -->
<cubitec-button label="Disabled" :disabled="true" />

<!-- With click handler -->
<cubitec-button 
  label="Click me" 
  @click="handleClick" 
/>
```

## Usage in Vue 3

The library also works in Vue 3 applications:

```javascript
import { createApp } from 'vue'
import { registerComponents } from '@cubitec/component-library'

const app = createApp(App)
registerComponents()
app.mount('#app')
```

## Development

```bash
# Install dependencies
npm install

# Build library
npm run build

# Type checking
npm run type-check
```

## Building

The library is built using Vite and outputs:

- **ESM format**: `dist/index.esm.js` (for modern bundlers)
- **UMD format**: `dist/index.umd.js` (for direct browser use)
- **Type definitions**: `dist/index.d.ts`

## License

MIT
