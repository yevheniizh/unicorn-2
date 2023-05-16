import classnames from 'classnames';
import React, { useState } from 'react';

export type TAccordionWrapperProps = {
  initiallyExpanded?: boolean;
} & JSX.IntrinsicElements['li'];

export const AccordionWrapper = ( { className, initiallyExpanded = false, ...rest }: TAccordionWrapperProps ) => {
  const [expanded, toggleExpanded] = useState( initiallyExpanded );

  const onClick = () => toggleExpanded( !expanded );

  return (
    <li
      className={classnames( 'group/accordion list-none', className, { expanded } )}
      {...rest}
      onClick={onClick}
    />
  );
};
