type Breakpoints = {
  tiny: number;
  small: number;
  medium: number;
  large: number;
  wide: number;
};

const BREAKPOINTS: Breakpoints = {
  tiny: 320,
  small: 500,
  medium: 768,
  large: 900,
  wide: 1200,
};

const customMediaQuery = (minWidth: number, type?: 'above' | 'below') => {
  if (type === 'below') {
    return `@media (max-width: ${minWidth}px)`;
  }

  return `@media (min-width: ${minWidth}px)`;
};

const mediaAbove = {
  tiny: customMediaQuery(320),
  small: customMediaQuery(500),
  medium: customMediaQuery(768),
  large: customMediaQuery(900),
  wide: customMediaQuery(1200),
};

const mediaBelow = {
  tiny: customMediaQuery(320, 'below'),
  small: customMediaQuery(500, 'below'),
  medium: customMediaQuery(768, 'below'),
  large: customMediaQuery(900, 'below'),
  wide: customMediaQuery(1200, 'below'),
};

export { BREAKPOINTS, mediaAbove, mediaBelow };
