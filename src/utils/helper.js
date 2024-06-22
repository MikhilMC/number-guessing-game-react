export function generateRandomBetween(min, max, exclude) {
  const randNum = Math.floor(Math.random() * (max - min)) + min;

  if (randNum === exclude) {
    generateRandomBetween(min, max, exclude);
  } else {
    return randNum;
  }
}
