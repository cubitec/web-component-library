import type { Meta, StoryObj } from '@storybook/vue3'
import HelloWorld from './HelloWorld.ce.vue'

const meta: Meta<typeof HelloWorld> = {
  title: 'Components/HelloWorld',
  component: HelloWorld,
  tags: ['autodocs'],
  argTypes: {
    greeting: {
      control: 'text',
      description: 'The greeting text displayed as the title',
    },
    message: {
      control: 'text',
      description: 'The message text displayed below the greeting',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size variant of the component',
    },
  },
}

export default meta
type Story = StoryObj<typeof HelloWorld>

export const Default: Story = {
  args: {
    greeting: 'Hello World',
    message: 'Welcome to the Cubitec component library!',
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    greeting: 'Hello World',
    message: 'A smaller variant',
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    greeting: 'Hello World',
    message: 'A larger variant for more emphasis',
    size: 'large',
  },
}

export const CustomGreeting: Story = {
  args: {
    greeting: 'Welcome!',
    message: 'Thanks for checking out our components.',
    size: 'medium',
  },
}

export const WithSlot: Story = {
  args: {
    greeting: 'Hello World',
    size: 'medium',
  },
  render: (args) => ({
    components: { HelloWorld },
    setup() {
      return { args }
    },
    template: '<HelloWorld v-bind="args">Custom slot content goes here!</HelloWorld>',
  }),
}

export const AllSizes: Story = {
  render: () => ({
    components: { HelloWorld },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <HelloWorld greeting="Small" message="Small size variant" size="small" />
        <HelloWorld greeting="Medium" message="Medium size variant" size="medium" />
        <HelloWorld greeting="Large" message="Large size variant" size="large" />
      </div>
    `,
  }),
}
