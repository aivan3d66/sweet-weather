import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import ApiCalendar from 'react-google-calendar-api';

import { config } from '@/constant/calendar';
import {
  UserCalendarContainer,
  UserCalendarControllers,
  UserCalendarList,
  UserCalendarListItem,
  UserCalendarTitle,
} from './styles';
import { getIsAuth } from '@/actions';
import { useTypedSelector } from '@/hooks';
import { calendarStateSelector } from '@/selectors';
import { localStorageItems } from '@/constant';
import Button from '../Button';
import { IResult, ITodosList } from './types';
import { getEndDate, getFullDate, getStartDate } from '@/utils';

const apiCalendar = new ApiCalendar(config);

const UserCalendar = () => {
  const { isAuth } = useTypedSelector(calendarStateSelector);
  const [todos, setTodos] = useState<Array<ITodosList>>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const todoList = localStorage.getItem(localStorageItems.todoList);
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
            localStorageItems.todoList,
            JSON.stringify(result.items),
          );
        });
  };

  const viewTodos = useMemo(() => {
    return todos!.map(({ id, start: { date, dateTime }, end, summary }) => {
      const startDate = date ? getFullDate(date) : getStartDate(dateTime);
      const endDate = end.dateTime ? getEndDate(end.dateTime) : '';
      return (
        <UserCalendarListItem key={id}>
          {startDate} {endDate} : {summary}
        </UserCalendarListItem>
      );
    });
  }, [todos]);

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
      <UserCalendarList>{viewTodos}</UserCalendarList>
    </UserCalendarContainer>
  );
};

export default React.memo(UserCalendar);
