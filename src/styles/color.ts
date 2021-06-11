type Color = {
  h: number;
  s: number;
  l: number;
};

const COLORS = {
  // brand colors
  // base colours
  black: {
    h: 0,
    s: 0,
    l: 0,
  },
  blue: {
    h: 215,
    s: 98,
    l: 61,
  },
  red: {
    h: 360,
    s: 100,
    l: 50,
  },
  white: {
    h: 0,
    s: 0,
    l: 100,
  },
};
const BASE_COLOR = COLORS.black;

function getColor({
  alpha = 1,
  color = BASE_COLOR,
  luminosity,
}: {
  alpha?: number;
  color?: Color;
  luminosity?: number;
} = {}) {
  const { h, s, l } = color;

  return `hsla(${h}, ${s}%, ${luminosity || l}%, ${alpha})`;
}

export { COLORS, getColor };
