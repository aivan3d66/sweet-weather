import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import ApiCalendar from 'react-google-calendar-api';

import { config } from 'constant/calendar';
import {
  UserCalendarContainer,
  UserCalendarControllers,
  UserCalendarList,
  UserCalendarListItem,
  UserCalendarTitle,
} from './styles';
import { getIsAuth } from '../../actions';
import { useTypedSelector } from '../../hooks';
import { calendarStateSelector } from '../../selectors';
import { localeStorageItems } from '../../constant';

const apiCalendar = new ApiCalendar(config);

const UserCalendar = () => {
  const { isAuth } = useTypedSelector(calendarStateSelector);
  const [todos, setTodos] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const todoList = localStorage.getItem(localeStorageItems.todoList);
    if (todoList) {
      setTodos(JSON.parse(todoList));
    }
  }, []);

  const handleSyncButton = () => {
    apiCalendar.handleAuthClick();
    dispatch(getIsAuth(true));
  };

  const handleTodosButton = () => {
    if (apiCalendar.sign)
      apiCalendar.listUpcomingEvents(10).then(({ result }: any) => {
        setTodos(result.items);
        localStorage.setItem(
          localeStorageItems.todoList,
          JSON.stringify(result.items),
        );
      });
  };
  return (
    <UserCalendarContainer>
      <UserCalendarTitle>Google Calendar</UserCalendarTitle>
      <UserCalendarControllers>
        <button type="button" onClick={handleSyncButton}>
          Sync with Google Calendar
        </button>
        <button type="button" onClick={handleTodosButton} disabled={!isAuth}>
          Get todos
        </button>
      </UserCalendarControllers>
      <UserCalendarList>
        {todos.length > 0 &&
          todos.map(({ id, start, summary }: any) => {
            return (
              <UserCalendarListItem key={id}>
                {start.date} - {summary}
              </UserCalendarListItem>
            );
          })}
      </UserCalendarList>
    </UserCalendarContainer>
  );
};

export default React.memo(UserCalendar);
