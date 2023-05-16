import type { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Example/Accordion',
  component: Accordion,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    render: ( args ) => <Accordion {...args} />,
    args: {
        title: 'I am accordion!',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias pariatur, harum autem corrupti illo est aut. Dolorum saepe molestias sunt!',
    },
};

export const InitiallyExpanded: Story = {
  render: ( args ) => <Accordion initiallyExpanded {...args} />,
  args: {
    title: 'I am accordion!',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias pariatur, harum autem corrupti illo est aut. Dolorum saepe molestias sunt!',
  },
};
