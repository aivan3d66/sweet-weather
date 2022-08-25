export type NavigatorFetchDataType = {
  data: { address: { town: string } };
};

export type OpenWeatherFetchGeocodeType = {
  data: [{ lat: number; lon: number; country: string }];
};

export type CoordinatesType = {
  lat: number;
  lon: number;
};
