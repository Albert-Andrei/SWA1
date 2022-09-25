import { WeatherData } from "./WeatherData.model";

export const WeatherForecast = function (data) {
  return Object.assign(
    {
      from: data.from,
      to: data.to,
      getFrom: function () {
        return `${this.from}${this.unit}`;
      },
      getTo: function () {
        return `${this.to}${this.unit}`;
      },
      getForecast: function () {
        return `from ${this.getFrom()} to ${this.getTo()}`;
      },
    },
    WeatherData(data)
  );
};