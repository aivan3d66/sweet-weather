export const getDate = (timeStamp: number): string =>
  new Date(timeStamp * 1000).toDateString();

export const getCurrentDate = (value: Date) => {
  let currentDate: string
  const day = String(value.getDate()).padStart(2, '0');
  const month = String(value.getMonth() + 1).padStart(2, '0');
  const year = value.getFullYear();
  return currentDate = day + '/' + month + '/' + year
}