import styled from 'styled-components';
import theme from '../../../../theme';

interface StyledCityInputProps {
  customWidth: string;
}

export const CityInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 ${theme.paddings.p05}px;
  text-align: right;
`;

export const InputField = styled.input<StyledCityInputProps>`
  width: ${({ customWidth }) => customWidth};
  font-size: ${theme.textStyle.xxl.fontSize}px;
  text-align: right;
`;

export const CountryCode = styled.label`
  font-size: ${theme.textStyle.xl.fontSize}px;
  font-weight: bold;
`;
