import styled from 'styled-components';

import theme from '@/theme';

export const UserCalendarContainer = styled.div`
  width: ${theme.width.full}%;
  margin: ${theme.margins.m2}px 0 0 0;
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
  height: ${theme.height.sm}px;
  padding: ${theme.paddings.p1}px 0;
  margin: 0;
  overflow: auto;
  list-style: none;
  scrollbar-color: ${theme.colors.transparentBlue};
  scrollbar-width: thin;
  text-align: left;

  &::-webkit-scrollbar {
    background: ${theme.colors.transparentBlue};
    border-radius: ${theme.radius.roundedSm}px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.darkBlue};
    border-radius: ${theme.radius.roundedSm}px;
  }
`;

export const UserCalendarListItem = styled.li`
  width: ${theme.width.full}%;
  margin: ${theme.margins.m1}px 0;
  font-size: ${theme.textStyle.lg.fontSize}px;
`;
