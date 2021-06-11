import { css } from 'styled-components';

const DEFAULT_PROPS = {
  duration: '0.2s',
  easing: 'ease-out',
};

function getTransition(properties: string[]) {
  const willChange = [...properties].map((property) => property).join(', ');
  const transition = properties
    .map(
      (property) =>
        `${property} ${DEFAULT_PROPS.duration} ${DEFAULT_PROPS.easing}`
    )
    .join(', ');

  return css`
    will-change: ${willChange};
    transition: ${transition};
  `;
}

export { getTransition };
