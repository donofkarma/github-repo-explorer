import styled from 'styled-components';

import { SPACING, getSpacing } from 'styles/dimensions';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: min-content 1fr;
  min-height: 100vh;
`;

const Main = styled.main`
  margin: 0 auto;
  padding: ${getSpacing(SPACING.large)} ${getSpacing()};
  width: 100%;
  max-width: 960px;
`;

export { Wrapper, Main };
