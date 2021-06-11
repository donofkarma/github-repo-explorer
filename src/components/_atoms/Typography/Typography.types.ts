import { ALIGNMENTS, VARIANTS } from './Typography.constants';

export type Alignments = typeof ALIGNMENTS[keyof typeof ALIGNMENTS];
export type Variants = typeof VARIANTS[keyof typeof VARIANTS];
