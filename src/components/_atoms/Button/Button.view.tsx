import React from 'react';

import * as St from './Button.style';
import { Props } from './Button.types';

const ButtonView: React.FC<Props> = ({ children, variant, ...rest }) => (
  <St.Wrapper {...rest} $variant={variant}>
    {children}
  </St.Wrapper>
);

export default ButtonView;
