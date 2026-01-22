import type { Meta, StoryObj } from '@storybook/vue3'
import { fn } from '@storybook/test'
import Button from './Button.ce.vue'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Button style variant',
    },
    label: {
      control: 'text',
      description: 'Button text label',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the button',
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
  },
  args: {
    onClick: fn(),
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Button',
    variant: 'primary',
    disabled: true,
  },
}

export const WithSlot: Story = {
  args: {
    variant: 'primary',
    disabled: false,
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args">Click Me</Button>',
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { Button },
    template: `
      <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
        <Button label="Primary" variant="primary" />
        <Button label="Secondary" variant="secondary" />
        <Button label="Disabled Primary" variant="primary" :disabled="true" />
        <Button label="Disabled Secondary" variant="secondary" :disabled="true" />
      </div>
    `,
  }),
}
