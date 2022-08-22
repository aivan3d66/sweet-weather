export const getDate = (timeStamp: number): string =>
  new Date(timeStamp * 1000).toDateString();
