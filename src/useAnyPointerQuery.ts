import { Pointers } from './types.ts';
import { useMatchMedia } from './useMatchMedia.ts';

export const useAnyPointerQuery = (pointer: keyof typeof Pointers) => {
  return useMatchMedia(`(any-pointer: ${pointer})`);
};
