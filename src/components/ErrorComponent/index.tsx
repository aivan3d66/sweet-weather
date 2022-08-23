import React from 'react';

import { ErrorContainer } from './styles';

interface ErrorComponentProps {
  errorMessage: string;
}

export const ErrorComponent: React.FC<ErrorComponentProps> = ({
  errorMessage,
}) => (
  <ErrorContainer className="errorContainer">{errorMessage}</ErrorContainer>
);
