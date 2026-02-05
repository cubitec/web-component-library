# @cubitec/component-library

Vue 3 component library built as Web Components (Custom Elements), usable from Vue 2, Vue 3, or plain HTML.

## Install

```bash
npm install @cubitec/component-library
```

**Browser (no build):** use the [release asset](https://github.com/cubitec/component-library/releases) or, if published to npm, `https://cdn.jsdelivr.net/npm/@cubitec/component-library@VERSION/dist/index.umd.js`.

## Use

Register once, then use the custom elements in templates. See **[docs.md](./docs.md)** for Vue 2, Vue 3, and component API.

```javascript
import { registerComponents } from '@cubitec/component-library'
registerComponents()
```

```vue
<cubitec-button label="Submit" variant="primary" @click="onClick" />
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Build library (output in `dist/`) |
| `npm run type-check` | TypeScript check |
| `npm run test:run` | Run tests |
| `npm run test:coverage` | Tests + coverage (report in `coverage/`) |
| `npm run storybook` | Dev Storybook (localhost:6006) |
| `npm run build-storybook` | Build static Storybook |

Coverage is also uploaded as Actions artifacts and summarized in PR comments.

## Storybook

Component documentation and demos are built with [Storybook](https://storybook.js.org/).

- **Live:** [cubitec.github.io/component-library](https://cubitec.github.io/component-library) — deployed from the `main` branch via GitHub Actions.
- **Local:** `npm run storybook` (http://localhost:6006).

To enable the live site, set **Settings → Pages → Source** to **GitHub Actions**.

## Releasing

1. Add repo secret `NPM_TOKEN` (npm Automation token). For `@cubitec` scope, create the [npm org](https://www.npmjs.com/org/create) first.
2. Push a version tag: `git tag 0.0.1 && git push origin 0.0.1`
3. The workflow builds, creates the GitHub release, and publishes to npm.

## License

MIT
