import React from 'react';

import { ErrorContainer } from './styles';
import { ErrorComponentProps } from './types';

const ErrorComponent: React.FC<ErrorComponentProps> = ({ errorMessage }) => (
  <ErrorContainer>{errorMessage}</ErrorContainer>
);

export default React.memo(ErrorComponent);
