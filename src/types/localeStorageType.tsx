import { UPDATE_LOCAL_STORAGE } from '../constant/actions';

export type LocalStorageUpdateActionType = {
  type: typeof UPDATE_LOCAL_STORAGE;
  payload: { item: string; data: string };
};
