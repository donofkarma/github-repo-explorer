import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import Typography from './Typography.view';

describe('Typography', () => {
  it('Should render child text', () => {
    const { getByText } = render(
      <Typography component="h1" variant="h1">
        This is a button!
      </Typography>
    );

    expect(getByText('This is a button!')).toBeInTheDocument();
  });
});
