import styled from 'styled-components';
import theme from '../../theme';

export const UserCalendarContainer = styled.div`
  width: 400px;
  height: 200px;
  margin: ${theme.margins.m2}px 0;
`;

export const UserCalendarTitle = styled.h1`
  width: ${theme.width.full}%;
`;

export const UserCalendarControllers = styled.h1`
  display: flex;
  margin: ${theme.margins.m1}px 0;
  button {
    padding: ${theme.paddings.p1}px;
    margin-right: ${theme.margins.m1}px;
    border: none;
    cursor: pointer;
  }
`;

export const UserCalendarList = styled.ul`
  width: ${theme.width.full}%;
  padding: ${theme.paddings.p1}px 0;
`;

export const UserCalendarListItem = styled.li`
  width: ${theme.width.full}%;
  margin: ${theme.margins.m1}px 0;
`;
