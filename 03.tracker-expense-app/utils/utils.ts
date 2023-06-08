export const getFormatedDate = (date: Date) => {
  return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};
