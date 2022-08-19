import { UPDATE_LOCAL_STORAGE } from '../constants/actions'

export const updateLocaleStorage = (item: string, data: string) => ({
  type: UPDATE_LOCAL_STORAGE,
  payload: { item, data },
})
