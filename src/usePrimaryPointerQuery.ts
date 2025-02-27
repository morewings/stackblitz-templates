import { useMatchMedia } from './useMatchMedia.ts';
import { Pointers } from './types.ts';

export const usePrimaryPointerQuery = () => {
  const isNone = useMatchMedia('(pointer: none)');
  const isCoarse = useMatchMedia('(pointer: coarse)');
  const isFine = useMatchMedia('(pointer: fine)');
  if (isNone) {
    return Pointers.none;
  } else if (isCoarse) {
    return Pointers.coarse;
  } else if (isFine) {
    return Pointers.fine;
  }
};
