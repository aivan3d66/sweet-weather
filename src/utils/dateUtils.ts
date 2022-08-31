export const getDate = (timeStamp: number): string =>
  new Date(timeStamp * 1000).toDateString();

export const getCurrentDate = (value: Date) => {
  const day = String(value.getDate()).padStart(2, '0');
  const month = String(value.getMonth() + 1).padStart(2, '0');
  const year = value.getFullYear();
  return `${day}/${month}/${year}`;
};

export const getFullDate = (value: string) => {
  return new Date(value)
    .toString()
    .split('')
    .reverse()
    .slice(46)
    .reverse()
    .join('');
};

export const getStartDate = (value: string) => {
  return new Date(value)
    .toString()
    .split('')
    .reverse()
    .slice(40)
    .reverse()
    .join('');
};

export const getEndDate = (value: string) => {
  return ` - ${getStartDate(value)}`;
};
