import { GET_IS_AUTH, GET_TODOS } from '@/constant/actions';

export const getIsAuth = (value: boolean) =>
  ({
    type: GET_IS_AUTH,
    payload: value,
  } as const);

export const getTodos = (todos: any) =>
  ({
    type: GET_TODOS,
    payload: todos,
  } as const);
