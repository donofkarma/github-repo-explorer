const CONTENT_WIDTH = '600px';
const HEADER_HEIGHT = '55px';
const HEADER_HEIGHT_SMALL = '42px';
const SPACING = {
  tiny: 5,
  small: 10,
  default: 20,
  large: 40,
};

function getSpacing(
  size: typeof SPACING[keyof typeof SPACING] = SPACING.default
): string {
  return `${size}px`;
}

export {
  CONTENT_WIDTH,
  HEADER_HEIGHT,
  HEADER_HEIGHT_SMALL,
  SPACING,
  getSpacing,
};
