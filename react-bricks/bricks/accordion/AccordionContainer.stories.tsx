import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import AccordionContainer from './AccordionContainer';
import { Default as AccordionDefault, InitiallyExpanded as AccordionInitiallyExpanded } from './Accordion.stories';
import { TAccordionProps } from './Accordion';

const meta: Meta<typeof AccordionContainer> = {
  title: 'Example/AccordionContainer',
  component: AccordionContainer,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof AccordionContainer>;

export const SeveralItems: Story = {
  render: ( {children, ...args} ) => (
    <AccordionContainer {...args}>
      <AccordionDefault.render {...AccordionDefault.args as TAccordionProps} />
      <AccordionInitiallyExpanded.render {...AccordionDefault.args as TAccordionProps} />
      <AccordionDefault.render {...AccordionDefault.args as TAccordionProps} />
      {children}
    </AccordionContainer>
  ),
};
