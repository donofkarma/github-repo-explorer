import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';

import Typography from './Typography.view';

describe('Typography', () => {
  it('Should render child text as an h1', () => {
    render(
      <Typography component="h1" variant="h1">
        This is a button!
      </Typography>
    );

    const el = screen.getByText('This is a button!');

    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe('H1');
  });

  it('Should render as a paragraph', () => {
    render(
      <Typography component="p" variant="h1">
        This is a button!
      </Typography>
    );

    expect(screen.getByText('This is a button!').tagName).toBe('P');
  });
});
