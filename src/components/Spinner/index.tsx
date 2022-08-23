import React from 'react';
import { ReactComponent as Loader } from '../../assets/loader.svg';
import { SpinnerContainer } from './styles';

export const Spinner: React.FC = () => {
  return (
    <SpinnerContainer>
      <Loader />
    </SpinnerContainer>
  );
};
