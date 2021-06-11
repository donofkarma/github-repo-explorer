import { getColor } from 'styles/color';

const FONT = {
  body: 'Helvetica, Arial, sans-serif',
  heading: 'Helvetica, Arial, sans-serif',
};

const SIZES = {
  default: 16,
};
const BASE_SIZE = SIZES.default;

const WEIGHTS = {
  light: '300',
  regular: '400',
  medium: '500',
  bold: '700',
};
const BASE_WEIGHT = WEIGHTS.light;

function pxToRem(px: number) {
  return `${px / BASE_SIZE}rem`;
}

function getFontStyle({
  font = FONT.body,
  size = BASE_SIZE,
  weight = BASE_WEIGHT,
} = {}) {
  return `
    font-family: ${font};
    font-size: ${pxToRem(size)};
    font-weight: ${weight};
  `;
}

function getDefaultFontStyle() {
  return `
    color: ${getColor()};
    font-family: ${FONT.body};
    font-size: ${BASE_SIZE}px;
    font-weight: ${BASE_WEIGHT};
  `;
}

export { FONT, SIZES, WEIGHTS, getFontStyle, getDefaultFontStyle };
