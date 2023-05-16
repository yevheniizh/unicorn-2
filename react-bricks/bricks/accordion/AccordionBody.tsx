import classnames from 'classnames';
import React from 'react';

export type TAccordionBodyProps = {
  description: string;
} & JSX.IntrinsicElements['div'];

export const AccordionBody = ( { description, className, ...rest }: TAccordionBodyProps ) => (
  <div
    className={classnames(
      'grid grid-rows-collapsed transition-all duration-500 pl-10',
      'group-[.expanded]/accordion:grid-rows-expanded',
      className,
      )}
    {...rest}
  >
    <div className='overflow-hidden'>{description}</div>
  </div>
);