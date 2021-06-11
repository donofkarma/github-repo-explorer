const AS = {
  A: 'a',
  BUTTON: 'button',
} as const;

const TYPES = {
  BUTTON: 'button',
  RESET: 'reset',
  SUBMIT: 'submit',
} as const;

const VARIANTS = {
  LINK: 'link',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

export { AS, TYPES, VARIANTS };
