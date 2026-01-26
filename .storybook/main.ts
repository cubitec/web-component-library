import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'

// Get base path from environment variable (for GitHub Pages) or use root
const basePath = process.env.STORYBOOK_BASE_PATH || '/'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    // Configure base path for GitHub Pages deployment
    return mergeConfig(config, {
      base: basePath,
    })
  },
}

export default config
