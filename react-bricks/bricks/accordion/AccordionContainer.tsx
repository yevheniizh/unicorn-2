import React from 'react'
import { types, Repeater } from 'react-bricks/frontend'

export type TAccordionContainerProps = JSX.IntrinsicElements['ul'];

const AccordionContainer: types.Brick<TAccordionContainerProps> = ( {children, ...props} ) => {
  return (
    <ul className='w-80 m-2 grid grid-cols-1 divide-y' {...props}>
      <Repeater propName="accordions" />
      {children}
    </ul>
  )
}

AccordionContainer.schema = {
  name: 'accordion-container',
  label: 'Accordion Container',
  getDefaultProps: () => ({
    accordions: [
      { title: 'First Accordion', description: 'Some description...' },
    ],
  } as any),
  repeaterItems: [
    {
      name: 'accordions',
      itemType: 'accordion',
      itemLabel: 'Accordion',
      min: 1,
    },
  ],
}

export default AccordionContainer