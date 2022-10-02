import { WeatherData } from './WeatherData.model';

export const WeatherForecast = function (data) {
  return Object.assign(
    {
      getFrom: () => data.from,
      getTo: () => data.to,
      getFromFormat: function () {
        return `${this.getFrom()}${this.getUnit()}`;
      },
      getToFormat: function () {
        return `${this.getTo()}${this.getUnit()}`;
      },
      getForecast: function () {
        return `${this.getFromFormat()} - ${this.getToFormat()}`;
      },
    },
    WeatherData(data),
  );
};
