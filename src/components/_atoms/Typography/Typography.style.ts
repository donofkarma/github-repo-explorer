import styled, { css } from 'styled-components';

import { FONT, WEIGHTS, getFontStyle } from 'styles/typography';

import { VARIANTS } from './Typography.constants';
import { Alignments, Variants } from './Typography.types';

const Wrapper = styled.span<{
  align?: Alignments;
  hideGutterBottom?: boolean;
  variant?: Variants;
}>`
  ${({ align }) => css`
    text-align: ${align};
  `}

  ${({ hideGutterBottom }) =>
    hideGutterBottom &&
    css`
      margin-bottom: 0;
    `}

  ${({ variant }) => {
    switch (variant) {
      case VARIANTS.BODY:
        return css`
          ${getFontStyle()};
        `;
      case VARIANTS.H1:
        return css`
          ${getFontStyle({
            font: FONT.heading,
            size: 32,
            weight: WEIGHTS.regular,
          })}
        `;
      case VARIANTS.H2:
        return css`
          ${getFontStyle({
            font: FONT.heading,
            size: 24,
            weight: WEIGHTS.regular,
          })}
        `;
      case VARIANTS.H3:
      case VARIANTS.H4:
      case VARIANTS.H5:
      case VARIANTS.H6:
        return css`
          ${getFontStyle({
            font: FONT.heading,
            size: 20,
            weight: WEIGHTS.regular,
          })}

          /* stop headers getting bolded via CMS output */
          b,
          strong {
            font-weight: normal;
          }
        `;
      case VARIANTS.SMALL:
        return css`
          font-size: 0.875rem;
        `;
      default:
        return css`
          text-transform: none;
        `;
    }
  }}
`;

export { Wrapper };
