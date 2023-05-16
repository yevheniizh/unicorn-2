import React from 'react';

import { types } from 'react-bricks/frontend'

import { AccordionBody, TAccordionBodyProps } from './AccordionBody';
import { AccordionHeader, TAccordionHeaderProps } from './AccordionHeader';
import { AccordionWrapper, TAccordionWrapperProps } from './AccordionWrapper';

export type TAccordionProps = 
  & TAccordionWrapperProps
  & Pick<TAccordionHeaderProps, 'title'>
  & Pick<TAccordionBodyProps, 'description'>;

const Accordion: types.Brick<TAccordionProps> = ({ description, title, ...rest }) => {
  return (
    <AccordionWrapper {...rest}>
      <AccordionHeader title={title} />
      <AccordionBody description={description} />
    </AccordionWrapper>
  );
}

Accordion.schema = {
  name: 'accordion',
  label: 'Accordion',
  getDefaultProps: () => ({
    title: 'One more Accordion',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, aliquam?',
  }),
  sideEditProps: [
    {
      name: 'title',
      label: 'Title',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'description',
      label: 'Description',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default Accordion
