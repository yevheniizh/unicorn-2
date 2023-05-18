import React from 'react';

import { types, Image, Text } from 'react-bricks/frontend'

import { CardDate } from './CardDate';
import { CardWrapper, TCardWrapperProps } from './CardWrapper';
import { RenderIf } from '../../../components/RenderIf';

type TCardProps = {
  minimized?: boolean;
  href: string;
  title: string;
  date: string;
  font: 'sans' | 'serif' | 'mono';
} & TCardWrapperProps;
types.SideEditPropType

const Card: types.Brick<TCardProps> = ( { title, font, date, minimized = false, ...rest } ) => (
  <CardWrapper {...rest}>
    <RenderIf is={!minimized}>
      <Image
        propName="image"
        imageClassName='block rounded-md aspect-square object-contain'
        alt={''}
      />
    </RenderIf>
    <Text
      propName="title"
      placeholder="Title..."
      renderBlock={({ children }) => (
        <h1 className={`block capitalize text-xl break-words font-${font}`}>
          {children}
        </h1>
      )}
    />
    <CardDate>{date}</CardDate>
  </CardWrapper>
);

Card.schema = {
  name: 'card',
  label: 'Card',
  previewImageUrl: '/logo.svg',
  getDefaultProps: () => ({
    image: {
      src: '/logo.svg',
      placeholderSrc:
        '/logo.svg',
      srcSet: '',
      alt: 'Card image',
      seoName: 'card-image',
    },
    title: 'Breaking! Some news...',
    date: new Date( Date.now() ).toLocaleString(),
    minimized: false,
    font: 'mono',
    href: '#',
  }),
  sideEditProps: [
    {
      name: 'image',
      label: 'Image',
      type: types.SideEditPropType.Image,
    },
    {
      groupName: 'titleGroup',
      props: [
        {
          name: 'title',
          label: 'Title',
          type: types.SideEditPropType.Text,
        },
        {
          name: 'font',
          label: 'Font',
          type: types.SideEditPropType.Select,
          shouldRefreshText: true,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { label: 'sans', value: 'sans' },
              { label: 'serif', value: 'serif' },
              { label: 'mono', value: 'mono' },
            ],
          },
        },
      ],
    },
    {
      name: 'date',
      label: 'Date',
      type: types.SideEditPropType.Date,
    },
    {
      name: 'minimized',
      label: 'Minimized',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'href',
      label: 'href',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default Card;
