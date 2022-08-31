import { UPDATE_LOCAL_STORAGE } from '@/constant/actions';

export const updateLocalStorage = (item: string, data: string) =>
  ({
    type: UPDATE_LOCAL_STORAGE,
    payload: { item, data },
  } as const);
