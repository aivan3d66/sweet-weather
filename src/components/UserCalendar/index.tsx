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
import Button from '../Button';
import { IResult, ITodosList } from './types';

const apiCalendar = new ApiCalendar(config);

const UserCalendar = () => {
  const { isAuth } = useTypedSelector(calendarStateSelector);
  const [todos, setTodos] = useState<Array<ITodosList>>([]);
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
      apiCalendar
        .listUpcomingEvents(10)
        .then(({ result }: { result: IResult }) => {
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
        <Button value="Sync with Google Calendar" onClick={handleSyncButton} />
        <Button
          value="Get todos"
          onClick={handleTodosButton}
          disabled={!isAuth}
        />
      </UserCalendarControllers>
      <UserCalendarList>
        {todos.length > 0 &&
          todos.map(({ id, start, summary }) => {
            const getDate = new Date(start.dateTime).toUTCString();
            return (
              <UserCalendarListItem key={id}>
                {getDate} - {summary}
              </UserCalendarListItem>
            );
          })}
      </UserCalendarList>
    </UserCalendarContainer>
  );
};

export default React.memo(UserCalendar);
