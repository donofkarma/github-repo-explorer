import { createGlobalStyle } from 'styled-components';

import { getTransition } from './animation';
import { COLORS, getColor } from './color';
import { SPACING, getSpacing } from './dimensions';
import modernNormalize from './modernNormalize';
import { FONT, WEIGHTS, getFontStyle } from './typography';

export default createGlobalStyle`
  ${modernNormalize};

  body {
    margin: 0;
    color: ${getColor({ color: COLORS.black, luminosity: 29 })};
    ${getFontStyle()};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: subpixel-antialiased;
    -webkit-font-smoothing: antialiased;
  }

  article {
    width: 100%;

    > section:last-of-type {
      padding-bottom: ${getSpacing(SPACING.large)};
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1 {
    margin-bottom: 2rem;
    ${getFontStyle({ font: FONT.heading, size: 32, weight: WEIGHTS.regular })}
  }

  h2 {
    margin-bottom: 1rem;
    ${getFontStyle({ font: FONT.heading, size: 24, weight: WEIGHTS.regular })}

    * + & {
      margin-top: 2rem;
    }
  }

  h3, h4, h5, h6 {
    margin-bottom: 0.5rem;
    ${getFontStyle({ font: FONT.heading, size: 20, weight: WEIGHTS.regular })}

    /* stop headers getting bolded via CMS output */
    b, strong {
      font-weight: normal;
    }
  }

  ol, ul {
    margin: 0 0 1.6rem
  }

  p {
    margin: 0 0 1rem;
  }

  a {
    border-bottom: 1px solid transparent;
    color: ${getColor({ color: COLORS.blue })};
    text-decoration: none;
    cursor: pointer;
    ${getTransition(['border-color', 'color'])};

    &:hover,
    &:focus {
      border-color: ${getColor({ color: COLORS.blue })};
    }

    img {
      border: 0;
    }
  }

  button,
  input,
  select,
  textarea {
    color: ${getColor({ color: COLORS.black, luminosity: 29 })};
    ${getFontStyle()}
  }

  code {
    display: block;
    padding: 1rem;
    background: black;
    color: greenyellow;
  }
`;
