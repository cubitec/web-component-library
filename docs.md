# Vue usage

Register the library once, then use the custom elements in your templates.

## Vue 3

```javascript
import { createApp } from 'vue'
import { registerComponents } from '@cubitec/component-library'
import App from './App.vue'

const app = createApp(App)
registerComponents()
app.mount('#app')
```

## Vue 2

```javascript
import Vue from 'vue'
import { registerComponents } from '@cubitec/component-library'

registerComponents()

Vue.config.ignoredElements = [/^cubitec-/]

new Vue({
  // ...
}).$mount('#app')
```

With Vue CLI, you can instead set the custom element in `vue.config.js`:

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

## Templates

```vue
<cubitec-button label="Submit" variant="primary" @click="onSubmit" />
<cubitec-button variant="secondary">Cancel</cubitec-button>
<cubitec-button label="Disabled" :disabled="true" />
```

## Components

### Button

| Prop     | Type    | Default     | Description              |
|---------|--------|-------------|--------------------------|
| `label` | string | `''`        | Button text (or use slot)|
| `variant` | `'primary'` \| `'secondary'` | `'primary'` | Style variant |
| `disabled` | boolean | `false`   | Disable the button       |

**Event:** `click` — emitted when the button is clicked (not when disabled).
