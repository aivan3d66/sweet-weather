import { CurrentWeatherDataType } from '@/components/Footer/WeatherList/WeatherListItem/types';
import { ITodosList } from '@/components/UserCalendar/types';

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
  weatherData: Array<CurrentWeatherDataType>;
  weatherLoading: boolean;
  weatherStateError: null | string;
}

export interface CalendarStateType {
  isAuth: boolean;
  todoList: Array<ITodosList>;
}
