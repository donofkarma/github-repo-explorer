import React from 'react';

import { AS, TYPES, VARIANTS } from './Button.constants';

export type As = typeof AS[keyof typeof AS];
export type Types = typeof TYPES[keyof typeof TYPES];
export type Variants = typeof VARIANTS[keyof typeof VARIANTS];

export interface Props {
  as?: As;
  disabled?: boolean;
  href?: string;
  title?: string;
  type?: Types;
  variant: Variants;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
