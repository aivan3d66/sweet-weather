import { CurrentWeatherDataType } from '../types';

export interface LocationStateType {
  location: string;
  countryCode: string;
  coordinates: {
    lat: number;
    lon: number;
  };
  locationLoading: boolean;
  locationStateError: null | string;
}

export interface WeatherStateType {
  nameAPI: string;
  weatherData: CurrentWeatherDataType[];
  weatherLoading: boolean;
  weatherStateError: null | string;
}
