import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';

import { VARIANTS } from './Button.constants';
import Button from './Button.view';

const PROPS = {
  onClick: jest.fn(),
  variant: VARIANTS.PRIMARY,
};

describe('Button', () => {
  it('Should render child text', () => {
    render(<Button {...PROPS}>This is a button!</Button>);

    expect(screen.getByText('This is a button!')).toBeInTheDocument();
  });

  it('Should render a button my default', () => {
    render(<Button {...PROPS}>This is a button!</Button>);

    expect(screen.getByText('This is a button!').tagName).toBe('BUTTON');
  });

  it('Should fire the onClick event', () => {
    render(<Button {...PROPS}>This is a button!</Button>);

    screen.getByText('This is a button!').click();

    expect(PROPS.onClick).toHaveBeenCalled();
  });
});
