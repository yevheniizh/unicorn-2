import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Example/Card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    render: ( args ) => <Card {...args} />,
    args: {
      // @ts-ignore
      image: {
        src: '/logo.svg',
        placeholderSrc:
          '/logo.svg',
        srcSet: '',
        alt: 'Card image',
        seoName: 'card-image',
      },
      title: 'Attention please!... Cutie pie',
      date: new Date( Date.now() ).toLocaleString(),
      href: '#',
      font: 'serif',
    },
};
