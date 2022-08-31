import styled from 'styled-components';

import theme from '@/theme';

export const SelectorContainer = styled.div`
  width: ${theme.width.sm}px;
  margin: ${theme.margins.m1}px auto ${theme.margins.m4}px auto;
`;

export const SelectorButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${theme.width.full}%;
  padding: ${theme.paddings.p1}px;
  color: ${theme.colors.white};
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: default;
    opacity: 0.8;
  }
`;

export const SelectorText = styled.span`
  text-transform: uppercase;
`;

export const SelectorList = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: ${theme.width.sm}px;
  list-style: none;

  &.hide_select_mode {
    display: none;
  }
`;

export const SelectorListItem = styled.button`
  display: inline-block;
  text-transform: uppercase;
  padding: ${theme.paddings.p1}px;
  text-align: start;
  border: none;

  &:hover {
    opacity: 0.9;
  }
`;
