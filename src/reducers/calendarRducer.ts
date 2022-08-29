import { CalendarStateType } from './types';
import { CalendarActionCreatorsType } from '../actions/types';
import { GET_TODOS, GET_IS_AUTH } from '../constant/actions';

const initialState: CalendarStateType = {
  isAuth: false,
  todoList: [],
};

const calendarReducer = (
  state = initialState,
  action: CalendarActionCreatorsType,
): CalendarStateType => {
  switch (action.type) {
    case GET_IS_AUTH:
      return {
        ...state,
        isAuth: action.payload,
      };
    case GET_TODOS:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};

export default calendarReducer;
