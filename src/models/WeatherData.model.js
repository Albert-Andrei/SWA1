export const WeatherData = function (data) {
  return {
    getType: () => data.type,
    getTime: () => data.time,
    getPlace: () => data.place,
    getValue: () => data.value,
    getUnit: () => data.unit,
    getFormattedTime: function () {
      return new Date(this.getTime()).getHours();
    },
  };
};
