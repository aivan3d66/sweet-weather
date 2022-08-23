import React from 'react';
import { useDispatch } from 'react-redux';

// import { useDispatch } from 'react-redux';
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

const UserCalendar = () => {
  const { todoList } = useTypedSelector(calendarStateSelector);
  const dispatch = useDispatch();
  const handleItemClick = () => {
    dispatch(getIsAuth(true));
  };

  return (
    <UserCalendarContainer>
      <UserCalendarTitle>Google Calendar</UserCalendarTitle>
      <UserCalendarControllers>
        <button type="button" onClick={handleItemClick}>
          Sign-in to Google Calendar
        </button>
      </UserCalendarControllers>
      <UserCalendarList>
        {todoList.length > 0 &&
          todoList.map((item: any) => {
            return (
              <UserCalendarListItem key={item.id}>
                {item.start.date} - {item.summary}
              </UserCalendarListItem>
            );
          })}
      </UserCalendarList>
    </UserCalendarContainer>
  );
};

export default React.memo(UserCalendar);
