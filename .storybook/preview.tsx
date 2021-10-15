import React from 'react';
import * as nextImage from 'next/image';

import GlobalStyle from '../src/styles/GlobalStyle';

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => {
    const style = {
      position: props.layout === 'fill' ? 'absolute' : 'static',
      objectFit: props.objectFit,
      width: '100%',
    };
    return <img style={style} {...props} />;
  },
});

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
