/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useRef, useCallback } from 'react';

export const useDebounce = (
  callback: (value: string) => void,
  delay: number,
) => {
  const timer: { current: NodeJS.Timeout | null } = useRef(null);

  const debounceCallback = useCallback(
    (value: string) => {
      timer.current && clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay],
  );

  return debounceCallback;
};
