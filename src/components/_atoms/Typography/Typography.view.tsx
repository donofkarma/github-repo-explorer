import React from 'react';

import { ALIGNMENTS, VARIANTS } from './Typography.constants';
import * as St from './Typography.style';
import { Alignments, Variants } from './Typography.types';

interface Props {
  align?: Alignments;
  className?: string;
  component?: React.ElementType | string;
  hideGutterBottom?: boolean;
  variant?: Variants;
}

const Typography: React.FC<Props> = ({
  align = ALIGNMENTS.INHERIT,
  children,
  className,
  component = 'span',
  variant = VARIANTS.BODY,
}) => {
  return (
    <St.Wrapper
      as={component}
      align={align}
      className={className}
      variant={variant}
    >
      {children}
    </St.Wrapper>
  );
};

export default Typography;
