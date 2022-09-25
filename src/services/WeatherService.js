const BASE_URL = "http://localhost:8080";

import { WeatherForecast } from "models/WeatherForecast.model";
import { WeatherData } from "models/WeatherData.model";

export const WeatherService = function (fetcher) {
  return {
    getDataByCity: async (place) => {
      return fetcher(`${BASE_URL}/data/${place}`).then((data) =>
        data.map(WeatherData)
      );
    },
    getForecast: async (place) => {
      return fetcher(`${BASE_URL}/forecast/${place}`).then((data) =>
        data.map(WeatherForecast)
      );
    },
  };
};