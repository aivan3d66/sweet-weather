export type TotalWeatherDataType = {
  data: SubTotalWeatherDataType;
};

export type SubTotalWeatherDataType = {
  daily: OpenWeatherApiDataTypeDaily[];
  data: WeatherBitApiDataTypeDaily[];
};

export type CurrentWeatherDataType = {
  date: string;
  temp: number;
  weatherIcon: string;
  weatherMain: string;
  wind: number;
  code: number;
};

export type OpenWeatherApiDataTypeDaily = {
  dt: number;
  temp: { day: number };
  weather: [
    {
      id: number;
      icon: string;
      main: string;
    },
  ];
  wind_speed: number;
};

export type WeatherBitApiDataTypeDaily = {
  ts: number;
  temp: number;
  weather: {
    code: number;
    icon: string;
    description: string;
  };
  wind_spd: number;
};
