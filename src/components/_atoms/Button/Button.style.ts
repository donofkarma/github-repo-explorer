import styled, { css } from 'styled-components';

import { COLORS, getColor } from 'styles/color';
import { SPACING, getSpacing } from 'styles/dimensions';
import { WEIGHTS, getFontStyle } from 'styles/typography';
import { resetButton } from 'styles/utils';

import { VARIANTS } from './Button.constants';
import { Variants } from './Button.types';

const Wrapper = styled.button<{
  $variant: Variants;
}>`
  ${resetButton};
  display: inline-block;
  margin: 0;
  padding: ${getSpacing(SPACING.small)} ${getSpacing()};
  color: ${getColor({ color: COLORS.blue })};
  ${getFontStyle({ size: 14, weight: WEIGHTS.bold })};
  text-align: center;
  will-change: background, border-color, color;
  transition: background 0.2s ease-out, border-color 0.2s ease-out,
    color 0.2s ease-out;
  cursor: pointer;

  &:disabled {
    opacity: 0.25;
    cursor: default;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case VARIANTS.LINK:
        return css`
          padding: 0;
        `;
      case VARIANTS.PRIMARY:
        return css`
          border: 2px solid ${getColor({ color: COLORS.blue })};

          &:not(:disabled):hover,
          &:not(:disabled):focus {
            background: ${getColor({
              color: COLORS.blue,
            })};
            color: ${getColor({
              color: COLORS.black,
            })};
          }
        `;
      default:
        return css``;
    }
  }};
`;

export { Wrapper };
