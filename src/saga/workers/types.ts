export type NavigatorFetchDataType = {
  data: { address: { city: string } };
};

export type OpenWeatherFetchGeocodeType = {
  data: [{ lat: number; lon: number; country: string }];
};

export type CoordinatesType = {
  lat: number;
  lon: number;
};

export type TotalWeatherDataType = {
  data: SubTotalWeatherDataType;
};

export type SubTotalWeatherDataType = {
  list: OpenWeatherApiDataTypeDaily[];
  data: WeatherBitApiDataTypeDaily[];
};

export type OpenWeatherApiDataTypeDaily = {
  dt: number;
  main: { temp: number };
  weather: [
    {
      id: number;
      icon: string;
      main: string;
    },
  ];
  wind: {
    speed: number;
  };
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
