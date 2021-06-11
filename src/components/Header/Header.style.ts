import styled from 'styled-components';
import { COLORS, getColor } from 'styles/color';

import { getSpacing } from 'styles/dimensions';

const Wrapper = styled.header`
  padding: ${getSpacing()};
  border-bottom: 1px solid ${getColor({ color: COLORS.black, luminosity: 80 })};
  text-align: center;
`;

export { Wrapper };
