import { getBackgroundUrlAndColor } from '@/utils/urlUtils';
import { CurrentWeatherDataType } from '@/components/Footer/WeatherList/WeatherListItem/types';

export const colorSchemeCreator = (value: Array<CurrentWeatherDataType>) =>
  value[0]
    ? getBackgroundUrlAndColor(value[0].code)
    : getBackgroundUrlAndColor(800);
