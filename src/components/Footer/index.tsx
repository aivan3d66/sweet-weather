import React from 'react';

import WeatherList from './WeatherList';
import ApiSelector from './ApiSelector';
import { FooterContainer } from './styles';

const Footer: React.FC = () => (
  <FooterContainer>
    <ApiSelector />
    <WeatherList />
  </FooterContainer>
);

export default Footer;
