import React from 'react';

import { Props } from './Button.types';
import * as St from './Button.style';

const ButtonView: React.FC<Props> = ({ children, variant, ...rest }) => (
  <St.Wrapper {...rest} $variant={variant}>
    {children}
  </St.Wrapper>
);

export default ButtonView;
