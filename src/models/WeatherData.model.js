export const WeatherData = function (data) {
  return {
    type: data.type,
    time: data.time,
    place: data.place,
    value: data.value,
    unit: data.unit,
    getFormattedTime: function () {
      return new Date(this.time).toLocaleDateString();
    },
  };
};