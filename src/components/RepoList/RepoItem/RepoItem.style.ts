import styled from 'styled-components';

import { COLORS, getColor } from 'styles/color';
import { getSpacing, SPACING } from 'styles/dimensions';
import { resetList } from 'styles/utils';

const Wrapper = styled.li`
  a {
    display: block;
    padding: ${getSpacing()};
    height: 100%;
    border: 1px solid ${getColor({ color: COLORS.black, luminosity: 80 })};
    border-radius: 10px;
    color: ${getColor()};
    will-change: box-shadow;
    transition: box-shadow 0.2s ease-out;

    &:focus,
    &:hover {
      box-shadow: 3px 3px 5px 1px
        ${getColor({ alpha: 10, color: COLORS.black, luminosity: 90 })};
    }
  }

  h2 {
    word-break: break-word;
  }
`;

const RepoMeta = styled.ul`
  ${resetList};

  li {
    + li {
      margin-top: ${getSpacing(SPACING.tiny)};
    }
  }
`;

export { Wrapper, RepoMeta };
