import React from 'react';

import { ButtonPropsType } from './types';
import { ButtonContainer } from './styles';

const Button: React.FC<ButtonPropsType> = ({ value, onClick, disabled }) => {
  return (
    <ButtonContainer type="button" onClick={onClick} disabled={disabled}>
      {value}
    </ButtonContainer>
  );
};

export default React.memo(Button);
