import styled from 'styled-components';

import { getSpacing } from 'styles/dimensions';
import { mediaAbove } from 'styles/media';
import { resetList } from 'styles/utils';

const Wrapper = styled.ul`
  ${resetList};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${getSpacing()};
  width: 100%;

  ${mediaAbove.small} {
    grid-template-columns: 1fr 1fr;
  }

  ${mediaAbove.large} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export { Wrapper };
