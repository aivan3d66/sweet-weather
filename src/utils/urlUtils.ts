import { apiNames, baseUrl, colors, weatherCodes } from 'constant';
import { UrlParams } from 'types';

import thunderstorm from 'assets/thunderstorm.jpg';
import drizzle from 'assets/drizzle.jpg';
import rain from 'assets/rain.jpg';
import snow from 'assets/snow.jpg';
import atmosphere from 'assets/atmosphere.jpg';
import clear from 'assets/clear.jpg';
import clouds from 'assets/clouds.jpg';

export const getUrlApi = (params: UrlParams) => {
  const { type, location, lat, lon } = params;

  switch (type) {
    case apiNames.locationiq:
      return `${baseUrl.locationiqApi}/v1/reverse.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&lat=${lat}&lon=${lon}&format=json`;
    case apiNames.openWeather:
      return `${baseUrl.openWeatherApi}/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
    case apiNames.openWeatherGeocode:
      return `${baseUrl.openWeatherApi}/geo/1.0/direct?q=${location}&limit=1&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
    case apiNames.weatherbit:
      return `${baseUrl.weatherBitApi}/v2.0/forecast/daily?city=${location}&key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`;
    default:
      return '';
  }
};

export const getUrlIcon = (nameApi: string, weatherIcon: string) => {
  switch (nameApi) {
    case apiNames.openWeather:
      return `${baseUrl.openWeather}/img/wn/${weatherIcon}@2x.png`;
    default:
      return `${baseUrl.weatherBit}/static/img/icons/${weatherIcon}.png`;
  }
};

export const getBackgroundUrlAndColor = (weatherCode: number) => {
  switch (true) {
    case weatherCode < weatherCodes.drizzle:
      return { backgroundUrl: thunderstorm, color: colors.grey };
    case weatherCode < weatherCodes.rain:
      return { backgroundUrl: drizzle, color: colors.lightGrey };
    case weatherCode < weatherCodes.snow:
      return { backgroundUrl: rain, color: colors.black };
    case weatherCode < weatherCodes.atmosphere:
      return { backgroundUrl: snow, color: colors.ligthBlack };
    case weatherCode < weatherCodes.clear:
      return { backgroundUrl: atmosphere, color: colors.darkGgrey };
    case weatherCode === weatherCodes.clear:
      return { backgroundUrl: clear, color: colors.lightPink };
    default:
      return { backgroundUrl: clouds, color: colors.orange };
  }
};
