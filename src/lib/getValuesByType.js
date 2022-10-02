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

export const getYesterdayValues = (array = [], type = 'temperature') => {
  return array
    .filter(
      (data) => formatDate(new Date(data.getTime())) === formatDate(yesterday),
    )
    .filter((data) => data.getType() === type);
};
