import { useMatchMedia } from './useMatchMedia.ts';
import { Pointers, Hovers } from './types.ts';

export const useAnyStylusQuery = () => {
  return useMatchMedia(
    `(any-pointer: ${Pointers.fine}) and (any-hover: ${Hovers.none})`,
  );
};
