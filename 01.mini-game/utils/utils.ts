export const generateRandomBetwen = (
  max: number,
  min: number,
  exclude: number
): number => {
  const randomNumber = Math.floor(Math.random() * (max - min)) + min;
  if (randomNumber === exclude) {
    return generateRandomBetwen(max, min, exclude);
  }

  return randomNumber;
};
