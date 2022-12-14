var yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}

const getYesterdayValues = (array = [], type = 'temperature') => {
  return array.filter(
    (data) =>
      formatDate(new Date(data.getTime())) === formatDate(yesterday) &&
      data.getType() === type,
  );
};

export const getMaxTemp = (array) => {
  return Math.max(...getYesterdayValues(array).map((data) => data.getValue()));
};

export const getMinTemp = (array) => {
  return Math.min(...getYesterdayValues(array).map((data) => data.getValue()));
};

export const getPrecipitationSum = (array) => {
  return getYesterdayValues(array, 'precipitation')
    .map((data) => data.getValue())
    .reduce((a, b) => a + b, 0)
    .toFixed(2);
};

export const getAverageWindSpeed = (array) => {
  return (
    getYesterdayValues(array, 'wind speed')
      .map((data) => data.getValue())
      .reduce((a, b) => a + b, 0) /
    getYesterdayValues(array, 'wind speed').length
  ).toFixed(2);
};
