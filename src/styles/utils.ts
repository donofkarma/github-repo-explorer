import styled, { css } from 'styled-components';

import { COLORS, getColor } from './color';
import { SPACING, getSpacing } from './dimensions';

const ActionRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${getSpacing(SPACING.large)};
`;

const clearFix = css`
  &:before {
    content: '';
    display: table;
  }
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const divider = css`
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -50px;
    width: 100px;
    height: 2px;
    background: ${getColor({ color: COLORS.blue })};
  }
`;

const resetButton = css`
  margin: 0;
  padding: 0;
  background: none;
  border: 0;
  border-radius: 0;
`;

const resetList = css`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const visuallyHidden = css`
  position: absolute;
  margin: -1px;
  padding: 0;
  width: 1px;
  height: 1px;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export { ActionRow, clearFix, divider, resetButton, resetList, visuallyHidden };
