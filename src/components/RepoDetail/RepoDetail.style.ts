import styled from 'styled-components';

import { getSpacing, SPACING } from 'styles/dimensions';
import { resetList } from 'styles/utils';

const Wrapper = styled.article`
  h1 {
    margin-bottom: ${getSpacing(SPACING.tiny)};
    word-break: break-word;
  }
`;

const RepoMeta = styled.ul`
  ${resetList};
  margin-bottom: ${getSpacing()};

  li {
    + li {
      margin-top: ${getSpacing(SPACING.tiny)};
    }
  }
`;

export { Wrapper, RepoMeta };
